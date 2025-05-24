import './components/post.js'

import { fetchBlogsSequential, fetchBlogsParallel, fetchBlogsPerPost } from './api.js'

const container = document.querySelector('.blogs')

fetchBlogsPerPost().then(blogs => {
    blogs.forEach(blog => {
       const post = document.createElement('post-blog');
       post.setAttribute("user", JSON.stringify(blog.user));
       post.setAttribute("post", JSON.stringify(blog.post));
       post.setAttribute("comments", JSON.stringify(blog.comments));
       container.appendChild(post); 
    });
});