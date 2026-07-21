/* Calculadora Tailored To — prototipo interactivo de fórmula a la medida */
const { useState: useStateC } = React;

const CALC_CROPS = [
  { name: 'Palma de aceite', base: [14, 7, 21] },
  { name: 'Banano', base: [12, 6, 24] },
  { name: 'Arroz', base: [18, 10, 10] },
  { name: 'Maíz', base: [15, 15, 15] },
  { name: 'Café', base: [17, 6, 18] },
  { name: 'Aguacate Hass', base: [10, 10, 20] },
  { name: 'Cítricos', base: [16, 8, 16] },
  { name: 'Otro cultivo', base: [15, 15, 15] },
];
const CALC_LEVELS = [
  { v: 'bajo', label: 'Bajo', factor: 1.25 },
  { v: 'medio', label: 'Medio', factor: 1.0 },
  { v: 'alto', label: 'Alto', factor: 0.7 },
];
const CALC_STEPS = ['Cultivo', 'Área', 'Análisis de suelo', 'Resultado'];

function CalcProgress({ step }) {
  return (
    <div className="calc-steps">
      {CALC_STEPS.map((s, i) => (
        <div className={'calc-step ' + (i === step ? 'active' : i < step ? 'done' : '')} key={s}>
          <span className="calc-step__n">{i < step ? <I.check size={14} /> : i + 1}</span>
          <span className="calc-step__label">{s}</span>
        </div>
      ))}
    </div>
  );
}

function CalcHero() {
  return (
    <section className="calc-hero" id="top">
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <I.arrow size={14} />
          <a href="/productos">Productos</a>
          <I.arrow size={14} />
          <span className="cur">Calculadora Tailored To</span>
        </nav>
        <span className="calc-hero__eyebrow"><I.gear size={15} /> Tailored To</span>
        <h1>Arme su fórmula de fertilización a la medida</h1>
        <p>Responda estas preguntas y obtenga una fórmula NPK de referencia para su cultivo. Es una estimación orientativa — la fórmula definitiva se ajusta con nuestro equipo técnico a partir de un análisis de suelo formal.</p>
      </div>
    </section>
  );
}

function calcResult(form) {
  const crop = CALC_CROPS.find((c) => c.name === form.crop) || CALC_CROPS[0];
  const fN = CALC_LEVELS.find((l) => l.v === form.n).factor;
  const fP = CALC_LEVELS.find((l) => l.v === form.p).factor;
  const fK = CALC_LEVELS.find((l) => l.v === form.k).factor;
  const n = Math.round(crop.base[0] * fN);
  const p = Math.round(crop.base[1] * fP);
  const k = Math.round(crop.base[2] * fK);
  const avg = (fN + fP + fK) / 3;
  const dose = Math.round(280 * avg / 10) * 10;
  const hectares = Number(form.hectares) || 1;
  const total = Math.round(dose * hectares);
  return { crop: crop.name, n, p, k, dose, total, hectares };
}

function CalcApp({ onQuote }) {
  const [step, setStep] = useStateC(0);
  const [form, setForm] = useStateC({ crop: '', hectares: '', n: '', p: '', k: '' });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = [
    !!form.crop,
    Number(form.hectares) > 0,
    !!form.n && !!form.p && !!form.k,
    true,
  ][step];

  const next = () => setStep((s) => Math.min(s + 1, CALC_STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const result = step === 3 ? calcResult(form) : null;

  return (
    <section className="calc-body">
      <div className="wrap calc-card">
        <CalcProgress step={step} />

        {step === 0 && (
          <div className="calc-panel">
            <h2>¿Cuál es su cultivo?</h2>
            <p className="calc-panel__sub">Seleccione el cultivo que quiere fertilizar.</p>
            <div className="calc-options">
              {CALC_CROPS.map((c) => (
                <button key={c.name} className={'calc-opt ' + (form.crop === c.name ? 'active' : '')} onClick={() => set('crop', c.name)}>
                  <I.leaf size={20} /> {c.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="calc-panel">
            <h2>¿Cuántas hectáreas va a fertilizar?</h2>
            <p className="calc-panel__sub">Esto nos permite estimar la cantidad total de producto requerida.</p>
            <div className="calc-field">
              <input type="number" min="1" step="1" placeholder="Ej. 12" value={form.hectares} onChange={(e) => set('hectares', e.target.value)} />
              <span>hectáreas</span>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="calc-panel">
            <h2>¿Cómo está su suelo según el último análisis?</h2>
            <p className="calc-panel__sub">Si no tiene un análisis reciente, elija "Medio" — nuestro equipo lo confirmará con una muestra en campo.</p>
            {['n', 'p', 'k'].map((k) => (
              <div className="calc-nutrient" key={k}>
                <span className="calc-nutrient__label">{k === 'n' ? 'Nitrógeno (N)' : k === 'p' ? 'Fósforo (P)' : 'Potasio (K)'}</span>
                <div className="calc-pills">
                  {CALC_LEVELS.map((l) => (
                    <button key={l.v} className={'calc-pill ' + (form[k] === l.v ? 'active' : '')} onClick={() => set(k, l.v)}>{l.label}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 3 && result && (
          <div className="calc-panel calc-result">
            <span className="calc-result__tag"><I.gear size={16} /> Fórmula sugerida</span>
            <h2 className="calc-result__formula">{result.n}-{result.p}-{result.k}</h2>
            <p className="calc-panel__sub">Para {result.crop.toLowerCase()} · {result.hectares} ha</p>
            <div className="calc-result__grid">
              <div className="calc-result__card">
                <span className="calc-result__num">{result.dose} kg</span>
                <span>por hectárea</span>
              </div>
              <div className="calc-result__card">
                <span className="calc-result__num">{result.total.toLocaleString('es-CO')} kg</span>
                <span>total estimado</span>
              </div>
            </div>
            <p className="calc-disclaimer">Esta es una estimación referencial generada automáticamente. La fórmula final —micronutrientes incluidos— se define con nuestro equipo técnico a partir de un análisis de suelo y foliar formal.</p>
            <div className="calc-result__ctas">
              <button className="btn btn-gold btn-lg" onClick={onQuote}>Solicitar cotización con esta fórmula</button>
              <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-wa-outline btn-lg"><I.wa size={17} /> Consultar por WhatsApp</a>
            </div>
          </div>
        )}

        <div className="calc-nav">
          {step > 0 && <button className="btn btn-outline" onClick={back}><I.arrowLeft size={16} /> Atrás</button>}
          {step < 3 && <button className="btn btn-primary" disabled={!canNext} onClick={next}>Siguiente <I.arrow size={16} /></button>}
          {step === 3 && <button className="btn btn-outline" onClick={() => { setStep(0); setForm({ crop: '', hectares: '', n: '', p: '', k: '' }); }}>Empezar de nuevo</button>}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CalcHero, CalcApp });
