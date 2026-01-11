import { useState, useEffect } from 'react'
import './About.css'

function About() {
  const [visitorCount] = useState(Math.floor(Math.random() * 9999))

  useEffect(() => {
    // Easter egg: Change cursor to sparkle
    document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ctext y='20' font-size='20'%3E⭐%3C/text%3E%3C/svg%3E\"), auto"
    
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <div className="about-page">
      {/* Animated background */}
      <div className="about-bg"></div>
      
      {/* Main container */}
      <div className="about-container">
        
        {/* Header */}
        <div className="about-header">
          <div className="glitch-title" data-text="ROBERTO.DEV">
            ROBERTO.DEV
          </div>
          <div className="tagline-text">
            ✨ from south central to silicon valley ✨
          </div>
        </div>

        {/* Main content area */}
        <div className="about-main">
          
          {/* Left sidebar */}
          <aside className="about-sidebar">
            <div className="sidebar-section">
              <h3>⭐ QUICK LINKS</h3>
              <ul className="link-list">
                <li><a href="/">← Back to Map</a></li>
                <li><a href="mailto:recheverriasosa@ucsd.edu">📧 Email Me</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">💻 GitHub</a></li>
                <li><a href="https://linkedin.com/in/robertoecheverriasosa" target="_blank" rel="noreferrer">💼 LinkedIn</a></li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>🎵 NOW PLAYING</h3>
              <div className="now-playing">
                <div className="album-art">🎧</div>
                <div className="song-info">
                  <div className="song-title">Lofi Hip Hop</div>
                  <div className="song-artist">Coding Beats</div>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>📊 STATS</h3>
              <div className="stats-box">
                <div className="stat-item">
                  <span className="stat-label">GPA:</span>
                  <span className="stat-value">3.94</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Projects:</span>
                  <span className="stat-value">10+</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Coffee:</span>
                  <span className="stat-value">∞</span>
                </div>
              </div>
            </div>

            <div className="visitor-badge">
              <span className="visitor-icon">👁️</span>
              <span>Visitors: {visitorCount.toLocaleString()}</span>
            </div>
          </aside>

          {/* Main content */}
          <main className="about-content">
            <section className="intro-section">
              <h2>Welcome to my corner of the internet!</h2>
              <p className="intro-text">
                Yo! I'm <strong>Roberto Echeverria Sosa</strong>, a Data Science major at UC San Diego 
                with a passion for Machine Learning. I grew up in South Central LA and I'm all about 
                using tech to create opportunities for communities like mine.
              </p>
              <p className="intro-text">
                This site was created on January 11th, 2026 (probably while drinking coffee at 2 AM).
              </p>
            </section>

            <section className="facts-section">
              <h2>🌟 Quick Facts About Me:</h2>
              <ul className="facts-list">
                <li>🏠 I'm from <strong>South Central LA</strong> - the streets that built me</li>
                <li>🎓 Currently studying at <strong>UCSD</strong> (Class of 2027, GPA: 3.94)</li>
                <li>💻 My main languages are <strong>Python</strong>, <strong>Java</strong>, and <strong>JavaScript</strong></li>
                <li>🤖 I love <strong>Machine Learning</strong> and building things that actually help people</li>
                <li>🌊 I code best with ocean sounds in the background (San Diego perks!)</li>
                <li>⚡ I'm on the <strong>DS3 Software Board</strong> at UCSD</li>
                <li>📊 I once presented data science findings to 200+ people (no big deal 😎)</li>
                <li>🚗 I worked at <strong>Waymo</strong> on autonomous vehicle systems</li>
                <li>🏈 I built a Fantasy Football app with ML that predicts player performance</li>
                <li>💯 My motto: "From the streets to the code streets"</li>
              </ul>
            </section>

            <section className="projects-section">
              <h2>🚀 Featured Projects:</h2>
              <div className="project-grid">
                <div className="project-box">
                  <h3>🏈 Fantasy Football Draft App</h3>
                  <p>ML-powered draft assistant with 16,000+ NFL data points. Built custom projection system using Gradient Boosting (MAE = 0.52).</p>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>ML</span>
                    <span>APIs</span>
                  </div>
                </div>

                <div className="project-box">
                  <h3>📱 Food Vendor App</h3>
                  <p>MIT App Inventor project connecting street vendors to clients. Made during my time at Hack the Hood.</p>
                  <div className="project-tags">
                    <span>App Development</span>
                    <span>Social Impact</span>
                  </div>
                </div>

                <div className="project-box">
                  <h3>🚗 Waymo Navigation System</h3>
                  <p>Designed ultrasonic navigation for low-visibility conditions & solar-powered thermal regulation system.</p>
                  <div className="project-tags">
                    <span>IoT</span>
                    <span>Autonomous Vehicles</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="experience-section">
              <h2>💼 Where I've Been:</h2>
              <div className="timeline-simple">
                <div className="timeline-entry">
                  <span className="timeline-date">2024-Present</span>
                  <span className="timeline-role">Software Developer @ UCSD DS3</span>
                </div>
                <div className="timeline-entry">
                  <span className="timeline-date">Aug-Dec 2024</span>
                  <span className="timeline-role">Software Engineer Intern @ Waymo</span>
                </div>
                <div className="timeline-entry">
                  <span className="timeline-date">Jun-Aug 2024</span>
                  <span className="timeline-role">Data Science Researcher @ Hack the Hood</span>
                </div>
                <div className="timeline-entry">
                  <span className="timeline-date">May-Aug 2023</span>
                  <span className="timeline-role">Coding Instructor @ TechKnowHow</span>
                </div>
              </div>
            </section>

            <section className="skills-section">
              <h2>🛠️ Tech Stack:</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <div className="skill-pills">
                    <span>Python</span>
                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>R</span>
                    <span>HTML/CSS</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Frameworks & Tools</h4>
                  <div className="skill-pills">
                    <span>React</span>
                    <span>Pandas</span>
                    <span>NumPy</span>
                    <span>Matplotlib</span>
                    <span>Power BI</span>
                    <span>Tableau</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Other Skills</h4>
                  <div className="skill-pills">
                    <span>Machine Learning</span>
                    <span>Data Visualization</span>
                    <span>Agile</span>
                    <span>Git</span>
                    <span>Public Speaking</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="fun-section">
              <h2>🎨 Fun Stuff:</h2>
              <div className="fun-grid">
                <div className="fun-box">
                  <div className="fun-emoji">🌊</div>
                  <p>I literally code with ocean sounds playing. San Diego beaches hit different.</p>
                </div>
                <div className="fun-box">
                  <div className="fun-emoji">☕</div>
                  <p>Coffee consumption: probably unhealthy. Productivity: definitely worth it.</p>
                </div>
                <div className="fun-box">
                  <div className="fun-emoji">🎮</div>
                  <p>When I'm not coding, I'm either watching football or building apps about football.</p>
                </div>
                <div className="fun-box">
                  <div className="fun-emoji">🌟</div>
                  <p>Bilingual! English & Spanish. Code-switching is real.</p>
                </div>
              </div>
            </section>

            <section className="contact-section">
              <h2>📬 Let's Connect!</h2>
              <p>
                I'm always down to chat about tech, LA culture, data science, or just vibe. 
                Hit me up if you want to collaborate on something cool or just say what's up!
              </p>
              <div className="contact-buttons">
                <a href="mailto:recheverriasosa@ucsd.edu" className="contact-btn">
                  📧 Email Me
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-btn">
                  💻 GitHub
                </a>
                <a href="https://linkedin.com/in/robertoecheverriasosa" target="_blank" rel="noreferrer" className="contact-btn">
                  💼 LinkedIn
                </a>
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="about-footer">
          <div className="footer-content">
            <p>© 2026 Roberto Echeverria Sosa. Built with React, caffeine, and vibes.</p>
            <p className="footer-motto">💯 From South Central to UCSD 💯</p>
            <div className="footer-badges">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%234A90E2'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EREACT%3C/text%3E%3C/svg%3E" alt="React" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%23FF6B6B'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EUCSD%3C/text%3E%3C/svg%3E" alt="UCSD" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%237AC5F4'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='%230D1117' text-anchor='middle'%3EVIBES%3C/text%3E%3C/svg%3E" alt="Vibes" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default About