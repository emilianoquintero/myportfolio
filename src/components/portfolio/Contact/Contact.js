import { useEffect, useRef } from 'react';
import './Contact.css';

function Contact () {

    const contactInfo = [
        {
            option: 'Adress',
            name: 'Culiacan, Sin.'
        },
        {
            option: 'Email',
            name: 'qb.emiliano@gmail.com'
        },
        {
            option: 'Phone',
            name: '+52 6671064658'
        },
        {
            option: 'Freelancer',
            name: 'Available'
        }
    ]

    const mapRef = useRef(null);

    if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 24.8091, lng: -107.3940 }, // Coordenadas de la ubicación deseada
          zoom: 12
        });
  
        // Opcional: Agregar un marcador
        new window.google.maps.Marker({
          position: { lat: 24.8091, lng: -107.3940 },
          map: map,
          title: 'Ubicación'
        });
      }
    return (
        
        <div id='contact-container' className='Card-inner-content-about'>
                <div className='Title p-3'>
                    <span className='First-word'>G</span>
                        et in Touch
                </div>
                <div className='row p-3'>
                        <div className='col-12 mb-2'>
                            <div className="text-box mb-2">
                                <div ref={mapRef} style={{ height: '250px', width: '100%' }}></div>
                            </div>
                            <div className='row'>
                                {
                                    contactInfo.map((option, index)=> (
                                        <div className='col-6 contact-info text' key={index}>
                                            <strong className='background-inf'>{option.option}</strong>
                                            <div>{option.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='col-12'>
                    </div>
                </div>
                <div  className='Title p-3'>
                    <span className='First-word'>C</span>
                        ontact Form
                </div>
                <div className='row p-3'>
                    <form
                        id='Form-container'
                        action="https://formspree.io/f/mldjrzgp"
                        method="POST"
                        className='w-100'
                        >
                            <div className='row'>
                                <div className='col-12 col-md-6 mb-3'>
                                <input placeholder='Your Name' type="text" name="name" className='input-form' required></input>
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <input placeholder='Your Email' type="email" name="email" className='input-form' required></input>
                            </div>
                            </div>
                            
                            <div className='col-12 mb-3'>
                                <textarea placeholder='Your Message' name="message" className='input-form' required></textarea>
                            </div>
                        
                        
                        <button className='button-form' type="submit">SEND MESSAGE</button>
                    </form>
                </div>
        </div>
    );
}

export default Contact