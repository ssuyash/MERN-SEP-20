import React, {Component} from 'react'
import FirstComponent from './components/FirstComponent';


export default class App extends Component{
  
 
 render(){


   return (
    <div>
      <FirstComponent name="suyash"/>
      <FirstComponent name="alpna"/>
      <FirstComponent name="bhavishya"/>
      <FirstComponent name="piyush"/>
    </div>

  
   )
 }

}