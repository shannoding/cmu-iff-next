## Overview

This project primarily uses [Next.js' Static HTML export](https://nextjs.org/docs/advanced-features/static-html-export) feature to build a medium sized site with some interconnectedness/interactivity that is statically served. The deployment process is convoluted to work under the limitation that all code is made of static client side files.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Workflow & Deployment

1. Verify `next.config.js` is in development mode. Run the development server.
2. Modify `components/*`, `content/*`, `lib/*`, `pages/*`, `public/*`, `styles/*`. View changes at [http://localhost:3000](http://localhost:3000).
3. When ready to deploy, change `next.config.js` to deployment mode. Run `npm run export`. On success, the `out/` folder will have a fully built site of `html|css|js` files that can run entirely client side.
4. Open an FTP client and connect to the `publishing.andrew.cmu.edu` server. Upload the entirety of `out/` or selectively upload folders. In particular, always upload `out/_next/` after any edits as it is involved in routing. If `public/*` wasn't edited, no need to upload the corresponding files in `out/`. For example, essentially no need to ever upload `out/previous_festivals/` as it stays the same for archive purposes and is a massive folder.

## Issues

- Next.js doesn't have the ability to change the base path of the public folder. For every link to an asset in the public folder, you must append the `basePublicPath` constant to the front. This is inconvenient to say the least.
- Some pages in the site are generated off markdown files and have links public folder assets in them. For markdown files, the string `$basePublicPath$` will be replaced with the base public path.
- See the open projects [on the Github projects page](https://github.com/shannoding/cmu-iff-next/projects/1)
- In general, the website made it through one somewhat rushed festival season so there are some temporary fixes present.
- The amount of local assets are building up and we are running out of storage space on CMU servers. Perhaps consider using a third party storage site for assets.