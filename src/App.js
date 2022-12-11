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
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: '30vh', overflow: 'scroll'}}>
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
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Finding Problems</div>

                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>

                    
                    <p><i><b>Usability.</b></i> The capability of the software product to be 
<pacc>understood</pacc>, <pacc>learned</pacc>, <pacc>used</pacc> and <pacc>attractive</pacc> to the 
user, when used under specified conditions.</p>

<div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
<p style={{background: '#FFE7F6'}}>
                    Unmet Expectations
                    </p>
                    Upon entering the site, the user is immediately bombarded with photos of child models. This may conflict with the user's preconceived notion of the site, as typically, clothing sites list retail items on the first page rather than flooding it with visuals. 
                    <p style={{background: '#FFE7F6'}}>
                    Learning Obstacles 
                    </p>
                    The website navigation is counterintuitive. At the bottom of the screen the user is presented links to categories such as "girl", "boy", etc. Instead of actually leading the user to item listings, these links only serve to change which images that are being projected.
                    <p style={{background: '#FFE7F6'}}>
                    Inconsistency 
                    </p>
                    When the user finally figures out how to view item listings (through accessing the main menu by clicking a tiny icon in the top left corner), the website presents listings inconsistently. In some cases, the names of the items are listed below the item. In other cases, they are not. There is no apparent reasoning or pattern. 
                    <p style={{background: '#FFE7F6'}}>
                    Confusing Queues

                    </p>
                    Link titles within the menu in  are confusing or misleading. Examples include "Join Life". There is no telling what this could possibly mean. 
                    <p style={{background: '#FFE7F6'}}>
                    Cryptic Abbreviations 
                      </p>
                      Zara employs some jargon in their menu link titles. Whatever "Zara Srpls" means is unclear to the user. If it means "Surplus", there was definitely room to write that entire word. After clicking this link, the user is lead to a page with shots of models wearing clothing that is presumably Zara. This has nothing to do with a "surplus".

                      <p style={{background: '#FFE7F6'}}>
                    Low Contrast
                      </p>
                      In many cases, the website's text (for example, navigation links or menu links) fall directly on top of an image. The text is always black, and sometimes the images are dark in color. This presents a problem as the text is difficult to read, leading to confusion and unattractiveness.
                  </div>
                  </div>
                </div>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Accessibility</div>
                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                  <p>
                    <a href="https://wave.webaim.org/">WebAim WAVE</a> was used to detect accessibility problems with the website. Flagged features included: 
                  </p>
                  <p style={{background: '#FFE7F6'}}>
                    Missing alternative text
                  </p>
                  Correct, there are no textual alternatives for images. So, the website cannot be screenread to a visually impaired person.
                  <p style={{background: '#FFE7F6'}}>
                    Low contrast
                  </p>
                  Correct, text blends in with the images in many cases.
                  <p style={{background: '#FFE7F6'}}>
                    Skipped heading levels
                  </p>
                  Correct, there does not seem to be an intermediary heading size between the huge title text and any other text on the website (any other text besides the title is tiny).
                  <p style={{background: '#FFE7F6'}}>
                    Very small text
                  </p>
                  Correct, all text that is not the main heading is miniscule. However, enlarging the website using "Command/Control" + "+" on a keyboard does enlarge the text. 
                </div>
                </div>
              </div>





              






              <div class="spacer" />
              <div class="spacer" />
              <div class="spacer" />
              <div class="spacer" />

              <div style={{fontSize: '1.5vw', fontFamily: 'Work Sans'}}>🖼 Part 2: Visual Redesign</div>

<div class="m-spacer" />

              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', height: '30vh'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Low Fidelity Wireframing</div>


                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                    <p>Text</p>

                      
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
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Style Guide</div>

                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>

                  <p>Text</p>

                  </div>
                </div>
                <div style={{width: '17vw', padding: '1vw', border: '1px solid black', borderRadius: 20, height: '30vh', overflow: 'scroll'}}>
                  <div style={{fontSize: '1.15vw', fontFamily: 'Work Sans'}}>➡️ Accessibility</div>
                  <div style={{fontSize: '0.8vw', lineHeight: '1.2vw', fontFamily: 'Work Sans'}}>
                  <p>Text</p>
                </div>
                </div>
              </div>

              {/* ALL WHITE BOX CONTENTS BEFORE HERE */}

            </div>

          </div>
        </div>

    </div>
  );
}

export default App;
