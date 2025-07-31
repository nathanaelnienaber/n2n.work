export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          {["Discover", "Diagnose", "Design", "Deliver"].map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-title">{step}</div>
              <div>{[
                "Deep dive into your current operations and systems",
                "Pinpoint what’s slowing you down or costing too much",
                "Create a roadmap for smarter systems and processes",
                "Guide your team through practical, phased implementation"
              ][index]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
