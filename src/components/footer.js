import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.jpg';
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
                    <a className="" target="_self" href="https://docs.google.com/document/d/1EiIdaGvLc65Hl_aZOB_TZqeHIT8xo3Xk9A1ZZQeB4g0/edit?usp=sharing"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a className="" target="_blank" href="https://www.linkedin.com/in/alicia-collins-is-linked"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          
        </section>
    );
}