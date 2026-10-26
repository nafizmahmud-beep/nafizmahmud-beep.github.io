# Nafiz Mahmud Khan — personal website

A static website (HTML, CSS and JavaScript only). There is no build step, no backend, no database and nothing to pay for. It runs on GitHub Pages for free.

```
index.html              Home: intro, about, experience, selected publications, education, skills, leadership, CV and contact
research.html           Research interests and projects
publications.html       All publications, grouped by status, with filters
404.html                Shown for any address that doesn't exist
assets/js/content.js    ALL YOUR CONTENT. This is the file you edit.
assets/js/render.js     Turns content.js into the page. Don't edit.
assets/css/style.css    Colors, fonts and layout
assets/cv/              Your CV PDF
assets/fonts/           Self-hosted fonts (free, SIL Open Font License)
assets/img/             Favicon and the image shown when the link is shared
robots.txt, sitemap.xml Help search engines find the pages
.nojekyll               Tells GitHub Pages to serve the files as they are
```

---

## 1. Your web address

The site is already set up for **https://nafizmahmud-beep.github.io** (GitHub account `nafizmahmud-beep`). If you ever change your username, replace `nafizmahmud-beep` in `index.html`, `research.html`, `publications.html`, `404.html`, `sitemap.xml` and `robots.txt` (in VS Code: `Ctrl + Shift + H`, Replace All).

---

## 2. Publish on GitHub Pages (free)

**Requirements (verified on GitHub's documentation, October 2026):** a free GitHub account. On the free plan, GitHub Pages works only with **public** repositories, so every file you upload, including the CV, is publicly visible. Limits: site up to 1 GB, soft limit of 100 GB of traffic per month. This site is under 1 MB.

### Step 1. Create a GitHub account
Go to https://github.com/signup. Choose your username carefully: your site address will be `https://<username>.github.io`.

### Step 2. Create the repository
1. Click **+** (top right) → **New repository**.
2. Repository name: exactly `nafizmahmud-beep.github.io` (all lowercase).
3. Visibility: **Public**.
4. Click **Create repository**.

### Step 3. Upload the files
1. On the new repository page, click **uploading an existing file** (or **Add file → Upload files**).
2. Open the website folder on your computer, select **everything inside it** (not the folder itself), and drag it into the browser. Folders are kept.
3. Make sure `index.html` sits at the top level of the repository, not inside another folder.
4. Scroll down and click **Commit changes**.

> `.nojekyll` is a hidden file. On Windows, turn on "Hidden items" in File Explorer's View menu. On Mac, press `Cmd + Shift + .` in Finder. If it doesn't upload, use **Add file → Create new file**, name it `.nojekyll`, leave it empty, and commit.

### Step 4. Turn on GitHub Pages
1. In the repository, go to **Settings → Pages**.
2. Under "Build and deployment", Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait 1 to 10 minutes. Refresh the page. A message with your link appears: `https://nafizmahmud-beep.github.io`.

### Step 5. Check the live site
Open it on your phone and computer. Click View CV, a DOI link, and the Email button.

### Step 6 (optional). Help Google find it
1. Go to https://search.google.com/search-console and add your site as a "URL prefix" property.
2. Verify it with the HTML-tag method: Search Console gives you a `<meta name="google-site-verification" ...>` line. Paste it into `index.html` just below `<meta charset="utf-8">`, then commit.
3. In Search Console → Sitemaps, submit `sitemap.xml`.
4. Add your site link to your LinkedIn profile, Google Scholar profile and email signature. Links from these profiles help most.

---

## 3. Updating your content

Almost everything lives in **`assets/js/content.js`**. On GitHub you can edit it in the browser: open the file → pencil icon → edit → **Commit changes**. The live site updates in a few minutes.

**Rules that prevent errors:** text goes in "double quotes"; every item in a list ends with a comma; don't delete the `{ }` or `[ ]` brackets.

### Add a new publication
Copy this block, paste it at the **top** of the `publications: [` list, and fill it in:

```js
    {
      id: "short-unique-name-2027",
      status: "published",          // published | presented | accepted | review | submitted
      type: "Journal article",      // or "Conference proceedings", "Conference paper", ...
      year: 2027,
      title: "Full title of the paper",
      authors: ["Khan, N. M.", "Other, A. B."],   // write your name exactly "Khan, N. M." so it's bolded
      venue: "Journal name, volume(issue), pages",
      summary: "One or two sentences in plain language.",
      links: [{ label: "DOI", url: "https://doi.org/..." }]
    },
```

The counts in the home page "Research output" bar and the filter buttons update by themselves.

### Change a paper's status
Find the paper and change `status`, for example from `"review"` to `"published"`, then add its DOI to `links`.

### Add a PDF of a paper
Only for papers you are allowed to share. Check the publisher's self-archiving policy first. Upload the PDF to `assets/papers/` and add `{ label: "PDF", url: "assets/papers/file-name.pdf" }` to that paper's `links`.

### Add a job
Copy an item in `experience: [` and put the new one first (newest first).

### Replace the CV
Upload the new PDF to `assets/cv/` with the **same file name** `Nafiz_Mahmud_Khan_CV.pdf`, replacing the old one. Then update `cvUpdated` in `content.js`.

### Add a profile (ORCID, GitHub)
Add a line inside `profiles: [`, for example
`{ label: "ORCID", url: "https://orcid.org/0000-0000-0000-0000" },`

### Change the email address
Edit `emailUser` (before the @) and `emailDomain` (after the @) in `content.js`.

### Check your edit before publishing (optional)
Double-click `index.html` on your computer to open it in a browser. If a section is blank after an edit, a comma or quote is usually missing near the line you changed.

---

## 4. Custom domain (optional, not free)

The `github.io` address is free forever. A custom domain such as `nafizkhan.com` costs money every year, so it is outside the ৳0 budget. If you buy one later: in **Settings → Pages → Custom domain**, enter it, add the DNS records GitHub shows you at your domain seller, and tick **Enforce HTTPS**. GitHub's guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 5. What was tested (26 October 2026)

Tested in Chromium served from a local web server, at 375 px (phone), 768 px (tablet) and 1366 px (desktop), in light and dark mode:

- No JavaScript errors and no failed requests on any page.
- No horizontal scrolling or overflowing elements at any of the three widths.
- Every internal link and every `#section` anchor resolves.
- CV button returns a PDF. Email button opens a `mailto:` link. The address isn't in the HTML source.
- Mobile menu opens, navigates and closes. The first Tab key press reaches "Skip to content".
- Publication filters, links from the home page into a filtered list, and "Copy citation" work.
- Every page has a title, a description, social preview tags, one main heading and `lang="en"`.
- The 404 page uses root paths, so it works at any missing address.

**Not yet tested** (needs the live site): the real GitHub Pages deployment, Safari on iPhone, link previews on LinkedIn and WhatsApp, and search indexing.
