# Krishna Gopal Tailor: Portfolio

Personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Updating content

All website content lives in one file: [`data/portfolio.json`](data/portfolio.json).
You do not need to touch any code to change text, jobs, projects or skills.

| Section in the JSON | What it controls |
| --- | --- |
| `site` | Browser tab title, SEO description, keywords and the live site URL |
| `profile` | Name, headline, tagline, contact details, social links, resume link, photo and the typing words in the hero |
| `stats` | The four numbers on the hero card |
| `about` | Intro paragraph and the six highlight cards |
| `experience` | Career timeline, newest first. Set `"end": "Present"` for the current job |
| `projects` | Project cards. `"featured": true` adds a glow and a Featured badge |
| `skills` | Skill groups. `years` is optional |
| `education` | Education cards |
| `contact`, `footer` | Contact section text and footer note |

Icons for `about.highlights` and `skills` use one of: `bot`, `server`, `cloud`, `layers`, `database`, `shield`, `code`, `wrench`.

The JSON is type-checked when the site builds. If you misspell or remove a field, `npm run build` fails with a message that names it, so a broken edit never reaches the live site.

### Common edits

- **Add a profile photo:** put the image at `public/profile.jpg` and set `"photo": "/profile.jpg"`.
- **Update the resume:** replace `public/resume.pdf` with the new file, keeping the same name.
- **Add a job or project:** copy an existing entry in the list, paste it where you want it to appear, and edit the values.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint    # lint
npm run build   # production build (also validates portfolio.json)
```

## Deploying

1. Sign in to [Vercel](https://vercel.com) with the KrishnaGopal GitHub account.
2. Import the `KrishnaGopal/my_portfolio` repository and keep the default settings.
3. Every push to `main` redeploys the site automatically.

After the first deploy, set `site.url` in `data/portfolio.json` to the live URL so social-share previews use the right address.
