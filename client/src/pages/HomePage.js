import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/api';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import '../styles/Home.css & Profile.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="home-page">
      <h1>Recent Posts</h1>
      <CreatePost onPostCreated={setPosts} />
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
