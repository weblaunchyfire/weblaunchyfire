import { tickerItems } from "./templateData";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>{item}<span className="ticker-dot">◆</span></span>
        ))}
      </div>
    </div>
  );
}
