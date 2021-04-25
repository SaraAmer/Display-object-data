import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {

  render()
  {
  return (
    <div >
   <Data/>
    </div>
  );
  }
}
class Data extends React.Component{
  constructor()
  {
    super();
  this.data={
     "id":"1",
     "jobTitleName":"Developer",
     "firstName":"Ahmed",
     "lastName":"Ali",
     "preferredFullName":" Ahmed Ali ",
     "employeeCode":"E1",
     "region":"CA",
     "phoneNumber":"408-1234567",
     "emailAddress":" ahmed.ali @gmail.com"
     }
   }
  render()
  {
    return (
      <div>
        <table>
  <tr>
    <th>ID</th>
    <th> jobTitleName </th>
    <th>firstName</th>
    <th>lastName</th>
    <th>preferredFullName</th>
    <th>employeeCode</th>
    <th>region</th>
    <th>phoneNumbe</th>
    <th>emailAddress</th>
  </tr>
  <tr>
    <td>{this.data.id}</td>
    <td>{this.data.jobTitleName}</td>
    <td>{this.data.firstName}</td>
    <td>{this.data.lastName}</td>
    <td>{this.data.preferredFullName}</td>
    <td>{this.data.employeeCode}</td>
    <td>{this.data.region}</td>
    <td>{this.data.phoneNumbe}</td>
    <td>{this.data.emailAddress}</td>
    
    
  </tr>
  <tr></tr>


</table>
      </div>


    )
  } 
  
}

export default App;
