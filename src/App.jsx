import { useState } from 'react'
import About from "./About";
import './App.css'
import "./About.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [isExiting, setIsExiting] = useState(false)

  const handleCityClick = (city) => {
    setSelectedCity(city)
  }

  const handleBack = () => {
    setIsExiting(true)
    setTimeout(() => {
      setSelectedCity(null)
      setIsExiting(false)
    }, 300)
  }

  return (
    <div className="app">
      {/* Background elements */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      {!selectedCity ? (
        <div className="home-container">
          {/* Header */}
          <header className="header">
            <div className="marquee">
              <span>✨ Welcome to Roberto's California Adventure ✨ Click on a city to explore! ✨</span>
            </div>
          </header>

          {/* Main content */}
          <main className="main-content">
            <div className="title-box">
              <h1 className="glitch" data-text="ROBERTO ECHEVERRIA SOSA">
                ROBERTO ECHEVERRIA SOSA
              </h1>
              <p className="subtitle">🌟 Full-Stack Developer 🌟</p>
              <p className="tagline">~ Journey Through California ~</p>
              <div className="home-cta">
                <button
                  className="about-btn"
                  onClick={() => setSelectedCity("about")}
                >
                  ✨ About Me ✨
                </button>
              </div>
            </div>

            {/* California Map */}
            <div className="map-container">
              <div className="map-wrapper">
                {/* User should place California_Map.png in their public folder or import it */}
                <img src="California_Map.png" alt="California Map" className="california-map-image" />
                
                {/* SF - Golden Gate Bridge - positioned on the map */}
                <div className="landmark-marker sf-marker" onClick={() => handleCityClick('sf')}>
                  <svg width="60" height="40" viewBox="0 0 60 40">
                    {/* Bridge base */}
                    <rect x="5" y="25" width="50" height="4" fill="#FF6347" className="landmark-icon"/>
                    {/* Left tower */}
                    <rect x="12" y="5" width="4" height="24" fill="#FF6347" className="landmark-icon"/>
                    <line x1="14" y1="5" x2="14" y2="0" stroke="#FF6347" strokeWidth="2" className="landmark-icon"/>
                    {/* Right tower */}
                    <rect x="44" y="5" width="4" height="24" fill="#FF6347" className="landmark-icon"/>
                    <line x1="46" y1="5" x2="46" y2="0" stroke="#FF6347" strokeWidth="2" className="landmark-icon"/>
                    {/* Cables */}
                    <path d="M 14 8 Q 30 12 46 8" stroke="#FF6347" strokeWidth="1" fill="none" className="landmark-icon"/>
                    <path d="M 14 10 Q 30 14 46 10" stroke="#FF6347" strokeWidth="1" fill="none" className="landmark-icon"/>
                  </svg>
                  <span className="landmark-label">San Francisco</span>
                </div>

                {/* LA – Griffith Observatory (pixel-art style) */}
                <div
                  className="landmark-marker la-marker"
                  onClick={() => handleCityClick("la")}
                >
                  <svg width="60" height="50" viewBox="0 0 60 50">
                    {/* Base */}
                    <rect x="10" y="35" width="40" height="10" fill="#ffffffff" />

                    {/* Left wing */}
                    <rect x="10" y="30" width="12" height="5" fill="#463202ff" />
                    <rect x="12" y="28" width="8" height="2" fill="#463202ff"  />

                    {/* Right wing */}
                    <rect x="38" y="30" width="12" height="5" fill="#463202ff"  />
                    <rect x="40" y="28" width="8" height="2" fill="#463202ff"  />

                    {/* Center building */}
                    <rect x="24" y="25" width="12" height="10" fill="#ffffffff"  />

                    {/* Center dome (pixel-style blocks) */}
                    <rect x="27" y="20" width="6" height="3" fill="#463202ff"  />
                    <rect x="25" y="32" width="10" height="3" fill="#10633bff"  />
                    <rect x="24" y="22" width="6" height="3" fill="#463202ff"  />
                    <rect x="30" y="22" width="3" height="3" fill="#463202ff"  />
                    <rect x="33" y="22" width="3" height="3" fill="#463202ff"  />

                    {/* Entrance */}
                    <rect x="28" y="36" width="4" height="7" fill="#183e03ff" />
                  </svg>

                  <span className="landmark-label">Los Angeles</span>
                </div>


                {/* SD - Geisel Library - positioned on the map */}
                <div className="landmark-marker sd-marker" onClick={() => handleCityClick('sd')}>
                  <svg width="50" height="50" viewBox="0 0 50 50">
                    {/* Small base */}
                    <rect x="17" y="36" width="15" height="8" fill="#3f4245ff" />

                    {/* Mid floors (inverted pyramid) */}
                    <rect x="10" y="30" width="29" height="6" fill="#5AA5E8" stroke="#64676dff" strokeWidth="0.5" />
                    <rect x="6" y="22" width="37" height="8" fill="#6AB5EE" stroke="#64676dff" strokeWidth="0.5"/>
                    <rect x="10" y="16" width="29" height="6" fill="#7AC5F4" stroke="#64676dff" strokeWidth="0.5"/>

                    {/* Small top floors */}
                    <rect x="16" y="10" width="17" height="6" fill="#88C5F7" stroke="#64676dff" strokeWidth="0.5"/>
                    <rect x="19" y="6" width="11" height="4" fill="#88C5F7" stroke="#64676dff" strokeWidth="0.5"/>

                    {/* Pixel windows (vertical lines) */}
                    <rect x="14" y="16" width="0.75" height="20" fill="#64676dff" />
                    <rect x="18" y="10" width="0.75" height="26" fill="#64676dff" />
                    <rect x="22" y="6" width="0.75" height="30" fill="#64676dff" />
                    <rect x="26" y="6" width="0.75" height="30" fill="#64676dff" />
                    <rect x="30" y="10" width="0.75" height="26" fill="#64676dff" />
                    <rect x="34" y="16" width="0.75" height="20" fill="#64676dff" />
                  </svg>

                  <span className="landmark-label">San Diego</span>
                </div>
              </div>

              <div className="instructions">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ctext y='25' font-size='25'%3E👆%3C/text%3E%3C/svg%3E" alt="click" />
                <span>Click on the landmarks!</span>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="footer">
            <div className="visitor-counter">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ctext y='16' font-size='16'%3E👁️%3C/text%3E%3C/svg%3E" alt="views" />
              <span>Visitors: ∞</span>
            </div>
            <p>Made with 💖 in California | Est. 2024</p>
            <div className="badges">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%234A90E2'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EREACT%3C/text%3E%3C/svg%3E" alt="React" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%237AC5F4'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='%230D1117' text-anchor='middle'%3EVIBES%3C/text%3E%3C/svg%3E" alt="Vibes" />
            </div>
          </footer>
        </div>
      ) : (
        <div className={`detail-page ${isExiting ? 'exit' : ''}`}>
          <button className="back-button" onClick={handleBack}>
            ← BACK TO MAP
          </button>

          {selectedCity === "about" && <About />}

          {selectedCity === 'sf' && (
            <div className="city-content">
              <div className="content-header">
                <h2>🌉 SAN FRANCISCO 🌉</h2>
                <div className="underline"></div>
              </div>

              <div className="content-body">
                <div className="section-box">
                  <h3>🎯 Hack the Hood - Data Science Researcher</h3>
                  <div className="project-card">
                    <p className="description">
                      Oakland, CA | June 2024 - August 2024
                    </p>
                    <ul className="highlights">
                      <li>📊 Keynote Speaker presenting Mergers and Acquisitions Data Science project findings on 14,000 data points</li>
                      <li>📈 Utilized data visualization techniques to communicate findings to a group of 200+ people effectively</li>
                      <li>📱 Used MIT App Inventor to create a functioning food vendor app that connects street vendors to clients</li>
                    </ul>
                    <div className="tags">
                      <span className="tag">Data Science</span>
                      <span className="tag">Public Speaking</span>
                      <span className="tag">App Development</span>
                      <span className="tag">MIT App Inventor</span>
                    </div>
                  </div>
                </div>

                <div className="section-box">
                  <h3>👨‍💻 TechKnowHow - Coding Instructor</h3>
                  <div className="project-card">
                    <p className="description">
                      Oakland, CA | May 2023 - August 2023
                    </p>
                    <ul className="highlights">
                      <li>📚 Instructed 200+ students in tech-focused summer camps, fostering a passion for computer science</li>
                      <li>🎓 Adapted curriculum in LEGO, Robotics, Scratch, and Java to diverse skill levels</li>
                      <li>💡 Translated complex tech concepts into understandable terms, promoting creative problem-solving</li>
                    </ul>
                    <div className="tags">
                      <span className="tag">Teaching</span>
                      <span className="tag">Java</span>
                      <span className="tag">Robotics</span>
                      <span className="tag">Scratch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCity === 'la' && (
            <div className="city-content">
              <div className="content-header">
                <h2>🌴 LOS ANGELES 🌴</h2>
                <div className="underline"></div>
              </div>

              <div className="content-body">
                <div className="section-box story-box">
                  <h3>🏠 Growing Up in South Central</h3>
                  <div className="story-content">
                    <p>
                      Born and raised in South Central LA, I learned early on the power of resilience, 
                      community, and dreaming big. The streets that shaped me taught me to see challenges 
                      as opportunities and to never forget where I came from.
                    </p>
                    <p>
                      South Central gave me my drive, my hustle, and my commitment to using technology 
                      to create opportunities for communities like mine. Every line of code I write is 
                      a tribute to the neighborhood that made me who I am.
                    </p>
                    <div className="quote">
                      "From the streets to the code streets 💯"
                    </div>
                  </div>
                </div>

                <div className="section-box highlight-box">
                  <h3>🚗 Waymo Career Institute - Software Engineer Intern</h3>
                  <div className="project-card">
                    <p className="description">
                      Los Angeles, CA | August 2024 - December 2024
                    </p>
                    <ul className="highlights">
                      <li>🌪️ Conceived and designed an ultrasonic navigation system enabling safe maneuvering through low-visibility sandstorms</li>
                      <li>☀️ Created a solar-powered thermal regulation system to stabilize sensor performance under extreme temperatures</li>
                      <li>💾 Created a virtual network of clients, servers, and a firewall security for 50 GB of cloud storage using VirtualBox</li>
                      <li>🌐 Developed a helpdesk website using GoDaddy AI Website Builder to manage ticketed requests</li>
                    </ul>
                    <div className="tags">
                      <span className="tag">Autonomous Vehicles</span>
                      <span className="tag">VirtualBox</span>
                      <span className="tag">Cloud Storage</span>
                      <span className="tag">Web Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCity === 'sd' && (
            <div className="city-content">
              <div className="content-header">
                <h2>🏖️ SAN DIEGO 🏖️</h2>
                <div className="underline"></div>
              </div>

              <div className="content-body">
                <div className="section-box">
                  <h3>🎓 UC San Diego</h3>
                  <div className="project-card">
                    <p className="description">
                      La Jolla, CA | Expected Graduation: June 2027 | GPA: 3.94
                    </p>
                    <ul className="highlights">
                      <li>📖 Bachelor of Science in Data Science - Machine Learning Track</li>
                      <li>💻 Relevant Coursework: Data Structures & Algorithms (Java), Applied Python, Foundations of Data Science</li>
                      <li>🏆 Active in campus tech community and leadership roles</li>
                    </ul>
                    <div className="tags">
                      <span className="tag">Data Science</span>
                      <span className="tag">Machine Learning</span>
                      <span className="tag">Java</span>
                      <span className="tag">Python</span>
                    </div>
                  </div>
                </div>

                <div className="section-box highlight-box">
                  <h3>💼 UCSD Data Science Student Society (DS3) - Software Developer</h3>
                  <div className="project-card">
                    <p className="description">
                      La Jolla, CA | September 2025 - Present
                    </p>
                    <ul className="highlights">
                      <li>💻 Utilized best coding practices to write clean code and create front-end user interfaces for the DS3 website</li>
                      <li>🏃 Leveraged agile methodologies in weekly sprints to optimize production time</li>
                      <li>🤝 Collaborate with team members to build the data science community at UCSD</li>
                    </ul>
                    <div className="tags">
                      <span className="tag">Leadership</span>
                      <span className="tag">Front-End</span>
                      <span className="tag">Agile</span>
                      <span className="tag">Web Development</span>
                    </div>
                  </div>
                </div>

                <div className="section-box">
                  <h3>🏈 Fantasy Football Draft App</h3>
                  <div className="project-card">
                    <p className="description">
                      ML & Software Engineering Project | August 2025 - September 2025
                    </p>
                    <ul className="highlights">
                      <li>📊 Processed 16,000+ rows of NFL data covering 3 seasons, 300+ players, and 16+ weekly performance features via automated NFL data API pipelines</li>
                      <li>🤖 Developed a custom Fantasy Point Projection system using Gradient Boosting Regressor, achieving MAE = 0.52</li>
                      <li>🎮 Built a full-stack draft interface with interactive player stats and highlight video playback for each drafted player</li>
                    </ul>
                    <div className="tags">
                      <span className="tag">Machine Learning</span>
                      <span className="tag">Full-Stack</span>
                      <span className="tag">Python</span>
                      <span className="tag">APIs</span>
                    </div>
                  </div>
                </div>

                <div className="fun-fact">
                  <p>🌊 Fun Fact: I code best with ocean sounds in the background!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App