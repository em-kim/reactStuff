//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
//1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.
import React from 'react';
export default class DaysLeft extends React.Component {
  constructor() {
    super();
    var today = new Date();
    var lastClass = new Date("12/8/17");
    console.log(today);
    console.log(lastClass);
    var daysRemain = lastClass.getTime() - today.getTime();
    daysRemain = daysRemain / (24 * 60 * 60 * 1000);
    console.log(Math.floor(daysRemain));
  }
  render() {
    return <div>Now this is ex1.js calling</div>
  }
}
// //2)using the object:
// {"menu": {
//   "id": "file",
//   "value": "File",
//   "popup": {
//     "menuitem": [
//       {"value": "New", "onclick": "CreateNewDoc()"},
//       {"value": "Open", "onclick": "OpenDoc()"},
//       {"value": "Close", "onclick": "CloseDoc()"}
//     ]
//   }
// }}

//go through each menuitem and display the "value" in your react html

//using the reduce function, multiply all the values in the array [1,2,9]. Display 
//the end product in your react html

