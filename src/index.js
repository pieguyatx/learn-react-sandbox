// the name of this file is important!

// Import the React and ReactDOM libraries
import React from 'react'; // good to follow convention of naming variable after library
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

// require vs. import:  import for ES2015 modules, require is for CommonJS modules...

// styles
// in JSX (like in return) use "" for strings, but for non-JSX props, use '' by general convention
const style1 = { 
    backgroundColor: 'green', 
    color: 'white' 
};

// Create a React component
//      --> a function or class that produces HTML (via JSX) and handles user feedback (event handlers)
const App = () => {
    // after the return, this is JSX; converted to normal JS via babel (node module)
    // JSX should use className instead of class to avoid conflict with JS 'class'
    return (
        <div>
            <label className="label" for="name">Enter name:</label> 
            <input id="name" type="text" />
            <button style={ style1 }>Submit</button>
        </div>
    );
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
