# AI Prep Hub Prototype

## Overview

AI Prep Hub is a prototype web application designed to help engineers prepare for applying and interviewing at early-stage AI startups backed by Y Combinator (YC). The platform focuses on two main stages:

1. **Stage 1: Applying** - Tailor resumes and craft personalized emails to maximize chances of getting an interview.
2. **Stage 2: Interviewing** - Browse AI-generated job postings, select roles, and practice mock interviews with flexible modes (text or audio), followed by feedback and actionable steps.

This is a **non-functional prototype** built purely for UI demonstration and idea validation. It uses dummy data, placeholders, and static interactions (e.g., modals and toggles) to simulate the user experience. No real AI, backend, or data persistence is implemented—it's meant for sharing with potential users to gather feedback on the vision.

The UI is simple, intuitive, and user-friendly, allowing users to "open and start preparing" with minimal friction. It's responsive for desktop and mobile, with a clean blue/gray color scheme.

## Features (Simulated in Prototype)

- **Navigation**: Top bar with links to Home, Stage 1 (Resume Builder, Email Crafter), Stage 2 (Job Listings, Mock Room), and Dashboard. Sidebar for quick access on wider screens.
- **Home Page**: Landing hero with stage overviews and a "Get Started" button.
- **Dashboard**: Progress metrics, quick-start buttons, and tabs for stage-specific views.
- **Resume Builder**: Upload resume/job link, generate tailored preview (dummy modal).
- **Email Crafter**: Input job details, generate email (dummy preview).
- **Job Listings**: Searchable list of dummy AI-generated job postings (card-based, like LinkedIn/YC), with details modal and "Start Interview" button.
- **Mock Room**: Simulate interviews for selected jobs with mode toggles (text chat or audio placeholders), end with feedback modal (accordion for strengths/improvements/actionable steps).
- **General**: Modals for previews/feedback, tables for history, skeletons for loading states—all dummy.

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (e.g., Buttons, Cards, Modals, Tabs, Accordions, Toggles)
- **Icons**: Lucide-react (integrated via Shadcn)
- No additional dependencies beyond setup; keeps it lightweight.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ai-prep-hub-prototype.git
   cd ai-prep-hub-prototype
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Note: If Shadcn UI components need re-initialization, run `npx shadcn-ui@latest add [component-name]` as needed.

## Usage

- Navigate through pages via the top bar or sidebar.
- Interact with forms and buttons—they trigger dummy modals or UI updates (no real functionality).
- Use this prototype to demo the app's flow: e.g., go to Job Listings, "view" a job, start a mock interview, switch modes, and "end" for feedback.
- Share the running app or screenshots/videos with potential users for feedback on usability and features.

Since it's a prototype, expect static content—customize dummy text in the code if needed for presentations.

## Project Structure

- `/app`: Next.js pages (e.g., `page.tsx` for Home, `dashboard/page.tsx`, etc.)
- `/components`: Reusable Shadcn-based components (e.g., nav bar, modals)
- `/lib`: Utility functions (if any)
- `/public`: Static assets (e.g., icons, placeholders)

## Contributing

This is a prototype for validation. If you'd like to contribute UI improvements or dummy enhancements:
1. Fork the repo.
2. Create a feature branch.
3. Commit changes.
4. Open a pull request.

Feedback on the idea is welcome—open an issue to discuss!

## License

MIT License. Feel free to use and modify for non-commercial purposes. See [LICENSE](LICENSE) for details.

---

Built on August 02, 2025. For questions, contact [your-email@example.com].