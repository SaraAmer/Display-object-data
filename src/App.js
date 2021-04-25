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
  this.state=
  {
    "data":{
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
   }}
  render()
  {
   const list = Object.keys(this.state.data).map((key , index) =>{
      console.log(key)
      return (
        <div>
          <table>
    <tr>
      <th>
        {key}
        </th>
 
    </tr>
    <tr>
      <td>{this.state.data[key]}</td>     
      
    </tr>
    <tr></tr>
  
  
  </table>
        </div>
  
  
      )
    })
 
    return list
   
  } 
  
}

export default App;
