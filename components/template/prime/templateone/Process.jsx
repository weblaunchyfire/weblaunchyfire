import { processSteps } from "./templateData";

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-header">
        <div className="section-label"><span>How We Work</span></div>
        <h2 className="about-h2">Our Design <em>Process</em></h2>
      </div>
      <div className="process-steps">
        {processSteps.map(([num, name, desc]) => (
          <article className="process-step" key={name}>
            <div className="step-circle"><span className="step-num">{num}</span></div>
            <h3 className="step-name">{name}</h3>
            <p className="step-desc">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
