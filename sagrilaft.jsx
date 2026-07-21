/* Página SAGRILAFT — cumplimiento. Resumen institucional + canal de denuncias.
   El documento de política completo queda PENDIENTE (área jurídica). */

function SgHero() {
  return (
    <section className="sg-hero" id="top">
      <div className="sg-hero__bg" />
      <div className="wrap sg-hero__wrap">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <I.arrow size={14} />
          <span className="cur">SAGRILAFT</span>
        </nav>
        <div className="sg-hero__inner">
          <span className="sg-hero__badge"><I.shield /> <span>Transparencia y cumplimiento</span></span>
          <h1>Sistema de Autocontrol y Gestión del Riesgo Integral — SAGRILAFT</h1>
          <p className="sg-hero__full">INPUTS BROKERS GROUP S.A.S. (AgroBrokers) está comprometida con la legalidad, la transparencia y la prevención del lavado de activos, la financiación del terrorismo y la financiación de la proliferación de armas de destrucción masiva.</p>
          <div className="sg-hero__meta">
            <span><I.shield /> INPUTS BROKERS GROUP S.A.S.</span>
            <span><I.award /> Supersociedades · sector real</span>
            <span><I.check /> Ley 1581 de 2012 · datos personales</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SgAbout() {
  return (
    <section className="sg-about">
      <div className="wrap sg-about__grid">
        <Reveal className="sg-about__text">
          <span className="eyebrow">Qué es SAGRILAFT</span>
          <h2>Un compromiso con la legalidad y la prevención del riesgo</h2>
          <p>SAGRILAFT es el Sistema de Autocontrol y Gestión del Riesgo Integral de Lavado de Activos, Financiación del Terrorismo y Financiación de la Proliferación de Armas de Destrucción Masiva, exigido por la Superintendencia de Sociedades a las empresas del sector real en Colombia.</p>
          <p>Para AgroBrokers, implementar SAGRILAFT no es solo cumplir una obligación normativa: es una declaración de principios. Trabajamos únicamente con clientes, proveedores y aliados que comparten nuestro compromiso con la transparencia y el rechazo absoluto a cualquier actividad ilícita.</p>
          <p>Nuestro sistema se apoya en la debida diligencia de las contrapartes, la identificación y administración de riesgos, y el monitoreo permanente de las operaciones.</p>
        </Reveal>
        <Reveal className="sg-acronym" delay={120}>
          <h3>Qué previene el sistema</h3>
          <dl>
            <div className="row"><dt>LA</dt><dd><b>Lavado de Activos.</b> Prevención del ingreso de recursos de origen ilícito a la economía a través de operaciones comerciales.</dd></div>
            <div className="row"><dt>FT</dt><dd><b>Financiación del Terrorismo.</b> Control para evitar que recursos —lícitos o ilícitos— sean destinados a financiar actividades terroristas.</dd></div>
            <div className="row"><dt>FPADM</dt><dd><b>Financiación de la Proliferación de Armas de Destrucción Masiva.</b> Vigilancia frente a operaciones vinculadas a este riesgo.</dd></div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

const SG_PRINC = [
  { icon: 'userCheck', title: 'Debida diligencia', text: 'Conocemos a nuestras contrapartes —clientes, proveedores y aliados— mediante procedimientos de identificación y verificación antes de iniciar relaciones comerciales.' },
  { icon: 'target', title: 'Gestión del riesgo', text: 'Identificamos, medimos, controlamos y monitoreamos los riesgos asociados a cada operación, ajustando los controles según el nivel de exposición.' },
  { icon: 'eye', title: 'Monitoreo permanente', text: 'Realizamos seguimiento continuo de las operaciones para detectar señales de alerta y reportar oportunamente a las autoridades competentes.' },
  { icon: 'gear', title: 'Oficial de cumplimiento', text: 'Contamos con un responsable designado para la administración del sistema, su actualización y la atención de requerimientos de las autoridades.' },
  { icon: 'shield', title: 'Cultura de legalidad', text: 'Promovemos entre nuestro equipo y aliados una cultura de transparencia, ética y rechazo a cualquier práctica relacionada con actividades ilícitas.' },
  { icon: 'fileText', title: 'Confidencialidad y datos', text: 'Tratamos la información de las contrapartes conforme a la Ley 1581 de 2012 de protección de datos personales, garantizando su reserva y uso adecuado.' },
];

function SgPrincipios() {
  return (
    <section className="sg-princ">
      <div className="wrap">
        <div className="sg-princ__head">
          <span className="eyebrow center">Nuestros principios</span>
          <h2 className="section-title">Cómo gestionamos el cumplimiento</h2>
          <p className="section-sub">Seis pilares que sostienen nuestro Sistema de Autocontrol y Gestión del Riesgo Integral.</p>
        </div>
        <div className="sg-princ__grid">
          {SG_PRINC.map((c, i) => {
            const Ic = I[c.icon];
            return (
              <Reveal key={i} className="sg-card" delay={(i % 3) * 90}>
                <div className="sg-card__icon"><Ic size={28} /></div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SgChannel() {
  return (
    <section className="sg-channel" id="denuncias">
      <div className="wrap sg-channel__inner">
        <Reveal>
          <span className="eyebrow">Canal de denuncias</span>
          <h2>Reporte una situación de riesgo</h2>
          <p>Si tiene conocimiento de una operación sospechosa o de cualquier conducta que pueda estar relacionada con lavado de activos, financiación del terrorismo o actividades ilícitas vinculadas a AgroBrokers, repórtela a través de nuestro canal confidencial.</p>
          <p className="sg-channel__note">Todas las denuncias se tratan de forma confidencial. La identidad del denunciante está protegida.</p>
        </Reveal>
        <Reveal className="sg-channel__card" delay={120}>
          <div className="sg-channel__row">
            <I.mail />
            <div>
              <div className="lbl">Correo de denuncias</div>
              <a className="val" href="mailto:denuncias@agrobrokers.com.co">denuncias@agrobrokers.com.co</a>
            </div>
          </div>
          <div className="sg-channel__row">
            <I.shield />
            <div>
              <div className="lbl">Oficial de cumplimiento</div>
              <div className="val">Área de cumplimiento SAGRILAFT</div>
            </div>
          </div>
          <div className="sg-channel__row">
            <I.calendar />
            <div>
              <div className="lbl">Tiempo de atención</div>
              <div className="val">Respuesta en máximo 5 días hábiles</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SgDoc() {
  return (
    <section className="sg-doc">
      <div className="wrap">
        <Reveal className="sg-doc__box">
          <div className="sg-doc__icon"><I.fileText size={32} /></div>
          <span className="sg-doc__tag">Documento en actualización</span>
          <h2>Política y manual SAGRILAFT</h2>
          <p>El documento de política completo y el manual de procedimientos SAGRILAFT se encuentran en proceso de actualización por el área jurídica de AgroBrokers. Estarán disponibles para descarga en esta página próximamente.</p>
          <div className="sg-doc__btn">
            <button className="btn btn-outline" disabled>Descargar política (próximamente)</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { SgHero, SgAbout, SgPrincipios, SgChannel, SgDoc });
