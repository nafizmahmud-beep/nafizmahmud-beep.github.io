/* =====================================================================
   SITE CONTENT — this is the only file you normally need to edit.
   ---------------------------------------------------------------------
   Rules:
   - Text goes inside quotes "like this".
   - Every item in a list ends with a comma.
   - Leave a field as "" or [] if you don't have it; it will be hidden.
   - After editing, open index.html in a browser to check, then upload.
   See README.md, section "Updating your content", for examples.
   ===================================================================== */

window.SITE = {

  /* ---------- Basic identity ---------- */
  person: {
    name: "Nafiz Mahmud Khan",
    fullName: "Md. Nafiz Mahmud Khan",
    citationName: "Khan, N. M.",        // used to highlight you in author lists
    role: "Business Operations Analyst",
    organization: "LazyChat (Anteek Technology)",
    location: "Dhaka, Bangladesh",
    tagline: "Information systems, AI-supported decision-making, and applied analytics.",
    intro:
      "I study how information systems and AI change the way people and organizations make decisions. " +
      "I work on the same problem in practice as a business operations analyst at an AI agency in Dhaka.",
    // Shown as one short line under the intro. Set to "" to hide it.
    availability: "Open to graduate research positions starting in 2027 and to analyst roles in Dhaka.",
    // Email is split so simple spam bots can't read it from the page source.
    emailUser: "nafizmahmud",
    emailDomain: "iut-dhaka.edu",
    cv: "assets/cv/Nafiz_Mahmud_Khan_CV.pdf",
    cvUpdated: "October 2026"
  },

  /* ---------- Profile links (only verified URLs) ---------- */
  profiles: [
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/nafiz-mahmud-khan/" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=zPTiwZAAAAAJ&hl=en" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Nafiz-Khan-8" }
    // Add later, e.g. { label: "ORCID", url: "https://orcid.org/0000-0000-0000-0000" },
  ],

  /* ---------- About (each string is one paragraph) ---------- */
  about: [
    "I completed my BBA in Business and Technology Management at the Islamic University of Technology (IUT) in October 2026, " +
    "with a major in Technology Management and a minor in Information Systems. That combination led me to a question I keep " +
    "returning to: how do people and organizations make better decisions with data and AI, and where do those systems fall short?",

    "I joined LazyChat, an AI agency, as an intern in January 2026 and now work there full-time as a Business Operations Analyst. I design and refine prompts for " +
    "client-facing automation workflows built on large language models, and I work with the delivery team on AI-driven " +
    "solutions for business clients. The job keeps me close to how AI tools behave once real users depend on them.",

    "My research covers human–AI collaboration, generative AI adoption, explainable analytics for logistics, and " +
    "forecasting economic indicators with interpretable machine learning. I use machine learning and statistics as tools " +
    "for questions about decisions, adoption and operations, not as ends in themselves. Next, I want to pursue a research " +
    "master's or PhD in information systems or a closely related field."
  ],

  /* ---------- Work experience (newest first) ---------- */
  experience: [
    {
      title: "Business Operations Analyst",
      organization: "LazyChat (Anteek Technology)",
      type: "Joined as an intern, now full-time",
      start: "January 2026",
      end: "Present",
      points: [
        "Engineer and optimize prompts for client-facing automation workflows, aiming for more accurate and consistent responses across large language model deployments.",
        "Work with cross-functional teams to design and implement AI-driven solutions for clients in different industries."
      ],
      tools: ["Prompt engineering", "Large language models"]
    }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Bachelor of Business Administration (BBA), Business and Technology Management",
      institution: "Islamic University of Technology (IUT), Gazipur",
      date: "Completed October 2026",
      details: [
        "Major: Technology Management. Minor: Information Systems.",
        "CGPA 3.53 / 4.00"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      date: "",
      details: ["GPA 5.00 / 5.00"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Government Laboratory School & College, Dhaka",
      date: "",
      details: ["GPA 5.00 / 5.00"]
    }
  ],

  /* ---------- Leadership and service ---------- */
  leadership: [
    { role: "Treasurer", organization: "IUT Al-Biruni Society of Scientific Studies", dates: "Oct 2025 – Oct 2026" },
    { role: "Assistant Treasurer", organization: "IUT Al-Biruni Society of Scientific Studies", dates: "Jul 2024 – Oct 2025" },
    { role: "Secretary of Event Management", organization: "IUT SIKS", dates: "Jul 2024 – Oct 2025" },
    { role: "Volunteer", organization: "IUT Admission Test", dates: "2024" },
    { role: "Volunteer", organization: "Beyond the Matrix, BTM Department Festival, IUT", dates: "2023" }
  ],

  /* ---------- Skills ----------
     level is optional. Use only what you can defend in an interview:
     "Intermediate", "Working knowledge", "Basic". Leave "" for no label. */
  skills: [
    {
      group: "Data analysis and BI",
      items: [
        { name: "Excel", level: "Intermediate", note: "Pivot tables, XLOOKUP, Power Query" },
        { name: "Power BI", level: "Basic", note: "" }
      ]
    },
    {
      group: "Programming and data",
      items: [
        { name: "Python", level: "Basic", note: "pandas, NumPy, Matplotlib, scikit-learn; used for machine learning models in my research" },
        { name: "SQL / PostgreSQL", level: "Basic", note: "" }
      ]
    },
    {
      group: "Research and statistics",
      items: [
        { name: "Machine learning for prediction", level: "", note: "Gradient-boosted and tree-based models, SHAP interpretation" },
        { name: "SPSS, Stata", level: "", note: "" },
        { name: "LaTeX, Zotero, Mendeley", level: "", note: "" }
      ]
    },
    {
      group: "AI and automation",
      items: [
        { name: "Prompt engineering", level: "", note: "Applied daily in client LLM workflows" },
        { name: "n8n, Zapier, Make", level: "Basic", note: "" }
      ]
    },
    {
      group: "Operations and project tools",
      items: [
        { name: "Odoo, Jira, ClickUp, Notion", level: "", note: "" },
        { name: "Microsoft Word", level: "", note: "" }
      ]
    }
  ],

  /* ---------- Research interests ----------
     stage: "established" = I have papers in this area
            "emerging"    = current interest, no paper yet */
  interests: [
    {
      title: "Human–AI interaction and human-centered AI",
      stage: "established",
      text: "How professionals work alongside generative AI, what helps or blocks adoption, and how explanations shape trust in AI output.",
      evidence: ["mwais-2026", "jebc-2026", "lastmile-2026"]
    },
    {
      title: "AI-enabled decision support and MIS dashboards",
      stage: "established",
      text: "Whether real-time information systems and dashboards actually make managerial decisions faster and better, and how to measure it.",
      evidence: ["dashboards-2026", "trpro-2026", "cpi-2026"]
    },
    {
      title: "Optimization and probabilistic analysis of systems",
      stage: "established",
      text: "Scheduling and routing problems where uncertainty matters, approached with heuristics and probabilistic reasoning.",
      evidence: ["qubo-2026", "lastmile-2026"]
    },
    {
      title: "AI-assisted information processing and evaluation",
      stage: "emerging",
      text: "How people evaluate, filter and act on information produced or summarized by AI systems.",
      evidence: []
    },
    {
      title: "Sustainability and urban infrastructure",
      stage: "adjacent",
      text: "Co-authored work on transport emissions and rooftop solar adoption in Dhaka.",
      evidence: ["trb-2026", "icerie-2025"]
    }
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
      id: "cpi",
      title: "Interpretable inflation forecasting across Asian economies",
      question: "How well can machine learning models forecast the Consumer Price Index across several Asian countries, and which time effects drive their predictions?",
      approach: "Compared around ten models, including XGBoost, CatBoost and Extra Trees, and used SHAP to interpret the influence of year and month effects.",
      tools: ["Python", "XGBoost", "CatBoost", "scikit-learn", "SHAP"],
      role: "Lead author",
      outcome: "Manuscript under review at Computational Economics. Results will be shared after review.",
      publication: "cpi-2026"
    },
    {
      id: "lastmile",
      title: "Explainable analytics for last-mile delivery in Dhaka",
      question: "Can an explainable analytics framework predict delivery times and support route decisions for last-mile delivery in a dense city?",
      approach: "An explainable business analytics framework that combines AI-based delivery time prediction with route optimization, using evidence from Dhaka.",
      tools: ["Machine learning", "Explainable AI", "Route optimization"],
      role: "Lead author",
      outcome: "Submitted to ICEEICT 2026.",
      publication: "lastmile-2026"
    },
    {
      id: "dashboards",
      title: "Real-time MIS dashboards and platform governance",
      question: "Do real-time MIS dashboards change how fast and how well platform owners make governance decisions on API-based digital innovation platforms?",
      approach: "Empirical study of platform owner decision-making speed and quality.",
      tools: [],
      role: "Lead author",
      outcome: "Submitted to ICEEICT 2026.",
      publication: "dashboards-2026"
    },
    {
      id: "qubo",
      title: "QUBO-inspired simulated annealing for job-shop scheduling",
      question: "How does a QUBO-inspired simulated annealing approach compare with classical dispatching heuristics on job-shop scheduling benchmarks?",
      approach: "Benchmark comparison against classical dispatching rules.",
      tools: ["Simulated annealing", "QUBO formulation", "Dispatching heuristics"],
      role: "Lead author",
      outcome: "Accepted at the 11th IEEE Asia-Pacific Conference on Computer Science and Data Engineering.",
      publication: "qubo-2026"
    },
    {
      id: "lazychat",
      title: "Prompt design for client automation workflows",
      question: "How can LLM-based automation give accurate, consistent answers in client-facing business workflows?",
      approach: "Iterative prompt engineering and testing inside automation workflows, in collaboration with the delivery team.",
      tools: ["Large language models", "Prompt engineering"],
      role: "Business Operations Analyst, LazyChat",
      outcome: "Ongoing work.",
      publication: ""
    }
  ],

  /* ---------- Publications ----------
     status must be one of:
       "published" | "presented" | "accepted" | "review" | "submitted"
     To add a paper: copy one block { ... }, paste it at the top of the list,
     and change the fields. Give it a unique id. */
  publications: [
    {
      id: "jebc-2026",
      status: "published",
      type: "Journal article",
      year: 2026,
      title: "The Generative AI Revolution in Digital Marketing: Opportunities, Implementation Barriers, and Strategic Future Directions",
      authors: ["Khan, N. M.", "Mahmood, H.", "Akther, S.", "Abir, S. M. J. N.", "Islam, M. U."],
      venue: "Journal of Economics, Business, and Commerce, 3(2), 31–40",
      summary: "A review of recent studies and industry survey data that maps generative AI capabilities to marketing functions. It finds most adoption targets productivity rather than data-driven decisions, and argues that bias, hallucination, privacy and job displacement need stronger governance and human oversight.",
      links: [{ label: "DOI", url: "https://doi.org/10.69739/jebc.v3i2.1947" }]
    },
    {
      id: "trpro-2026",
      status: "published",
      type: "Conference proceedings",
      year: 2026,
      title: "Does artificial intelligence investment improve logistics performance? Evidence from the EU and MENA regions",
      authors: ["Hossain, M. S.", "Nabil, A. A.", "Khan, N. M.", "Nishat, M. H.", "Islam, M. U.", "Rahman, H. A."],
      venue: "Transportation Research Procedia, 96, 604–611",
      summary: "Examines whether investment in artificial intelligence is associated with national logistics performance across EU and MENA countries.",
      links: [{ label: "DOI", url: "https://doi.org/10.1016/j.trpro.2026.04.034" }]
    },
    {
      id: "mwais-2026",
      status: "published",
      type: "Conference proceedings",
      year: 2026,
      title: "Human–AI Collaboration in Professional Workflows: A Mixed-Methods Pilot Study of IT Professionals in Bangladesh",
      authors: ["Islam, M. U.", "Anam, M. M. U.", "Abir, S. M. J. N.", "Mahmood, H.", "Khan, N. M."],
      venue: "MWAIS 2026 Proceedings, Association for Information Systems",
      summary: "A mixed-methods pilot study of how IT professionals in Bangladesh collaborate with AI tools in their daily work.",
      links: [{ label: "AIS eLibrary", url: "https://aisel.aisnet.org/mwais2026/15" }]
    },
    {
      id: "icerie-2025",
      status: "published",
      type: "Conference proceedings",
      year: 2025,
      title: "Challenges and Opportunities for Implementing Rooftop Solar in Dhaka's Residential Sector",
      authors: ["Nishat, M. H.", "Labib, A.", "Khan, N. M.", "Muntaha, S.", "Mayukh, A. A. A."],
      venue: "Proceedings of ICERIE 2025, Atlantis Press, Vol. 278, 239–245",
      summary: "Reviews the main obstacles to rooftop solar in Dhaka homes, including limited roof space, upfront cost, low awareness, regulation and financing, and the incentives and awareness measures that could widen adoption.",
      links: [{ label: "DOI", url: "https://doi.org/10.2991/978-94-6463-884-4_29" }]
    },
    {
      id: "trb-2026",
      status: "presented",
      type: "Conference presentation",
      year: 2026,
      title: "Carbon Budgeting for Dhaka's Urban Transport Sector: A Life-Cycle Emissions and Equity Analysis of Proposed Metro, BRT, and Road Expansion Projects",
      authors: ["Nishat, M. H.", "Labib, A.", "Khan, N. M.", "Nabil, A. A."],
      venue: "Transportation Research Board (TRB) Annual Meeting 2026, Washington, D.C., January 11–15",
      summary: "A life-cycle emissions and equity comparison of proposed metro, bus rapid transit and road expansion projects in Dhaka.",
      links: []
    },
    {
      id: "qubo-2026",
      status: "accepted",
      type: "Conference paper",
      year: 2026,
      title: "QUBO-Inspired Simulated Annealing for Job-Shop Scheduling: A Benchmark Comparison with Classical Dispatching Heuristics",
      authors: ["Khan, N. M.", "Prome, F. S.", "Nishat, M. H.", "Islam, M. U."],
      venue: "11th IEEE Asia-Pacific Conference on Computer Science and Data Engineering",
      summary: "Compares a QUBO-inspired simulated annealing method with classical dispatching heuristics on job-shop scheduling benchmarks.",
      links: []
    },
    {
      id: "cpi-2026",
      status: "review",
      type: "Journal article",
      year: 2026,
      title: "Predicting the Pulse of Asia: A Multi-country Assessment of AI-Driven Consumer Price Index Modeling",
      authors: ["Khan, N. M.", "Nishat, M. H.", "Hossain, S. N.", "Hossain, N."],
      venue: "Computational Economics",
      summary: "Compares machine learning models for forecasting the Consumer Price Index across several Asian economies and interprets them with SHAP.",
      links: []
    },
    {
      id: "dashboards-2026",
      status: "submitted",
      type: "Conference paper",
      year: 2026,
      title: "The Impact of Real-Time MIS Dashboards on Governance Efficiency in API-Based Digital Innovation Platforms: An Empirical Study of Platform Owner Decision-Making Speed and Quality",
      authors: ["Khan, N. M.", "Prome, F. S.", "Samin, Y. A.", "Bhuiyan, I. H.", "Nabil, A. A.", "Chowdhury, N.", "Nishat, M. H.", "Islam, M. U.", "Hossain, M. N."],
      venue: "7th ICEEICT",
      summary: "Studies whether real-time MIS dashboards improve the speed and quality of platform owners' governance decisions.",
      links: []
    },
    {
      id: "lastmile-2026",
      status: "submitted",
      type: "Conference paper",
      year: 2026,
      title: "An Explainable Business Analytics Framework Integrating AI for Last-Mile Delivery Time Prediction and Route Optimization: Evidence from Dhaka, Bangladesh",
      authors: ["Khan, N. M.", "Nishat, M. H.", "Labib, A.", "Sagar, M. F. H.", "Bhuiyan, A. A.", "Nur, A. B.", "Mon, N. N.", "Abid, A. U. A."],
      venue: "7th ICEEICT",
      summary: "Proposes an explainable analytics framework that pairs delivery time prediction with route optimization for last-mile delivery in Dhaka.",
      links: []
    }
  ]
};
