/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import NavBar from './NavBar'

const Contact = () => {
  return (
    <><NavBar />
      <div className="fcf-body">

        <div id="fcf-form">
          

          <form id="fcf-form-id" className="fcf-form-className" method="post" action="https://formsubmit.co/3a993680c81dc82770ee82de1d3c8b86">

            <div className="fcf-form-group">
              <label htmlFor="Name" className="fcf-label">Name</label>
              <div className="fcf-input-group">
                <input type="text" id="Name" name="Name" className="fcf-form-control" required />
              </div>
            </div>

            <div className="fcf-form-group">
              <label htmlFor="Email" className="fcf-label">Email</label>
              <div className="fcf-input-group">
                <input type="email" id="Email" name="Email" className="fcf-form-control" required />
              </div>
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Message" className="fcf-label">Message</label>
              <div className="fcf-input-group">
                <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxlength="3000" required></textarea>
              </div>
            </div>

            <div className="fcf-form-group">
              <button type="submit" id="fcf-button" className=" send-btn ">Send</button>
            </div>



          </form>
          
        </div>

      </div>
    </>
  )
}

export default Contact