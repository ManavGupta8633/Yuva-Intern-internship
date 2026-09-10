# Week 5 Technical Report: Developing a Single Page Application

## Project Title

**NexaHub – Student Innovation Platform**

## Introduction

During the fifth and final week of my internship, I developed a small-scale Single Page Application (SPA) called **NexaHub**. Unlike the previous websites I created, this project focused mainly on understanding how a web application can change its content without reloading the complete webpage. The purpose was to combine HTML, CSS and JavaScript into one working application and understand the basic concepts behind modern frontend applications.

## Project Planning

I planned NexaHub as a student-focused platform where users can explore projects, check upcoming events, learn about the platform and contact the team. The application contains Home, Explore, Events, About and Contact sections. I decided to keep a single `index.html` file and use JavaScript to dynamically generate the content inside the main application container.

## Implementation

The main SPA functionality was implemented using JavaScript. I created a simple routing system where each route is connected to a JavaScript rendering function. For example, when the user selects the Explore page, the URL changes to `#/explore` and JavaScript replaces the existing content without loading another HTML file.

I also used browser history features such as `pushState()` and `popstate` so that browser navigation works correctly. This was one of the most important parts of the task because the Back and Forward buttons should still work naturally in an SPA.

The Explore section contains dynamically generated project cards and a search feature. The Events section also generates event information from JavaScript data. I added a Contact form with basic validation and a custom 404 page for invalid routes.

## Dark and Light Theme

One additional feature I implemented was a **dark/light theme switcher**. Users can change the website theme using the button in the navigation bar. The selected theme is stored in `localStorage`, so the preference remains available even after refreshing the page. The application can also use the user's system color preference when no theme has previously been selected.

## Challenges Faced

The most challenging part was understanding how to update the page content without accidentally refreshing the whole website. Initially, it was easy to create separate pages, but an SPA requires a different approach. I solved this by keeping one main application container and creating separate JavaScript rendering functions for each route.

Another issue was making browser Back and Forward navigation work correctly. Using the `popstate` event helped me detect these changes and render the appropriate section again.

## Testing

I tested the navigation links, browser Back and Forward buttons, invalid URLs, mobile navigation, theme switching, project search and contact form. I also checked the website at different screen sizes to make sure the layout remained usable on mobile devices.

## Conclusion

This project helped me understand the basic architecture of a Single Page Application and how JavaScript can control both the DOM and browser navigation. I learned about client-side routing, dynamic content generation, browser history, state management and localStorage. Adding the dark/light theme also gave me practical experience with maintaining UI state. Overall, this final task brought together many of the HTML, CSS and JavaScript concepts I worked on during the internship and gave me a better understanding of how modern interactive websites are structured.
