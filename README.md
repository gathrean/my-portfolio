# Gathrean Dela Cruz Portfolio

https://gathrean.com

## Quick Start

```bash
npm install
npm start        # dev server on localhost:3000
npm run build    # production build to /build
```

## Tech Stack

- React 18 + React Router 6 (Create React App)
- Bootstrap 5 / React-Bootstrap
- CSS (no preprocessor)
- Deployed on Vercel

## Routes

| Path | Page | Content |
|------|------|---------|
| `/` | Landing | Hero with profile, bio, links, time/date |
| `/about` | About | About me + Academia sections |
| `/projects` | Projects | Projects + Skills sections |
| `/gallery` | Gallery | Photography (under construction) |
| `/contact` | Contact | Contact page |

## Project Structure

```
src/
  App.jsx                  # Router + Layout wrapper
  index.js                 # Entry point
  components/
    Navbar/                # Fixed top navbar with live clock
    Footer/                # Site footer
    MyProfile/             # Profile sidebar component
    SocialMediaIcons/      # LinkedIn, GitHub, Twitter links
    ArrowRight/            # Arrow icon components
    LocalTime.jsx          # PST time display
  pages/
    LandingPage/
      LandingPage.jsx
      Sections/
        HERO/              # Profile photo, name, bio, links, time/date
        ABOUT/             # Personal info
        ACADEMIA/          # Education, research
        PROJECTS/          # Portfolio work
        SKILLS/            # Tech stack
    AboutPage/
    DeveloperPage/
    PhotographyPage/
    ContactPage/
    NotFoundPage/
public/
  index.html               # SEO meta, OG tags, JSON-LD, favicons
  sitemap.xml
  robots.txt
  manifest.json
  images/                  # OG preview image
```

## Claude Code Workflow

This project uses Claude Code with git worktrees for parallel branches.

```bash
# Start a session from the main repo
cd ~/Developer/my-portfolio
claude

# Or work in an existing worktree
cd ~/.claude-worktrees/my-portfolio/<branch-name>
claude
```

Worktree branches get merged back to `main` via PR.

## TODO

- [ ] Migrate from CRA to Vite or Next.js for server-side rendering (revisit if not ranking after a few weeks on Search Console)
