# Week 2 Task Report

## Implementation of Responsive Web Design

### 1. Introduction

During the second week of my internship, I worked on implementing a responsive website using HTML and CSS. The main purpose of this task was to understand how a website can automatically adjust its layout according to the size of the user's screen. The website was designed to work properly on desktops, tablets, and mobile phones.

### 2. Technologies Used

The following technologies were used in this task:

* HTML5
* CSS3
* CSS Media Queries
* Flexbox
* CSS Grid
* Google Fonts

### 3. Website Structure

I created the webpage using semantic HTML elements to keep the code organized. The website contains a header with navigation, a hero section, an about section, a responsive features section, services, contact area, and footer.

The main sections are:

1. Header and Navigation
2. Hero Section
3. About Section
4. Responsive Features
5. Services
6. Contact Section
7. Footer

Using separate sections made it easier to manage the content and apply different styles to each part of the webpage.

### 4. Responsive Design Approach

The main focus of this week's task was responsiveness. Instead of creating separate webpages for different devices, I used CSS media queries to change the layout according to the screen width.

On desktop screens, the hero section is displayed in two columns, while the service section uses four columns. When the screen becomes smaller, these layouts automatically change to fewer columns.

For tablets, the hero section changes into a single-column layout and the service cards are displayed in two columns. On mobile devices, most of the content is displayed in a single column so that it is easier to read and navigate.

### 5. Use of CSS Media Queries

I used multiple media queries at different breakpoints:

* `900px` – Tablet and smaller desktop layouts
* `750px` – Smaller tablet layouts
* `600px` – Mobile layout
* `400px` – Very small mobile screens

These breakpoints were used to change font sizes, column layouts, spacing, button sizes, navigation, and other elements.

### 6. Flexible Layout

CSS Grid was used for sections such as the services and about cards. Flexbox was mainly used for navigation, buttons, footer alignment, and smaller components.

Instead of depending completely on fixed widths, I used relative sizing such as percentages, `min()`, and `clamp()`. This helped the elements adjust better when the screen size changed.

### 7. Responsive Typography

Font sizes were also adjusted according to the screen size. For example, the main heading uses the CSS `clamp()` function on larger screens and different sizes are applied through media queries on smaller screens.

This prevents the heading from becoming too large on mobile devices and keeps the content readable.

### 8. Fluid Elements

The website was designed so that elements do not unnecessarily overflow the screen. The container uses a flexible width and images are given a maximum width of 100%.

This makes the content more adaptable and helps prevent horizontal scrolling on smaller devices.

### 9. Testing

I tested the webpage using browser developer tools and different viewport sizes. The main screen sizes considered were:

* Desktop – 1920 × 1080
* Laptop – 1366 × 768
* Tablet – 768 × 1024
* Mobile – 375 × 667
* Small Mobile – 360 × 640

During testing, I checked the navigation, headings, buttons, cards, spacing, and overall alignment at different screen widths.

### 10. Challenges Faced

One of the main challenges was making sure that the layout looked balanced on both large and small screens. A layout that looked good on a desktop sometimes required changes when viewed on a mobile device.

Another issue was handling the service cards and feature section on smaller screens. If the same desktop layout was kept on mobile, the content became too narrow.

To solve this, I used CSS Grid and media queries to reduce the number of columns as the screen became smaller. I also changed the spacing and font sizes for mobile devices.

### 11. Learning Outcomes

This task helped me understand responsive web design in a more practical way. I learned how media queries can be used to create different layouts for different devices. I also gained more experience with Flexbox, CSS Grid, flexible widths, responsive typography, and browser developer tools.

I understood that responsive design is not just about making a webpage smaller. The complete layout sometimes needs to change depending on the available screen space.

### 12. Conclusion

Overall, Week 2 was a useful practical experience in frontend development. I was able to create a webpage that adapts to different screen sizes without creating separate versions for each device.

The task improved my understanding of responsive layouts and taught me how to identify and fix design problems that occur when a website is viewed on different devices. The knowledge gained from this task will also be useful for creating more complex and user-friendly websites in future internship tasks.
