# Build Spec: Personal Academic Website for Muhammad Jahanzeb Khan

**Repository:** `jahanxb/jahanxb.github.io`
**Live URL:** https://jahanxb.github.io
**Audience for this document:** Claude Code (the agent building the site)

---

## 0. How to use this document

1. Read this whole file before writing any code.
2. The owner (Jahanzeb Khan) will supply the **visual design and template style** separately (a theme, a reference site, mockups, or a template repository). When that arrives, follow it for all layout, typography, colors, and components. This document controls the **content, structure, privacy rules, and quality checks**. If the supplied design conflicts with a rule in Section 2 (Privacy) or Section 3 (Truthfulness), this document wins.
3. If no design has been supplied when you start, ask the owner for it before building pages. Do not invent a heavy custom design. You may scaffold the repository and the data files (Section 6) in the meantime.
4. Put all personal content in data files (Section 6), not hard-coded in templates, so the owner can edit content without touching layout.
5. Do not use em dashes or dash punctuation in any visible sentence on the site. Use commas, colons, semicolons, or separate sentences. Hyphens inside compound words (for example "open-weight", "non-IID") are fine. Date ranges may use "to" (for example "2022 to 2024").

---

## 1. Goals

- A clean, fast, professional academic and professional homepage that works for faculty searches, postdoc applications, research scientist roles, and industry roles.
- One place that shows research, publications, projects, teaching, mentoring, and industry experience.
- A prominent, always-visible link to the CV as a PDF.
- Visitors who want to get in touch are directed to **LinkedIn**. There is no email, phone, contact form, or address anywhere on the site.

---

## 2. Privacy rules (hard requirements)

These are non-negotiable. Check them before every commit.

1. **Do not publish** any of the following anywhere on the site, in page source, in metadata, in `_config.yml`, in JSON-LD, in `humans.txt`, in commit messages, or in the CV PDF:
   - email addresses (personal or university)
   - phone numbers
   - street address, city of residence as a contact detail, or ZIP code
   - date of birth, nationality, immigration or work-authorization status
2. **No contact form** and no `mailto:` links. The only "contact" path is LinkedIn.
3. **Allowed external profile links (exactly these):**
   - LinkedIn: https://www.linkedin.com/in/jahanxb-khan/
   - Google Scholar: https://scholar.google.com/citations?user=w1_pqnoAAAAJ
   - GitHub: https://github.com/jahanxb
4. Do not include any analytics or tracking scripts unless the owner explicitly asks. If the theme ships with analytics, disable it.
5. Do not name any mentored students anywhere.
6. Before publishing, run a search over the built site output (`_site/` or equivalent) for `@`, `mailto`, `tel:`, `+1`, `775`, `gmail`, `crimson`, and `ua.edu`. The only acceptable matches are inside external profile URLs. Fix anything else.

---

## 3. Truthfulness rules (hard requirements)

The site must state only what is true. Use the content in Section 5 exactly as given. Do not add skills, results, awards, metrics, or claims that are not listed here.

Specific wording rules:

- **EV charging work:** always say Jahanzeb **implemented and validated** the certificateless, non-interactive key establishment on real charging hardware. Never say he "designed", "invented", or "created" the cryptographic scheme, and never say he "found a mathematical invalidity" or "fixed the pairing equations". A labmate developed the cryptography.
- **Mentored projects** (drone adversarial patches, privacy-preserving federated traffic prediction, poisoning detection for electricity theft, model-decoupled FL REU): say "mentored" or "mentored and led". Do not say "I built" for student work. He is not an author on the 2024 poisoning-detection paper from his mentees, so do not list it.
- **Privacy-preserving federated traffic prediction (2025 REU):** use only the description in Section 5. Do not add technical claims.
- **LLM work:** he deployed and ran Llama and Qwen open-weight models from 8B to 24B parameters, and built applications with RAG and agent pipelines. Do not invent serving stacks, hardware, benchmarks, or purposes.
- **Pending publications:** show only as "Manuscripts in preparation (3): titles confidential." Never write "under review", "accepted", or "forthcoming", and never show titles.
- **Funding:** say "NSF funding" or "supported by NSF". Never print grant numbers.
- **Do not claim:** social media mining, social network analysis, NLP research, formal verification, control theory, hardware-in-the-loop, Vue.js or React, R, or any certification not listed in Section 5.

---

## 4. Site structure

Recommended pages (adapt names and navigation to the supplied design):

| Page | Path | Purpose |
|---|---|---|
| Home / About | `/` | Name, title line, short bio, research interests, news, profile links, CV button |
| Research | `/research/` | Research themes with short project stories |
| Publications | `/publications/` | Full publication list grouped by type |
| Projects | `/projects/` | Research projects plus selected industry projects |
| Teaching & Mentoring | `/teaching/` | Teaching roles, mentoring, teaching interests |
| Experience | `/experience/` | Research and industry positions |
| CV | `/cv/` or direct PDF link | Embed or link the PDF at `/assets/cv/MuhammadJahanzebKhan_CV.pdf` |

Global elements on every page:

- Header or navbar with the pages above.
- A visible **"CV (PDF)"** button or link in the header or navbar.
- Footer with exactly three icon links: LinkedIn, Google Scholar, GitHub. Optional footer line: "To connect, please reach out on LinkedIn."
- Footer copyright line: "© 2026 Muhammad Jahanzeb Khan".

If the supplied design is a single-page layout, turn the pages above into sections with anchor links, and keep the CV button visible.

---

## 5. Content

All text below is approved for the site. You may shorten it to fit the design, but do not add new facts.

### 5.1 Identity

- **Name:** Muhammad Jahanzeb Khan
- **Short name he goes by:** Jahanzeb Khan (JK)
- **Title line:** Ph.D. Candidate in Computer Science, The University of Alabama
- **Advisor:** Dr. Ahmad Alsharif
- **Tagline (optional):** Security and trustworthiness of machine learning for connected and automated vehicles.

### 5.2 Short bio (Home page)

> I am a Ph.D. candidate in Computer Science at The University of Alabama, advised by Dr. Ahmad Alsharif. My research studies how machine learning systems in connected and automated vehicles fail under attack, and how to defend them. My dissertation, *Adversarial Threats and Defenses Across Trust Boundaries in Connected and Automated Vehicles*, covers adversarial attacks on traffic sign recognition, detection of poisoning in federated learning, and secure communication for electric vehicle charging.
>
> Before my Ph.D., I worked for five years as a software engineer in backend development, DevOps, and data engineering, including leading a cross-functional team. I hold an M.S. in Computer Science from the University of Nevada, Reno, an M.S. in Software Engineering from Shanghai Jiao Tong University, and a B.S. in Computer Science from NFC Institute of Engineering and Technology. I have taught undergraduate courses and mentored undergraduate researchers in NSF REU programs for four summers.
>
> I will complete my Ph.D. in Spring 2027.

### 5.3 Research interests

- Adversarial machine learning
- Security and robustness of federated learning
- Privacy-preserving AI and encrypted computation
- Applied cryptography and secure communication for connected vehicles and EV charging
- Security of LLM-based systems and agents
- Trustworthy AI for cyber-physical systems

### 5.4 News (Home page, newest first)

- 2026: Paper on KL-divergence poisoning detection for vehicular federated learning accepted at IEEE ITSC 2026 and shortlisted for the Best Paper Award.
- 2026: Demo on certificateless, non-interactive key establishment for secure EV charging presented at USENIX VehicleSec 2026, supported by a University of Alabama Graduate School Travel Grant.
- 2026: Paper on query-free adversarial malware generation with conditional diffusion at IEEE SATC 2026.
- 2026: Mentored an NSF REU project on adversarial patches against drone-based vehicle detection.
- 2024: Joined The University of Alabama as a Ph.D. student; completed M.S. in Computer Science at the University of Nevada, Reno.

### 5.5 Education

| Degree | Institution | Dates | Notes |
|---|---|---|---|
| Ph.D., Computer Science | The University of Alabama, Tuscaloosa, AL | May 2024 to Spring 2027 (expected) | Advisor: Dr. Ahmad Alsharif. Proposal defended; admitted to candidacy. |
| M.S., Computer Science | University of Nevada, Reno, NV | Jan 2022 to May 2024 | |
| M.S., Software Engineering | Shanghai Jiao Tong University, Shanghai, China | Sep 2017 to Dec 2019 | Chinese Government Scholarship (CSC) |
| B.S., Computer Science | NFC Institute of Engineering & Technology, Multan, Pakistan | Oct 2012 to Aug 2016 | Academic Excellence Award (2015) |

### 5.6 Research themes and project stories (Research page)

Write each as a short card: problem, what he did, where it stands.

1. **Poisoning defense for vehicular federated learning (first author).**
   Problem: in federated learning across vehicles, a few malicious clients can target safety-critical traffic sign classes. Common gradient filters missed this targeted attack on four safety-critical classes.
   What he did: designed a server-side defense that compares each client's predictions on a small probe set with symmetric KL divergence. Evaluated with MobileNetV2 on GTSRB, 10 clients, non-IID (Dirichlet) data, and benchmarked against cosine similarity, MAD, Wasserstein, and Mahalanobis defenses. A failure case on evenly split data was traced to the evaluation setup and resolved by evaluating under realistic heterogeneity.
   Status: IEEE ITSC 2026, Best Paper Award shortlist. A journal extension to stronger and adaptive attackers is in preparation.

2. **Secure EV charging communication.**
   Problem: the ISO 15118 charging handshake exposed a key in plaintext.
   What he did: implemented and validated certificateless, non-interactive key establishment based on identity-based cryptography on real charging hardware (QCA7000 powerline communication modems).
   Status: USENIX VehicleSec 2026 demo. A full paper on a plug-and-charge relay defense is in preparation.

3. **Adversarial attacks on vision and security models.**
   Evasion attacks on traffic sign recognition and on network traffic classifiers. Comparison of GAN and conditional denoising diffusion models for query-free adversarial malware generation (IEEE SATC 2026, third author).

4. **Adversarial patches against aerial vehicle detection (mentored and led).**
   An undergraduate NSF REU project he mentored and led: universal adversarial patches on car rooftops that hide vehicles from YOLO-based detection in aerial drone imagery (VisDrone), with segmentation masks keeping patches physically placeable. Co-mentored with Dr. Alsharif.

5. **Feature inversion and information leakage.**
   A modular pipeline that reconstructs inputs from CNN features and measures leakage with PSNR and SSIM, to quantify what learned representations retain.

6. **LLM security and deployment.**
   Deployed and ran Llama and Qwen open-weight models from 8B to 24B parameters. Built LLM applications with API integration, RAG, and agent pipelines. Explored how indirect prompt injection can manipulate an LLM-based malware triage pipeline (early, concept-level work).

7. **Privacy-preserving federated traffic prediction (mentored and led, 2025 REU).**
   Privacy-preserving federated learning for traffic flow prediction across roadside units, using multi-client functional encryption secure under DDH, with robust aggregation, gradient filtering, and quantization, under a semi-honest traffic management center and malicious roadside units.

8. **Model-decoupled federated learning (first author).**
   A framework that separates data management from model computation, working across neural architectures and database backends on a multi-node cluster. Started as a 2023 REU project at UNR.

9. **Privacy-preserving computation.**
   Encrypted inference on edge devices with CKKS homomorphic encryption (IEEE ICWS 2024); encrypted search over large image matrices with precision-preserving encryption (TechRxiv 2024).

10. **Federated learning for imaging.**
    Privacy-enhanced remote sensing image restoration with federated learning (IEEE ISDFS 2024); federated medical image classification (monkeypox) under non-IID clients (ACM SIGKDD FL4Data-Mining Workshop 2023).

11. **Electricity theft detection.**
    Privacy-preserving, ConvLSTM-based detection of electricity theft cyber-attacks in smart grids (IEEE Access 2024, second author).

12. **Earlier work.**
    Data provenance for classification and regression in distributed machine learning (SATE 2019); object detection boosting using object attributes (IEEE ICTAI 2019); QUBO formulation solved with quantum annealing; network anomaly detection with transfer learning.

### 5.7 Publications (Publications page)

Bold the owner's name in author lists if author lists are shown. If author lists are not available, show the role tag instead (First Author, Second Author, Third Author). Link each title to its Google Scholar or publisher page only if the owner provides the URL; otherwise leave unlinked and add a single "Full list on Google Scholar" link at the top.

**Journal articles**
1. Efficient and Privacy-Preserving ConvLSTM-based Detection of Electricity Theft Cyber-Attacks in Smart Grids. *IEEE Access*, 2024. Second author.

**Conference and symposium papers**
2. Mitigating Targeted Poisoning in Vehicular Federated Traffic Sign Classification via KL-Divergence Detection. *IEEE 29th International Conference on Intelligent Transportation Systems (ITSC)*, 2026. First author. **Best Paper Award shortlist.**
3. Demo: Certificateless and Non-Interactive Key Establishment for Secure CCS EV Charging. *4th USENIX Symposium on Vehicle Security and Privacy (VehicleSec)*, 2026. First author.
4. Query-Free Adversarial Malware Generation Using Conditional Denoising Diffusion. *IEEE International Conference on Secure and Trustworthy Computing (SATC)*, 2026. Third author.
5. Model-Decoupled Federated Learning: Exploring Database Adaptability and Neural Architectural Dynamics in Federated Learning. 2024. First author.
6. Privacy-Preserving Artificial Intelligence on Edge Devices: A Homomorphic Encryption Approach. *31st IEEE International Conference on Web Services (ICWS)*, 2024. First author.
7. Privacy-Enhanced Image Restoration in Remote Sensing via Federated Learning. *12th IEEE International Symposium on Digital Forensics and Security (ISDFS)*, 2024. First author.
8. Exploring the Efficacy of Data-Decoupled Federated Learning for Image Classification and Medical Imaging Analysis. *FL4Data-Mining Workshop, ACM SIGKDD*, 2023. First author.
9. Data Provenance Based System for Classification and Linear Regression in Distributed Machine Learning. *SATE Conference Proceedings*, 2019. First author.
10. Object Detection Boosting Using Object Attributes in Detect and Describe Framework. *IEEE 31st International Conference on Tools with Artificial Intelligence (ICTAI)*, 2019. First author.

**Preprints**
11. Advancing Privacy in Data Mining: Seamless Homomorphic Searches and Precision-Preserving Encryption. *TechRxiv*, 2024. First author.

**Manuscripts in preparation (3):** titles confidential.

### 5.8 Experience (Experience page)

**Research**
- **Graduate Research Assistant**, The University of Alabama, May 2024 to present. Security of machine learning for connected vehicles; secure EV charging communication; mentoring NSF REU students.
- **Graduate Research Assistant**, University of Nevada, Reno, Jan 2022 to May 2024. Federated learning, privacy-preserving machine learning, and encrypted computation; supported by NSF funding.

**Industry**
- **Backend Developer and Team Lead**, Pixarsart Studios (Plano, TX), Lahore, PK, Jan 2021 to Dec 2021. Led application development, REST API design, and deployment; led a cross-functional team spanning Android, mobile, frontend, and database engineering; wrote frontend code. Projects: DrivePoints (safest-route planning for trucks), Avosplay (watch movies together with video and audio calls), FlushApp (on-demand home services with tenant management and key access). Implemented user consent and App Tracking Transparency handling.
- **Backend and DevOps Engineer**, Meecube, Shanghai, China, Jan 2020 to Jan 2021. SafeRoutes trucking fleet platform (booking, scheduling, fleet assignment, Shanghai port authority connectivity, under government quality tests and security compliance). Flask microservices, ETL pipelines with Apache Airflow over PostgreSQL, database operations, Jenkins CI/CD and deployment automation. Maintained a fork of the open-source YApi API management platform.
- **Junior Data Scientist**, Block Dynamics, Shanghai, China, Sep 2019 to Jan 2020. Bitcoin and Ethereum transaction analysis for anti-money-laundering and anomaly classification.
- **Java Intern**, KSJ Cloud, Shanghai, China. Master data management system on PostgreSQL with a Java Spring Boot backend for a pharmaceutical client.
- **.NET Intern**, Wicresoft, Shanghai, China. C# application usage and monitoring tool within a larger system monitoring platform.
- **Associate Software Engineer**, TSCreators, Pakistan.

(The three earlier roles were between 2016 and 2019. Do not invent individual dates for them.)

### 5.9 Teaching and mentoring (Teaching page)

**Teaching**
- **Teaching Assistant**, University of Nevada, Reno: Database Management Systems (CS 457/657), Fall 2023 to Spring 2024; Testing and DevOps (CS 333), January 2022. Lab sessions, assignment support, grading, and office hours.
- **Part-time Lecturer**, Pakistan Institute of Engineering and Technology, Multan, Sep 2016 to Aug 2017: Database Management Systems and Programming (undergraduate).
- **Web Development Instructor**, Punjab Skill Development Fund, Oct 2016 to May 2017: taught web development to underprivileged learners aged 14 to 54 under a Government of Punjab contract.

**Mentoring (NSF REU Research Mentor, 2023 to 2026).** Do not name students.
- Summer 2026 (UA): adversarial patch attacks against drone-based vehicle detection.
- Summer 2025 (UA): privacy-preserving federated learning for traffic flow prediction.
- Summer 2024 (UA): poisoning detection in federated electricity theft detection.
- Summer 2023 (UNR): model-decoupled federated learning; resulted in a first-author publication.
- All four projects were completed; one former mentee went on to a software engineering internship.

**Teaching interests:** Programming, Database Systems, Software Engineering, Web Development, Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Information Technology; new courses in Security of Machine Learning and AI for Connected Systems.

### 5.10 Skills (optional section or page)

- **Languages:** Python, C, C++, Java, JavaScript, SQL, Bash, PowerShell, MATLAB, C#; brief work in Go
- **AI / ML:** PyTorch, TensorFlow, scikit-learn, Pandas; CNNs, YOLO, ConvLSTM, Vision Transformers, GANs, diffusion models, transfer learning, adversarial ML, distributed multi-GPU training
- **Federated learning:** Flower, FedML, PySyft, PyTorch FL, TensorFlow Federated
- **LLMs and agents:** Llama and Qwen deployment (8B to 24B), LLM APIs, RAG, agent pipelines, prompt engineering, Claude Code, MCP
- **Security and cryptography:** identity-based and certificateless cryptography, CKKS/BFV homomorphic encryption, functional encryption, differential privacy, ISO 15118, red teaming, Burp Suite, Wireshark
- **Systems and DevOps:** Linux, HPC clusters, RDMA, TCP/IP networking, Docker, Git, Jenkins, AWS, Google Cloud, Flask, REST APIs, microservices
- **Data engineering:** Apache Airflow, Spark, Kafka, RabbitMQ, Celery, Power BI
- **Databases:** PostgreSQL, MySQL, SQL Server, MongoDB, Apache Cassandra, Redis

### 5.11 Certifications

- Fundamentals of RDMA Programming, NVIDIA, June 2022
- The Bits and Bytes of Computer Networking, Coursera, July 2022
- Machine Learning with Python, Coursera, August 2022

Do not show credential IDs.

### 5.12 Honors and service

- Best Paper Award shortlist, IEEE ITSC 2026
- Graduate School Travel Grant, The University of Alabama (USENIX VehicleSec 2026), 2026
- 5th place, Capture the Flag challenge, UNR cybersecurity conference, 2023
- Chinese Government Scholarship (CSC), 2017
- Academic Excellence Award, NFC Institute of Engineering & Technology, 2015
- Reviewer: China Communications, ACM Transactions on Knowledge Discovery from Data (TKDD), IEEE ISDFS 2027, and other ACM and IEEE venues

---

## 6. Data files

Store content in data files so the owner can edit it without touching templates. For Jekyll, use `_data/`. For another generator, use its equivalent.

```
_data/
  profile.yml        # name, title, tagline, bio paragraphs, research interests, links
  news.yml           # list of {date, text}
  education.yml      # list of {degree, institution, location, dates, notes}
  publications.yml   # list of {title, venue, year, type, role, award, url}
  research.yml       # list of {title, problem, work, status, tags}
  experience.yml     # research and industry entries
  teaching.yml       # teaching roles, mentoring list, interests
  skills.yml         # grouped skills
  certifications.yml
  honors.yml
assets/
  cv/MuhammadJahanzebKhan_CV.pdf
  img/profile.jpg    # supplied by the owner; use a neutral placeholder until then
```

`profile.yml` links block must contain only:

```yaml
links:
  linkedin: https://www.linkedin.com/in/jahanxb-khan/
  scholar: https://scholar.google.com/citations?user=w1_pqnoAAAAJ
  github: https://github.com/jahanxb
cv_pdf: /assets/cv/MuhammadJahanzebKhan_CV.pdf
```

Do not add `email`, `phone`, or `location` keys, even if the theme expects them. If the theme requires them, remove or comment out the theme code that reads them.

---

## 7. CV PDF

- The owner supplies `MuhammadJahanzebKhan_CV.pdf` (a general CV with no email, phone, or address). Place it at `assets/cv/MuhammadJahanzebKhan_CV.pdf`.
- Link to it from the header or navbar ("CV (PDF)"), the Home page, and the CV page.
- Open the PDF in a new tab (`target="_blank" rel="noopener"`), and also offer a download attribute on the CV page.
- Do not regenerate or edit the PDF. If the owner later sends a new version, replace the file at the same path so links keep working.

---

## 8. Technical requirements

- **Hosting:** GitHub Pages from the `main` branch of `jahanxb/jahanxb.github.io`. If the supplied template needs a build step that GitHub Pages does not run natively, add a GitHub Actions workflow that builds and deploys to Pages.
- **Responsive:** must work from 360 px phone width to wide desktop, with no horizontal scrolling.
- **Accessibility:** semantic HTML, one `h1` per page, alt text on images, visible focus states, color contrast at WCAG AA, and icon links with accessible labels (for example `aria-label="LinkedIn profile"`).
- **Performance:** no large unused JavaScript; optimize the profile image (under 200 KB); lazy-load images below the fold.
- **SEO and sharing:**
  - Page titles like `Research | Muhammad Jahanzeb Khan`.
  - Meta description: "Muhammad Jahanzeb Khan, Ph.D. candidate in Computer Science at The University of Alabama, researching the security of machine learning for connected and automated vehicles."
  - Open Graph and Twitter card tags with the name, title line, and profile image.
  - JSON-LD `Person` schema with `name`, `jobTitle`, `affiliation` (The University of Alabama), and `sameAs` (the three profile links only). Do not include `email`, `telephone`, or `address`.
  - `sitemap.xml` and `robots.txt`.
- **Favicon:** simple initials "MJK" or the owner's supplied icon.
- **No third-party trackers** and no cookie banners unless the owner asks.

---

## 9. Build steps for Claude Code

1. Clone `jahanxb/jahanxb.github.io` (create it if it does not exist; it must be public for free GitHub Pages).
2. Wait for or apply the owner's supplied design or template.
3. Create the data files in Section 6 with the content from Section 5.
4. Build the pages in Section 4 using the supplied design, reading from the data files.
5. Add the CV PDF at `assets/cv/MuhammadJahanzebKhan_CV.pdf` and wire up every CV link.
6. Add SEO tags, JSON-LD, sitemap, robots, and favicon (Section 8).
7. Run the site locally (for Jekyll: `bundle exec jekyll serve`) and check every page at phone and desktop widths.
8. Run the privacy check in Section 2, item 6, on the built output.
9. Run the checklist in Section 10.
10. Commit with clear messages, push to `main`, and confirm the site is live at https://jahanxb.github.io.
11. Report back to the owner with the live URL and anything still needed (for example the profile photo or publication URLs).

---

## 10. Final checklist

- [ ] No email, phone, address, `mailto:`, or `tel:` anywhere in the site output, metadata, JSON-LD, or config.
- [ ] Only three external profile links: LinkedIn, Google Scholar, GitHub.
- [ ] "CV (PDF)" link visible on every page and opens `assets/cv/MuhammadJahanzebKhan_CV.pdf`.
- [ ] EV charging work says "implemented and validated", never "designed".
- [ ] Mentored projects say "mentored" or "mentored and led"; no student names.
- [ ] Pending manuscripts shown only as "Manuscripts in preparation (3): titles confidential."
- [ ] No grant numbers; NSF referred to as "NSF funding".
- [ ] No em dashes or dash punctuation in visible sentences.
- [ ] All pages responsive at 360 px; no horizontal scroll.
- [ ] Lighthouse accessibility score of 90 or above on Home.
- [ ] All internal links work; no 404s.
- [ ] Design matches the owner's supplied template.
