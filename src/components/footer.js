import React from 'react';

// import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>More About Me!</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark">Good, bad or indifferent, if you are not investing in new technology, you are going to be left behind. <b>Philip Green</b></p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_self" href="https://github.com/aliciacollins"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" target="_self" href="https://drive.google.com/file/d/1l2ahY-nF_kRx3kXDh9Sa0u3YXUUrddWw/view?usp=sharing"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                {/* <div className="footer-links">
                    <a target="_blank" href="www.linkedin.com/in/alicia-collins-is-linked"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div> */}

                </div>

              </div>
            </div>
          </div>
          
        </section>
    );
}