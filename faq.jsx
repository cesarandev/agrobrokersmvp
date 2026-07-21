/* Página FAQ — AG_010 Parte 1 */
const { useState: useStateF } = React;

const FQ_CATS = ['Productos', 'Pedidos y entregas', 'Servicios', 'Técnico', 'General'];

const FQ_DATA = [
  { cat: 'Productos', q: '¿Cuál es la diferencia entre un fertilizante compuesto y uno mezclado?', a: 'Un fertilizante compuesto (o granulado complejo) integra todos los nutrientes en un mismo gránulo homogéneo. Un fertilizante mezclado (bulk blend) combina gránulos de diferentes fuentes en una sola mezcla. AgroBrokers ofrece ambas presentaciones según el cultivo y los objetivos de nutrición.' },
  { cat: 'Productos', q: '¿Qué significa que un fertilizante tenga Registro ICA?', a: 'El Registro ICA (Instituto Colombiano Agropecuario) certifica que el producto ha sido analizado y cumple con la composición nutricional declarada en la etiqueta. Es el aval legal y técnico que garantiza que el producto que compra es exactamente lo que dice ser. Todos los productos registrados de AgroBrokers pueden verificarse en el sistema público del ICA.' },
  { cat: 'Productos', q: '¿Qué es un fertilizante de liberación controlada (CRF)?', a: 'Es un fertilizante recubierto con una membrana polimérica que libera los nutrientes de forma gradual y controlada según la temperatura del suelo. Esto permite que el cultivo tenga acceso a los nutrientes en el momento exacto que los necesita, reduciendo pérdidas por lixiviación y volatilización. La línea Chronos de AgroBrokers es nuestra propuesta en esta tecnología.' },
  { cat: 'Productos', q: '¿Los productos de AgroBrokers se pueden usar en agricultura orgánica?', a: 'Las líneas de AgroBrokers son fertilizantes minerales de síntesis. No están certificadas para agricultura orgánica. Si su cultivo requiere insumos orgánicos certificados, le recomendamos consultarlo con su asesor técnico.' },
  { cat: 'Productos', q: '¿Cuáles son los cultivos para los que tienen mayor experiencia?', a: 'Palma de aceite, banano, maíz, arroz y caña de azúcar son los cultivos con mayor trayectoria en nuestra experiencia técnica. Sin embargo, nuestras líneas están formuladas para múltiples cultivos. Contáctenos para evaluar la solución más adecuada para su caso específico.' },

  { cat: 'Pedidos y entregas', q: '¿Cuál es el tiempo de respuesta después de enviar una solicitud?', a: 'Nuestro equipo comercial responde en máximo 5 días hábiles. Para consultas urgentes, le recomendamos usar nuestro canal de WhatsApp Business (+57 316 478 1412).' },
  { cat: 'Pedidos y entregas', q: '¿Tienen cobertura de entrega en todo el país?', a: 'Sí. AgroBrokers tiene cobertura logística a nivel nacional. El tiempo y costo de entrega varía según la región y el volumen del pedido. Indíquenos su ubicación al momento de cotizar para incluir este detalle en la propuesta.' },
  { cat: 'Pedidos y entregas', q: '¿Cuál es el pedido mínimo para hacer un pedido?', a: 'Los pedidos mínimos varían según la línea de producto y la presentación. Contáctenos con el producto de interés y le indicamos las condiciones comerciales desde la primera consulta.' },
  { cat: 'Pedidos y entregas', q: '¿Puedo hacer seguimiento a mi pedido?', a: 'Sí. Una vez confirmado y despachado su pedido, nuestro equipo le proporcionará los datos de seguimiento logístico. También puede consultarnos directamente por WhatsApp para actualizaciones en tiempo real.' },

  { cat: 'Servicios', q: '¿El servicio AgroPilot tiene costo adicional?', a: 'AgroPilot es parte del acompañamiento técnico que ofrecemos a nuestros clientes. Las condiciones dependen del área a operar, el tipo de servicio (espectrometría, fumigación, monitoreo) y la región. Contáctenos para conocer la disponibilidad para su cultivo.' },
  { cat: 'Servicios', q: '¿Realizan análisis de suelo antes de recomendar un fertilizante?', a: 'Sí. El análisis de suelo y foliar es la base de cualquier recomendación técnica de AgroBrokers. Para las líneas a la medida (Tailored To y Chronos), el análisis es un requisito previo a la formulación. Para las líneas de catálogo, el análisis nos permite afinar la recomendación de dosis y frecuencia de aplicación.' },
  { cat: 'Servicios', q: '¿En qué departamentos opera AgroPilot?', a: 'AgroPilot opera a nivel nacional. La disponibilidad de equipos y fechas de operación depende de la agenda del servicio. Contáctenos con anticipación para coordinar la visita en su región.' },

  { cat: 'Técnico', q: '¿Cómo interpreto la fórmula de un fertilizante (NPK)?', a: 'La fórmula NPK indica los porcentajes de los tres macronutrientes principales: N (Nitrógeno), P₂O₅ (Fósforo) y K₂O (Potasio). Por ejemplo, un fertilizante 14-25-10 contiene 14% de N, 25% de P₂O₅ y 10% de K₂O. Los números adicionales (como 3,2 MgO) indican la presencia de nutrientes secundarios o micronutrientes.' },
  { cat: 'Técnico', q: '¿Qué diferencia hay entre nitrógeno ureico y nitrógeno amoniacal?', a: 'El nitrógeno ureico se transforma en el suelo y está disponible para la planta después de la hidrólisis; es de efecto más prolongado. El nitrógeno amoniacal está disponible más rápidamente, pero puede perderse por volatilización en suelos alcalinos. La combinación de ambas formas, como en la línea GrowFlex, permite una nutrición nitrogenada más equilibrada.' },
  { cat: 'Técnico', q: '¿Con qué frecuencia debo aplicar el fertilizante?', a: 'La frecuencia depende del tipo de fertilizante, el cultivo y la etapa fenológica. Para fertilizantes convencionales, generalmente se recomienda fraccionar la dosis en 2 o 3 aplicaciones por ciclo. Los fertilizantes de liberación controlada (Chronos) reducen la frecuencia de aplicación significativamente. Consulte con nuestro equipo técnico para un plan de aplicación personalizado.' },

  { cat: 'General', q: '¿Cómo puedo solicitar una ficha técnica de un producto?', a: 'Puede descargar la ficha técnica directamente desde la página de cada producto en nuestro catálogo en línea. Solo necesita registrar su nombre, empresa, cargo, correo y teléfono. También puede solicitarla por WhatsApp o a través del formulario de contacto.' },
  { cat: 'General', q: '¿Tienen representantes comerciales en mi región?', a: 'AgroBrokers cuenta con cobertura comercial y técnica a nivel nacional. Dependiendo de su región, la atención puede ser presencial o remota. Contáctenos indicando su ubicación y le asignamos el contacto comercial más adecuado.' },
  { cat: 'General', q: '¿Qué es SAGRILAFT y por qué AgroBrokers lo menciona en su sitio?', a: 'SAGRILAFT es el Sistema de Autocontrol y Gestión del Riesgo Integral de Lavado de Activos y Financiación del Terrorismo. Es un requisito legal para empresas del sector real en Colombia según la normativa de la Superintendencia de Sociedades. AgroBrokers lo implementa como parte de su compromiso con la transparencia y el cumplimiento normativo.' },
];

function FqHero({ query, setQuery }) {
  return (
    <section className="fq-hero" id="top">
      <div className="wrap fq-hero__wrap">
        <nav className="breadcrumb" aria-label="Ruta de navegación" style={{ color: 'var(--muted)' }}>
          <a href="/" style={{ color: 'var(--muted)' }}>Inicio</a>
          <I.arrow size={14} />
          <span className="cur" style={{ color: 'var(--green)' }}>FAQ</span>
        </nav>
        <div className="fq-hero__center">
          <span className="fq-hero__eyebrow">Preguntas frecuentes</span>
          <h1>Resolvemos sus dudas</h1>
          <p>Preguntas comunes sobre nuestros productos, servicios y procesos de compra.</p>
          <div className="fq-search">
            <I.search />
            <input type="search" placeholder="Buscar una pregunta..." aria-label="Buscar una pregunta"
                   value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FqMain({ query }) {
  const [tab, setTab] = useStateF('Productos');
  const searching = query.trim().length > 0;
  const items = searching
    ? FQ_DATA.filter((it) => (it.q + ' ' + it.a).toLowerCase().includes(query.trim().toLowerCase()))
    : FQ_DATA.filter((it) => it.cat === tab);

  return (
    <section className="fq-main">
      <div className="wrap fq-inner">
        {!searching && (
          <div className="fq-tabs" role="tablist" aria-label="Categorías de preguntas">
            {FQ_CATS.map((c) => (
              <button key={c} role="tab" aria-selected={tab === c}
                      className={'fq-tab ' + (tab === c ? 'active' : '')} onClick={() => setTab(c)}>{c}</button>
            ))}
          </div>
        )}
        {searching && (
          <p className="fq-result-note">{items.length
            ? <span><b>{items.length}</b> {items.length === 1 ? 'resultado' : 'resultados'} para «{query.trim()}»</span>
            : <span>Sin resultados para «{query.trim()}». Pruebe otra búsqueda o escríbanos directamente.</span>}</p>
        )}
        {items.length > 0 && (
          <div className="fq-acc" key={searching ? 'q' + query : tab}>
            <Accordion items={items} startOpen={0} />
          </div>
        )}
      </div>
    </section>
  );
}

function FqNoAnswer() {
  return (
    <section className="fq-cta">
      <div className="wrap fq-cta__inner">
        <div className="fq-cta__icon"><I.headset size={32} /></div>
        <h2>¿Su pregunta no está aquí?</h2>
        <p>Escríbanos directamente. Nuestro equipo técnico-comercial le responde en máximo 5 días hábiles.</p>
        <div className="fq-cta__btns">
          <a href="/contacto" className="btn btn-primary">Enviar consulta</a>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-wa-outline"><I.wa size={17} /> Escribir por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FqHero, FqMain, FqNoAnswer });
