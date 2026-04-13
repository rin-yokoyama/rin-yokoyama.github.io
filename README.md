# Rin Yokoyama Personal Website

A modernized personal website for Rin Yokoyama, featuring research tools and academic content.

## 🚀 Modernization Complete

This website has been completely modernized from the original static HTML with Dreamweaver templates and Python CGI scripts to a modern React-based static site using Next.js.

### What's New

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **React Components**: Modular, maintainable code structure
- **Client-side Calculators**: Scientific tools now run in the browser
- **Static Generation**: Fast loading, SEO-friendly static site
- **GitHub Pages Ready**: Optimized for deployment on rin-yokoyama.github.io

### Tools Available

1. **Neutron Energy Calculator**: Calculate neutron energy from time-of-flight measurements
2. **Weisskopf Half-Life Calculator**: Estimate electromagnetic transition half-lives
3. **Weighted Mean Calculator**: Calculate weighted averages with error propagation

### Technical Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export for GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## Deployment

The static files are generated in the `out/` directory and are ready for GitHub Pages deployment.

```PowerShell
npm run build
npm run export
git checkout gh-pages
Copy-Item -Path "..\out\*" -Destination "." -Recurse -Force
git add .
git commit -m "comments"
git push origin gh-pages
```

## Migration Notes

- Original Python CGI scripts converted to client-side JavaScript
- Dreamweaver templates replaced with React components
- Fixed-width layout modernized to responsive design
- Google Analytics tracking preserved (update UA code if needed)
- All original content and functionality maintained