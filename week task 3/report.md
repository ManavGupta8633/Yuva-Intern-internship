# Week 3 Task Report

## Integrating JavaScript for Interactive User Experience

### 1. Introduction

During the third week of my internship, I worked on adding JavaScript functionality to a static webpage. In the previous tasks, I mainly focused on creating the webpage structure and making it responsive. This week, my main focus was to make the website more interactive so that it could respond to different actions performed by the user.

I used HTML for the structure, CSS for the design, and JavaScript to control the interactive parts of the website.

### 2. Technologies Used

The technologies used in this task were:

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Event Listeners
* Local Storage
* CSS Flexbox and Grid

### 3. Website Structure

I created a website called **CodeFlow** with a dark technology-based design and orange as the main accent colour.

The website contains:

1. Header and navigation
2. Hero section
3. Statistics section
4. JavaScript features section
5. FAQ section
6. Contact form
7. Footer

I used semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer` to keep the structure organized.

### 4. JavaScript Features

The main purpose of this task was to add interaction using JavaScript. I implemented several features instead of keeping the page completely static.

The first feature was a mobile navigation menu. When the menu button is clicked, JavaScript adds or removes a CSS class and changes the menu icon. The menu also closes automatically when a navigation link is selected.

I also added a light and dark theme switcher. JavaScript changes the class of the body when the theme button is clicked. I used local storage so that the selected theme can be remembered when the page is opened again.

### 5. DOM Manipulation

DOM manipulation was an important part of this task. I used JavaScript to select HTML elements using methods such as `getElementById()` and `querySelectorAll()`.

After selecting the elements, I changed their classes, text content, and styles based on user actions.

For example, clicking the "Say Hello" button displays a message on the page without refreshing it.

### 6. FAQ Accordion

I created an FAQ section where answers are initially hidden. When a user clicks a question, JavaScript opens the corresponding answer.

If another question is opened, the previously opened answer is closed. This makes the FAQ section more compact and easier to use.

### 7. Form Validation

Another important feature was the contact form. I used JavaScript to validate the user's input before accepting the form.

The script checks:

* Whether the name field is empty
* Whether the email format is correct
* Whether the message contains enough characters

If there is an error, a message is displayed below the relevant field. If all the information is correct, a success message is shown.

### 8. Character Counter

I also added a character counter to the message box. Whenever the user types something, JavaScript detects the input event and updates the counter automatically.

The counter shows the number of characters entered out of the maximum allowed 200 characters.

This was useful for understanding how JavaScript can respond immediately to user input.

### 9. Animated Counters

The statistics section contains numbers that start from zero and increase to their final values when the section becomes visible on the screen.

I used the scroll event and `requestAnimationFrame()` to create this effect. This helped me understand how JavaScript can be combined with scrolling and animation.

### 10. Scroll-to-Top Button

A scroll-to-top button was also added to improve navigation. The button remains hidden when the user is at the top of the page.

After scrolling down, the button becomes visible. Clicking it smoothly takes the user back to the top of the webpage.

### 11. Challenges Faced

One of the main challenges I faced was understanding how different JavaScript events work. Initially, it was difficult to understand when to use events such as `click`, `input`, and `scroll`.

I also had to make sure that JavaScript changes did not affect the existing CSS layout. I solved these problems by separating the JavaScript functionality into small sections and testing each feature individually.

Form validation also required some testing because different types of incorrect input had to be handled properly.

### 12. Debugging and Testing

I used the browser's developer tools to check for JavaScript errors and test the different interactive features.

I tested:

* Mobile menu
* Theme switcher
* Welcome button
* FAQ accordion
* Form validation
* Character counter
* Animated counters
* Scroll-to-top button

I also tested the website at different screen sizes to make sure that the JavaScript functionality worked properly along with the responsive CSS.

### 13. Learning Outcomes

This task helped me understand JavaScript in a much more practical way. I learned how to select HTML elements, modify them using the DOM, and respond to user actions using event listeners.

I also gained a better understanding of form validation, local storage, scroll events, and dynamic content updates.

Most importantly, I understood how HTML, CSS, and JavaScript work together. HTML provides the structure, CSS controls the appearance, and JavaScript adds behaviour and interaction.

### 14. Conclusion

Overall, Week 3 was an important step in improving my frontend development skills. The previous tasks helped me build and make a webpage responsive, while this task showed me how to make that webpage interactive.

By adding features such as a mobile menu, theme switcher, FAQ accordion, form validation, character counter, animated statistics, and scroll-to-top button, I was able to create a more engaging user experience.

This task gave me practical experience with JavaScript and DOM manipulation and provided a good foundation for working on more advanced frontend projects in the future.
