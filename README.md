# DevLink Marketplace

DevLink Marketplace a frontend project to explore on React JS and Frontend development. DevLink is an inspired from UpWork.

- Added UI components required to signin and login
- Connected app to Firebase API
- Updated Project structure. More info on project structure below.

 
```bash
src
├── App.js
├── assets 
│   ├── images
│   │   └── champimg.svg
│   └── styles
│       ├── App.css
│       ├── FooterBar.css
│       └── Form.css
├── components
│   ├── UI
│   │   ├── CardGroup.js
│   │   ├── Cards.js
│   │   └── DarkButton.js
│   ├── archive
│   │   ├── CustomerCard.js
│   │   ├── DevCard.js
│   │   └── Newsletter.js
│   └── forms
│       ├── FreelanceForm.js
│       ├── JobForm.js
│       └── authForms #forms responsible login and signup forms
│           ├── Login.js
│           └── SignupFrom.js
├── contexts
│   └── AuthContext.js # logic on FirebaseAuth
├── firebase.js. # Firebase API and Firebase authentication
├── index.css
├── index.js
├── layouts
│   ├── Footer
│   │   └── FooterBar.js
│   └── Header
│       └── NavigationBar.js
└── pages
    ├── FindDev.js
    ├── FindJob.js
    ├── Home.js
    └── SignUp.js

```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
