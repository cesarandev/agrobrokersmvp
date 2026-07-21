/* AG_005 · Vista 1 — Landing de Familias */
const { useState: useStateL } = React;

function FLBurst({ color }) {
  const petals = Array.from({ length: 16 });
  return (
    <svg className="fl-card__burst" viewBox="0 0 100 100" aria-hidden="true">
      <g transform="translate(50,50)">
        {petals.map((_, i) => {
          const a = (i / petals.length) * 360;
          const len = i % 2 === 0 ? 40 : 32;
          const op = i % 2 === 0 ? 0.5 : 0.28;
          return <rect key={i} x="-3.2" y={-len} width="6.4" height={len * 0.72} rx="3.2" transform={`rotate(${a})`} fill={color} opacity={op} />;
        })}
        <circle r="6" fill={color} opacity="0.85" />
      </g>
    </svg>
  );
}

function CatHead({ onSearch }) {
  const [q, setQ] = useStateL('');
  const submit = (e) => {
    e.preventDefault();
    window.location.href = '/marketplace' + (q.trim() ? '?q=' + encodeURIComponent(q.trim()) : '');
  };
  return (
    <section className="cat-head" id="top">
      <div className="wrap">
        <nav className="cat-head__crumb" aria-label="Ruta">
          <a href="/">Inicio</a>
          <I.arrow size={13} />
          <span className="cur">Productos</span>
        </nav>
        <div className="cat-head__inner">
          <h1>Nuestro Portafolio</h1>
          <p className="cat-head__sub">Ocho líneas de nutrición vegetal diseñadas para cubrir cada necesidad de su cultivo. Seleccione una familia para explorar el catálogo.</p>
          <form className="quick-search" onSubmit={submit} role="search">
            <I.search />
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por producto, fórmula o cultivo..." aria-label="Buscar" />
          </form>
        </div>
      </div>
    </section>
  );
}

function FamilyLandingCard({ fam }) {
  const href = '/marketplace?familia=' + fam.slug;
  const badgeColor = fam.badgeColor || fam.color;
  return (
    <a className="fl-card" href={href} data-screen-label={fam.name}>
      <div className="fl-card__img">
        <span className="fl-badge" style={{ background: badgeColor }}>{fam.badge}</span>
        {fam.img
          ? <img className="fl-card__prod" src={fam.img} alt={fam.name} loading="lazy" />
          : <React.Fragment>
              <FLBurst color="rgba(255,255,255,0.9)" />
              <span className="fl-card__ph">[ {fam.name} ]</span>
            </React.Fragment>}
      </div>
      <div className="fl-card__body">
        <span className="fl-card__name">{fam.name}</span>
        <span className="fl-card__tag">{fam.tagline}</span>
        <span className="fl-card__cta">Ver productos {fam.short} <I.arrow size={15} /></span>
      </div>
    </a>
  );
}

function FamiliesLanding() {
  return (
    <section className="fam-landing">
      <div className="wrap">
        <div className="fl-grid">
          {FAMILIES_FULL.map((fam) => <FamilyLandingCard key={fam.slug} fam={fam} />)}
        </div>
      </div>
    </section>
  );
}

/* Valor agregado para clientes: AgroPilot y demás servicios de acompañamiento,
   mostrados como beneficio adicional (sin destacar ninguno por encima de otro). */
const AV_ITEMS = [
  { icon: 'drone', title: 'AgroPilot — dron agrícola', text: 'Espectrometría, fumigación y aplicación de precisión desde el aire para grandes extensiones.' },
  { icon: 'flask', title: 'Análisis de suelo y foliar', text: 'Diagnóstico técnico del suelo y el follaje como base científica para el plan de fertilización.' },
  { icon: 'userCheck', title: 'Asesoría agronómica en campo', text: 'Acompañamiento técnico con profesionales especializados en cada cultivo, en cada etapa.' },
  { icon: 'clipboard', title: 'Plan de fertilización personalizado', text: 'Cronograma de aplicaciones y dosis por finca, cultivo y objetivo de rendimiento.' },
];

function AddedValueServices({ onQuote }) {
  return (
    <section className="added-value">
      <div className="wrap">
        <div className="added-value__head">
          <span className="sv-label center">Para clientes AgroBrokers</span>
          <h2 className="section-title">Acompañamiento técnico incluido en su relación con nosotros</h2>
          <p className="section-sub">Al adquirir nuestras líneas de nutrición vegetal, su cultivo cuenta además con este respaldo técnico como valor agregado.</p>
        </div>
        <div className="av-grid">
          {AV_ITEMS.map((s, i) => {
            const Ic = I[s.icon];
            return (
              <div className="av-card" key={i}>
                <span className="av-card__icon"><Ic size={22} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            );
          })}
        </div>
        <p className="av-foot">¿Ya es cliente y quiere conocer estos servicios? <a href={WA_URL} target="_blank" rel="noopener">Escríbanos por WhatsApp</a> o <button className="av-foot__btn" onClick={onQuote}>solicite una cotización</button>.</p>
      </div>
    </section>
  );
}

function CatCtaBand({ onQuote }) {
  return (
    <section className="cat-cta">
      <div className="wrap">
        <h2>¿Tiene una necesidad específica que no encaja en ninguna línea?</h2>
        <p>Nuestro equipo técnico diseña soluciones a la medida.</p>
        <div className="cat-cta__btns">
          <button className="btn btn-cream" onClick={onQuote}>Solicitar consulta técnica</button>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-wa"><I.wa size={17} /> Escribir por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CatHead, FamiliesLanding, AddedValueServices, CatCtaBand });
