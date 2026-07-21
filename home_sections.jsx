/* Home-only sections — loaded only by /
   ProductsHome (summarized portafolio) · FaqHome (preview) · SagrilaftHome (summary, pending) */

const PHERO_CHIPS = ['Tailored To', 'Chronos CRF', 'ActiCoox', 'NutriLimit', 'NovaMix', 'Solumix', 'GrowFlex', 'CoverMax'];
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
          <p>Desde compuestos mezclados NPK y liberación controlada hasta elementos menores e hidrosolubles de precisión. Un portafolio técnico —con más de 30 registros ICA— diseñado para los principales cultivos del agro colombiano.</p>
          <div className="phero__chips">
            {PHERO_CHIPS.map((c) => <span className="phero__chip" key={c}>{c}</span>)}
          </div>
          <div className="phero__cta">
            <a href="/productos" className="btn btn-primary btn-lg">Ver portafolio completo <I.arrow size={16} /></a>
            <button className="btn btn-outline btn-lg" onClick={onQuote}>Solicitar cotización</button>
          </div>
        </Reveal>
        <Reveal className="phero__art" delay={120}>
          <span className="phero__tag"><I.shield /> 8 líneas · +30 registros ICA</span>
          <div className="phero__shelf">
            {PHERO_PRODS.map((src, i) => <img key={i} src={RES(src)} alt="" loading="lazy" />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const TLC_FEATS = [
  { icon: 'flask', text: 'Basada en el análisis de suelo y foliar de su finca' },
  { icon: 'sliders', text: 'Ajuste de fórmula NPK y micronutrientes a su medida' },
  { icon: 'target', text: 'Dosis calculada según cultivo, área y objetivo de rendimiento' },
];

function TailoredCalcTeaser() {
  return (
    <section className="tlc section-pad">
      <div className="wrap tlc__grid">
        <Reveal className="tlc__art">
          <img src={RES('assets/prod-tailoredto.png')} alt="Saco Tailored To — fertilizante a la medida" loading="lazy" />
        </Reveal>
        <Reveal className="tlc__content" delay={100}>
          <span className="tlc__eyebrow"><I.gear size={15} /> Tailored To — nutrición a la medida</span>
          <h2>Arme su fertilizante a la medida con Tailored To</h2>
          <p>Ningún cultivo es igual a otro. Diseñe una fórmula de nutrición vegetal personalizada según el análisis de su suelo, su cultivo y sus objetivos de rendimiento.</p>
          <ul className="tlc__feats">
            {TLC_FEATS.map((f, i) => {
              const Ic = I[f.icon];
              return <li key={i}><span className="tlc__feat-ico"><Ic size={18} /></span><span>{f.text}</span></li>;
            })}
          </ul>
          <a href="/calculadora" className="btn btn-gold btn-lg">Armar mi fórmula a la medida <I.arrow size={16} /></a>
        </Reveal>
      </div>
    </section>
  );
}

const HOME_FAQS = [
  { q: '¿Qué significa que un fertilizante tenga Registro ICA?', a: 'El Registro ICA certifica que el producto fue analizado y cumple con la composición nutricional declarada en la etiqueta. Es el aval legal y técnico que garantiza que el producto que compra es exactamente lo que dice ser. Todos los productos registrados de AgroBrokers pueden verificarse en el sistema público del ICA.' },
  { q: '¿Qué es un fertilizante de liberación controlada (CRF)?', a: 'Es un fertilizante recubierto con una membrana polimérica que libera los nutrientes de forma gradual según la temperatura del suelo, reduciendo pérdidas por lixiviación y volatilización. La línea Chronos de AgroBrokers es nuestra propuesta en esta tecnología.' },
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
          <a href="/faq" className="btn btn-outline">Ver todas las preguntas frecuentes <I.arrow size={16} /></a>
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
            <a href="/sagrilaft" className="btn btn-primary">Conocer nuestro compromiso <I.arrow size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { ProductsHome, TailoredCalcTeaser, FaqHome, SagrilaftHome });
