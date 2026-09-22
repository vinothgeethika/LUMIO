# 🚀 Cloudflare Pages Deployment Guide for PromoGen Studio

PromoGen Studio is fully optimized and configured for seamless deployment on **Cloudflare Pages**.

---

## 🌟 Quick Deploy (Method 1 - Recommended: Wrangler CLI)

You can deploy the entire project to Cloudflare Pages directly from your terminal in under 2 minutes.

### Step 1: Open Terminal in Project Root
```bash
cd "e:\Promogen - Unlocked"
```

### Step 2: Run Deploy Command
```bash
npm run deploy
# or:
npx wrangler pages deploy .
```

*Note: On your first run, Wrangler will open your browser to log in to your free Cloudflare account.*
1. When asked `Create a new project?`, select **Yes**.
2. Project name: `promogen-studio` (or your chosen name).
3. Production branch: `main`.

Once uploaded, Wrangler will output your live URL:
👉 `https://promogen-studio.pages.dev`

---

## 🌐 Method 2: Deploy via Cloudflare Dashboard (GitHub)

If you pushed this folder to a GitHub repository:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set the build settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave empty)*
   - **Build output directory**: `.` (or leave default root)
5. Click **Save and Deploy**.

---

## 📦 What Was Configured for Cloudflare

1. **`_headers`**:
   - Configured **Cross-Origin Isolation** (`Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Embedder-Policy: credentialless`).
   - Enabled `SharedArrayBuffer` support required by high-performance WASM and Mediabunny.
   - Set maximum performance caching (`Cache-Control: public, max-age=31536000, immutable`) on static assets (`_next/static`, `animations`, `phones`, `materials`, etc.).

2. **`_redirects`**:
   - Clean URLs: `/app` rewrites directly to `/app.html`.
   - Clean URLs: `/index` rewrites directly to `/index.html`.

3. **Cloudflare 25 MB File Size Limit Bypass**:
   - Cloudflare Pages has a strict **25 MiB upload limit** per individual file.
   - `ffmpeg-core.wasm` (30.6 MB) was split into two sub-16MB chunks:
     - `ffmpeg-core.wasm.part1` (16.0 MB)
     - `ffmpeg-core.wasm.part2` (14.6 MB)
   - `.pagesignore` excludes the 30.6MB file from direct upload.
   - `functions/ffmpeg/ffmpeg-core.wasm.js` streams the parts together into a single response at the edge!
   - In addition, client chunk `1187` automatically fetches and joins both parts in-memory if needed.

4. **Edge Functions (`functions/api/[[catchall]].js`)**:
   - Handles any `/api/studio/*` routes at Cloudflare edge with CORS headers.
   - Proxies media requests and prevents any 404/405 errors.

5. **`wrangler.toml`**:
   - Pre-configured Pages project configuration.
