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
import WhateverIsDefaultExportFromGreetJs from './Components/Greet';
import { YeeHaw } from './Components/Greet';
import { Bro as Bruh } from './Components/Greet';
import Welcome from './Components/Welcome';


class App extends Component{
  render()
  {
    return (
      <div className="App">
        <WhateverIsDefaultExportFromGreetJs></WhateverIsDefaultExportFromGreetJs>
        <YeeHaw></YeeHaw>
        <Bruh></Bruh>
        <Welcome/>
      </div>
    );
  }

}

export default App;

