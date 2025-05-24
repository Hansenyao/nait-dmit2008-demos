const Base_URL = "https://jsonplaceholder.typicode.com";
async function fetchBlogsSequential() {
  const posts = await fetch(Base_URL+"/posts").then(res => res.json());
  const users = await fetch(Base_URL+"/users").then(res => res.json());
  const comments = await fetch(Base_URL+"/comments").then(res => res.json());

  return posts.map(post => {
    const user = users.find(u => u.id === post.userId);
    const postComments = comments.filter(c => c.postId === post.id);
    return { user, post, comments: postComments };
  });
}

export {fetchBlogsSequential}



