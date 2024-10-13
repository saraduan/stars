import logo from './logo.svg';
import './App.css';
import "./stars.css"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">matcha</div>
          <ul>
            <li><a href="#projects">projects</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#team">team</a></li>
            <li><a href="#contact" className="contact-button">contact us</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="left">
          <h1>Make something great</h1>
          <button className="cta-button">Let's go</button>
        </div>
        <div className="right">
          <img src="https://via.placeholder.com/300" alt="Man in motion" />
        </div>
      </section>

      <section className="info">
        <div className="info-box">
          <p>This example is inspired by the work of Halo Lab, a design agency based in Ukraine.</p>
          <small>dribbble.com/halolab</small>
        </div>
        <div className="info-box">
          <p>We help businesses to make their brands shine on all platforms.</p>
          <small>MEET OUR DESIGNERS</small>
        </div>
        <div className="info-box">
          <img src="https://via.placeholder.com/100" alt="Color gradient example" />
        </div>
      </section>
    </div>
  );
}

export default App;
