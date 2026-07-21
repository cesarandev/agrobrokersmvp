/* S-06 Services · S-07 Blog · S-08 Testimonials · S-09 CTA Final · S-10 Footer */
const { useState, useEffect } = React;

const POSTS = [
  { cat: 'Palma de Aceite', catColor: '#1B5E20', date: 'Abril 2024', title: '¿Por qué usar fertilizantes de liberación controlada en viveros de palma?', excerpt: 'La tecnología CRF reduce pérdidas por lixiviación y asegura disponibilidad nutricional en cada etapa del vivero.', bg: 'linear-gradient(135deg,#2f6a31,#173d18)' },
  { cat: 'Banano', catColor: '#C79A12', date: 'Mayo 2024', title: 'Maximizando el potencial del banano: una guía de nutrición por etapas', excerpt: 'Cada fase fenológica del banano demanda un balance nutricional distinto. Así se diseña un plan por etapas.', bg: 'linear-gradient(135deg,#d8c98a,#a8923f)' },
  { cat: 'Suelos', catColor: '#5D4037', date: 'Julio 2024', title: 'La importancia del carbono orgánico oxidable en la agricultura', excerpt: 'El COox es un indicador clave de salud y fertilidad del suelo. Entender su rol mejora la eficiencia del manejo.', bg: 'linear-gradient(135deg,#a98e6f,#6f543b)' },
];

function Blog() {
  return (
    <section className="blog section-pad" id="blog">
      <div className="wrap">
        <div className="blog__head">
          <div className="left">
            <span className="eyebrow">Blog técnico</span>
            <h2 className="section-title">Conocimiento técnico al servicio del campo</h2>
          </div>
          <a href="/blog" className="btn btn-outline">Ver todos los artículos</a>
        </div>
        <div className="blog-grid">
          {POSTS.map((p, i) => (
            <Reveal key={i} className="post" as="article" delay={i * 90}>
              <div className="post__img" style={{ background: p.bg }}>
                <span className="post__cat" style={{ background: p.catColor }}>{p.cat}</span>
                <span className="ph">[ foto cultivo 16:9 ]</span>
              </div>
              <div className="post__meta">{p.date}</div>
              <h3>{p.title}</h3>
              <p className="post__excerpt">{p.excerpt}</p>
              <span className="post__more">Leer más <I.arrow size={14} /></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { text: 'Desde que implementamos los compuestos mezclados GrowFlex en nuestra plantación de palma, los rendimientos mejoraron notablemente en la primera cosecha.', name: 'Director Agrónomo', org: 'Empresa Palmera del Llano', crop: 'Palma de aceite · Meta', initials: 'PL' },
  { text: 'El acompañamiento técnico del equipo de AgroBrokers marcó la diferencia. No solo nos vendieron el fertilizante, nos construyeron el plan.', name: 'Gerente de Compras', org: 'Bananera del Magdalena', crop: 'Banano · Magdalena', initials: 'BM' },
  { text: 'La tecnología CRF de Chronos nos permitió reducir el número de aplicaciones manteniendo la nutrición constante. Un ahorro real en mano de obra.', name: 'Jefe de Campo', org: 'Agrícola San Isidro', crop: 'Aguacate Hass · Antioquia', initials: 'SI' },
  { text: 'Con los hidrosolubles Solumix nuestro sistema de fertirriego ganó precisión. El cultivo respondió con uniformidad y mejor calidad de fruta.', name: 'Ingeniera Agrónoma', org: 'Frutales del Cauca', crop: 'Cítricos · Valle del Cauca', initials: 'FC' },
  { text: 'El análisis de suelo y el plan de fertilización a la medida cambiaron nuestra forma de trabajar. Decisiones basadas en datos, no en costumbre.', name: 'Administrador', org: 'Hacienda La Esperanza', crop: 'Arroz · Tolima', initials: 'LE' },
  { text: 'NutriLimit corrigió la deficiencia de boro que arrastrábamos hace años. El equipo técnico estuvo en campo en cada etapa del proceso.', name: 'Propietario', org: 'Finca El Mirador', crop: 'Café · Huila', initials: 'EM' },
  { text: 'El servicio AgroPilot con dron nos dio una cobertura de aplicación que antes era imposible en nuestros lotes de ladera. Precisión total.', name: 'Gerente Técnico', org: 'Plantaciones del Quindío', crop: 'Plátano · Quindío', initials: 'PQ' },
  { text: 'ActiCoox mejoró la eficiencia del fósforo en suelos que tenían fijación alta. Vimos diferencia en el desarrollo radicular desde el primer ciclo.', name: 'Director de Producción', org: 'Agroindustria del Sinú', crop: 'Maíz · Córdoba', initials: 'AS' },
];

function Testimonials() {
  const PER_PAGE = 2;
  const pages = [];
  for (let i = 0; i < TESTIMONIALS.length; i += PER_PAGE) pages.push(TESTIMONIALS.slice(i, i + PER_PAGE));
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages.length), 5500);
    return () => clearInterval(id);
  }, [paused, pages.length]);

  return (
    <section className="testi section-pad">
      <div className="wrap">
        <div className="testi__head">
          <span className="eyebrow center">Casos de éxito</span>
          <h2 className="section-title">Resultados reales en campo</h2>
        </div>
        <div className="testi-carousel"
             onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="testi-track" style={{ transform: `translateX(-${page * 100}%)` }}>
            {pages.map((group, gi) => (
              <div className="testi-slide" key={gi} aria-hidden={gi !== page}>
                {group.map((t, i) => (
                  <article className="testi-card" key={i}>
                    <span className="testi-card__quote">&ldquo;</span>
                    <p>{t.text}</p>
                    <div className="testi-card__who">
                      <div className="testi-avatar">{t.initials}</div>
                      <div>
                        <div className="testi-card__name">{t.name} — {t.org}</div>
                        <div className="testi-card__crop">{t.crop}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="testi-dots" role="tablist" aria-label="Páginas de testimonios">
          {pages.map((_, i) => (
            <button key={i} className={'testi-dot ' + (i === page ? 'active' : '')}
                    role="tab" aria-selected={i === page}
                    aria-label={`Página ${i + 1} de ${pages.length}`}
                    onClick={() => setPage(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal({ onQuote }) {
  return (
    <section className="cta-final section-pad" id="contacto">
      <div className="wrap">
        <h2>¿Listo para transformar la nutrición de sus cultivos?</h2>
        <p>Hable con nuestro equipo técnico-comercial. Le respondemos en máximo 5 días hábiles.</p>
        <div className="cta-final__btns">
          <button className="btn btn-cream btn-lg" onClick={onQuote}>Solicitar cotización</button>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-wa btn-lg"><I.wa size={18} /> Escribir por WhatsApp</a>
        </div>
        <a className="cta-final__link" href="/contacto">Ver todas las formas de contacto <I.arrow size={15} /></a>
      </div>
    </section>
  );
}

function Footer() {
  const navLinks = ['Inicio','Nosotros','Productos','Blog','FAQ','SAGRILAFT','Contacto'];
  const legal = [['Política de Privacidad', '/sagrilaft'], ['Tratamiento de Datos (Ley 1581/12)', '/sagrilaft'], ['SAGRILAFT', '/sagrilaft']];
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__col footer__brand">
          <img src={RES('assets/logo-white.png')} alt="AgroBrokers" />
          <p>Soluciones de nutrición vegetal para una agricultura técnica, eficiente y sostenible.</p>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><I.linkedin /></a>
            <a href="#" aria-label="Instagram"><I.instagram /></a>
            <a href="#" aria-label="Facebook"><I.facebook /></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Navegación</h4>
          <nav>
            {navLinks.map((l) => <a key={l} href={navHref(l)}>{l}</a>)}
            {legal.map(([l, href]) => <a key={l} href={href} className="legal">{l}</a>)}
          </nav>
        </div>
        <div className="footer__col">
          <h4>Contacto</h4>
          <div className="footer__contact">
            <div className="row"><I.pin /><span><b>Oficina Principal y Planta</b><br/>Km 5.5 Vía alterna al Puerto, Parque Industrial Puerto del Sol, Bodega 1A. Santa Marta – Magdalena – Colombia</span></div>
            <div className="row"><I.mail /><a href="mailto:servicio.cliente@agrobrokers.com.co">servicio.cliente@agrobrokers.com.co</a></div>
            <div className="row"><I.phone /><a href={WA_URL} target="_blank" rel="noopener">+57 316 478 1412</a></div>
          </div>
        </div>
        <div className="footer__col footer__news">
          <h4>Boletín técnico</h4>
          <p>Reciba artículos técnicos sobre palma, banano, arroz y maíz directamente en su correo.</p>
          <form onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert('Gracias por suscribirse al boletín técnico de AgroBrokers.'); }}>
            <input type="email" placeholder="Ingrese su correo corporativo" required />
            <button type="submit" className="btn btn-primary">Suscribirse</button>
          </form>
        </div>
      </div>
      <div className="footer__bar">© 2026 AgroBrokers — INPUTS BROKERS GROUP S.A.S. Todos los derechos reservados.</div>
    </footer>
  );
}

Object.assign(window, { Blog, Testimonials, CtaFinal, Footer });
