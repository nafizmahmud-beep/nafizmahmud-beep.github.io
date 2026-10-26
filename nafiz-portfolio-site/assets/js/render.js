/* =========================================================
   Renders content.js into the page. You should not need to
   edit this file to update your content.
   ========================================================= */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) { return; }

  var STATUS = {
    published: { label: "Published", plural: "Published", note: "Peer-reviewed and publicly available." },
    presented: { label: "Presented", plural: "Presented", note: "Presented at a conference." },
    accepted:  { label: "Accepted", plural: "Accepted", note: "Accepted for publication, not yet available." },
    review:    { label: "Under review", plural: "Under review", note: "In peer review. Titles may change." },
    submitted: { label: "Submitted", plural: "Submitted", note: "Submitted and awaiting a decision." }
  };
  var ORDER = ["published", "presented", "accepted", "review", "submitted"];

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fill(name, html) {
    $all('[data-render="' + name + '"]').forEach(function (el) { el.innerHTML = html; });
  }
  function pubById(id) {
    for (var i = 0; i < S.publications.length; i++) { if (S.publications[i].id === id) { return S.publications[i]; } }
    return null;
  }
  function email() { return S.person.emailUser + "@" + S.person.emailDomain; }
  function ext(url, label, cls) {
    return '<a class="' + (cls || "") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) +
      '<span class="visually-hidden"> (opens in a new tab)</span></a>';
  }

  /* ---------- Small pieces ---------- */
  function authorsHtml(p) {
    var mine = -1;
    var list = p.authors.map(function (a, i) {
      if (a === S.person.citationName) { mine = i; return '<span class="me">' + esc(a) + "</span>"; }
      return esc(a);
    }).join(", ");
    var pos = mine >= 0 ? " <span class=\"muted\">(author " + (mine + 1) + " of " + p.authors.length + ")</span>" : "";
    return list + pos;
  }

  function citation(p) {
    var a = p.authors.slice();
    var auth = a.length > 1 ? a.slice(0, -1).join(", ") + ", & " + a[a.length - 1] : a[0];
    var link = p.links && p.links[0] ? " " + p.links[0].url : "";
    var st = p.status === "published" ? "" : " (" + STATUS[p.status].label + ")";
    return auth + " (" + p.year + "). " + p.title + ". " + p.venue + "." + st + link;
  }

  function pubHtml(p, opts) {
    opts = opts || {};
    var links = (p.links || []).map(function (l) { return ext(l.url, l.label, "linkbtn"); }).join("");
    return '<li class="pub" id="pub-' + esc(p.id) + '" data-status="' + esc(p.status) + '">' +
      "<h3>" + esc(p.title) + "</h3>" +
      '<p class="authors">' + authorsHtml(p) + "</p>" +
      '<p class="venue">' + esc(p.venue) + ", " + esc(p.year) + "</p>" +
      (opts.summary !== false && p.summary ? '<p class="summary">' + esc(p.summary) + "</p>" : "") +
      '<div class="pub-meta">' +
        '<span class="status"><span class="dot bg-' + esc(p.status) + '" aria-hidden="true"></span>' +
          esc(STATUS[p.status].label) + ", " + esc(p.type.toLowerCase()) + "</span>" +
        '<span class="pub-links">' + links +
          '<button type="button" class="linkbtn" data-cite="' + esc(p.id) + '">Copy citation</button>' +
        "</span>" +
      "</div></li>";
  }

  function counts() {
    var c = {};
    ORDER.forEach(function (k) { c[k] = 0; });
    S.publications.forEach(function (p) { if (c[p.status] != null) { c[p.status]++; } });
    return c;
  }

  /* ---------- Sections ---------- */
  function renderOutput() {
    var c = counts(), total = S.publications.length;
    var bar = ORDER.filter(function (k) { return c[k] > 0; }).map(function (k) {
      return '<span class="bg-' + k + '" style="flex:' + c[k] + '"></span>';
    }).join("");
    var list = ORDER.filter(function (k) { return c[k] > 0; }).map(function (k) {
      return '<li><a href="publications.html#' + k + '">' +
        '<span class="dot bg-' + k + '" aria-hidden="true"></span>' +
        '<span class="output-label">' + STATUS[k].plural + "</span>" +
        '<span class="output-count">' + c[k] + "</span></a></li>";
    }).join("");
    fill("output",
      "<h2>Research output</h2>" +
      '<p class="output-caption">' + total + " papers and presentations, " + c.published + " published</p>" +
      '<div class="pipeline" role="img" aria-label="' + ORDER.filter(function (k) { return c[k] > 0; })
        .map(function (k) { return c[k] + " " + STATUS[k].label.toLowerCase(); }).join(", ") + '">' + bar + "</div>" +
      '<ul class="output-list">' + list + "</ul>");
  }

  function renderHero() {
    var p = S.person;
    fill("name", esc(p.name));
    fill("role", "<strong>" + esc(p.role) + "</strong>, " + esc(p.organization) + ". " + esc(p.location) + ".");
    fill("intro", esc(p.intro));
    fill("availability", esc(p.availability));
    $all('[data-render="availability"]').forEach(function (el) { el.hidden = !p.availability; });
  }

  function renderAbout() {
    fill("about", S.about.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join(""));
  }

  function renderExperience() {
    fill("experience", '<ol class="timeline">' + S.experience.map(function (e) {
      return "<li>" +
        '<p class="when">' + esc(e.start) + " – " + esc(e.end) + "<br>" + esc(e.type) + "</p>" +
        "<div><h3>" + esc(e.title) + '</h3><p class="org">' + esc(e.organization) + "</p>" +
        "<ul>" + e.points.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        (e.tools && e.tools.length ? '<ul class="tags" aria-label="Tools">' +
          e.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
        "</div></li>";
    }).join("") + "</ol>");

    fill("leadership", '<ul class="compact-list">' + S.leadership.map(function (l) {
      return "<li><span><strong>" + esc(l.role) + "</strong>, " + esc(l.organization) + '</span><span class="when">' + esc(l.dates) + "</span></li>";
    }).join("") + "</ul>");
  }

  function renderEducation() {
    fill("education", '<div class="edu">' + S.education.map(function (e, i) {
      return '<div class="edu-item' + (i === 0 ? " primary" : "") + '">' +
        "<h3>" + esc(e.degree) + "</h3>" +
        "<p>" + esc(e.institution) + (e.date ? '<span class="muted">, ' + esc(e.date) + "</span>" : "") + "</p>" +
        (e.details.length ? '<p class="details muted">' + e.details.map(esc).join(" ") + "</p>" : "") +
        "</div>";
    }).join("") + "</div>");
  }

  function renderSkills() {
    fill("skills", '<div class="skills">' + S.skills.map(function (g) {
      return "<div><h3>" + esc(g.group) + "</h3><dl>" + g.items.map(function (s) {
        return '<div class="skill"><dt><span>' + esc(s.name) + "</span>" +
          (s.level ? '<span class="level">' + esc(s.level) + "</span>" : "") + "</dt>" +
          (s.note ? "<dd>" + esc(s.note) + "</dd>" : "") + "</div>";
      }).join("") + "</dl></div>";
    }).join("") + "</div>");
  }

  function renderSelectedPubs() {
    var picks = S.publications.filter(function (p) { return p.status === "published" || p.status === "accepted"; }).slice(0, 4);
    fill("selected-pubs", '<ol class="pubs">' + picks.map(function (p) { return pubHtml(p, { summary: false }); }).join("") + "</ol>");
  }

  function renderPublications() {
    var root = $('[data-render="publications"]');
    if (!root) { return; }
    var c = counts();
    var groups = ORDER.filter(function (k) { return c[k] > 0; }).map(function (k) {
      var items = S.publications.filter(function (p) { return p.status === k; })
        .sort(function (a, b) { return b.year - a.year; });
      return '<section class="pub-group" id="' + k + '" data-group="' + k + '" aria-labelledby="h-' + k + '">' +
        '<h2 id="h-' + k + '"><span class="dot bg-' + k + '" aria-hidden="true"></span>' + STATUS[k].plural +
        ' <span class="muted" style="font-size:1rem">(' + c[k] + ")</span></h2>" +
        '<p class="group-note">' + STATUS[k].note + "</p>" +
        '<ol class="pubs">' + items.map(function (p) { return pubHtml(p); }).join("") + "</ol></section>";
    }).join("");

    var filters = '<fieldset class="filters"><legend>Show</legend>' +
      '<button type="button" class="filter" data-filter="all" aria-pressed="true">All (' + S.publications.length + ")</button>" +
      ORDER.filter(function (k) { return c[k] > 0; }).map(function (k) {
        return '<button type="button" class="filter" data-filter="' + k + '" aria-pressed="false">' +
          '<span class="dot bg-' + k + '" aria-hidden="true"></span>' + STATUS[k].plural + " (" + c[k] + ")</button>";
      }).join("") + "</fieldset>";

    root.innerHTML = filters + groups;

    function apply(key) {
      $all(".filter", root).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === key)); });
      $all(".pub-group", root).forEach(function (g) { g.hidden = !(key === "all" || g.dataset.group === key); });
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".filter");
      if (b) { apply(b.dataset.filter); }
    });
    var h = (location.hash || "").replace("#", "");
    if (STATUS[h]) { apply(h); }
  }

  function renderInterests() {
    var label = { established: "Published or submitted work", emerging: "Emerging interest", adjacent: "Co-authored, adjacent" };
    fill("interests", '<ul class="interests">' + S.interests.map(function (it) {
      var ev = (it.evidence || []).map(pubById).filter(Boolean);
      return '<li class="interest"><h3>' + esc(it.title) +
        '<span class="stage stage-' + esc(it.stage) + '">' + esc(label[it.stage] || it.stage) + "</span></h3>" +
        "<p>" + esc(it.text) + "</p>" +
        (ev.length ? '<p class="evidence">Related: ' + ev.map(function (p) {
          return '<a href="publications.html#pub-' + esc(p.id) + '">' + esc(shortTitle(p.title)) + "</a>";
        }).join("; ") + "</p>" : "") +
        "</li>";
    }).join("") + "</ul>");
  }
  function shortTitle(t) { var s = t.split(":")[0]; return s.length > 70 ? s.slice(0, 67) + "…" : s; }

  function renderProjects() {
    fill("projects", '<ol class="projects">' + S.projects.map(function (p) {
      var pub = p.publication ? pubById(p.publication) : null;
      var row = function (k, v) { return v ? "<dt>" + k + "</dt><dd>" + v + "</dd>" : ""; };
      var links = [];
      if (pub) { links.push('<a href="publications.html#pub-' + esc(pub.id) + '">Publication entry</a>'); }
      if (pub && pub.links) { pub.links.forEach(function (l) { links.push(ext(l.url, l.label)); }); }
      return '<li class="project" id="project-' + esc(p.id) + '"><h3>' + esc(p.title) + "</h3><dl>" +
        row("Question", esc(p.question)) +
        row("Approach", esc(p.approach)) +
        row("Tools", p.tools && p.tools.length ? esc(p.tools.join(", ")) : "") +
        row("My role", esc(p.role)) +
        row("Status", esc(p.outcome)) +
        row("Links", links.join(", ")) +
        "</dl></li>";
    }).join("") + "</ol>");
  }

  function renderContact() {
    fill("profiles", '<ul class="profile-links">' + S.profiles.map(function (l) {
      return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener"><span>' + esc(l.label) +
        '</span><span class="ext">Opens in a new tab</span></a></li>';
    }).join("") + "</ul>");
    $all("[data-email]").forEach(function (a) { a.href = "mailto:" + email(); });
    $all("[data-email-text]").forEach(function (el) { el.textContent = email(); });
    $all("[data-cv]").forEach(function (a) { a.href = S.person.cv; });
    $all("[data-cv-updated]").forEach(function (el) { el.textContent = S.person.cvUpdated; });
  }

  /* ---------- Behaviour ---------- */
  function setupNav() {
    var btn = $(".nav-toggle"), nav = $(".site-nav");
    if (!btn || !nav) { return; }
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); btn.textContent = "Menu"; }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { btn.click(); btn.focus(); }
    });
  }

  function toast(msg) {
    var t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  function setupCite() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cite]");
      if (!b) { return; }
      var text = citation(pubById(b.dataset.cite));
      var done = function () { toast("Citation copied"); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "absolute"; ta.style.left = "-9999px";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (err) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function scrollToHash() {
    if (!location.hash) { return; }
    var el = document.getElementById(location.hash.slice(1));
    if (el) { el.scrollIntoView(); }
  }

  /* ---------- Run ---------- */
  renderHero();
  renderOutput();
  renderAbout();
  renderExperience();
  renderEducation();
  renderSkills();
  renderSelectedPubs();
  renderPublications();
  renderInterests();
  renderProjects();
  renderContact();
  setupNav();
  setupCite();
  fill("year", String(new Date().getFullYear()));
  scrollToHash();
})();
