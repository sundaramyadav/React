import React from 'react';
import ReactDOM from 'react-dom';

//ReactDOM.render(<HeaderComponent></HeaderComponent>, document.getElementById("root"))
//Using without jsx
// function HeaderComponent(){
//     return React.createElement("div",{}, [
//       React.createElement("h1",{},"This is the header for the session"),
//       React.createElement("h2",{},"This is other header"),
//       React.createElement("p",{},"This is sample Paragraph"),
//       React.createElement("div",{}, [
//         React.createElement("section",{},[
//             React.createElement("h1",{},"This is React Component"),
//             React.createElement("div",{},[
//                 React.createElement("h2",{},"This is Another Component")
//             ]),
//       ]),
//         React.createElement("article",{},[
//             React.createElement("h1",{},"This is React Component"),
//             React.createElement("div",{},[
//                 React.createElement("h2",{},"This is Another Component")
//             ])
//         ]),
//     ]),
//   ])
// }


// import HeaderComponent,{OtherHeaderComponent} from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
// import ContentComponent from './components/ContentComponent';
// ReactDOM.render((
// <div>
//   <HeaderComponent></HeaderComponent>
//   <OtherHeaderComponent></OtherHeaderComponent>
//   <ContentComponent></ContentComponent>
//   <FooterComponent></FooterComponent>
// </div>
// ),document.getElementById("root"));


// import App from "./components/ConceptOfInterpolation";
// ReactDOM.render(<App></App>, document.getElementById("root"))


import App from "./components/EmployeeDetailsComponent";
ReactDOM.render(<App></App>, document.getElementById("root"))

// import App from "./classComponent/IncrementCounter";
// ReactDOM.render(<App></App>, document.getElementById("root"))


// import App from "./classComponent/DataBinding";
// ReactDOM.render(<App></App>, document.getElementById("root"))

// import App from "./classComponent/LifeCycleEvent";
// ReactDOM.render(<App></App>, document.getElementById("root"))




