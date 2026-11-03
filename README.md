# Salon Desk — product website

An animated, responsive marketing website for the Salon Desk salon application. Includes a CSS 3D hero sculpture, scroll reveals, product preview tabs, colour preview, proposed pricing with monthly/yearly toggle, FAQ, enquiry modal, branded favicon, mobile navigation and an actual interactive salon workspace at `/demo.html`.

## Run

Node 20+: `npm start`, then open http://localhost:3000. No npm packages are required. Build with `npm run build`; output is `dist/`.

## Deploy free on Render

Create a **Static Site**, connect this repository, choose `main`, set build command `npm run build` and publish directory `dist`. No environment variables or database are required. `render.yaml` also supports Blueprint deployment. Render provides the live URL after deployment. Alternatively, GitHub Pages can serve the root files directly.

## Edit the commercial details

- Prices are proposals: Essential ₹1,500, Studio ₹3,000, Signature ₹5,000 per month. Yearly amounts are exactly 20% lower. Plan buttons prepare enquiries, not payment or subscriptions.
- Edit plan content in `index.html`, price data attributes and annual billing notes together.
- The enquiry downloads a text file locally. It does not send a message or store a lead. Configure a verified business contact or lead endpoint before accepting customer enquiries.
- All customer names and financial figures in preview components are illustrative sample data, not testimonials or business results.
- The demo stores records in browser localStorage only. Use test details; export backups. It has no cloud sync, salon logins, access controls or automatic WhatsApp sending.
- Personal enquiries are not stored by this website. Google Fonts is loaded externally.

## Accessibility and motion

Keyboard-accessible product tabs, modal, FAQ, mobile menu, labelled forms, skip link and focus indicators. Animations respect reduced-motion preferences, pause in hidden tabs and can be turned off using the footer Motion control.

The plan comparison and per-visit calculator illustrate proposed scope and monthly list costs. They do not forecast revenue or enable subscriptions.
