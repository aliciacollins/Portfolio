import React from 'react';

import about from '../assets/images/about/cool.jpg';
import uofa from '../assets/images/about/uofa.jpg';
import asu from '../assets/images/about/asu.png';
import nau from '../assets/images/about/nau.png';
import ntm from '../assets/images/about/NTM.PNG';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who I Am</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Versatile former Mathematics Professor who brings valuable experience in administrative roles, including a proven ability to work on multiple projects in lead and individual roles.  Strong analytical and problem-solving skills within business settings. Possesses uncompromising work ethic, time management, organization and prioritization qualities.</p>
            <div className='row'>
                <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Design is not just what it looks like and feels like. Design is how it works."</em> - Steve Jobs</div>
            <p className='text-faded'>
            <h5 className='white-color'>Strengths</h5>
            Analytical reasoning, Complex problem solving, Team leadership, Relationship building, Statistical Analysis, Superb verbal and written communication skills, Quick learner, Effective time management, Superior research skills, Excellent follow through and attention to detail. My new found passion in programming allows me to use these skills in this everchanging technological world.</p>
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={uofa} alt="U of A" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing the University of Arizona's Trilogy <em>Full Stack Web Development Program </em>has laid the foundation for my new found passion in this ever changing programming world.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={ntm} alt="ac" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
            Co-authored an online e-text for liberal arts mathematics college courses.	Participated in all stages of manuscript preparation and book production.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={asu} alt="ASU" className='bgImg responsive-img'/>
            <img src={nau} alt="NAU" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
            My logical and analytical skills led me to earning my both my bachelors and master's degrees in <strong>Mathematics</strong>. 
            </div>
        </div>
            </div>
            
        </div>
        </section>
    );
}