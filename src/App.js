// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Freaking just Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WhateverIsDefaultExportFromGreetJs from './Components/Greet0';
import { YeeHaw } from './Components/Greet0';
import { Bro as Bruh } from './Components/Greet0';
import Welcome from './Components/Welcome';
import Greet from './Components/Greet';


class App extends Component{
  render()
  {
    return (
      <div className="App">
      <WhateverIsDefaultExportFromGreetJs></WhateverIsDefaultExportFromGreetJs>
      <YeeHaw></YeeHaw>
      <Bruh></Bruh> 
      <Welcome/>

      <Greet name="Ray1" rando="WTF"/>
      <Greet name="Ray2" rando="WTF">
      Child Node Content
      </Greet>
      <Greet name="Ray3" rando="WTF">
       <button>Click!!!</button>
      </Greet>

      <Welcome name="Ray1" rando="WTF1"/>
      <Welcome name="Ray2" rando="WTF2"/>
      <Welcome name="Ray3" rando="WTF3"/>
      </div>
      );
    }
    
  }
  
  export default App;
  
  