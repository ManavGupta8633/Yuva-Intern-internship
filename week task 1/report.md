# Week 1 Task Report

## Transforming Wireframes into Static Web Pages

### 1. Introduction

The objective of this task was to transform a wireframe-based design concept into a functional and responsive static webpage using HTML and CSS.

The webpage was developed with a focus on clean structure, visual hierarchy, responsive design, and maintainable CSS organization.

### 2. Technologies Used

* HTML5
* CSS3
* Google Fonts
* CSS Media Queries
* Flexbox
* CSS Grid

### 3. HTML Structure

Semantic HTML5 elements were used to organize the webpage.

The main structure includes:

* `<header>` – Contains the website logo and navigation menu.
* `<nav>` – Provides navigation links.
* `<main>` – Contains the primary webpage content.
* `<section>` – Separates major content areas.
* `<article>` – Represents individual service cards.
* `<footer>` – Contains copyright information and additional navigation.

This structure improves readability, accessibility, and maintainability.

### 4. Layout Strategy

The webpage was divided into several major sections:

1. Header and navigation
2. Hero section
3. About section
4. Services section
5. Contact section
6. Footer

CSS Grid was primarily used for larger content layouts, such as the hero section and card grids. Flexbox was used for navigation, buttons, and smaller alignment requirements.

### 5. Design Decisions

A minimal and modern visual style was selected.

The design uses:

* A clean white background
* Purple as the primary accent color
* Dark text for strong readability
* Rounded cards and buttons
* Consistent spacing
* Modern typography using the Poppins font

The use of a limited color palette keeps the interface visually consistent.

### 6. Responsive Design

Responsive design was implemented using CSS media queries.

Three primary layout states were considered:

#### Desktop

On large screens, the hero section uses a two-column layout and the cards are displayed in multiple columns.

#### Tablet

On medium-sized screens, the hero content changes to a single-column layout while cards are arranged into two columns.

#### Mobile

On small screens:

* Navigation links are hidden.
* Content changes to a single-column layout.
* Buttons become full-width.
* Cards stack vertically.
* Footer content is vertically aligned.
* Font sizes and spacing are reduced where necessary.

This ensures that the webpage remains usable across different screen sizes.

### 7. Challenges Encountered

#### Challenge 1: Maintaining Consistent Spacing

Different sections required different amounts of spacing while maintaining a consistent visual rhythm.

**Solution:**
Reusable CSS classes such as `.container` and `.section` were created to maintain consistent widths and vertical spacing.

#### Challenge 2: Responsive Layout

A desktop layout can become difficult to use on smaller screens if fixed dimensions are used.

**Solution:**
CSS Grid, Flexbox, relative widths, `clamp()`, and media queries were used to create flexible layouts.

#### Challenge 3: Maintaining Visual Hierarchy

The webpage contains multiple sections and elements that need to have different levels of importance.

**Solution:**
Different font sizes, font weights, spacing, and accent colors were used to establish a clear hierarchy.

### 8. Testing

The webpage should be tested at multiple viewport sizes, including:

* Desktop: 1920 × 1080
* Laptop: 1366 × 768
* Tablet: approximately 768 × 1024
* Mobile: approximately 375 × 667

The layout was designed to adapt automatically using responsive CSS rules.

### 9. Code Organization

The CSS file is divided into logical sections:

1. Reset and global styles
2. Header
3. Hero section
4. Hero mockup
5. Section headings
6. About section
7. Services
8. Contact
9. Footer
10. Tablet responsiveness
11. Mobile responsiveness

This organization makes the stylesheet easier to understand and modify.

### 10. Conclusion

The Week 1 task provided practical experience in converting a design concept into a functional webpage.

The implementation demonstrates semantic HTML, organized CSS, responsive layouts, Flexbox, CSS Grid, media queries, and basic UI design principles.

The project establishes a strong foundation for future frontend development tasks involving more complex interfaces and interactive functionality.
