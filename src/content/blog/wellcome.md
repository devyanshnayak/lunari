---
title: "Welcome to Lunari: A Moonlit, Static-First Blogging Framework"
description: "The complete guide and documentation for Lunari — a lightweight, Markdown-first Astro blogging framework featuring anonymous no-login commenting, effortless SEO, and a celestial theme."
pubDate: 2026-10-19
heroImage: "/Lunari-thumbnail.jpg"
author: "Lunari"
tags: ["Lunari", "Documentation", "Astro", "Markdown", "Guide"]
---

Welcome to **Lunari**, a lightweight, static-first blogging framework built for writers, thinkers, and creators who want a personal space on the web without unnecessary complexity.

Built on top of [Astro](https://astro.build) and centered around standard Markdown, Lunari focuses on blazing-fast pages, search-friendly publishing, and privacy-respecting design. With built-in anonymous, no-login commenting, Lunari makes room for authentic conversations without forcing your readers to create accounts, give away their emails, or surrender their privacy.

> *"Your writing should be yours, your website should stay lightweight, and the web should feel personal again."*

---

## Why Lunari?

Modern blogging platforms often get trapped under layers of heavy JavaScript frameworks, complex databases, bloated tracking scripts, and intrusive login walls. Lunari takes a different path:

- **Static-First Performance:** Generates pure, static HTML pages with zero client-side JavaScript overhead for reading articles.
- **Markdown & MDX Native:** Your articles live as plain text files in your repository. You own your content forever.
- **Anonymous, No-Login Commenting:** Readers can participate and react instantly without signing up.
- **Effortless SEO & Social Previews:** Automated OpenGraph cards, Twitter cards, RSS feed, sitemap, and Schema.org JSON-LD.
- **Moonlit Celestial Aesthetics:** A dark-mode first design inspired by the tranquil night sky, accompanied by a clean light mode.
- **Powered by Bun & Astro:** Fast local development, instant hot module reloading, and tiny build times.

---

## The Photo & Asset Workflow: Storing and Tagging Images

One of the most common questions when building a Markdown-driven site is: **"Where do my photos go, and how do I tag them in my posts?"**

In Lunari, static asset handling is simple, predictable, and requires no complicated import statements.

### 1. Where Photos Go: `/public/assets/`

All images, diagrams, illustrations, and banners should be saved inside the **`/public/assets/`** directory in your project root:

```text
my-lunari-blog/
├── public/
│   ├── assets/
│   │   ├── lunari-logo.png        <-- Put your post images here!
│   │   ├── lunari-preview.jpg
│   │   └── my-diagram.png
│   ├── favicon.png
│   └── Lunari-thumbnail.jpg
├── src/
│   └── content/
│       └── blog/
│           └── wellcome.md
```

### Why `/public`?

In Astro, every file inside the `/public` directory is served directly from the root path (`/`) of your deployed website:

- A file stored at `public/assets/my-diagram.png` is served at `/assets/my-diagram.png`.
- A file stored at `public/Lunari-thumbnail.jpg` is served at `/Lunari-thumbnail.jpg`.

There is no build-step bundling or path hashing for public assets. The path you write in Markdown is identical to the URL in the browser.

### 2. Tagging Images in Markdown

Once you drop an image into `/public/assets/`, you can immediately embed it into any Markdown article using standard Markdown syntax:

```markdown
![Alt description of the photo](/assets/my-diagram.png)
```

#### Live Example:

Here is an image stored in `/public/assets/lunari-logo.png` tagged directly in this Markdown file:

![Lunari Celestial Emblem](/assets/lunari-logo.png)

### 3. Adding Captions with Semantic HTML

Because Astro supports HTML inside Markdown files, you can wrap your images in `<figure>` and `<figcaption>` tags for styled, centered captions:

```html
<figure>
  <img src="/assets/lunari-preview.jpg" alt="Lunari moonlit landscape" />
  <figcaption>The celestial artwork capturing the spirit of Lunari.</figcaption>
</figure>
```

<figure>
  <img src="/assets/lunari-preview.jpg" alt="Lunari moonlit landscape" />
  <figcaption>The celestial artwork capturing the spirit of Lunari.</figcaption>
</figure>

---

## Effortless SEO & Social Previews

Lunari automatically transforms your Markdown frontmatter into rich SEO metadata, OpenGraph tags, Twitter summary cards, and Schema.org structured data.

### Frontmatter Schema

At the top of every `.md` file in `src/content/blog/`, define your post metadata:

```yaml
---
title: "My Journey Into the Stars"
description: "A reflective essay on astronomy, open web principles, and quiet nights."
pubDate: 2026-10-19
updatedDate: 2026-10-20
heroImage: "/Lunari-thumbnail.jpg"
author: "Alex"
tags: ["astronomy", "open-web"]
---
```

### What Lunari Automates From Your Frontmatter:

| Frontmatter Field | Generated Meta & Features |
| :--- | :--- |
| `title` | Page `<title>`, `og:title`, `twitter:title`, RSS item title, Schema headline |
| `description` | `<meta name="description">`, `og:description`, `twitter:description`, post card snippet |
| `heroImage` | Header banner, card thumbnail, `og:image`, `twitter:image` (Large Card format) |
| `pubDate` | Formatted post date, Schema `datePublished`, RSS item pubDate |
| `updatedDate` | "Last updated on" badge, Schema `dateModified` |
| `author` | Schema `author` entity (defaults to "Lunari") |

Whenever someone shares your post on Discord, Twitter/X, Mastodon, LinkedIn, or Slack, the post's `heroImage` and `description` will automatically render as a high-resolution preview card.

---

## Anonymous, No-Login Commenting

Commenting on the web shouldn't require creating an account, solving endless captchas, or handing personal data to third-party ad networks.

Lunari features a built-in, lightweight commenting and reaction system:

### How it Works:

1. **Zero Logins:** When a visitor opens a post, Lunari generates a random, anonymous UUID stored locally in their browser (`localStorage.getItem('blog:client-id')`).
2. **Post Comments:** Readers enter a display name and their thoughts. No email, password, or profile needed.
3. **Edit & Delete Ownership:** Readers can edit or delete comments they wrote during their session, verified by their client ID.
4. **Reactions:** Readers can leave like or dislike reactions on articles.
5. **Worker-Powered Backend:** The comments and reactions are synchronized with a lightweight Cloudflare Worker backend.

### Configuring the Backend:

Set the API URL in your `.env` file:

```bash
PUBLIC_BLOG_API_URL=https://your-comments-api.workers.dev/
```

If you do not specify an API URL, Lunari falls back to the default demonstration endpoint.

---

## Creating New Posts

Creating a new blog post is as easy as creating a new file:

1. Create a new `.md` file inside `src/content/blog/`, for example `src/content/blog/moonlit-nights.md`.
2. Add your YAML frontmatter:
   ```yaml
   ---
   title: "Moonlit Nights and Quiet Thoughts"
   description: "A brief look at why slow blogging matters."
   pubDate: 2026-10-19
   heroImage: "/assets/lunari-preview.jpg"
   ---
   ```
3. Write your content in standard Markdown.
4. Run `bun run build` — Astro will validate your frontmatter against the schema in `src/content.config.ts` and generate the static HTML page at `/blog/moonlit-nights/`.

---

## Development & Build Commands

Lunari is optimized to run with **Bun**:

```bash
# Install dependencies
bun install

# Start local development server with hot-reload
bun run dev

# Build production static files into dist/
bun run build

# Preview the built production site locally
bun run preview
```

---

## Customizing Your Site

### Site URL
Update the canonical domain in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Logo and Branding
- **Logo:** Replace `public/favicon.png` with your own square logo or emblem.
- **Title & Tagline:** Adjust navigation and footer titles in `src/layouts/BaseLayout.astro`.
- **Colors:** Tweak theme variables in `src/styles/global.css` (`--bg-color`, `--accent-color`, `--card-bg`, etc.).

---

## Try Out the Comment System!

Scroll down below this article to try out the anonymous commenting and reaction system. Leave a reaction or test post a comment — no login required!
