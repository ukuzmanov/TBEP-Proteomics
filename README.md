# TBEP Proteomics website (draft for the web manager)

A self-contained static site: open `index.html` in a browser. No build step and no server needed.

## Pages
| File | Content |
|---|---|
| `index.html` | Home: who we work with, capabilities summary, report walkthrough, how a project runs |
| `capabilities.html` | Proteomics approaches, sample types, workflow |
| `collaborate.html` | Clinical collaborators, academic labs, industry partners |
| `analytics.html` | Data analysis, interactive report walkthrough video, deliverables |
| `publications.html` | Publications, grouped by year with filter buttons per investigator; submitted and under-revision papers first |
| `contact.html` | Contact details (uros.kuzmanov@utoronto.ca) |
| `demo/interactive-report-demo.html` | A working demo report (fictitious data) linked from the walkthrough |

## Design
Colours and type follow tedrogersresearch.ca: crimson `#8a1538`, near-black `#1a1a1a`, Roboto and Roboto Condensed (loaded from Google Fonts). All styles are in `assets/css/style.css`; the colour variables are at the top.

## Things to review before publishing
1. **Logos.** The header uses a text mark ("TBEP Proteomics"), not the official logo. To use the official Ted Rogers Centre / TBEP logo, replace the `<a class="brand">` block in each page's header (marked with a `LOGO` comment). Partner logos can go in the footer at the `PARTNER LOGOS` comment.
2. **Wording.** All text is a draft. Please check the descriptions of services, the industry-partnership paragraph (fee-for-service / sponsored research) and the contact title against program policy.
3. **Address.** The footer and contact page use the Ted Rogers Centre address from tedrogersresearch.ca.
4. **Moving into WordPress.** The text of each page can be copied section by section; the video is `assets/video/report-walkthrough.mp4` (1.5 MB, silent, loops) with poster `report-walkthrough.jpg`.

## Regenerating
Publications are listed in `publications.json` (one folder up). Add or edit an entry there and run `build_site.py` to rebuild the page.

`build_site.py` (one folder up) rewrites all five pages, which is handy for changing the navigation, footer or contact details everywhere at once. Editing the HTML files directly also works.
