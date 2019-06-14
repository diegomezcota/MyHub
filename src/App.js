import React from 'react';
import logo from './logo.svg';
import './App.css';
import src from './logo.svg';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <div className="userBar">
          <p>
            Welcome to my personal hub!
          </p>
  
          <img src="./media/me.png" width = "200rem" alt = "Me animated" title="Me animated, created by @christ0089 (Twitter)"/>

        </div>
        
        <div className = "contactMe">
          <p>
            
            <a href="https://github.com/diegomezcota" src = "https://github.com/diegomezcota" target="_blank">
              <img className = "socialMedia" src = "./media/githubLogo.png" alt = "GitHub logo" title="Take a look at my GitHub!" width="77.5rem"/>
            </a>

            <a href="https://www.linkedin.com/in/diegomezcota/" src = "https://www.linkedin.com/in/diegomezcota/" target="_blank">
              <img className = "socialMedia" src = "./media/linkedInLogo.png" alt = "LinkedIn logo" title="You can contact me on LinkedIn :)" width="73rem"/>
            </a>

            <a href="https://leetcode.com/diegomezcota/" src = "https://leetcode.com/diegomezcota/" target="_blank">
              <img className = "socialMediaLeetcode" src = "./media/leetcodeLogo.png" alt = "Leetcode logo" title="My coding gym"/>
            </a>

          </p>
        </div>
    
      </header>

    </div>
  );
}

export default App;
