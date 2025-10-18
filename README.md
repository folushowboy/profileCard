# Frontend Wizards — Stage 0: Testable Profile Card

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