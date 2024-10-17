# Install Hugging Face hub library
from huggingface_hub import InferenceClient
import os
import json

# Set your Hugging Face token (replace <your_token_here> with actual token)
HF_TOKEN = os.getenv("HF_TOKEN", "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")

repo_id = "microsoft/Phi-3-mini-4k-instruct"

# Initialize the inference client with the token
llm_client = InferenceClient(
    model=repo_id,
    token=HF_TOKEN,
    timeout=120
)


# Function to call the LLM
def call_llm(inference_client: InferenceClient, prompt: str):
    response = inference_client.post(
        json={
            "inputs": prompt,
            "parameters": {"max_new_tokens": 200},
            "task": "text-generation"
        },
    )

    # Ensure we handle the bytes response properly
    if isinstance(response, bytes):
        response = response.decode('utf-8')  # Decode the byte response to string
    return json.loads(response)  # Convert string to JSON


# Example prompt usage
prompt = "Explain the theory of relativity in simple terms."
response = call_llm(llm_client, prompt)

# Extract and print the generated text from the response
if isinstance(response, list) and len(response) > 0:
    generated_text = response[0].get("generated_text", "No text generated")
    print("Generated Text:", generated_text)
else:
    print("Unexpected response format:", response)

