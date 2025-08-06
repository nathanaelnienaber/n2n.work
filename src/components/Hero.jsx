export default function Hero() {
  return (
    <header className="hero hero-left">
      <div className="container">
        <h1>
          Modern Tech
          <br />
          Smarter Operations
          <br />
          Same Great Business
        </h1>
        <p>
          Helping companies modernize systems and operations — without disrupting what’s already working.
        </p>
      <div className="buttons">
        <a
          href="mailto:hello@n2n.work?subject=Some20%Questions%20%&body=Hi%20Nathanael"
          className="btn primary"
        >
          Let’s Talk
        </a>
        <a 
          href="https://cal.com/nathanaelnienaber" target="_blank" rel="noopener noreferrer">
          <button className="btn outline">Book a Free Discovery Call</button>
        </a>
      </div>

      </div>
    </header>
  );
}
