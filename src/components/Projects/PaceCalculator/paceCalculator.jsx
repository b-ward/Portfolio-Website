import { useEffect, useMemo, useState } from "react";

import ProjectPage from '../../Shared/ProjectPage';

const KM_PER_MILE = 1.609344;

export default function PaceCalcualtor() {
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("km");
  const [pacePref, setPacePref] = useState("per_km");
  const [hh, setHh] = useState("");
  const [mm, setMm] = useState("");
  const [ss, setSs] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search);
    const d = q.get("d");
    const u = q.get("u");
    const p = q.get("p");
    const H = q.get("H");
    const M = q.get("M");
    const S = q.get("S");
    if (d) setDistance(d);
    if (u === "km" || u === "mi") setUnit(u);
    if (p === "per_km" || p === "per_mile") setPacePref(p);
    if (H !== null) setHh(H);
    if (M !== null) setMm(M);
    if (S !== null) setSs(S);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (distance) params.set("d", distance);
    if (hh) params.set("H", hh);
    if (mm) params.set("M", mm);
    if (ss) params.set("S", ss);
    params.set("u", unit);
    params.set("p", pacePref);
    const next = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", next);
  }, [distance, unit, pacePref, hh, mm, ss]);

  const seconds = useMemo(() => {
    const H = Number(hh) || 0;
    const M = Number(mm) || 0;
    const S = Number(ss) || 0;
    if (M < 0 || M > 59 || S < 0 || S > 59 || H < 0) return null;
    return H * 3600 + M * 60 + S;
  }, [hh, mm, ss]);

  useEffect(() => {
    setError("");
  }, [distance, hh, mm, ss]);

  const calc = useMemo(() => {
    const d = Number(distance);
    if (!d || d <= 0) return { pace: "—", paceUnit: "", detail: "Enter values to see results." };
    if (seconds === null || seconds <= 0) return { pace: "—", paceUnit: "", detail: "Enter values to see results." };

    let secPerKm, secPerMile;
    if (unit === "km") {
      secPerKm = seconds / d;
      secPerMile = seconds / (d / KM_PER_MILE);
    } else {
      secPerMile = seconds / d;
      secPerKm = seconds / (d * KM_PER_MILE);
    }

    const fmt = (spu) => {
      if (!isFinite(spu) || spu <= 0) return "—";
      const mm = Math.floor(spu / 60);
      const ss = Math.round(spu % 60);
      return `${mm}:${String(ss).padStart(2, "0")}`;
    };

    const paceUnitText = pacePref === "per_km" ? "/km" : "/mile";
    const paceVal = pacePref === "per_km" ? fmt(secPerKm) : fmt(secPerMile);

    const detail = `Alt pace: ${fmt(secPerKm)} /km, ${fmt(secPerMile)} /mile`;

    return { pace: paceVal, paceUnit: paceUnitText, detail };
  }, [distance, seconds, unit, pacePref]);

  function onCalculate(e) {
    e?.preventDefault?.();
    const d = Number(distance);
    if (!d || d <= 0) return setError("Please enter a distance greater than 0.");
    if (seconds === null || seconds <= 0) return setError("Please enter a valid time.");
    setError("");
  }

  function onReset() {
    setDistance("");
    setUnit("km");
    setPacePref("per_km");
    setHh("");
    setMm("");
    setSs("");
    setError("");
  }

  function updateTime(digits) {
    const padded = digits.padStart(6, '0');
    setHh(digits ? padded.slice(0, 2) : '');
    setMm(digits ? padded.slice(2, 4) : '');
    setSs(digits ? padded.slice(4, 6) : '');
  }
  const timeDigits = [hh, mm, ss].map(value => value.padStart(2, '0')).join('').replace(/^0+/, '');

  return (
    <ProjectPage title="Pace Calculator" description="Enter a distance and finish time to work out your running pace." className="pace-page">
      <div className="tool-panel pace-panel">
        <form onSubmit={onCalculate} className="pace-form">
          <div className="pace-distance-row">
            <div className="field-group"><label htmlFor="distance">Distance</label><input id="distance" type="number" inputMode="decimal" min="0" step="any" placeholder="e.g. 10" value={distance} onChange={e => setDistance(e.target.value)} /></div>
            <fieldset><legend>Distance unit</legend><div className="chip-row"><Chip group="distance-unit" checked={unit === 'km'} onChange={() => setUnit('km')}>km</Chip><Chip group="distance-unit" checked={unit === 'mi'} onChange={() => setUnit('mi')}>miles</Chip></div></fieldset>
          </div>
          <div className="field-group">
            <label htmlFor="pace-time">Finish time</label>
            <TimerInput digits={timeDigits} onChange={updateTime} />
            <p id="pace-time-hint" className="field-hint">Hours : minutes : seconds. Type digits from the right — 14000 becomes 01:40:00.</p>
          </div>
          <fieldset><legend>Show pace as</legend><div className="chip-row"><Chip group="pace-unit" checked={pacePref === 'per_km'} onChange={() => setPacePref('per_km')}>min/km</Chip><Chip group="pace-unit" checked={pacePref === 'per_mile'} onChange={() => setPacePref('per_mile')}>min/mile</Chip></div></fieldset>
          <div className="form-actions"><button type="submit" className="button-primary">Calculate</button><button type="button" className="button-secondary" onClick={onReset}>Reset</button></div>
        </form>
        <section className="pace-result" aria-live="polite" aria-atomic="true">
          {error && <p className="form-error" role="alert">{error}</p>}
          <h2>Your pace</h2><p className="pace-value">{calc.pace}<span>{calc.paceUnit}</span></p><p className="field-hint">{calc.detail}</p>
        </section>
      </div>
    </ProjectPage>
  );
}
function Chip({ checked, onChange, children, group }) {
  return <label className={`unit-chip${checked ? ' is-selected' : ''}`}><input type="radio" name={group} checked={checked} onChange={onChange} /><span>{children}</span></label>;
}

function TimerInput({ digits, onChange }) {
  const padded = digits.padStart(6, '0');
  const display = [padded.slice(0, 2), padded.slice(2, 4), padded.slice(4, 6)].join(':');
  const moveToEnd = event => {
    const input = event.currentTarget;
    input.setSelectionRange(input.value.length, input.value.length);
  };
  function handleKey(event) {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const selectedAll = event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd === display.length;
    if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      const next = (selectedAll ? '' : digits) + event.key;
      if (next.length <= 6) onChange(next.replace(/^0+/, ''));
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      onChange(selectedAll ? '' : digits.slice(0, -1));
    }
  }
  return <input id="pace-time" className="timer-input" type="text" inputMode="numeric" autoComplete="off" spellCheck={false}
    value={display} aria-describedby="pace-time-hint" onKeyDown={handleKey} onFocus={moveToEnd} onClick={moveToEnd}
    onChange={event => onChange(event.target.value.replace(/\D/g, '').slice(-6).replace(/^0+/, ''))}
    onPaste={event => { event.preventDefault(); onChange(event.clipboardData.getData('text').replace(/\D/g, '').slice(-6).replace(/^0+/, '')); }} />;
}
