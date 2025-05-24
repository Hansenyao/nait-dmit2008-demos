import "./components/post.js";
import { fetchBlogsSequential } from "./api.js";

const container = document.querySelector(".blogs");


fetchBlogsSequential().then(blogs => {
  blogs.forEach(blog => {
    const post = document.createElement("post-blog");
    post.setAttribute("user", JSON.stringify(blog.user));
    post.setAttribute("post", JSON.stringify(blog.post));   
    post.setAttribute("comments", JSON.stringify(blog.comments));
    container.appendChild(post);
  });
});
