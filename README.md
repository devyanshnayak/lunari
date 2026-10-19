# 🌙 Lunari

> A lightweight, static-first blogging framework for the personal, moonlit web.

Lunari is a static-first blogging template built with [Astro](https://astro.build) and centered around Markdown. It is crafted for writers, thinkers, and creators who want a serene personal sanctuary on the web without unnecessary complexity, bulky client scripts, or account walls.

---

## ✨ Features

- **⚡ Static-First Performance:** Generates pure static HTML pages with lightning-fast load times and near-zero runtime client JavaScript.
- **✍️ Markdown & MDX Native:** Content is authored in plain Markdown with Astro Content Collections, frontmatter validation, and type safety.
- **💬 Anonymous, No-Login Commenting:** Readers can leave comments and reactions (likes/dislikes) without creating accounts or providing emails.
- **🔍 Effortless SEO & Social Previews:** Automated OpenGraph meta tags, Twitter card summaries (`summary_large_image`), and Schema.org JSON-LD structured data.
- **🌙 Celestial Moonlit Aesthetics:** Thoughtfully themed with celestial purple/indigo dark mode and crisp moonstone light mode, serif headings (`Crimson Pro`), and clean typography (`Inter`).
- **🖼️ Simple Asset Pipeline:** Dedicated `/public/assets` directory for photos, banners, and diagrams that can be tagged directly in Markdown.
- **📡 Syndication & Discovery:** Built-in RSS feed generation (`/rss.xml`), sitemap (`/sitemap-index.xml`), and `robots.txt`.

---

## 🚀 Quick Start

Lunari is optimized to run with **[Bun](https://bun.sh)**:

```bash
# Clone the repository
git clone https://github.com/your-username/lunari.git
cd lunari

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview
```

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/                 # Images, photos, and diagrams for your posts
│   │   ├── lunari-logo.png
│   │   └── lunari-preview.jpg
│   ├── favicon.png             # Site favicon and brand emblem
│   └── Lunari-thumbnail.jpg    # Default social preview and hero banner
├── src/
│   ├── components/
│   │   └── CommentSection.astro # Anonymous comments and reaction component
│   ├── content/
│   │   └── blog/               # Markdown and MDX articles
│   │       └── wellcome.md     # Complete framework guide & welcome post
│   ├── layouts/
│   │   └── BaseLayout.astro    # Common page shell, SEO meta, header, footer
│   ├── pages/
│   │   ├── blog/
│   │   │   └── [...slug].astro # Dynamic post page renderer
│   │   ├── index.astro         # Homepage with hero section & post cards
│   │   └── rss.xml.js          # RSS feed generator
│   ├── styles/
│   │   └── global.css          # Moonlit theme variables & typography
│   └── content.config.ts       # Content collection schema validation
├── astro.config.mjs            # Astro configuration, sitemap, robots.txt
└── .env.example                # Example environment configuration
```

---

## 🖼️ Adding Photos & Tagging in Markdown

1. Place your images inside the **`/public/assets/`** folder:
   ```text
   public/assets/my-photo.jpg
   ```
2. Reference them in any Markdown post (`src/content/blog/*.md`):
   ```markdown
   ![Photo description](/assets/my-photo.jpg)
   ```
3. Set them as your post hero image / social preview thumbnail in frontmatter:
   ```yaml
   ---
   title: "My Post Title"
   description: "Post description for SEO preview"
   pubDate: 2026-10-19
   heroImage: "/assets/my-photo.jpg"
   ---
   ```

Because files in `/public/` are served from the root URL of your website, `/public/assets/my-photo.jpg` is always available at `/assets/my-photo.jpg`.

---

## ⚙️ Configuration

### Site Domain
Update `site` in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Anonymous Commenting API
Lunari connects to a lightweight Cloudflare Worker backend for comments and reactions. Configure the endpoint in `.env`:
```bash
PUBLIC_BLOG_API_URL=https://your-comment-api.workers.dev/
```

---

## 📄 License

MIT License. Free to use, adapt, and build upon.
