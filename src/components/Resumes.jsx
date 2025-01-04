import React from 'react';
import '../Css/about.css';
import { useNavigate, Link } from 'react-router-dom';
import 'boxicons';
import Context from '../Context/Context';
const Resumes = () => {

    const { zIn, setZIn } = Context();

    const Skills = [
        {
            title: 'Frontend Development',
            skill: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','Tailwind', 'ReactJS'],
            logo: ["html5", `css3`,`bootstrap`, `javascript`, `tailwind-css`, `react`]
        },
        {
            title: 'Version Control',
            skill: ['Git', 'Github'],
            logo: ['git', 'github']
        }
    ]

    const navigate = useNavigate()

    function zUp() { // setting z-index up for about pages
        setZIn(true)
        console.log(zIn);
    }

    return (<>
        <div className='heading2'
            style={{
                zIndex: zIn ? 3 : 1,
                top: zIn ? '120px' : '200px',
                left: zIn ? '10vw' : '',
                backgroundColor: zIn ? '#0f2952' : '#1e2735', /*-- setting page animation for changes --*/
            }}
            onClick={zUp}>
            <h1 className='abt-hding com-h1 ab-h1' style={{ fontSize: zIn ? '' : '2rem' }}>Resume</h1>
            <h1 className='title'>Prashant Giri</h1>
            <h2>Front-end Developer</h2>
            {zIn?<><article className='details'>
                <p>Sangam Vihar,</p>
                <p>New Delhi - 80</p>
                <p><strong>8851105736</strong></p>
                <p><strong>giriaman539@gmail.com</strong></p>
            </article>
                <section className='table' style={{ display: zIn ? 'flex' : 'none' }}>
                    <section className='col1'>
                        <article>
                            <h3>Experience</h3>
                            <p>Fresher</p>
                        </article>
                        <article>
                            <h3>Education</h3>
                            <div>
                                <p>G.B.S.S.S No.2 <span>Dr. Ambedkar , New Delhi</span></p>
                                <h4>12<span>th</span> <span>~ Apr 2019 - Mar 2020 </span></h4>
                            </div>
                            <div>
                                <p>ITS <span>Mohan nagar, Ghaziabad</span></p>
                                <h4>BCA <span>~ Sep 2020 - Oct 2023</span></h4>
                            </div>
                            <div>
                                <p>Dice Academy, <span>Shiekh Sarai</span></p>
                                <h4>Full Stack Development <span>~ Dec 2023 - Present</span></h4>
                            </div>
                        </article>
                        <article className='portfolio'>
                            <h3 onClick={() => navigate('/gallery')}>Projects</h3>
                            <Link to={'/'}>Portfolio</Link>
                            <Link to={'/gallery#static'}>Static Web Page</Link>
                            <Link to={'/gallery#calc'}>Calculator</Link>
                        </article>
                        <article className='online-presence'>
                            <h3>Online Presence</h3>
                            <a href=""><span className='linkedin'><box-icon type='logo' name='linkedin' color='#ccff00'></box-icon></span>LinkedIn</a>
                            <a href=""><span><box-icon type='logo' name='github' color='#ccff00'></box-icon></span>Github</a>
                        </article>
                    </section>
                    <section className='col2'>
                        <article>
                            <h3>Skills</h3>
                            {
                                Skills.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <p>{e.title}</p>
                                            {e.skill.map((skill, j) => {
                                                return (
                                                    <React.Fragment key={j}>
                                                        <h4><span className='logos'><box-icon name={e.logo[j]} type='logo' color='#ccff00'></box-icon></span>{skill}</h4>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                            }
                        </article>
                        <article>
                            <h3>Languages</h3>
                            <h4>English, Hindi</h4>
                        </article>
                    </section>
                </section>
                <a className='Cntct-btn' href='./src/assets/Resume_prashant.pdf' download={'resume_prahsant-giri'}>Download PDF</a> </>:''}
        </div>
    </>)
}

export default Resumes