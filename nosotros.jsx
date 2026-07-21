/* Página NOSOTROS — AG_007 (textos definitivos del cliente) */
const { useState: useStateN, useEffect: useEffectN } = React;

/* ===================== S-01 · Hero de sección ===================== */
function SectionHero() {
  return (
    <section className="nb-hero" id="top">
      <div className="nb-hero__bg" />
      <div className="wrap nb-hero__wrap">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <I.arrow size={14} />
          <span className="cur">Nosotros</span>
        </nav>
        <div className="nb-hero__center">
          <span className="nb-hero__eyebrow">Quiénes somos</span>
          <h1>15 años construyendo una agricultura más eficiente</h1>
          <p>Empresa colombiana especializada en nutrición vegetal de precisión para el agro B2B.</p>
        </div>
      </div>
    </section>
  );
}

/* ===================== S-02 · Quiénes somos + Historia ===================== */
function AboutHistory() {
  const facts = [
    { num: '+15', label: 'años en el mercado' },
    { num: '8', label: 'líneas especializadas' },
    { num: '100%', label: 'cobertura nacional' },
  ];
  return (
    <section className="nb-history section-pad">
      <div className="wrap nb-history__grid">
        <Reveal className="nb-history__text">
          <span className="nb-label">Nuestra historia</span>
          <h2>De la idea al campo: 15 años de nutrición vegetal a la medida</h2>
          <span className="nb-rule" />
          <p>AgroBrokers nació con una convicción: el campo colombiano merecía fertilizantes diseñados para sus cultivos reales, no fórmulas genéricas importadas. Durante 15 años hemos construido un portafolio de ocho líneas especializadas — desde compuestos mezclados NPK hasta soluciones de liberación controlada — que responden a las necesidades específicas de los principales cultivos del país.</p>
          <p>Hoy operamos con cobertura nacional, respaldados por más de 30 registros ICA activos y un equipo técnico-comercial que acompaña al cliente desde el análisis de suelo hasta los resultados en campo. No vendemos insumos — construimos soluciones de nutrición vegetal.</p>
          <div className="nb-facts">
            {facts.map((f, i) => (
              <div className="nb-fact" key={i}>
                <span className="nb-fact__num">{f.num}</span>
                <span className="nb-fact__label">{f.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="nb-history__figure" delay={120}>
          <div className="nb-figure">
            <div className="nb-figure__ph">
              <I.package size={46} />
              <span>[ planta de producción / equipo en campo ]</span>
            </div>
            <span className="nb-figure__accent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== S-04 · Misión y Visión ===================== */
function MisionVision() {
  return (
    <section className="nb-mv section-pad">
      <div className="wrap nb-mv__grid">
        <Reveal className="nb-mv__card" as="article">
          <div className="nb-mv__icon"><I.target /></div>
          <span className="nb-label">Misión</span>
          <p>Ofrecer soluciones mediante productos que satisfagan los requerimientos y necesidades propios de cada cliente, entregando insumos y servicios a la medida del agro colombiano. Optimizamos costos y mejoramos la competitividad del sector para consolidarnos como la alternativa líder, integrando líneas de negocio que complementan la labor agrícola bajo lineamientos de calidad, ética y generación de valor para la sociedad.</p>
        </Reveal>
        <Reveal className="nb-mv__card" as="article" delay={110}>
          <div className="nb-mv__icon"><I.eye /></div>
          <span className="nb-label">Visión</span>
          <p>Para el año 2030, ser la mejor opción en el suministro de insumos agrícolas con cobertura a nivel nacional, reconocidos como aliados estratégicos para los productores del sector. Integraremos la cadena logística al campo, liderados por la innovación constante y el desarrollo de las mejores alternativas para el agricultor colombiano.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== S-05 · Valores ===================== */
const NB_VALUES = [
  { icon: 'flask', title: 'Rigor técnico', text: 'Cada recomendación parte de análisis científico del suelo y el cultivo. La intuición no reemplaza los datos.' },
  { icon: 'handshake', title: 'Alianza de largo plazo', text: 'No buscamos la venta puntual. Construimos relaciones comerciales duraderas con resultados medibles en campo.' },
  { icon: 'leaf', title: 'Sostenibilidad agrícola', text: 'Diseñamos soluciones que mejoran la productividad sin comprometer la salud del suelo ni del entorno.' },
  { icon: 'gear', title: 'Innovación aplicada', text: 'Incorporamos tecnología CRF, formulaciones activas y mezclas de precisión al servicio del agricultor colombiano.' },
  { icon: 'clipboard', title: 'Transparencia', text: 'Información técnica clara, trazable y verificable. Todos nuestros productos cuentan con registro ICA y análisis garantizado.' },
  { icon: 'award', title: 'Calidad garantizada', text: 'Estándares de calidad en cada etapa del proceso: formulación, mezcla, empaque y entrega.' },
];

function Values() {
  return (
    <section className="nb-values section-pad" id="valores">
      <div className="wrap">
        <div className="nb-head">
          <span className="nb-label center">Lo que nos guía</span>
          <h2 className="section-title">Nuestros valores</h2>
          <p className="section-sub">Los principios que orientan cada decisión técnica y comercial en AgroBrokers.</p>
        </div>
        <div className="nb-values__grid">
          {NB_VALUES.map((v, i) => {
            const Ic = I[v.icon];
            return (
              <Reveal key={i} className="nb-value" delay={(i % 3) * 80}>
                <div className="nb-value__icon"><Ic size={32} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== S-06 · Cobertura nacional ===================== */
const NB_REGIONS = [
  'Costa Caribe (Magdalena, Atlántico, Bolívar, Córdoba)',
  'Región Andina (Cundinamarca, Antioquia, Boyacá, Nariño)',
  'Llanos Orientales (Meta, Casanare, Vichada)',
  'Eje Cafetero (Caldas, Risaralda, Quindío)',
  'Pacífico y Suroccidente (Valle del Cauca, Cauca, Chocó)',
];

function Coverage() {
  const cities = [
    { name: 'Barranquilla', top: '16%', left: '40%' },
    { name: 'Santa Marta', top: '11%', left: '52%', main: true },
    { name: 'Medellín', top: '40%', left: '33%' },
    { name: 'Bogotá', top: '52%', left: '48%' },
    { name: 'Villavicencio', top: '54%', left: '60%' },
    { name: 'Cali', top: '66%', left: '30%' },
  ];
  const [hover, setHover] = useStateN(null);
  return (
    <section className="nb-coverage section-pad">
      <div className="wrap nb-coverage__grid">
        <Reveal className="nb-coverage__text">
          <span className="nb-label">Dónde operamos</span>
          <h2>Cobertura a nivel nacional</h2>
          <span className="nb-rule" />
          <p>AgroBrokers opera en todo el territorio colombiano. Desde la región Caribe hasta el piedemonte llanero, nuestro equipo técnico y nuestra red logística garantizan disponibilidad de productos y acompañamiento en campo donde el cliente lo necesite.</p>
          <ul className="nb-regions">
            {NB_REGIONS.map((r, i) => (
              <li key={i}><I.check size={17} /> <span>{r}</span></li>
            ))}
          </ul>
          <p className="nb-coverage__note">¿Necesita confirmar disponibilidad en su región? <a href="/contacto">Contáctenos.</a></p>
        </Reveal>
        <Reveal className="nb-coverage__map" delay={120}>
          <div className="nb-map">
            <div className="nb-map__icon"><I.map size={40} /></div>
            <span className="nb-map__label">[ Mapa de Colombia — cobertura nacional ]</span>
            {cities.map((c, i) => (
              <span
                key={i}
                className={'nb-map__pin ' + (c.main ? 'main' : '')}
                style={{ top: c.top, left: c.left }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <span className="nb-map__dot" />
                {hover === i && <span className="nb-map__tip">{c.name}</span>}
              </span>
            ))}
          </div>
          <p className="nb-map__seat"><I.pin size={15} /> Sede principal: Santa Marta, Magdalena</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== S-07 · Registros ICA ===================== */
const NB_FAM_COLOR = { GrowFlex: '#558B2F', NutriLimit: '#00796B', Solumix: '#0277BD', NovaMix: '#1565C0' };
const NB_ICA = [
  ['GrowFlex', 'GrowMix', '12-24-12-5(S)', '9153'],
  ['GrowFlex', 'Planter', '14-25-10-3,2 MgO', '10861'],
  ['GrowFlex', 'Perisson', '20-10-16-3,4 MgO', '10861'],
  ['GrowFlex', 'Comp. NPK', '13-5-27-5-0,5B', '10574'],
  ['GrowFlex', 'Comp. NPK', '12-24-12-5 CaO', '9153'],
  ['GrowFlex', 'Comp. NPK', '19-9-19', '9018'],
  ['GrowFlex', 'Comp. NPK', '27-6-6-2 CaO', '9019'],
  ['GrowFlex', 'Comp. NPK', '27-6-6', '9149'],
  ['GrowFlex', 'Comp. NPK', '25-4-24', '11456'],
  ['NutriLimit', 'BoroMix', '0-0-3-14B', '14070'],
  ['NutriLimit', 'Etibor 48', 'Bórax Pentahidratado', '7896'],
  ['NutriLimit', 'Borick K', 'Ácido Bórico', '9744'],
  ['NutriLimit', 'Boro + K', 'Bórax Pentahidratado', '9263'],
  ['Solumix', 'CalExact', '15-0-0-25 CaO', '13784'],
  ['NovaMix', 'N-Secured', 'Nitrógeno estabilizado', '10779'],
  ['NovaMix', 'Kieserita + K', '—', '9262'],
  ['NovaMix', 'Kieserita', '—', '7895'],
  ['NovaMix', 'KCL Granular', '—', '10073'],
  ['NovaMix', 'KCL Estándar', '—', '10073'],
  ['NovaMix', 'MAP', 'Fosfato Monoamónico', '10223'],
];

function IcaSection() {
  const badges = [
    { icon: 'shield', main: '+30 registros', sub: 'ICA activos' },
    { icon: 'clipboard', main: 'ICA Colombia', sub: 'Norma vigente' },
    { icon: 'leaf', main: 'Cobertura', sub: 'nacional' },
  ];
  return (
    <section className="nb-ica section-pad" id="ica">
      <div className="wrap">
        <div className="nb-head">
          <span className="nb-label center">Respaldo técnico y legal</span>
          <h2 className="section-title">Registros ICA activos</h2>
          <p className="section-sub">Todos nuestros productos con fórmulas registradas cuentan con resolución ICA vigente, garantizando cumplimiento normativo y trazabilidad técnica.</p>
        </div>

        <div className="nb-badges">
          {badges.map((b, i) => {
            const Ic = I[b.icon];
            return (
              <div className="nb-badge" key={i}>
                <div className="nb-badge__icon"><Ic size={34} /></div>
                <div className="nb-badge__main">{b.main}</div>
                <div className="nb-badge__sub">{b.sub}</div>
              </div>
            );
          })}
        </div>

        <h3 className="nb-ica__title">Detalle de registros por producto</h3>
        <div className="nb-table-wrap">
          <table className="nb-table">
            <thead>
              <tr><th>Familia</th><th>Producto</th><th>Fórmula</th><th>Registro ICA</th></tr>
            </thead>
            <tbody>
              {NB_ICA.map((r, i) => (
                <tr key={i}>
                  <td data-th="Familia"><span className="nb-fchip" style={{ '--c': NB_FAM_COLOR[r[0]] }}>{r[0]}</span></td>
                  <td data-th="Producto" className="nb-td-name">{r[1]}</td>
                  <td data-th="Fórmula">{r[2]}</td>
                  <td data-th="Registro ICA" className="nb-td-ica">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nb-ica__foot">Los registros ICA son públicamente verificables en el sistema de consulta del Instituto Colombiano Agropecuario (ICA). Vigentes al año 2026.</p>
      </div>
    </section>
  );
}

Object.assign(window, { SectionHero, AboutHistory, MisionVision, Values, Coverage, IcaSection });
