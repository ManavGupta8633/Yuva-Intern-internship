# Week 4 Report: Enhancing Web Page Performance and Accessibility

During the fourth week of my internship, I worked on improving the **CodeFlow website that I developed in Week 3**. Instead of creating a completely new webpage, I focused on making the existing website faster, cleaner, and easier to use for different types of users. The main goal of this week was to understand how performance and accessibility affect the overall user experience.

I started by checking the existing HTML structure and found some areas where accessibility could be improved. I changed the page to use more meaningful semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`. I also added a **skip-to-content link**, which allows keyboard users to directly move to the main content without going through the complete navigation menu. Proper labels were added to form fields so that screen readers can understand what each input is used for.

I also worked on ARIA attributes for interactive elements. For example, the mobile navigation button now uses `aria-expanded` and `aria-controls`, while the FAQ section updates its ARIA state when questions are opened or closed. I added visible keyboard focus styles using `:focus-visible`, making it easier to identify the currently selected element when navigating without a mouse.

For performance, I tried to keep the CSS simple and avoid unnecessary repetition by using CSS variables for commonly used colors and values. I also used the `defer` attribute when loading JavaScript so that the HTML content can load without being blocked by the script. The JavaScript was also cleaned up by caching frequently used elements and using passive scroll listeners where appropriate.

Another improvement was support for users who prefer reduced motion. I added a `prefers-reduced-motion` media query so that unnecessary animations can be reduced or disabled for those users.

While testing the website, I used browser developer tools to check the layout, keyboard navigation, console errors, and general loading behavior. This week helped me understand that a good website is not only about its appearance and functionality. It should also be accessible, efficient, and comfortable to use for as many people as possible.

Overall, Week 4 helped me improve the CodeFlow project from a basic interactive website into a more polished and accessible webpage. I also gained a better understanding of semantic HTML, ARIA attributes, keyboard accessibility, optimized CSS, and basic web performance practices.
