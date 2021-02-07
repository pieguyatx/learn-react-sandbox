// the name of this file is important!

// Import the React and ReactDOM libraries
import React from 'react'; // good to follow convention of naming variable after library
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

// require vs. import:  import for ES2015 modules, require is for CommonJS modules...

// Create a React component
//      --> a function or class that produces HTML (via JSX) and handles user feedback (event handlers)
const App = () => {
    return <div>Hello world!</div>;
};

reactDom.render(
    <App />,
    document.querySelector('#root') // references HTML doc
);

// Take the React component, and show it on the screen



// these lines recommended for Create-React-App to enable "hot reloading"
if (module.hot) {
    module.hot.accept();
}
