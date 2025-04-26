# Asad Zia — Professional Portfolio

A clean React + Tailwind portfolio ready for GitHub Pages.

## Local setup
```bash
# 1 – scaffold project
npx create-react-app react-portfolio
cd react-portfolio
npm install -D tailwindcss
npx tailwindcss init
# replace the template files with the provided code

# 2 – preview locally
npm start
```

## Deploy to GitHub Pages
```bash
# 1 – commit and push to GitHub
# 2 – add gh‑pages
npm install --save gh-pages

# 4 – deploy
npm run deploy
```
GitHub Actions will publish the `build/` folder to the `gh-pages` branch and your
site will be live at `https://asadziach.github.io/react-portfolio`.

## Pointing a custom domain (optional)
Add an A record (apex) and CNAME (www) in your registrar to GitHub’s IPs
and `asadziach.github.io` respectively, then set the custom domain in the
repository’s **Settings → Pages**.