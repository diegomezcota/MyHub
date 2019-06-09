import React from 'react';
import logo from './logo.svg';
import './App.css';
import src from './logo.svg';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <p>
          My Hub is under maintenance, come back soon!
        </p>
 
        <img src="./media/me.png" width = "200rem" alt = "Me animated" title="Me animated, created by @christ0089 (Twitter)"/>

        <div className = "logo">
          <p>
            <strong> Diegomez Hub</strong>
          </p>
        </div>
        
        <div className="myLinkedInLink">
          <p>
            <a href="https://github.com/diegomezcota" src = "https://github.com/diegomezcota" target="_blank">
              <img src = "./media/githubLogo.png" alt = "GitHub logo" title="Take a look at my GitHub!" width="80rem"/>
            </a>

            <a href="https://www.linkedin.com/in/diegomezcota/" src = "https://www.linkedin.com/in/diegomezcota/" target="_blank">
              <img src = "./media/linkedInLogo.png" alt = "LinkedIn logo" title="You can contact me on LinkedIn :)" width="73rem"/>
            </a>
          </p>
          
        </div>
    
      </header>
    </div>
  );
}

export default App;
