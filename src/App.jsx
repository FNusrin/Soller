import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './image/soller.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div >
        <div>
          <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: "#ffffff", fontWeight: "bold", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>
            <a className='navbar-brand' href='#'>Soller</a>
            <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'>
              </span>
            </button>
            
            <div className='collapse navbar-collapse justify-content-between' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <a className='nav-item nav-link active' href='#'> Products  </a>
                <a className='nav-item nav-link' href='#'>Solutions</a>
                <a className='nav-item nav-link' href='#'>Services</a>
                <a className='nav-item nav-link' href='#'>Configure</a></div>
                <div className='d-flex'>
                  <a className='nav-item nav-link pt-2' href='#'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
                  </svg> 55 818 282</a>
                  <form className="form-inline px-4">
                    <button className="btn btn-warning-dark my-sm-1" style={{ backgroundColor: "#fcd34d", fontWeight: "600", borderRadius: "1em", color: "#78350f" }} type="submit">Request a Quote <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg> </button>
                  </form>
                  </div>
                
             
            </div>
          </nav>
        </div>
        <div className='row g-0'>
          <div className='col-lg-6 vh-100' id="text-part">
            <div>
              <div className='pt-5 px-5'>

                <h1 style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;", fontSize: "50px", fontWeight: "700", lineHeight: "1", fontStyle: "normal" }}>Get the Sun to<br />Power Your Home</h1>
              </div>

              <div className='px-5'>
                <p className='font-bold'> Solar panels convert the light from dun into usable solar energy, and then it is further converted as electrical power.<br />
                  Book a solar panel installation service and purchase a new solar panel roof for your home from the Electrical Junction company in Dubai, UAE.</p>
                <div className='px-3 pt-5'>
                  <p><a href="#" className="btn btn-colour-1" style={{ backgroundColor: "#fcd34d", fontWeight: "600", borderRadius: "1em", color: "#78350F" }}>Request a Quote
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg></a></p></div>

                <div className='px-3 pt-3' id='testimonial'>
                  <p><q>As a renewable source of power, solar energy has an important role in reducing greenhouse gas emissions and mitigating climate change, which is critical to protecting humans, wildlife, and ecosystems.</q></p>

                  <div className='media-img pt-3 px-3'><p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU" width="50px" height="50px"
                      alt="profile" />
                    <b> Jeremy Melflor</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-lg-6 vh-100' id="image-part">
            <img src={Image} style={{ height: "100%", width: "100%" }}></img>
          </div>
        </div >

      </div>
    </div>
  )
}

export default App
