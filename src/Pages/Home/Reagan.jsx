import React from 'react';
import { useNavigate } from 'react-router-dom';

function Reagan() {
  const navigate = useNavigate();

  // Function to navigate back to home
  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <nav className="reagan-nav">
        <button onClick={goBack}>Go Back</button>
      </nav>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Reagan Lowe</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              I'm a Web Developer with a portfolio of 22+ web applications, 23 if you count this one! Skilled in a range of front-end technologies including HTML, CSS, and JavaScript frameworks such as React.js, Vue.js, Angular, and Bootstrap. Experienced in back-end development using Node.js, Express.js, and MongoDB/MySQL for database management. Ability to Integrate APIs for enhanced performance. A collaborative team player dedicated to delivering high-quality applications <br />
              Outside of work and school, I enjoy playing soccer as well as training younger players!
            </p>
            <button
              className="btn btn-primary btn-bottom-right"
              onClick={() => {
                window.location.href = 'mailto:reaganrl14@gmail.com';
              }}
            >
              Get In Touch
            </button>
            <button className="btn btn-primary btn-resume">
              <a href="https://docs.google.com/document/d/1P8SPYDx4JpSWeVSNrZrFGdGvF2WPbHjAwIc7kPw10Ks/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View my Resume</a>
            </button>
          </div>
        </div>
        <div className="hero--section--img">
          <img src="./img/portfolio note.png" alt="Hero Section" />
        </div>
      </section>
      <div className='game-page-code'>
      <div className="code-cards-container">
  <div className="code-card">
    <div className="code-header">
      <div className="code-top">
        <div className="circle"><span className="red circle2"></span></div>
        <div className="circle"><span className="yellow circle2"></span></div>
        <div className="circle"><span className="green circle2"></span></div>
        <div className="title">
          <p id="title2">Education.jsx</p>
        </div>
      </div>
    </div>
    <div className="code-container">
    <pre className="code-display">// Spartanburg Methodist College</pre>
    <pre className="code-display">Major: Computer Science</pre>
    <pre className="code-display">// Student Athlete</pre>
    <pre className="code-display">// Skills and Relevant course work</pre>
    <pre className="code-display">Algorithmic Design</pre>
    <pre className="code-display"></pre>
    <pre className="code-display">Asymptotic analysis, Divide-and-conquer algorithms and recurrences,</pre>
    <pre className="code-display">Greedy algorithms, Data structures, Dynamic programming,</pre>
    <pre className="code-display"> Graph algorithms, Randomized algorithms</pre>
    <pre className="code-display">Intro to Computer Science</pre>
    <pre className="code-display"> Design algorithmic solutions to problems, Develop, implement,</pre>
    <pre className="code-display"> test, and document program code.</pre>
    </div>
  </div>
  <div className="code-card">
    <div className="code-header">
      <div className="code-top">
        <div className="circle"><span className="red circle2"></span></div>
        <div className="circle"><span className="yellow circle2"></span></div>
        <div className="circle"><span className="green circle2"></span></div>
        <div className="title">
          <p id="title2">Bootcamp.jsx</p>
        </div>
      </div>
    </div>
    <div className="code-container">
    <pre className="code-display">// University of Miami Full Stack Web Development</pre>
    <pre className="code-display">September 2023 - March 2024</pre>
    <pre className="code-display">// Skills and Relevant Course work</pre>
    <pre className="code-display">Programming Languages: JavaScript , HTML, CSS</pre>
    <pre className="code-display">Front-End Development: React.js, Vue.js, Angular, Bootstrap</pre>
    <pre className="code-display">Back-End Development: Node.js, Express.js, RESTful APIs, State, PWA</pre>
    <pre className="code-display">Concepts: Model-View-Controller, Object-Relational-Mapping,</pre>
    <pre className="code-display">Object Oriented programming</pre>
    <pre className="code-display">Database Management: MongoDB, MySQL, Insomnia</pre>
    <pre className="code-display">Other Tools: Visual Studio Code, npm, Heroku, Git, GitHub, GitLab</pre>
    <pre className="code-display">// Skills and Relevant Course work</pre>
    
    </div>
  </div>
</div>
</div>
<div className='code-background'>
<h2 className='code-title'> My Recent Projects </h2>
<div class="code-port-container">
  <a href="https://roomeo-54bd0cc57e2b.herokuapp.com/" class="code-port-card">
    <section id="code-port-card2" class="code-port-card-content">
      <img src="./img/roomeobg-code.png" alt="Description of the image" height="260" width="300"/>
    </section>
  </a>
</div>
<div class="code-port-container">
  <a href="https://echoes-of-astra.onrender.com/dreamInterpretation" class="code-port-card">
    <section id="code-port-card2" class="code-port-card-content">
      <img src="./img/astrabg-code (1).png" alt="Description of the image" height="260" width="300"/>
    </section>
  </a>
</div>
<div class="code-port-container">
  <a href="https://stark-coast-30123-1fdb6d955941.herokuapp.com/" class="code-port-card">
    <section id="code-port-card2" class="code-port-card-content">
      <img src="./img/techbg-code (1).png" alt="Description of the image" height="260" width="300"/>
    </section>
  </a>
</div>
<div class="code-port-container">
  <a href="https://dannysaravia001.github.io/Cryptos-and-Comics/" class="code-port-card">
    <section id="code-port-card2" class="code-port-card-content">
      <img src="./img/cryptobg-code (1).png" alt="Description of the image" height="260" width="300"/>
    </section>
  </a>
</div>
<div class="code-port-container">
  <a href="https://reagan1440.github.io/password-generator/" class="code-port-card">
    <section id="code-port-card2" class="code-port-card-content">
      <img src="./img/passbg-code.png" alt="Description of the image" height="260" width="300"/>
    </section>
  </a>
</div>
</div>
<div className="code-port-description-section">
  <h2>Project Descriptions</h2>
  <div className="code-port-card-description">
    <div className="project-description">
      <h2>Roomeo</h2>
      <p>This application, developed by my team and I, is a roommate matching website designed to find you the perfect roommate based in Miami. Simply sign up, fill out our detailed survey, and find your perfect roommate.</p>
    </div>
    <div className="project-description">
      <h2>Echos of Astra</h2>
      <p>Meet Astra, our AI dream interpreter. Astra allows you to save past interpretations and learns to recognize patterns within your dreams to give a more accurate interpretation every time you journal one. Developed collaboratively with my team, Astra represents our collective effort to enhance your dream analysis experience.</p>
    </div>
    <div className="project-description">
      <h2>Tech Blog</h2>
      <p>This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
    </div>
    <div className="project-description">
      <h2>Cryptos and Comics</h2>
      <p>I contributed to a team project creating a cryptocurrency tracker app that also features random jokes. Combining real-time crypto data with humor, our app offers an engaging and entertaining user experience.</p>
    </div>
    <div className="project-description">
      <h2>Password Generator</h2>
      <p>This application allows the user to randomly generate a password and choose if they wish to include capital letters, lowercase, numbers, or special characters.</p>
    </div>
  </div>
</div>
</div>


    
  );
}

export default Reagan;
