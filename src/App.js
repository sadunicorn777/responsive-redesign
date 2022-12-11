import React from 'react';
import './App.css';
import WebFont from 'webfontloader';
import { ExpandingPhoto } from './ExpandingPhoto'

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Work Sans']
      }
    });
   }, []);

  return (
    <div className="App">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <div style ={{backgroundColor: '#FFB0E2', borderRadius: 40, height: '85vh', width: '80vw', filter: 'drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.15))'}} />
          <div style ={{position: 'absolute', backgroundColor: 'white', borderRadius: 40, height: '85vh', width: '74vw', overflow: 'scroll'}}>

            <div style={{paddingLeft: '4vw', paddingRight: '4vw'}}>

              <div style={{fontSize: '1.1vw', fontFamily: 'Work Sans', paddingTop: '2vw', paddingLeft: '0.2vw'}}>Brown University CSCI 1300</div>
              <div style={{fontSize: '2.5vw', fontFamily: 'Work Sans', paddingTop: '0.2vw'}}>
                Responsive <b>Redesign</b>✏️
              </div>

              <div class="spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>🔧 Assignment Overview</div>

              <div class="m-spacer" />

              <div style={{fontSize: '0.9vw', lineHeight: '1.3vw', fontFamily: 'Work Sans'}}>
                The goal of this assignment was to practice the workflow of <acc>redesigning a simple website</acc>. The process involved <acc>analyzing and identifying flaws</acc> in an existing interface, creating <acc>low-fidelity</acc> and <acc>high-fidelity prototypes</acc> for various screen sizes, and <acc>building a responsive website</acc> based on those prototypes.
              </div>

              <div class="m-spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>🔍 Part 1: Identifying Usability Problems</div>

              <div class="m-spacer" />

              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', height: '30vh'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Picking a Webpage</div>


                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                    <p>I chose the website of the popular retail fashion company, <pacc>Zara</pacc>. You can experience the website for yourself at <a href="http://zara.com/us">zara.com</a>.</p>

                    
                    <p>I chose Zara's website because it is so difficult to navigate and use that even though I am in love with Zara clothing, I would never buy it from their website. I don't know how, even though that is the purpose of the website. </p>

                      
                  </div>
                </div>
                <ExpandingPhoto 
                  text="Click for a screenshot of Zara's site" 
                  width="17vw"
                  clickedHeight="60vh"
                  clickedWidth="50vw"
                  clickedMarginTop="-50vh"
                  imgHeight="50vh"
                  imgWidth="45vw"
                />
                </div>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Finding Problems</div>
                </div>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Accessibility</div>
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  );
}

export default App;
