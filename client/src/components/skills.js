import React from 'react';

import htmlLogo from '../assets/images/skills/html_logo.png';
import cssLogo from '../assets/images/skills/css_logo.png';

import jsLogo from '../assets/images/skills/javascript_logo.png';

import jqueryajaxLogo from '../assets/images/skills/jquery_ajax2.png';
import apiLogo from '../assets/images/skills/api.png';

import reactLogo from '../assets/images/skills/react-logo.png';

import nodeLogo from '../assets/images/skills/node.png';
import databaseLogo from '../assets/images/skills/database.png';

import agileLogo from '../assets/images/skills/git_vscode.png';
import npmLogo from '../assets/images/skills/vs_code_npm_postman.png';

export default props =>{

    return(
        <section id='skills'>
            <h3>Technical Skills</h3>
            <hr/>
            <div className="container">
                <div className="row">
                <div className="col s12 l6 skills">
                    <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML"/>
                    <img className="col s3 cssLogo"  src={cssLogo} alt="CSS"/>
                    <div className="col s6 skillsText"><strong>HTML5</strong> and <strong>CSS3</strong> are fundamental skills for any web developer</div>
                </div>
                
                <div className="col s12 l6 skills">
                <div className="col s6 push-l6 skillsText"><strong>Javascript</strong> and <strong>Object Oriented Programming</strong> are essential developer skills</div>  
                    <img className="col s3 pull-l6 jsLogo" src={jsLogo} alt="Javascript"/>
                </div>
                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className="col s3 jqueryLogo" src={jqueryajaxLogo} alt='JQuery Ajax'/>
                    <img className="col s3 apiLogo" src={apiLogo} alt='API'/>
                    <div className="col s6 skillsText"><strong>jQuery</strong> simplifies HTML DOM manipulation. <strong>Ajax</strong> and <strong>Axios</strong> makes <strong>RESTful API</strong> calls easy</div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6 skillsText"><strong>React's</strong> declaractive component structure is awesome...I'm learning more everyday.</div>  
                    <img className='col s3 pull-l6 reactLogo' src={reactLogo} alt='React'/>
                   
                </div>
                
                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className='col s3 nodephpLogo' src={nodeLogo} alt="Node"/>
                    <img className='col s3 androidLogo' src={databaseLogo} alt='database'/>
                    <div className="col s6 skillsText">Experience with <strong>MySQL</strong> and <strong>MongoDB</strong> databases, along with <strong>Node.js</strong>  </div>
                </div>
            

                <div className="col s12 l6 skills">

                    <img className='col s3 agileLogo' src={agileLogo} alt=' Git Visual Studio Code'/>
                    <img className='col s3 vscodeLogo'  src={npmLogo} alt="NPM Postman MAMP"/>
                    <div className="col s6 skillsText"><strong>Git, Visual Studio Code, NPM, Postman, and MAMP,</strong> are tools and processes that I develop with often.</div>

                </div>                
            </div>

            </div>
        </section>
    );
}