class PostBlog extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const user = JSON.parse(this.getAttribute('user') || '{}');
        const post = JSON.parse(this.getAttribute('post') || '{}');
        const comments = JSON.parse(this.getAttribute('comments') || '[]');
        
        const lat = Number(user?.address?.geo?.lat) || 0;
        const lng = Number(user?.address?.geo?.lng) || 0;
        this.shadowRoot.innerHTML = `
          <style>
            .container {
              background: #fff;
              border-radius: 16px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
              padding: 2rem;
              max-width: 700px;
              width: 100%;
              box-sizing: border-box;
              height: 100%;
            }
            .user {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 2rem;
            }
            iframe.map {
              width: 150px;
              height: 100px;
              border: 0;
              border-radius: 8px;
            }
            .username {
              font-weight: bold;
              font-size: 1.2rem;
            }
            .meta {
              font-size: 0.95rem;
              color: #555;
            }
            .post {
              margin-bottom: 2rem;
            }
            .post h2 {
              font-size: 1.8rem;
              color: #333;
              margin-bottom: 0.5rem;
            }
            .post p {
              font-size: 1rem;
              color: #555;
            }
            .comments h3 {
              margin-bottom: 1rem;
            }
            .comment {
              border-top: 1px solid #eee;
              padding: 1rem 0;
            }
            .comment-name {
              font-weight: bold;
              color: #444;
            }
            .comment-body {
              color: #666;
              font-size: 0.95rem;
            }
          </style>
          <div class="container">
            <div class="user">
              <iframe class="map" src="https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed"></iframe>
              <div>
                <div class="username">${user.name || 'Unknown'}</div>
                <div class="meta"> ${user.email || 'No Email'}</div>
                <div class="meta"> ${user.address.city || 'No City'}</div>
              </div>
            </div>

            <div class="post">
              <h2>${post.title || 'No Title'}</h2>
              <p>${post.body || 'No Content'}</p>
            </div>

            <div class="comments">
              <h3>Comments</h3>
              ${comments.map(comment => `
                <div class="comment">
                  <div class="comment-name">${comment.name}</div>
                  <div class="comment-body">${comment.body}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
    }
}

customElements.define('post-blog', PostBlog)