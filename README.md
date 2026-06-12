# Children Traffic Park

> **Seeing this README instead of the website?**  
> Your GitHub Pages source is set to the **`main`** branch. Fix it in 30 seconds:  
> **Repo → Settings → Pages → Build and deployment → Source → Deploy from a branch**  
> Set **Branch: `gh-pages`** and **Folder: `/ (root)`** → Save.  
> Then open **[https://shrikartare.github.io/children-traffic-park/](https://shrikartare.github.io/children-traffic-park/)** (hard-refresh with Ctrl+F5).

Interactive website for a children's traffic park built in collaboration with traffic police authorities — promoting traffic safety education and awareness.

## Live website

**[https://shrikartare.github.io/children-traffic-park/](https://shrikartare.github.io/children-traffic-park/)**

*(Must use `gh-pages` branch as Pages source — see note above.)*

## Tech Stack

- React 18 + TypeScript
- Create React App
- CSS Modules
- react-slick carousel

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Output is written to the `build/` folder.

## Deployment (GitHub Pages)

The React app is built by GitHub Actions and published to the **`gh-pages`** branch.  
**Do not** set Pages source to `main` — that shows this README file.

| Trigger | How |
|---------|-----|
| **Automatic** | Push to `main` |
| **Manual** | **Actions → Deploy to GitHub Pages → Run workflow** |

### Required GitHub settings (once)

1. **Settings → Actions → General → Workflow permissions** → **Read and write permissions** → Save
2. **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
   - Save
3. Push to `main` or run the deploy workflow manually
4. Wait 1–2 minutes, then visit the live URL

### Troubleshooting

| What you see | Fix |
|--------------|-----|
| This README / documentation page | Pages source is `main` → switch to **`gh-pages` / (root)** |
| Blank page | Run deploy workflow; confirm `gh-pages` branch exists under **Branches** |
| Old content | Hard-refresh (Ctrl+F5) or clear browser cache |
| Workflow failed | **Actions** tab → open failed run → read build logs |

### Manual deploy (optional)

```bash
npm run deploy
```

Publishes `build/` to `gh-pages` using the `gh-pages` npm package.
