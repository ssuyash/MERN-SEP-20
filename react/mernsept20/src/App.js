import React, {Component} from 'react'
import FirstComponent from './components/FirstComponent';
import Greet from './components/Greet'


export default class App extends Component{
  
 
 render(){


   return (
    <div>
      <Greet name="Alpna" time="morning" />      
    </div>

  
   )
 }

}