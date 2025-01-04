import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../Css/contacts.css'

const Contacts = () => {


    return (
        <section className='Contacts'>
            <div className='headings'>
                <h1 className='home-heading com-h1 WD'>Contact Me {'>'}</h1>
                
                <ul className="contact-list">
                    <li className="WD">
                        <span><FontAwesomeIcon icon={faEnvelope} /> :</span> giriaman539@gmail.com
                    </li>
                    <li className="WD">
                        <span><FontAwesomeIcon icon={faPhone} /> :</span> 8851105736
                    </li>
                    <li className="WD">
                        <span><FontAwesomeIcon icon={faLocationDot} /> :</span> New Delhi
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default Contacts