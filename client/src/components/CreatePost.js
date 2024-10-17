import React, { useState } from 'react';
import { createPost } from '../api/api';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (file) formData.append('snippet', file);

    try {
      const newPost = await createPost(formData);
      onPostCreated((prev) => [newPost.data, ...prev]);

      setTitle('');
      setContent('');
      setFile(null);
      setError('');
    } catch (err) {
      console.error('Submission Error:', err); // Log any submission errors
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content or Code Snippet"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Create Post</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default CreatePost;
