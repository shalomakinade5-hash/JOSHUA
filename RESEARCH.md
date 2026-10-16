# Research report: Joshua Tobi Ajagbe

**Research date:** 16 October 2026  
**Scope:** Public GitHub material and the profile/source URLs provided in the brief. LinkedIn and Medium page content were not accessible to the research tools during this review.

## Executive summary

The accessible GitHub profile identifies Joshua Tobi Ajagbe and describes him as a **Software Engineer**. The profile and repositories support a cautious portfolio focus on backend systems, developer tools, and document-grounded AI workflows. The clearest current project evidence is the public `askhr` repository. Other substantive examples include the Express Code Generator and the DSA Ninja package monorepo.

The employment, education, certification, teaching, and startup claims named as research leads in the brief could not be independently verified. They are not presented as established facts on the site. No employers, job titles, dates, impact metrics, or professional seniority are inferred from repository ownership.

The `pulsegraph` repository is a fork of `ueabu/PulseGraph`; it is not presented as Joshua's original work. The public SafePay repositories do not corroborate the brief's React/Flask description: the backend repository is a minimal Django project with SQLite and no payment model or payment-processing implementation visible in the inspected files. It is not described as a production payment platform.

## Verified professional identity

| Claim | Status | Evidence and limits |
|---|---|---|
| Public GitHub account is `Joepolymath`, with display name Joshua Tobi Ajagbe. | **VERIFIED** | [GitHub profile API](https://api.github.com/users/Joepolymath) returns that account and display name. |
| The profile's current short bio describes a “Software Engineer” and lists Go, Node.js, TypeScript, Python, and AI. | **VERIFIED as a self-description** | Same API response. This is a profile claim, not independent proof of proficiency. |
| A profile README describes backend engineering and lists Go, TypeScript, Python, and Rust among the languages Joshua writes. | **VERIFIED as a self-description; recency uncertain** | [Profile README](https://github.com/Joepolymath/Joepolymath/blob/main/README.md). It also contains older claims, so it is not treated as a current employment or skill record. |
| Current employer, current role beyond the general profile title, or career dates. | **UNCONFIRMED** | [LinkedIn profile](https://ng.linkedin.com/in/joshua-ajagbe) returned HTTP 999. No public CV or employer source was retrieved. |
| Public GitHub profile lists Abuja, Nigeria. | **VERIFIED as profile metadata** | [GitHub profile API](https://api.github.com/users/Joepolymath). The website does not need to publish this location. |
| Public email address. | **VERIFIED** | Profile README and public package manifests list `joshuaajagbe96@gmail.com`. The site uses it only as a contact method. |
| LinkedIn profile URL. | **VERIFIED as a provided/profile-linked URL; page contents inaccessible** | [LinkedIn profile](https://ng.linkedin.com/in/joshua-ajagbe). |

## Work experience timeline

No paid employment, contract, or internship entry could be verified from an accessible source. Therefore, **no employment timeline is published**. The website explains this omission and links to the profile so Joshua can confirm the entries before they are added.

| Category | Finding |
|---|---|
| Paid employment | **UNCONFIRMED** — titles, employers, dates, locations, responsibilities, outcomes, and current status could not be checked. |
| Contract work | **UNCONFIRMED** — no accessible source found. |
| Internships | **UNCONFIRMED** — no accessible source found. |
| Startup roles / co-founding | **UNCONFIRMED** — AOS and Awarome remain leads from the supplied brief only. |
| Teaching / volunteering | **UNCONFIRMED** — the profile README says Joshua is willing to help beginners, but this does not verify a teaching role or organization. |

## Project inventory

### AskHR

- **Status:** Development project; the README documents an end-to-end local setup, fictional sample company data, and environment variables. No production deployment or real customer use is documented.
- **What it does:** An internal HR knowledge chatbot. HR uploads policy and organization documents; employees ask questions and receive short answers grounded in retrieved document passages, with citations. The documented no-answer path directs employees to HR.
- **Documented implementation:** React + Vite + Tailwind frontend; FastAPI backend; PostgreSQL 16 with pgvector; Docker Compose; parsing, chunking, embeddings, cosine retrieval, streamed responses via server-sent events, and citations.
- **Engineering decisions documented:** Small provider interfaces instead of a RAG framework; deterministic fake providers for tests; asynchronous document ingestion; file validation; structure-aware chunking; document versioning and active/ready filtering.
- **Joshua's role:** **PARTIALLY VERIFIED.** The repository is original (GitHub API reports `fork: false`) and its first visible commit is authored under Joshua's account with the message “core engine and fe setup.” The available evidence does not describe the exact division or completeness of his contribution.
- **Sources:** [Repository](https://github.com/Joepolymath/askhr), [README](https://github.com/Joepolymath/askhr/blob/main/README.md), [backend tree](https://github.com/Joepolymath/askhr/tree/main/backend), [initial commit](https://github.com/Joepolymath/askhr/commit/6c7804d487ee29a3052507b060604d00b11f50e7).

### Express Code Generator

- **Status:** Public Node.js CLI package repository. The README documents `npx express-code-gen`; the package manifest reports version `1.0.2`. No adoption or usage metrics are claimed.
- **What it does:** The README describes an Express server scaffold. The inspected CLI implementation uses ShellJS to clone the separate [`baseNodeServer`](https://github.com/Joepolymath/baseNodeServer) starter into the current directory, initialize Git, remove the starter's `origin`, and run `yarn install`. The starter README identifies it as a Node.js/Express backend project.
- **Joshua's role:** **VERIFIED as named package author** by [`package.json`](https://github.com/Joepolymath/express-code-gen/blob/main/package.json). The repository history includes another contributor, so sole authorship is not claimed.
- **Testing:** The package's `test` script says no tests are specified and exits with an error. This is recorded here rather than implying test coverage.
- **Sources:** [Repository](https://github.com/Joepolymath/express-code-gen), [README](https://github.com/Joepolymath/express-code-gen/blob/main/README.md), [package manifest](https://github.com/Joepolymath/express-code-gen/blob/main/package.json), [CLI implementation](https://github.com/Joepolymath/express-code-gen/blob/main/lib/index.js), [starter repository](https://github.com/Joepolymath/baseNodeServer), [starter README](https://github.com/Joepolymath/baseNodeServer/blob/main/README.md).

### DSA Ninja

- **Status:** Original public monorepo (`fork: false`) containing JavaScript/TypeScript packages; no current maintenance or adoption claim is made.
- **What it contains:** `searchy`, `sortify`, and `structify` packages. Package manifests include TypeScript build scripts and Jest test commands; `structify` describes reusable JavaScript data structures.
- **Joshua's role:** **PARTIALLY VERIFIED.** Public commits are authored under the `Joepolymath` account, and the `structify` package manifest names `Joepolymath` as its author. This does not establish that every package or line was exclusively written by Joshua.
- **Sources:** [Repository](https://github.com/Joepolymath/dsa-ninja), [workspace manifest](https://github.com/Joepolymath/dsa-ninja/blob/main/package.json), [structify manifest](https://github.com/Joepolymath/dsa-ninja/blob/main/packages/structify/package.json), [searchy manifest](https://github.com/Joepolymath/dsa-ninja/blob/main/packages/searchy/package.json).

### SafePay

- **Status:** Early project / prototype evidence only. It is not represented as production payment software.
- **What the inspected code supports:** The `safepay` backend repository contains a Django 3.2 project using SQLite. Its `finance` app has an empty models file and a view that renders a template. A separate `safepay-frontend` repository contains static HTML and Bootstrap assets; its README describes it as “instantdeposit” and links to a GitHub Pages URL.
- **Contribution and workflow limits:** Account-owned repositories are not by themselves proof of exact contribution. The inspected backend code does not demonstrate payment processing, payment integrations, or persisted financial workflows. No live service was verified.
- **Conflict with the supplied lead:** The brief attributes React and Flask to SafePay, but the inspected public repositories show Django and a static Bootstrap frontend. This discrepancy needs Joshua's clarification before any more specific claim is made.
- **Sources:** [Backend repository](https://github.com/Joepolymath/safepay), [Django settings](https://github.com/Joepolymath/safepay/blob/main/safePay/settings.py), [finance view](https://github.com/Joepolymath/safepay/blob/main/finance/views.py), [frontend repository](https://github.com/Joepolymath/safepay-frontend), [frontend README](https://github.com/Joepolymath/safepay-frontend/blob/main/README.md).

### Additional repositories inspected

| Repository | Evidence / classification | Portfolio treatment |
|---|---|---|
| [ts-dsa](https://github.com/Joepolymath/ts-dsa) | Original repository with `algos`, `dataStructures`, `techniques`, and Jest test directories. No README, description, or role details were available. | Not featured; public source shows TypeScript/DSA work, but project purpose and contribution scope are sparse. |
| [snakePlateau](https://github.com/Joepolymath/snakePlateau) | README identifies a basic Python/Turtle Snake game made during a Code Plateau 2.0 tutorial class. It describes the work as a class project. | Classified as a tutorial exercise, not professional experience. |
| [pulsegraph](https://github.com/Joepolymath/pulsegraph) | GitHub API explicitly reports a fork; its parent is [`ueabu/PulseGraph`](https://github.com/ueabu/PulseGraph). | Excluded as Joshua's original project. |
| [baseNodeServer](https://github.com/Joepolymath/baseNodeServer) | Original Node.js/Express starter described in its README; the Express Code Generator CLI clones this repository. | Mentioned as the scaffold source, not represented as a separate featured case study. |
| [askhr](https://github.com/Joepolymath/askhr) | Original repository, detailed architecture README, FastAPI/backend and React/frontend structure, tests and local setup documented. Retrieval source and tests were also inspected. | Featured, with a qualification about contribution scope and prototype status. |
| [AOS](https://www.github.com/Joepolymath) | No matching public repository was found in the inspected account repository search. LinkedIn lead could not be checked. | Not included; purpose, role, stack, users, and status are **UNCONFIRMED**. |
| Awarome | Public repository search surfaced an `Awarome-Limited/awarome-admin` repository, but no reliable link to Joshua was established. | Not included; Joshua's role, product, stack, and status are **UNCONFIRMED**. |

## GitHub repository analysis

The GitHub profile API returned the public account name, bio, and repository list. Selected repositories and files were inspected rather than treating repository count as evidence of skill. The profile advertises 209 public repositories at the time of access; this number is intentionally not used as a portfolio claim.

The highest-confidence original-work evidence is the AskHR commit authored as `Joepolymath`, package-author metadata for Express Code Generator and DSA Ninja's `structify`, and DSA Ninja commits associated with the account. Express Code Generator also has visible contributions by another account. The `pulsegraph` fork is identified as a fork and is not attributed as original work.

No download counts, adoption, users, performance results, revenue, or business outcomes were verified.

## Technical skills and evidence

### Demonstrated in project documentation or source

| Area | Technologies / practices | Supporting evidence |
|---|---|---|
| Backend and API development | Python, FastAPI, Node.js, Express | AskHR README, backend source tree and API module; Express Code Generator README and CLI/package files; baseNodeServer README. |
| Frontend | React, Vite, Tailwind CSS | AskHR architecture and README. |
| Data | PostgreSQL, pgvector, SQL | AskHR README documents document/chunk storage and vector search. |
| AI application patterns | RAG, embeddings, source citations, provider interfaces, streamed chat | AskHR README; repository describes OpenAI/Anthropic configuration and a fake provider for tests. |
| Developer tooling | JavaScript CLI, npm package metadata, Express scaffolding | Express Code Generator repository and package manifest. |
| TypeScript and testing | TypeScript, Jest, package-oriented builds | DSA Ninja manifests, package layout, and test directories; ts-dsa manifest and test tree. |
| Containers and quality | Docker Compose, pytest, deterministic test providers | AskHR README and Docker Compose setup instructions. |

### Self-reported, not used as project-backed skill claims

The GitHub profile bio/README mentions Go, Node.js, TypeScript, Python, Rust, AI, JavaScript tooling, frontend/backend, and several hosting tools. Some overlap with inspected repositories; the rest have not all been independently demonstrated by the projects selected for this portfolio.

## Education and certifications

**UNCONFIRMED.** The supplied brief names Federal University of Technology, Minna, 2013–2018, a second-class upper result, and several training certificates. LinkedIn was inaccessible and no certificate or institutional page was retrieved. None of these claims is displayed on the site. Joshua should confirm institution, qualification, dates, result, credential names, and public links before publication.

## Volunteer work and community

**UNCONFIRMED.** Code Plateau / nHub and Yenbyen Fellowship teaching are leads from the supplied brief. The inspected GitHub README expresses willingness to help beginners, but that statement does not verify a formal volunteer role, organization, dates, or curriculum. No role is displayed.

## Writing and public professional activity

- The GitHub profile README links to **“Choosing Between Embedded Documents and Referenced Documents in MongoDB”** at [Medium](https://medium.com/@joshuaajagbe96/choosing-between-embedded-documents-and-referenced-documents-in-mongodb-99bedfcdc76d). The title and link are verified from that README. Medium returned HTTP 403 to the research tool, so publication date and full article contents were not checked.
- No additional articles, talks, or public professional posts were verified in this review.

## Source access and confidence

| Source | Result |
|---|---|
| [GitHub user API](https://api.github.com/users/Joepolymath) | Accessible; identity and profile metadata verified as profile-provided facts. |
| [GitHub profile README](https://github.com/Joepolymath/Joepolymath/blob/main/README.md) | Accessible via GitHub content API; self-description, social links, public email, and one Medium article link verified. |
| [LinkedIn profile](https://ng.linkedin.com/in/joshua-ajagbe) | Inaccessible; returned HTTP 999. No hidden information was sought or bypassed. |
| Google web search pages | Returned only a generic “Google Search” page; no usable search results were obtained. |
| [Medium article](https://medium.com/@joshuaajagbe96/choosing-between-embedded-documents-and-referenced-documents-in-mongodb-99bedfcdc76d) | Inaccessible to the fetch tool; returned HTTP 403. |
| Public GitHub repositories | Repository trees, selected READMEs, manifests, source files, and commit history were available through GitHub APIs/content tools. |

## Unresolved questions for Joshua

1. What are the exact current and previous employers, job titles, dates, locations, responsibilities, and outcomes that may be published?
2. What was Joshua's specific role and contribution scope in AskHR, AOS, SafePay, and Awarome? Which are paid work, personal projects, co-founded products, or prototypes?
3. For AOS, is there a public product page, repository, demo, or other source that confirms its real functionality and status?
4. For Awarome, which public organization/repository/site belongs to the project, and what was Joshua's role?
5. Can the SafePay LinkedIn stack discrepancy (React/Flask versus the public Django/static Bootstrap repositories) be resolved? Was another repository or implementation involved?
6. What education, qualification, dates, result, and certificates should be included, and which credentials have public verification links?
7. What were the dates, organizations, volunteer status, and responsibilities for Code Plateau / nHub and Yenbyen Fellowship?
8. Is the Medium article still live, and what is its publication date?
9. Are there additional public articles, talks, current contact preferences, or live project demos Joshua wants linked?

## Portfolio positioning

**Working headline:** “I build software that makes sense.”  
**Supporting description:** “Backend systems, developer tools, and AI-assisted products—with careful attention to how the pieces work together.”

This avoids asserting an unverified seniority level or current specialty while reflecting the current profile title and the strongest documented repository evidence.
