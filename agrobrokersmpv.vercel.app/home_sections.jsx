/* Home-only sections — loaded only by AgroBrokers Homepage.html
   ProductsHome (summarized portafolio) · FaqHome (preview) · SagrilaftHome (summary, pending) */

const PHERO_CHIPS = ['Tailored To', 'Control Release', 'ActiCOOX', 'NutriLimit', 'NovaMix', 'SoluMix', 'GrowFlex', 'CoverMax'];
const PHERO_PRODS = [
  'assets/prod-nutrilimit.png',
  'assets/prod-tailoredto.png',
  'assets/prod-chronos.png',
  'assets/prod-growflex.png',
  'assets/prod-acticoox.png',
];

function ProductsHome({ onQuote }) {
  return (
    <section className="phero section-pad" id="productos">
      <div className="wrap phero__grid">
        <Reveal className="phero__text">
          <span className="eyebrow">Portafolio</span>
          <h2 className="section-title">Ocho líneas especializadas para la nutrición de su cultivo</h2>
          <p>8 líneas de nutrición vegetal integral, diseñadas para cubrir cada necesidad de su cultivo. Seleccione la línea de su preferencia para explorar el catálogo.</p>
          <div className="phero__chips">
            {PHERO_CHIPS.map((c) => <span className="phero__chip" key={c}>{c}</span>)}
          </div>
          <div className="phero__cta">
            <a href="Productos.html" className="btn btn-primary btn-lg">Ver portafolio completo <I.arrow size={16} /></a>
            <button className="btn btn-outline btn-lg" onClick={onQuote}>Solicitar cotización</button>
          </div>
        </Reveal>
        <Reveal className="phero__art" delay={120}>
          <span className="phero__tag"><I.shield /> 8 líneas · +50 productos</span>
          <div className="phero__shelf">
            {PHERO_PRODS.map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const HOME_FAQS = [
  { q: '¿Qué significa que un fertilizante tenga Registro ICA?', a: 'El Registro ICA certifica que el producto fue analizado y cumple con la composición nutricional declarada en la etiqueta. Es el aval legal y técnico que garantiza que el producto que compra es exactamente lo que dice ser. Todos los productos registrados de AgroBrokers pueden verificarse en el sistema público del ICA.' },
  { q: '¿Qué es un fertilizante de liberación controlada (CRF)?', a: 'Es un fertilizante recubierto con una membrana polimérica que libera los nutrientes de forma gradual según la temperatura del suelo, reduciendo pérdidas por lixiviación y volatilización. La línea Control Release de AgroBrokers es nuestra propuesta en esta tecnología.' },
  { q: '¿Cuál es el tiempo de respuesta después de enviar una solicitud?', a: 'Nuestro equipo comercial responde en máximo 5 días hábiles. Para consultas urgentes, le recomendamos usar nuestro canal de WhatsApp Business (+57 316 478 1412).' },
  { q: '¿Tienen cobertura de entrega en todo el país?', a: 'Sí. AgroBrokers tiene cobertura logística a nivel nacional. El tiempo y costo de entrega varía según la región y el volumen del pedido. Indíquenos su ubicación al cotizar para incluir este detalle en la propuesta.' },
];

function FaqHome() {
  return (
    <section className="home-faq section-pad" id="faq">
      <div className="wrap">
        <div className="home-faq__head">
          <span className="eyebrow center">Preguntas frecuentes</span>
          <h2 className="section-title">Resolvemos sus dudas</h2>
          <p className="section-sub">Preguntas comunes sobre nuestros productos, servicios y procesos de compra.</p>
        </div>
        <div className="home-faq__acc">
          <Accordion items={HOME_FAQS} startOpen={0} />
        </div>
        <div className="home-faq__foot">
          <a href="FAQ.html" className="btn btn-outline">Ver todas las preguntas frecuentes <I.arrow size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function SagrilaftHome() {
  return (
    <section className="home-sag section-pad" id="sagrilaft">
      <div className="wrap">
        <Reveal className="home-sag__inner">
          <div className="home-sag__icon"><I.shield size={34} /></div>
          <span className="eyebrow">Transparencia y cumplimiento</span>
          <h2>SAGRILAFT</h2>
          <p>INPUTS BROKERS GROUP S.A.S. (AgroBrokers) ha implementado su Sistema de Autocontrol y Gestión del Riesgo Integral de Lavado de Activos y Financiación del Terrorismo (SAGRILAFT), en cumplimiento de la normativa de la Superintendencia de Sociedades. Nos comprometemos con la legalidad, la transparencia y el rechazo absoluto a cualquier práctica relacionada con el lavado de activos o la financiación de actividades ilícitas.</p>
          <a className="home-sag__mail" href="mailto:denuncias@agrobrokers.com.co">
            <I.mail /><span>denuncias@agrobrokers.com.co</span>
          </a>
          <div className="home-sag__cta">
            <a href="SAGRILAFT.html" className="btn btn-primary">Conocer nuestro compromiso <I.arrow size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { ProductsHome, FaqHome, SagrilaftHome });
