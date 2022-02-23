import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/EmployeeListComponent";
import EmployeeList from './Data/EmployeeList';

ReactDOM.render(<App EmpList={EmployeeList}></App>, document.getElementById("root"))






