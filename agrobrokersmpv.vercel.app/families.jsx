/* S-03 Why Us · S-04 Families · S-05 Stats */

function WhyUs() {
  const items = [
  { icon: 'sprout', title: 'Nutrición vegetal diseñada a la medida del cultivo',
    text: 'Cada fórmula parte de un análisis técnico-científico del suelo y las necesidades reales del cultivo. Sin fórmulas genéricas.' },
  { icon: 'atom', title: 'Tecnología para mejorar la eficiencia de los nutrientes',
    text: 'Tecnología CRF, formulaciones activas y mezclas de precisión que maximizan la absorción y reducen pérdidas.' },
  { icon: 'handshake', title: 'Acompañamiento técnico-comercial con visión de campo',
    text: 'Equipo técnico que acompaña desde el diagnóstico hasta los resultados. No vendemos productos, construimos soluciones.' }];

  return (
    <section className="why section-pad" id="nosotros">
      <div className="wrap">
        <div className="why__head">
          <span className="eyebrow center">Por qué elegirnos</span>
          <h2 className="section-title">Más que un proveedor, un aliado técnico de su cultivo</h2>
        </div>
        <div className="why__grid">
          {items.map((it, i) => {
            const Ic = I[it.icon];
            return (
              <Reveal key={i} className="why__card" delay={i * 110}>
                <div className="why__icon" style={{ color: "rgb(177, 195, 23)" }}><Ic /></div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>);

          })}
        </div>
        <div className="why__foot">
          <a href="Nosotros.html" className="btn btn-outline">Saber más sobre nosotros <I.arrow size={16} /></a>
        </div>
      </div>
    </section>);

}

const FAMILIES = [
{ name: 'Tailored To', tag: 'Fórmulas diseñadas a la medida de cada finca y cultivo', color: 'var(--fam-tailored)', badge: 'A la medida', prod: 'assets/prod-tailoredto.png' },
{ name: 'Control Release', tag: 'Liberación controlada: el nutriente disponible en el momento exacto', color: 'var(--fam-chronos)', badge: 'A la medida', prod: 'assets/prod-chronos.png' },
{ name: 'ActiCOOX', tag: 'Fósforo y potasio de alta eficiencia: FosfoCox y ProduCox', color: 'var(--fam-acticoox)', badge: 'ActiCOOX', prod: 'assets/prod-acticoox.png' },
{ name: 'NutriLimit', tag: 'Elementos menores — boro y zinc para nutrición vegetal completa', color: 'var(--fam-nutrilimit)', badge: 'NutriLimit', prod: 'assets/prod-nutrilimit.png' },
{ name: 'NovaMix', tag: 'Fertilizantes simples de nueva generación y alta pureza', color: 'var(--fam-novamix)', badge: 'NovaMix', prod: null },
{ name: 'SoluMix', tag: 'Hidrosolubles de precisión para sistemas de fertirrigación', color: 'var(--fam-solumix)', badge: 'SoluMix', prod: null },
{ name: 'GrowFlex', tag: 'Compuestos mezclados NPK: marcas propias y genéricos para exigentes', color: 'var(--fam-growflex)', badge: 'GrowFlex', prod: 'assets/prod-growflex.png' },
{ name: 'CoverMax', tag: 'Semillas de cobertura para suelos saludables y sistemas silvopastoriles', color: 'var(--fam-covermax)', badge: 'CoverMax', prod: null }];


/* Brand-mark style burst (rounded-rect petals) for families without a product photo */
function Burst({ color }) {
  const petals = Array.from({ length: 16 });
  return (
    <svg className="fam-card__burst" viewBox="0 0 100 100" aria-hidden="true">
      <g transform="translate(50,50)">
        {petals.map((_, i) => {
          const a = i / petals.length * 360;
          const len = i % 2 === 0 ? 40 : 32;
          const op = i % 2 === 0 ? 0.5 : 0.28;
          return (
            <rect key={i} x="-3.2" y={-len} width="6.4" height={len * 0.72} rx="3.2"
            transform={`rotate(${a})`} fill={color} opacity={op} />);

        })}
        <circle r="6" fill={color} opacity="0.85" />
      </g>
    </svg>);

}

function FamilyCard({ fam, onQuote }) {
  return (
    <article className="fam-card" onClick={onQuote}>
      <div className="fam-card__img">
        <span className="fam-badge" style={{ background: fam.color }}>{fam.badge}</span>
        {fam.prod ?
        <img className="fam-card__prod" src={fam.prod} alt={fam.name} loading="lazy" /> :
        <React.Fragment>
              <Burst color="rgba(255,255,255,0.9)" />
              <span className="fam-card__ph">[ {fam.name} ]</span>
            </React.Fragment>}
      </div>
      <div className="fam-card__body">
        <span className="fam-card__name">{fam.name}</span>
        <span className="fam-card__tag">{fam.tag}</span>
        <span className="fam-card__cta">Ver productos <I.arrow size={15} /></span>
      </div>
    </article>);

}

function Families({ onQuote }) {
  return (
    <section className="families section-pad" id="productos">
      <div className="wrap">
        <div className="families__head">
          <span className="eyebrow center">Portafolio</span>
          <h2 className="section-title">Nuestro Portafolio</h2>
          <p className="section-sub">8 líneas de nutrición vegetal integral, diseñadas para cubrir cada necesidad de su cultivo. Seleccione la línea de su preferencia para explorar el catálogo.</p>
        </div>
        <div className="fam-grid">
          {FAMILIES.map((fam, i) => <FamilyCard key={i} fam={fam} onQuote={onQuote} />)}
        </div>
        <div className="families__foot">
          <a href="#productos" className="btn btn-outline">Ver todo el catálogo</a>
        </div>
      </div>
    </section>);

}

function Stats() {
  const data = [
  { n: 15, pre: '+', label: 'Años en el mercado' },
  { n: 8, pre: '', label: 'Líneas especializadas' },
  { n: 100, pre: '', suf: '%', label: 'Cobertura nacional' },
  { n: 50, pre: '+', label: 'Productos activos' }];

  return (
    <section className="stats" style={{ height: "400px", margin: "0px", padding: "120px 0px 0px", backgroundColor: "rgb(115, 129, 9)" }}>
      <div className="wrap">
        {data.map((d, i) => <Stat key={i} {...d} />)}
      </div>
    </section>);

}
function Stat({ n, pre = '', suf = '', label }) {
  const [ref, val] = useCountUp(n);
  return (
    <div className="stat">
      <div className="stat__num" ref={ref}>{pre}{val}{suf}</div>
      <div className="stat__label">{label}</div>
    </div>);

}

Object.assign(window, { WhyUs, Families, Stats });