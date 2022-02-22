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


import App from "./components/EmployeeListComponent";
import EmployeeList from './Data/EmployeeList';
// var EmpList =[{
//     name: "Sundaram",
//     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
//     createdAt: "Today",
//     id: 1
// },
// {
// name: "Sundaram2",
// avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
// createdAt: "Today",
// id: 2
// }
// ]
ReactDOM.render(<App EmpList={EmployeeList}></App>, document.getElementById("root"))

// import App from "./components/DataBindingComponent";
// ReactDOM.render(<App></App>, document.getElementById("root"))

// import App from "./classComponent/IncrementCounter";
// ReactDOM.render(<App></App>, document.getElementById("root"))


// import App from "./classComponent/DataBinding";
// ReactDOM.render(<App></App>, document.getElementById("root"))

// import App from "./classComponent/LifeCycleEvent";
// ReactDOM.render(<App></App>, document.getElementById("root"))




