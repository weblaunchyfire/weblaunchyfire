import { awards } from "./templateData";

export default function Awards() {
  return (
    <div className="awards">
      {awards.map(([year, name, org]) => (
        <div className="award-item" key={name}><span className="award-year">{year}</span><span className="award-name">{name}</span><span className="award-org">{org}</span></div>
      ))}
    </div>
  );
}
