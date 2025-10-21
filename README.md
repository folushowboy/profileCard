# Stage 0: Testable Profile Card

This project is a small, accessible, and responsive **Profile Card** built with **HTML**, **CSS**, and **JavaScript**.  
It follows semantic HTML standards and includes `data-testid` attributes for automated testing.

---

## Features

- Semantic and accessible markup (`<article>`, `<header>`, `<section>`, `<nav>`, etc.)
- Displays:
  - User name — `data-testid="test-user-name"`
  - Bio — `data-testid="test-user-bio"`
  - Current time (milliseconds) — `data-testid="test-user-time"`
  - Avatar image — `data-testid="test-user-avatar"`
  - Social links — `data-testid="test-user-social-links"`
  - Hobbies — `data-testid="test-user-hobbies"`
  - Dislikes — `data-testid="test-user-dislikes"`
- Keyboard-focusable links and buttons
- Responsive layout for mobile, tablet, and desktop
- Uses Flexbox/Grid for clean alignment

---

## Tech Stack

- HTML5
- CSS3 (Flexbox & responsive design)
- JavaScript (ES6)

---

## How to Run Locally

1. Clone the repository
2. Navigate into the project folder
3. Open the project in your browser
4. Find and open the index.html file directly in your browser

## Tests & Notes

1. All elements include correct data-testid attributes.
2. The displayed time updates based on Date.now() in milliseconds.
3. Social links open in a new tab
4. Keyboard navigation is supported:
5. Text content wraps correctly





# Stage 0: Contact Us page with form validation

# Contact Us Page

This is a simple, accessible **Contact Us page** built using **HTML, CSS, and vanilla JavaScript**.  
It includes client-side form validation, clear accessibility labels, and responsive design.

---

## Features

- Semantic and accessible HTML structure
- Keyboard accessible (Tab, Shift+Tab, Enter all work properly)
- Real-time form validation for required fields
- Email format validation (name@example.com)
- Displays error messages with `aria-describedby` for screen readers
- Success message displayed after valid submission
- Responsive layout for mobile, tablet, and desktop screens

---

## Required Fields (with data-testid)

| Field           | Data Test ID                                                    |
| --------------- | --------------------------------------------------------------- |
| Full Name       | `test-contact-name`                                             |
| Email           | `test-contact-email`                                            |
| Subject         | `test-contact-subject`                                          |
| Message         | `test-contact-message`                                          |
| Submit Button   | `test-contact-submit`                                           |
| Error Messages  | `test-contact-error-<field>` (e.g., `test-contact-error-email`) |
| Success Message | `test-contact-success`                                          |

---

## Validation Rules

- All fields are **required**
- Email must be **valid** (e.g. `name@example.com`)
- Message must be at least **10 characters**
- On success → show a confirmation message
- On failure → show an error tied to each input via `aria-describedby`

---

## Accessibility

- Each input has a `<label>` linked with the `for` attribute
- Error messages are tied to inputs using `aria-describedby`
- Fully keyboard accessible (no mouse needed)
- Clear focus outlines for all focusable elements

---

## How to Run Locally

1. Clone the repository
2. Navigate into the project folder
3. Open the project in your browser
4. Find and open the index.html file directly in your browser


 ## Tests / Notes

1. Manually test validation by:
2. Leaving fields empty (should show an error)
3. Entering invalid email formats
4. Typing a short message (<10 chars)
5. Try tabbing through fields to ensure keyboard focus works.
6. Check responsive behavior on mobile view.




# About Me Page

This project is a reflective **About Me Page** built using **semantic HTML and responsive CSS**.  
It demonstrates accessible structure and organization of personal reflections for the **Frontend Wizards Stage 0 Task**.

---

## Required Sections (with data-testid)

| Section                 | Data Test ID             |
| ----------------------- | ------------------------ |
| Bio                     | `test-about-bio`         |
| Goals in this program   | `test-about-goals`       |
| Areas of low confidence | `test-about-confidence`  |
| Note to future self     | `test-about-future-note` |
| Extra thoughts          | `test-about-extra`       |

---

## Structure

- Wrapped in `<main data-testid="test-about-page">`
- Each section uses a `<section>` tag
- Clear headings (`<h2>` / `<h3>`) for each section
- Accessible layout (readable on all screen sizes)

---

## Features

- Semantic HTML for meaning and accessibility
- Fully responsive design using Flexbox / CSS Grid
- Easy-to-read and visually balanced layout
- Keyboard and screen reader accessible

---

## How to Run Locally

1. Clone the repository
2. Navigate into the project folder
3. Open the project in your browser
4. Find and open the index.html file directly in your browser

## Tests / Notes

1. Verify that each section with the required data-testid exists.
2. Check layout on mobile, tablet, and desktop screens.
3. Ensure headings are in proper hierarchy (h1 → h2 → h3).
4. Use Tab to navigate and confirm readable focus order.
