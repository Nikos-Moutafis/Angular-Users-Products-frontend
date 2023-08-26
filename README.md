# Angular products front end
## This app was implemented to provide front end support to [this API](https://codingfactory.ddns.net/api-docs/).
## The code for this API is [here](https://github.com/Nikos-Moutafis/Node.js-Users-Products-API)
-   When user entes the app, he sees a welcome component.  At the right corner there is a dropdown menu. From that menu user can get all products or users and add a product or a user. 

- When user clicks to get all products/users a HTTP  request with method GET is sent from the user/product service to the API. Then we pass the data into a list and populate a table with it.

- When user adds product/user  a HTTP request with method POST  is sent from the user/product service to the API. If it is success user sees a message and redirects to list page.

### Try it yourserf  [➡️ here!!!](https://nikos-moutafis.github.io/Angular-products-frontend/)


## Installation
### To install and run the project, follow these steps:

- Clone the repository to your local machine
- Install Node.js and npm (Node Package Manager) on your system, if they are not already installed. You can download the latest version of Node.js from the official website at NodeJs.
- Open a terminal or command prompt and navigate to the root directory of the cloned repository.
- Install Node.js dependencies with npm i
## Development server Run
Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

### Technologies used : 
- Typescript with Angular Framework
- Bootstrap
- HTML
