/* Página BLOG — AG_009 */
const { useState: useStateB } = React;

const BL_CATS = {
  'Palma de aceite': { color: '#1B5E20', bg: 'linear-gradient(135deg,#2f6a31,#173d18)' },
  'Banano':          { color: '#F57F17', bg: 'linear-gradient(135deg,#d8a93a,#9a6f12)' },
  'Arroz':           { color: '#B8860B', bg: 'linear-gradient(135deg,#cdb56a,#8a6e26)' },
  'Maíz':            { color: '#E65100', bg: 'linear-gradient(135deg,#e0894a,#a8551a)' },
  'Suelos':          { color: '#4E342E', bg: 'linear-gradient(135deg,#a98e6f,#5d4037)' },
  'Casos de éxito':  { color: '#1565C0', bg: 'linear-gradient(135deg,#3a6b31,#1a3d16)' },
};
const catVars = (cat) => ({ '--cat': (BL_CATS[cat] || {}).color, '--cat-bg': (BL_CATS[cat] || {}).bg });

/* ===================== S-01 · Hero ===================== */
function BlHero() {
  return (
    <section className="bl-hero" id="top">
      <div className="wrap bl-hero__wrap">
        <nav className="breadcrumb" aria-label="Ruta de navegación" style={{ color: 'var(--muted)' }}>
          <a href="/" style={{ color: 'var(--muted)' }}>Inicio</a>
          <I.arrow size={14} />
          <span className="cur" style={{ color: 'var(--green)' }}>Blog</span>
        </nav>
        <div className="bl-hero__center">
          <span className="bl-hero__eyebrow">Conocimiento técnico al servicio del campo</span>
          <h1>Blog técnico agronómico</h1>
          <p>Artículos especializados en nutrición vegetal para palma de aceite, banano, arroz y maíz.</p>
          <form className="bl-search" onSubmit={(e) => e.preventDefault()} role="search">
            <I.search />
            <input type="search" placeholder="Buscar artículos por cultivo, nutriente o producto..." aria-label="Buscar artículos" />
          </form>
        </div>
      </div>
    </section>
  );
}

/* ===================== S-02 · Featured ===================== */
const BL_FEATURED = {
  cat: 'Palma de aceite',
  title: '¿Por qué usar fertilizantes de liberación controlada en viveros de palma?',
  excerpt: 'La etapa de vivero es crítica para el desarrollo de la palma africana. Una nutrición mal formulada en esta fase compromete el rendimiento de toda la plantación. Le explicamos por qué los CRF son la mejor inversión en esta etapa.',
  date: 'Abril 2024', read: '7 min',
};

function BlFeatured() {
  const f = BL_FEATURED;
  return (
    <section className="bl-feat">
      <div className="wrap">
        <Reveal className="bl-feat__card" as="article">
          <div className="bl-ph bl-feat__media" style={catVars(f.cat)}>
            <span className="bl-badge" style={{ background: 'var(--cat)' }}>{f.cat}</span>
            <span className="bl-ph__cap">[ foto cultivo de palma · 16:9 ]</span>
          </div>
          <div className="bl-feat__body">
            <div><span className="bl-badge" style={{ background: 'var(--cat)', ...catVars(f.cat) }}>Artículo destacado</span></div>
            <h2>{f.title}</h2>
            <p className="bl-feat__excerpt">{f.excerpt}</p>
            <div className="bl-feat__foot">
              <span className="bl-feat__meta">{f.date} · {f.read} de lectura</span>
              <span className="bl-cta">Leer artículo <I.arrow size={15} /></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== S-03 · Tabs + Grid ===================== */
const BL_TABS = ['Todos', 'Palma de aceite', 'Banano', 'Arroz', 'Maíz', 'Suelos'];
const BL_POSTS = [
  { cat: 'Banano', title: 'Maximizando el potencial del banano: una guía de nutrición por etapas', excerpt: 'Cada fase fenológica del banano demanda un balance nutricional distinto. Así se diseña un plan por etapas.', date: 'Mayo 2024', read: '9 min' },
  { cat: 'Suelos', title: 'La importancia del carbono orgánico oxidable en la agricultura', excerpt: 'El COox es un indicador clave de salud y fertilidad del suelo. Entender su rol mejora la eficiencia del manejo.', date: 'Julio 2024', read: '6 min' },
  { cat: 'Palma de aceite', title: 'Nutrición en etapa de producción de palma africana: claves para maximizar el rendimiento', excerpt: 'En plena producción, la palma exige un equilibrio preciso de potasio y magnesio. Revisamos las claves técnicas.', date: 'Marzo 2024', read: '8 min' },
  { cat: 'Maíz', title: 'Fertilización NPK en maíz tecnificado: dosis, momentos y fuentes', excerpt: 'El maíz responde a la fertilización fraccionada. Dosis, momentos de aplicación y fuentes recomendadas.', date: 'Enero 2024', read: '7 min' },
  { cat: 'Arroz', title: 'Manejo nutricional del arroz de riego: del trasplante a la maduración', excerpt: 'La nutrición del arroz de riego cambia en cada etapa. Una guía práctica del trasplante a la cosecha.', date: 'Febrero 2024', read: '8 min' },
  { cat: 'Suelos', title: 'Micronutrientes olvidados: el papel del boro y el zinc en la productividad', excerpt: 'Boro y zinc son determinantes y a menudo deficitarios. Cómo detectarlos y corregirlos a tiempo.', date: 'Junio 2024', read: '5 min' },
];

function BlCard({ p }) {
  return (
    <article className="bl-card" style={catVars(p.cat)}>
      <div className="bl-ph bl-card__media">
        <span className="bl-badge" style={{ background: 'var(--cat)' }}>{p.cat}</span>
        <span className="bl-ph__cap">[ foto {p.cat.toLowerCase()} ]</span>
      </div>
      <div className="bl-card__body">
        <div className="bl-card__meta">{p.date} · {p.read} de lectura</div>
        <h3>{p.title}</h3>
        <p className="bl-card__excerpt">{p.excerpt}</p>
        <span className="bl-cta">Leer más <I.arrow size={14} /></span>
      </div>
    </article>
  );
}

function BlGrid() {
  const [tab, setTab] = useStateB('Todos');
  const posts = tab === 'Todos' ? BL_POSTS : BL_POSTS.filter((p) => p.cat === tab);
  return (
    <section className="bl-grid-sec" id="articulos">
      <div className="wrap">
        <div className="bl-tabs" role="tablist" aria-label="Filtrar por categoría">
          {BL_TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t}
                    className={'bl-tab ' + (tab === t ? 'active' : '')} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="bl-grid">
          {posts.length ? posts.map((p, i) => <BlCard key={i} p={p} />)
            : <p className="bl-empty">No hay artículos en esta categoría todavía.</p>}
        </div>
        <div className="bl-more">
          <button className="btn btn-outline">Cargar más artículos</button>
          <span className="bl-more__count">Mostrando {posts.length} de 24 artículos</span>
        </div>
      </div>
    </section>
  );
}

/* ===================== S-04 · Casos de éxito ===================== */
const BL_CASOS = [
  { cat: 'Palma de aceite', prod: 'GrowFlex', title: 'Mejora en el desarrollo vegetativo de palma con Planter 14-25-10',
    desc: 'Finca palmera en el Magdalena Medio. Aplicación de Planter durante la etapa de levante con análisis de suelo previo realizado por el equipo AgroBrokers.',
    result: 'Mejora visible en el color y vigor del follaje a las 8 semanas de aplicación.' },
  { cat: 'Banano', prod: 'NutriLimit', title: 'Corrección de deficiencia de boro en banano tecnificado',
    desc: 'Productor de banano en la zona bananera del Magdalena. El diagnóstico foliar reveló deficiencia crítica de boro. Aplicación de BoroMix con seguimiento técnico quincenal.',
    result: 'Normalización de la síntesis de punta de cigarro en el 85% de las plantas en un ciclo.' },
];

function BlCasos() {
  return (
    <section className="bl-casos">
      <div className="wrap">
        <div className="bl-casos__head">
          <span className="eyebrow center">Casos de éxito</span>
          <h2>Resultados reales en campo</h2>
          <p>Aplicaciones exitosas de nuestros productos documentadas en clientes reales.</p>
        </div>
        <div className="bl-casos__grid">
          {BL_CASOS.map((c, i) => (
            <Reveal key={i} className="bl-caso" as="article" delay={i * 100}>
              <div className="bl-ph bl-caso__media" style={catVars(c.cat)}>
                <span className="bl-ph__cap">[ resultado en campo · {c.cat.toLowerCase()} ]</span>
              </div>
              <div className="bl-caso__body">
                <div className="bl-caso__badges">
                  <span className="bl-badge" style={catVars(c.cat)}>{c.cat}</span>
                  <span className="bl-prodbadge">{c.prod}</span>
                </div>
                <h3>{c.title}</h3>
                <p className="bl-caso__desc">{c.desc}</p>
                <div className="bl-caso__result">{c.result}</div>
                <span className="bl-cta">Leer caso completo <I.arrow size={15} /></span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="bl-casos__foot">
          <a href="#articulos" className="btn btn-outline-light">Ver todos los casos de éxito</a>
        </div>
      </div>
    </section>
  );
}

/* ===================== S-05 · Newsletter ===================== */
function BlNewsletter() {
  const [sent, setSent] = useStateB(false);
  const [agree, setAgree] = useStateB(false);
  return (
    <section className="bl-news">
      <div className="wrap bl-news__grid">
        <Reveal className="bl-news__text">
          <span className="eyebrow">Boletín técnico agronómico</span>
          <h2>Reciba nuestros artículos directamente en su correo</h2>
          <p>Suscríbase y reciba cada nuevo artículo técnico sobre nutrición vegetal, manejo de cultivos y novedades de AgroBrokers. Sin spam — solo contenido relevante para su labor.</p>
          <ul className="bl-benefits">
            {['Artículos técnicos mensuales por cultivo', 'Novedades del portafolio AgroBrokers', 'Casos de éxito y resultados en campo', 'Puede cancelar en cualquier momento'].map((b) => (
              <li key={b}><I.check size={18} /> <span>{b}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="bl-form" delay={120}>
          {sent ? (
            <div className="bl-success"><I.checkC size={22} /> ¡Bienvenido! Recibirá el próximo artículo técnico en su correo.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (agree) setSent(true); }}>
              <div className="field"><label>Nombre completo <span className="req" style={{ color: 'var(--green)' }}>*</span></label>
                <input type="text" placeholder="Nombre y apellidos" required /></div>
              <div className="field"><label>Correo electrónico corporativo <span className="req" style={{ color: 'var(--green)' }}>*</span></label>
                <input type="email" placeholder="correo@empresa.com" required /></div>
              <div className="field"><label>Cultivo de mayor interés</label>
                <select defaultValue=""><option value="" disabled>Seleccione un cultivo</option>
                  <option>Palma de aceite</option><option>Banano</option><option>Arroz</option><option>Maíz</option><option>Otro</option></select></div>
              <label className="bl-check"><input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
                <span>Acepto recibir el boletín y la <a href="/#sagrilaft">Política de Privacidad</a> (Ley 1581 de 2012).</span></label>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={!agree}>Suscribirme al boletín</button>
              <p className="bl-privacy">Sus datos son confidenciales y se usan exclusivamente para el envío del boletín. No compartimos su información con terceros.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== S-06 · Lead Magnets ===================== */
const BL_MAGNETS = [
  { badge: 'PALMA', cat: 'Palma de aceite', title: 'Guía de fertilización en viveros de palma africana', desc: 'Protocolo de nutrición desde la germinación hasta el trasplante. Incluye análisis de suelo, dosis recomendadas y cronograma de aplicación.', pages: '14 págs' },
  { badge: 'BANANO', cat: 'Banano', title: 'Manejo nutricional del banano por etapas fenológicas', desc: 'Guía práctica de nutrición para productores de banano tecnificado. Requerimientos por etapa, fuentes de nutrientes y dosis de referencia.', pages: '12 págs' },
  { badge: 'ARROZ', cat: 'Arroz', title: 'Plan de fertilización para arroz de riego', desc: 'Nutrición del arroz desde la preparación del suelo hasta la maduración. Basado en análisis de suelo y necesidades del cultivo.', pages: '10 págs' },
];

function BlLeadMagnets({ onDownload }) {
  return (
    <section className="bl-lead">
      <div className="wrap">
        <div className="bl-lead__head">
          <span className="eyebrow center">Recursos técnicos gratuitos</span>
          <h2 className="section-title">Guías técnicas para descarga</h2>
          <p className="section-sub">Material técnico desarrollado por el equipo agronómico de AgroBrokers. Descargue gratuitamente con su correo corporativo.</p>
        </div>
        <div className="bl-lead__grid">
          {BL_MAGNETS.map((m, i) => (
            <Reveal key={i} className="bl-magnet" delay={i * 90} style={catVars(m.cat)}>
              <span className="bl-magnet__icon"><I.fileText size={56} /></span>
              <span className="bl-badge" style={{ background: 'var(--cat)' }}>{m.badge}</span>
              <h3>{m.title}</h3>
              <p className="bl-magnet__desc">{m.desc}</p>
              <span className="bl-magnet__pages">{m.pages} · PDF</span>
              <button className="btn btn-outline" onClick={() => onDownload(m)}>Descargar guía</button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Download modal ===================== */
function BlDownloadModal({ guide, onClose }) {
  const [done, setDone] = useStateB(false);
  const [agree, setAgree] = useStateB(false);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = guide ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [guide, onClose]);
  React.useEffect(() => { if (guide) { setDone(false); setAgree(false); } }, [guide]);
  if (!guide) return null;
  return (
    <div className="modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} aria-label="Cerrar"><I.close /></button>
        {done ? (
          <div className="modal-success">
            <div className="modal-success__icon"><I.checkC size={38} /></div>
            <h3>Descarga iniciada</h3>
            <p>También le enviamos el documento «{guide.title}» a su correo corporativo.</p>
            <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
          </div>
        ) : (
          <React.Fragment>
            <div className="modal__head">
              <div className="bl-modal-icon"><I.fileText /></div>
              <h3>Descargue gratis: {guide.title}</h3>
              <p>Complete sus datos y reciba el PDF en su correo corporativo.</p>
            </div>
            <div className="modal__body">
              <form onSubmit={(e) => { e.preventDefault(); if (agree) setDone(true); }}>
                <div className="form-grid">
                  <div className="field full"><label>Nombre completo <span className="req">*</span></label><input type="text" placeholder="Nombre y apellidos" required /></div>
                  <div className="field"><label>Empresa <span className="req">*</span></label><input type="text" placeholder="Razón social" required /></div>
                  <div className="field"><label>Correo corporativo <span className="req">*</span></label><input type="email" placeholder="correo@empresa.com" required /></div>
                </div>
                <label className="bl-check"><input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
                  <span>Acepto la <a href="/#sagrilaft">Política de Privacidad</a> y el Tratamiento de Datos (Ley 1581 de 2012).</span></label>
                <button type="submit" className="btn btn-primary modal__submit" disabled={!agree}>Descargar ahora <I.arrow size={16} /></button>
              </form>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { BlHero, BlFeatured, BlGrid, BlCasos, BlNewsletter, BlLeadMagnets, BlDownloadModal });
