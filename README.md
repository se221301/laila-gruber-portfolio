# Laila Gruber Portfolio

Static portfolio website inspired by the Base44 draft. No framework or build step is required.

## Preview locally
Open `index.html` in a browser, or use the VS Code extension **Live Server**.

## Replace images
Put your own images into the `assets` folder and either keep the existing filenames or change the `src` path in the HTML.

Recommended filenames:
- `portrait-placeholder.svg` → portrait
- `project-01-process-placeholder.svg` → furnace/process overview
- `project-01-model-categories-placeholder.svg` → model categories
- `project-01-workflow-placeholder.svg` → comparison workflow
- `project-01-prioritized-placeholder.svg` → final prioritized models

PNG or JPG files are fine. Example:

```html
<img src="assets/portrait.jpg" alt="Portrait of Laila Gruber">
```

## Push an update to GitHub
After replacing the files in your local repository:

```bash
git add .
git commit -m "Match Base44 portfolio design"
git push
```
