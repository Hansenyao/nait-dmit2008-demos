# 🔧 Full API Implementation for Users & Posts (Next.js + Prisma)

This guide provides complete API code for **both Pages Router** and **App Router** in Next.js for managing `User` and `Post` resources using Prisma.

---

## 📁 Pages Router (`pages/api`)

### 🧍‍♂️ User APIs

#### `POST /api/user/add.js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    const user = await prisma.user.create({ data: { name, email } });
    return res.status(201).json(user);
  }
  res.status(405).end();
}
```

➡️ `req.body`: Contains user info to create.  
↩️ Sends created user or 405 for unsupported method.

---

#### `PUT /api/user/update.js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, name, email } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });
    return res.status(200).json(user);
  }
  res.status(405).end();
}
```

➡️ `req.body`: Must include `id`.  
↩️ Updates user record.

---

#### `DELETE /api/user/delete.js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    await prisma.user.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  }
  res.status(405).end();
}
```

➡️ `req.body`: Contains `id`.  
↩️ Deletes user.

---

#### `GET /api/user/[id].js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
}
```

➡️ `req.query.id` for dynamic ID.  
↩️ Sends user or 404.

---

#### `GET /api/user/[id]/posts.js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  const posts = await prisma.post.findMany({ where: { authorId: Number(id) } });
  res.status(200).json(posts);
}
```

➡️ Gets posts by user ID.  
↩️ Sends array of posts.

---

### 📝 Post APIs

#### `POST /api/post/add.js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({ data: { title, content, authorId } });
    res.status(201).json(post);
  } else {
    res.status(405).end();
  }
}
```

---

#### `GET /api/post/index.js`

```js
import { prisma } from "@/lib/prisma";

export default async function handler(_, res) {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
}
```

---

#### `GET /api/post/[id].js`, `PUT`, `DELETE` (same file, switch method)

```js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (!post) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(post);
  }
  if (req.method === "PUT") {
    const { title, content } = req.body;
    const updated = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    return res.status(200).json(updated);
  }
  if (req.method === "DELETE") {
    await prisma.post.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  }
  res.status(405).end();
}
```

---

## 📁 App Router (`app/api`)

Use route.js files and access body with `await req.json()` and params with the second argument.

### Example: `GET /api/user/[id]/route.js`

```js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const user = await prisma.user.findUnique({ where: { id: Number(params.id) } });
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(user);
}
```

All others follow a similar pattern using:  
- `await request.json()` to get body  
- `params.id` to get dynamic params  
- `NextResponse.json()` to send response

---

Let me know if you'd like these split into separate files for direct use or a ZIP. You can now [Download full API code in Markdown](sandbox:/mnt/data/full-user-post-api.md)