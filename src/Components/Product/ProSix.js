import React, {useState} from 'react'
import './prosix.css'

export default function ProSix() {
    const Data = [
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },  
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },  {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        },
        {
          question: 'What is your Qualifiation?',
          answer1: 'Graduation',
          answer2: 'Graduation',
          answer3: 'Graduation'
        }
      ];


    
        const [clicked, setClicked] = useState(false);
      
        const toggle = index => {
          if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
          }
      
          setClicked(index);
        };
    return (
        <>


    
      

 


    <section className="hero is-small is-white">
      <div className="hero-body">
        

        <div className="container-acco">
             <h1 className="accordin-head">Specification</h1>
            <div className='AccordionSectio '>
            <div className='Container'>
            {Data.map((item, index) => {
                return (
                <div>
                    <div className='Wrap' onClick={() => toggle(index)} key={index}>
                    <h1 class="accordin-que">{item.question}</h1>
                    <span>{clicked === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                    </div>
                    {clicked === index ? (
                    <div div className='Dropdown'>
                        <span><b style={{paddingRight:'5px'}}>Answer:</b> {item.answer1}</span>
                        <span><b style={{paddingRight:'5px'}}>Answer: </b>{item.answer2}</span>
                        <span><b style={{paddingRight:'5px'}}>Answer: </b>{item.answer3}</span>
                    </div>
                    ) : null}
                </div>
                );
            })}
            </div>
        </div>
      </div>
      </div>
      </section>


            
        </>
    );
}

            
