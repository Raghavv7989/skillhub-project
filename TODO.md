# TODO - SkillHub “fix CSS + functionalities”

## Step 1 — Frontend CSS-first refresh
- [x] Expand `frontend/src/index.css` into a cohesive design system (variables, layout, forms, buttons, cards)

- [x] Replace major inline styles with class-based styling in:
  - [x] `components/Navbar.jsx`
  - [x] `components/Sidebar.jsx`
  - [x] `components/Hero.jsx`
  - [x] `components/Footer.jsx`
  - [x] `components/CourseCard.jsx`
  - [x] `pages/Home.jsx`
  - [x] `pages/Courses.jsx`
  - [x] `pages/Contact.jsx`
  - [x] `pages/AddCourse.jsx`


## Step 2 — Theme wiring
- [x] Wire `ThemeContext` into `frontend/src/App.jsx` (apply `data-theme` to document)
- [x] Add theme toggle to `components/Navbar.jsx`
- [x] Add dark/light theme variables to `frontend/src/index.css`


## Step 3 — Frontend functionality polish
- [x] Add loading/disabled states for course fetching and adding
- [x] Make error messages consistent


## Step 4 — Backend validation & error handling
- [x] Add input validation for course creation (`controllers/courseController.js`)
- [x] Add input validation for contact creation (`controllers/contactController.js`)
- [x] Add centralized error handler middleware in `backend/server.js`



## Step 5 — Verification
- [x] Run backend + frontend dev servers
- [x] Confirm all routes render correctly
- [x] Confirm POST /api/courses and POST /api/contact work

- [x] Confirm project builds cleanly



