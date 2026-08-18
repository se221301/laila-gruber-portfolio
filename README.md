# Laila Gruber Portfolio

A static portfolio website that can be hosted for free on GitHub Pages or Cloudflare Pages.

## Files

- `index.html` — Home / About / Projects / Contact
- `project-01.html` — Research project detail page
- `styles.css` — all styling
- `script.js` — small animations and current year
- `assets/` — portrait and project images

## Replace the images

The current images are placeholders. Replace the following files while keeping the same filenames:

- `assets/portrait-placeholder.svg` — your portrait
- `assets/project-01-process-placeholder.svg` — Fig. 1: furnace process overview
- `assets/project-01-model-categories-placeholder.svg` — Fig. 2: model categories
- `assets/project-01-workflow-placeholder.svg` — Fig. 3: model comparison workflow
- `assets/project-01-prioritized-placeholder.svg` — Fig. 4: prioritized models

You may also change the `src="..."` path in the HTML to JPG/PNG files, e.g. `assets/portrait.jpg`.

## Add LinkedIn and email

In `index.html`, search for:

- `data-placeholder-link` and replace `href="#"` with your LinkedIn URL
- `your.email@example.com` and replace it with the email address you want to publish

## Preview locally

The easiest option is VS Code + the Live Server extension. You can also open `index.html` directly in a browser.

## GitHub

Create a new repository, copy all files into it and push:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages. This site has no build step, so use the repository root as the output directory / static source.

## Add future projects

1. Duplicate `project-01.html` as `project-02.html`.
2. Edit its text and images.
3. Duplicate the project card in `index.html` and link it to `project-02.html`.
4. Update the project count.
