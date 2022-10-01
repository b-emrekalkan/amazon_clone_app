# <center> 💨 AMAZON CLONE APP 💨 </center>

## 🚩 To get started let’s make a new folder named <b>"amazon_clone_app"</b> and open it. As soon as you are in the folder, right click and select <b>"Open With Code"</b>

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

## 🛑 Delete three nonrelevant files from the <b>src</b> folder from the React App 👇

    - App.test.js
    - logo.svg
    - setupTests.js

## 🚩 Go to <b>App.js</b> and remove the following line from your code 👇
```javascript
import logo from “./logo.svg”;
```

## 🚩 Also remove everything under the first <b> div </b> element from your <b> App.js </b> file. You’re code should look like the following 👇
```javascript
import React from "react";
import "./App.css";
function App() {
    return <div className="app">React App</div>;
}
export default App;
```

## 🛑 Now let’s cleanup the <b> CSS </b> files a bit. Go to <b> App.css</b> and remove all the contents of your file 