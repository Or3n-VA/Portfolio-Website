# Oren Van Allen - Personal Portfolio

modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS v4.

## Features

- **Modern Tech Stack**: Vite + React + TypeScript + Tailwind v4 + React Router v7 + Framer Motion
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark Mode**: Automatic theme switching with system preference detection
- **Command Palette**: Quick navigation with ⌘K/CTRL+K
- **SEO Optimized**: Meta tags, structured data, and sitemap generation
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Lighthouse scores ≥90

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app/                 # App configuration
│   ├── router.tsx      # React Router setup
│   ├── seo.tsx         # SEO components
│   └── analytics.ts    # Analytics utilities
├── components/         # Reusable components
│   ├── Navbar.tsx     # Navigation bar
│   ├── CommandPalette.tsx # Quick navigation
│   ├── ProjectCard.tsx # Project display cards
│   └── ...            # Other components
├── pages/              # Page components
│   ├── Home.tsx       # Homepage
│   ├── Projects.tsx   # Projects listing
│   ├── ProjectDetail.tsx # Individual project
│   └── ...            # Other pages
├── data/               # JSON data files
│   ├── projects.json  # Project data
│   ├── papers.json    # Research papers
│   └── experience.json # Work experience
└── styles/            # Global styles
    └── index.css      # Tailwind imports
```

## Content Management

### Adding a New Project

1. Edit `src/data/projects.json`
2. Add project with required fields:
   ```json
   {
     "slug": "project-name",
     "title": "Project Title",
     "role": "Your Role",
     "year": "2024",
     "summary": "Brief description",
     "impact": ["Impact statement 1", "Impact statement 2"],
     "tags": ["Tag1", "Tag2", "Tag3"],
     "links": [{"label": "GitHub", "href": "https://github.com/..."}],
     "cover": "/images/project-cover.jpg",
     "gallery": ["/images/project-1.jpg", "/images/project-2.jpg"],
     "story": [
       {"id": "context", "heading": "Context", "text": "..."},
       {"id": "problem", "heading": "Problem", "text": "..."},
       // ... other story sections
     ]
   }
   ```
3. Add cover image to `public/images/`
4. Add gallery images to `public/images/`

### Adding a New Paper

1. Edit `src/data/papers.json`
2. Add paper with required fields:
   ```json
   {
     "slug": "paper-slug",
     "title": "Paper Title",
     "venue": "Journal/Conference Name",
     "year": "2024",
     "abstract": "Paper abstract...",
     "links": [{"label": "DOI", "href": "https://doi.org/..."}]
   }
   ```

### Customizing Brand Colors

1. Edit `src/styles/index.css` to add custom CSS variables
2. Update Tailwind configuration if needed
3. Modify component color classes throughout the codebase

### Customizing Typography

1. Add custom fonts to `src/styles/index.css`
2. Update font classes in components
3. Modify the base font configuration

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add redirect rules for SPA routing

### Manual Deployment

```bash
# Build the project
npm run build

# Upload dist/ folder to your web server
# Ensure server is configured for SPA routing
```

## Environment Variables

Create a `.env` file for local development:

```env
VITE_ANALYTICS_ID=your_analytics_id
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `node scripts/generate-sitemap.mjs` - Generate sitemap.xml

## Performance

The portfolio is optimized for:
- **Lighthouse Performance**: ≥90
- **Lighthouse Accessibility**: ≥90
- **Lighthouse Best Practices**: ≥90
- **Lighthouse SEO**: ≥90

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details.

## Contact

- Email: oren.vanallen@brown.edu
- LinkedIn: [linkedin.com/in/orenvanallen](https://linkedin.com/in/orenvanallen)
- GitHub: [github.com/orenvanallen](https://github.com/orenvanallen)