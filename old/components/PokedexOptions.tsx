export default function PokedexOptions() {
  return (
    <div id="options" className="content">
      <div>
        <button id="type-overlap-button">Prevent Type Overlap</button>
        <button id="gen-x-only-button" className="invisible"></button>
      </div>
      <div id="evaluate-team" className="invisible content">
        <button>Evaluate Team ↓</button>
      </div>
      <div id="hm-filters">
        <p>HMs:</p>
        <div id="hms"></div>
      </div>
    </div>
  );
}
