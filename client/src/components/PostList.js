import React from 'react';

const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map((post) => (
      <li key={post._id} className="post-item">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {post.snippetUrl ? (
          <div className="code-snippet">
            <a href={post.snippetUrl} target="_blank" rel="noopener noreferrer">
              View Code Snippet
            </a>
          </div>
        ) : (
          <p>No code snippet available.</p>
        )}
      </li>
    ))}
  </ul>
);

export default PostList;
