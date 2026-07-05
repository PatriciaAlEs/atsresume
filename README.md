# ProfileStack

ProfileStack is an open source tool for maintaining multiple CV variants from structured profile data.

It is not meant to be just another resume generator. The goal is to keep a professional profile maintainable over time, then adapt it into focused CV versions for different roles such as frontend, backend, mobile, product, data, QA, DevOps or marketing.

## Why ProfileStack

Most people do not have one single CV. They have one professional history that needs to be presented differently depending on the role.

ProfileStack helps you:

- Maintain several role-specific CV profiles in one project.
- Keep each profile as a simple `*.profile.js` data file.
- Switch between profiles from the UI.
- Edit and preview a clean one-page CV.
- Export the selected profile to PDF from the browser.
- Keep private local profiles out of Git.

## Credits

ProfileStack is a fork of [ATSResume](https://github.com/sauravhathi/atsresume), originally created by [Saurav Hathi](https://github.com/sauravhathi).

This version keeps the resume-builder foundation and evolves it toward a profile-variant workflow: multiple CVs, one maintainable structure, and role-specific positioning.

## Installation

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, usually:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Profile Files

Public demo profiles live in:

```text
src/data/profiles/
```

Each profile exports this structure:

```javascript
export default {
  id: "frontend",
  label: "Frontend",
  description: "Short description shown in the selector.",
  resume: {
    name: "Alex Morgan",
    position: "Frontend Developer",
    contactInformation: "+1 555 010 123",
    email: "alex.morgan@example.com",
    address: "Remote",
    profilePicture: "",
    socialMedia: [],
    summary: "",
    education: [],
    workExperience: [],
    projects: [],
    skills: [],
    languages: [],
    certifications: []
  }
}
```

The app automatically loads files matching:

```text
*.profile.js
```

## Create a New Profile

1. Create a new file in `src/data/profiles/`.
2. Name it with the profile target, for example:

```text
backend.profile.js
product-manager.profile.js
qa-engineer.profile.js
```

3. Export `{ id, label, description, resume }`.
4. Restart or refresh the app.

The new profile will appear in the selector without changing application logic.

## Private Local Profiles

If you want to keep real personal CVs locally without publishing them, use private profile files:

```text
src/data/profiles/my-real-cv.private.profile.js
```

Files matching `*.private.profile.js` are ignored by Git. They still match the app loader, so they can be used locally.

You can also store auxiliary private material in:

```text
src/data/private-profiles/
```

That folder is ignored by Git.

## Export to PDF

1. Run the app with `npm run dev`.
2. Select the profile you want to export.
3. Adjust the content in the editor if needed.
4. Use the print button.
5. Choose "Save as PDF" in your browser print dialog.

The preview is designed around a clean A4 layout.

## Philosophy

ProfileStack is built around a simple editorial idea:

> A CV should be written for a person, while remaining structured enough to pass automated filters.

Instead of stuffing one document with every possible keyword, ProfileStack encourages focused variants:

- A frontend CV can prioritize interface decisions and component architecture.
- A backend CV can prioritize APIs, data modeling and reliability.
- A mobile CV can prioritize app flows, offline data and maintainable UI state.

The same professional history can support different stories, as long as each version stays truthful and defensible.

## Current Demo Profiles

The repository includes fictitious demo profiles:

- `frontend.profile.js`
- `backend.profile.js`
- `mobile.profile.js`

They are examples only and should be replaced with your own professional data.

## License

MIT. See [LICENSE.md](./LICENSE.md).
