import React, {  useState } from "react";
import { Fade, Slide } from "react-reveal";

export default function Contact({data}) {
 
  const [mes, setmes] = useState({
    name:"",
    email:"",
    message:""
  })
  if (!data) return null;
  

    
    
    
  return (
    <section id="contact">
    <Fade bottom duration={1000}>
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data.contactmessage}</p>
        </div>
      </div>
    </Fade>

    <div className="row">
      <Slide left duration={1000}>
        <div className="eight columns">
          
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={mes.name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e)=>setmes({...mes,name:e.target.value})}
                 
                />
              </div>    
              

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="3"
                  value={mes.message}
                  id="contactMessage"
                  name="contactMessage"
                  onChange={(e)=>setmes({...mes,message:e.target.value})}
                ></textarea>
              </div>

              <div>
                <button  className="submit">
                <a href={`mailto:abhhishekshah4010@gmail.com?subject=message from ${mes.name}&body=${mes.message}`}>Submit</a>
                </button>
               
              </div>
           

         
        </div>
      </Slide>

      <Slide right duration={1000}>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              
               {data.address.state}<br />
               {data.address.country}-{data.address.zip}
              <br />
              <span>{data.phone}</span>
            </p>
          </div>

          
        </aside>
      </Slide>
    </div>
  </section>
  )
}
