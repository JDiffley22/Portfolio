import React from "react";
import "./index.css"

const App = () => {
    return (
      <>
      <nav className="container">
        <ul className="flex flex-row justify-around">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

    <section className="container">
      <h1 className="flex text-center text-3xl font-bold">"Hello World" Im James</h1>
      <div className=" container font-bold">
        <div className="container flex justify-between">
          <h1 className="container">Im a Software Developer in the UK</h1>
            <div className="container">
              <p>A passionate programmer who has interests ranging from video games to nature conservation</p>
           </div>
        </div>
      </div>
    </section>

      <div className="container">
        <div className="flex justify-center">
        <h3 className="text-3xl">Projects</h3>
        </div>
        
      </div>
      </>
    );
  };
  export default App;
  