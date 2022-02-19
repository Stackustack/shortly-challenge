
# Shortly

![Alt Text](https://media.giphy.com/media/AIf6PBlEUKvBCvmgKU/giphy.gif)

Dummy webpage. Login/Sign Up and most of the links beside mentioned in "Features" sections are not functional. 
This project was made as one of Frontend Mentor challenges. 
- Live: https://shortly-challenge.web.app/
- Frontend Mentor challenge: https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G

Features: 
- Sidemenu on Mobile view
- HTTP calls (to make shortened links)
- Storing all shortened links in localStorage 
- "Copy to clipboard" on button click
- RWD (breakpoint at 429px)
    - Mobile
    - Deskotop

Technologies: 
- react, 
- axio

TODO: 
- implement SCSS solutions and clean styles
- implement Formik solution for Form Shortener
- organize logic (export axios calls to custom hooks, export validation to separate custom hook and extend it to usuall behavior (is input really url etc))
- clean form input after shortening
- spinner when loading
- remove link item from the list (extended functionality)
- cleaner way to handle localStorage?
- animations (fade-in for a new ShortenedLinks list items)
- more breakpoints
