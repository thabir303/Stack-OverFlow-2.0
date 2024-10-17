const Post = require('../models/post');

exports.createPost = async (req, res) => {
  try {
    console.log('File uploaded:', req.file); // Log file info

    const { title, content } = req.body;
    const snippetUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !content) {
      return res.status(400).send({ message: 'Title and content are required' });
    }

    const post = new Post({
      userId: req.user._id,
      title,
      content,
      snippetUrl,
    });

    await post.save();
    console.log('Post created:', post); // Log the created post
    res.status(201).send({ message: 'Post created successfully', data: post });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: { $ne: req.user._id } }).sort({ createdAt: -1 });
    res.status(200).send({ data: posts });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
