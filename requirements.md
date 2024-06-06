# Software Requirements

## Vision

- **What is the vision of this product?**
  - We aim to build a web application that serves as a platform that users can view/use for browsing quotes from their favorite authors or a category of their choise.

- **What pain point does this project solve?**
  - The free times that get boring that everyone goes through can be used to do somthing both fun and informative.
  - The aim of this web app is to offer a place of inspiration for your next project, life struggle or just to reflect on things.

- **Why should we care about your product?**
  - This project is done by student trainees for web development program, any feedback is very much appreciated in order to move forward with our abilities and deliver better features and products in the future.

## Scope (In/Out)

- **IN** | **What will your product do**
  - The web app will provide the user with a page to choose to view random quotes.
  - The web app will provide the user with a form to fill in with the author name or a word in the quote or a category to search for quotes from.
  - The web app will provide the user with the ability to add a quote to their list of favorite quotes.
  - The web app will provide the user with a page to view their favorite quotes list.
  - The web app will provide the user with the ability to delete quotes from their favorite list.

- **OUT** | **What will your product not do**
  - Our web app will never turn into an IOS or Android app. (Though it can be viewd on mobile browsers)
  - Our web app will not offer the user to create their own quotes.


## Minimum Viable Product vs Strech Goals

- **What will your MVP functionality be?**
  - A web app to view quotes based on user search, with the ability to add/delete user's favorite quotes from a list.

- **What are your stretch goals?**
  - To add user profiles (having them to sign up and log in/out).
  - To add same functionality of quotes to a new subcategory of Fun Random Facts.
  - To add Database Normalization.
  - To add animation to the browser styles.


## Functional Requirements

- A user can view random quotes.
- A user can search for a specific author name / word in quotes text / category of quote.
- A user can add a quote to their favorite list.
- A user can delet a quote from their favorite list.

## Data Flow

- The user opens their browser on web or mobile.
- The user enters the link to our web app.
- The user views the homepage and clicks on "Quotes".
- The user is viewing random quotes and decides to search for a specific author quotes.
- The user enters the name of the author in the search box and hits enter.
- The user can view now quotes by their specified author.
- The user click on the 'heart' button and adds the quote to the favorite list.
- The user navigates to the favorite list and views the quotes he/she have 'liked'.
- The user hits the delete button on one of the quotes in the list removing it.
- The user is happy and satisfied with the website, they were even inspired to do something productive in their day.


## Non-Functional Requirements

- **Security**
  - All of the links used in our web app are HTTPS.

- **Usability**
  - The web app is simple and easy to use, all button are labled and helping sentences are found wherever needed.
  - The web app is styled in a simple manner to add a sense of calmness to the whole aesthetic of the website and user environment.
  
- **Testability**
  - The web app is built with error catching on all the features, with proper user output and a proper developer error handling and logging making sure we covered all bugs/holes. 
  - This is done by deploying the site to heroku, sending the link to the user, taking notes on which features worked well and which didn't, also by reading the log on heroku and the console logs on our back-end.
