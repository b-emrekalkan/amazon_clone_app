# <center> 💨 AMAZON CLONE APP 💨 </center>

## 🚩 To get started let’s make a new folder named "amazon_clone_app" and open it. As soon as you are in the folder, right click and select "Open With Code"

## 💻 Go to terminal, install and setup React app 👇
```bash
npx create-react-app .
```

## 🔴 Here's how this works 👇
🔹 <b>npx</b> is a part of <b> npm (Node Package Manager)</b> except npx runs a remote script instead of installing it locally.

🔹 This is done so that you always have the latest version of React installed in your project.

🔹 <b>"create-react-app"</b> is the name of the remote script and <b>“.”</b> specifies that we want the script to make a React project in the <i>SAME FOLDER</i> and not make a new folder for it, if you had to make a new folder name, you could just provide the name of folder instead of “.” and it would make a folder for you.

## 💻 Now that we have our React App installed, now we can start it. In the terminal type the following command. This command will start the React App 👇
```bash
npm start
```

## 🛑 Delete three nonrelevant files from the "src" folder from the React App 👇

    - App.test.js
    - logo.svg
    - setupTests.js

## 🚩 Go to "App.js" and remove the following line from your code 👇
```javascript
import logo from “./logo.svg”;
```

## 🚩 Also remove everything under the first "div" element from your "App.js" file. You’re code should look like the following 👇
```javascript
import React from "react";
import "./App.css";
function App() {
    return <div className="app">React App</div>;
}
export default App;
```

## 🛑 Now let’s cleanup the "CSS" files a bit. Go to "App.css" and remove all the contents of your file.

## 🚩 Now go to "index.css" and add this piece of code on the top. This will get rid of the margin and padding of the page. 👇
```css
*{
 margin: 0;
 padding: 0;
}
```

## 👉 Now we have our React project perfectly set up. Now we can start making the Amazon Clone.

# 1-SETTING UP THE REACT ROUTER

- A very important thing to consider in a React app is the <b>navigation <i>(moving from one page to another)</i></b> of the users. Since React is a single page application, it doesn’t support multiple routes by default.

- But the node packages come to our save. There’s a package named <b>react-router-dom</b> which allows us to create routes for our React project. Not a lot complicated. Setting up is one time, and then whenever you add a new page, you just need to inform the Router. Don’t worry we will cover that in depth here!

## 💻 Go to terminal to install "react-router-dom" 👇
```bash
npm install react-router-dom
```

## 📜 For reference [click here](https://v5.reactrouter.com/web/guides/quick-start).

## 🚩 Creating Component 👇

- Once it’s installed, now let’s get our hands dirty and write some actual code. Let’s make a new component.

- To make a component, simple make a new file. We call it <b>Home.js</b> under "src" folder for our case. The convention is that the first letter of a component must be in <b>capitals</b> 📢

- Also to make life easier, go ahead and install a Visual Studio Code extension named [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets). This extension will make the boiler plate for React components without you being typing the code all by yourself.

## 🚩 Home.js 👇

- Let’s go in "Home.js". 
- Just type in <b>“rfce”</b>, hit Enter while on “rfce”
- This will autocomplete the React boiler plate for you.
- Now let’s change the class of the div element provided us to “home”.
- We follow BEM convention while styling our components.
- <b>BEM Convention</b> helps our CSS and JSX organized for us to read later, and everything becomes easy to keep track of.
- Let’s just add some text there for now, let’s say Hello. The code on the <b>Home.js</b> file now should be 👇

```javascript
import React from "react";
function Home() {
   return <div className="home">Hello</div>;
}
export default Home;
```

## 🚩 App.js 👇

- If you see the browser, you will not see anything because we haven’t prepared our entry point <b>App.js</b> yet.
- So let’s open the file and start setting up the <b>React Router</b>.
- First of all, we need to import the dependencies.
- Import them using the following code at the top of <b>App.js</b> 👇

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

- Once you’ve done importing the code, you can now use React Router in your file.
- Now that we have imported React Router, let’s configure React Router according to our needs. Use the below code in your <b>App.js</b> 👇

```javascript
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
return (
    <>
        <div className="app">
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
            </BrowserRouter>
        </div>
    </>
);
}
export default App;
```