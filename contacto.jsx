/* Página CONTACTO — AG_010 Parte 3 */
const { useState: useStateC } = React;

function CtHero() {
  return (
    <section className="ct-hero" id="top">
      <div className="wrap ct-hero__wrap">
        <nav className="breadcrumb" aria-label="Ruta de navegación" style={{ color: 'var(--muted)' }}>
          <a href="/" style={{ color: 'var(--muted)' }}>Inicio</a>
          <I.arrow size={14} />
          <span className="cur" style={{ color: 'var(--green)' }}>Contacto</span>
        </nav>
        <div className="ct-hero__center">
          <span className="ct-hero__eyebrow">Hablemos de su cultivo</span>
          <h1>Estamos para acompañarlo</h1>
          <p>Escríbanos por el canal que prefiera. Nuestro equipo técnico-comercial le responde en máximo 5 días hábiles.</p>
        </div>
      </div>
    </section>
  );
}

function CtForm() {
  const [sent, setSent] = useStateC(false);
  const [errors, setErrors] = useStateC({});
  const required = ['nombre', 'correo', 'mensaje'];

  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const errs = {};
    required.forEach((k) => { if (!f[k].value.trim()) errs[k] = 'Campo obligatorio'; });
    if (f.correo.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo.value)) errs.correo = 'Correo no válido';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const fld = (name, label, opts = {}) => (
    <div className={'field ' + (opts.full ? 'full ' : '') + (errors[name] ? 'err' : '')}>
      <label htmlFor={'c_' + name}>{label} {!opts.optional && <span className="req">*</span>}</label>
      {opts.select
        ? <select id={'c_' + name} name={name} defaultValue="">
            <option value="" disabled>Seleccione un tema</option>
            <option>Cotización de productos</option>
            <option>Servicio AgroPilot (dron)</option>
            <option>Análisis de suelo / asesoría</option>
            <option>Plan de fertilización</option>
            <option>Distribución / alianzas</option>
            <option>Otro</option>
          </select>
        : opts.area
          ? <textarea id={'c_' + name} name={name} rows="4" placeholder={opts.ph || ''}></textarea>
          : <input id={'c_' + name} name={name} type={opts.type || 'text'} placeholder={opts.ph || ''} />}
      {errors[name] && <span className="err-msg">{errors[name]}</span>}
    </div>
  );

  return (
    <Reveal className="ct-form">
      {sent ? (
        <div className="ct-success">
          <div className="ct-success__icon"><I.checkC size={40} /></div>
          <h3>Gracias, su mensaje fue recibido</h3>
          <p>Nuestro equipo técnico-comercial le contactará en máximo 5 días hábiles. Para consultas urgentes, escríbanos por WhatsApp.</p>
          <button className="btn btn-primary" onClick={() => setSent(false)}>Enviar otra consulta</button>
        </div>
      ) : (
        <React.Fragment>
          <h2 className="ct-form__title">Envíenos su consulta</h2>
          <p className="ct-form__sub">Complete el formulario y le responderemos con la mayor brevedad.</p>
          <form onSubmit={submit} noValidate>
            <div className="form-grid">
              {fld('nombre', 'Nombre completo', { full: true, ph: 'Nombre y apellidos' })}
              {fld('empresa', 'Empresa', { ph: 'Razón social', optional: true })}
              {fld('telefono', 'Teléfono', { type: 'tel', ph: '+57 ___ ___ ____', optional: true })}
              {fld('correo', 'Correo electrónico', { type: 'email', ph: 'correo@empresa.com' })}
              {fld('tema', 'Tema de la consulta', { select: true, optional: true })}
              {fld('mensaje', 'Mensaje', { full: true, area: true, ph: 'Cuéntenos sobre su cultivo, su necesidad o la información que busca...' })}
            </div>
            <p className="legal-note">Al enviar acepto la <a href="/sagrilaft">Política de Privacidad</a> y el Tratamiento de Datos conforme a la Ley 1581 de 2012.</p>
            <button type="submit" className="btn btn-primary modal__submit">Enviar consulta</button>
          </form>
        </React.Fragment>
      )}
    </Reveal>
  );
}

function CtSide() {
  return (
    <Reveal className="ct-side" delay={120}>
      <a className="ct-channel" href={WA_URL} target="_blank" rel="noopener">
        <div className="ct-channel__icon wa"><I.wa size={24} /></div>
        <div>
          <div className="lbl">WhatsApp · canal prioritario</div>
          <div className="val">+57 316 478 1412</div>
          <div className="desc">Respuesta rápida en horario laboral</div>
        </div>
      </a>
      <a className="ct-channel" href="mailto:contacto@agrobrokers.com.co">
        <div className="ct-channel__icon"><I.mail size={24} /></div>
        <div>
          <div className="lbl">Correo electrónico</div>
          <div className="val">contacto@agrobrokers.com.co</div>
          <div className="desc">Para cotizaciones y consultas técnicas</div>
        </div>
      </a>
      <a className="ct-channel" href="tel:+576012345678">
        <div className="ct-channel__icon"><I.phone size={24} /></div>
        <div>
          <div className="lbl">Teléfono</div>
          <div className="val">+57 (601) 234 5678</div>
          <div className="desc">Atención comercial directa</div>
        </div>
      </a>
      <div className="ct-hours">
        <h3><I.calendar /> Horario de atención</h3>
        <div className="row"><span>Lunes a viernes</span><b>7:00 a.m. – 5:00 p.m.</b></div>
        <div className="row"><span>Sábados</span><b>8:00 a.m. – 12:00 m.</b></div>
        <div className="row"><span>Domingos y festivos</span><b>Cerrado</b></div>
      </div>
      <div className="ct-social">
        <a href="#" aria-label="LinkedIn"><I.linkedin size={20} /></a>
        <a href="#" aria-label="Instagram"><I.instagram size={20} /></a>
        <a href="#" aria-label="Facebook"><I.facebook size={20} /></a>
      </div>
    </Reveal>
  );
}

function CtMain() {
  return (
    <section className="ct-main">
      <div className="wrap ct-grid">
        <CtForm />
        <CtSide />
      </div>
    </section>
  );
}

function CtMap() {
  return (
    <section className="ct-map">
      <div className="wrap">
        <div className="ct-map__head">
          <span className="eyebrow center">Dónde estamos</span>
          <h2 className="section-title">Cobertura nacional</h2>
          <p className="section-sub">Operación logística en todo el territorio colombiano, con sede administrativa en Bogotá.</p>
        </div>
        <Reveal className="ct-map__frame">
          <div className="ct-map__pin"><I.pin /></div>
          <div className="ct-map__cap">
            <div className="city">Bogotá D.C. · Colombia</div>
            <div className="note">[ mapa de ubicación · embeber Google Maps ]</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { CtHero, CtMain, CtMap });
