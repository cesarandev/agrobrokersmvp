/* Quote modal (§13) — required field validation + success state */

function QuoteModal({ open, onClose, presetFamily }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) { setSent(false); setErrors({}); }
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const required = ['nombre','empresa','cargo','telefono','correo'];

  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const errs = {};
    required.forEach((k) => { if (!f[k].value.trim()) errs[k] = 'Campo obligatorio'; });
    if (f.correo.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo.value)) errs.correo = 'Correo no válido';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const field = (name, label, opts = {}) => (
    <div className={'field ' + (opts.full ? 'full ' : '') + (errors[name] ? 'err' : '')}>
      <label htmlFor={'q_' + name}>{label} {!opts.optional && <span className="req">*</span>}</label>
      {opts.select
        ? <select id={'q_' + name} name={name} key={(presetFamily || '') + (open ? '1' : '0')} defaultValue={presetFamily || ''}>
            <option value="" disabled>Seleccione una familia</option>
            {(window.FAMILIES_FULL || []).map((fm) => <option key={fm.name} value={fm.name}>{fm.name}</option>)}
          </select>
        : <input id={'q_' + name} name={name} type={opts.type || 'text'} placeholder={opts.ph || ''} />}
      {errors[name] && <span className="err-msg">{errors[name]}</span>}
    </div>
  );

  return (
    <div className={'modal-backdrop ' + (open ? 'open' : '')} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Solicitar cotización">
        <button className="modal__close" onClick={onClose} aria-label="Cerrar"><I.close /></button>
        {sent ? (
          <div className="modal-success">
            <div className="modal-success__icon"><I.checkC size={38} /></div>
            <h3>Gracias, su solicitud fue recibida</h3>
            <p>Le contactaremos en máximo 5 días hábiles.</p>
            <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
          </div>
        ) : (
          <React.Fragment>
            <div className="modal__head">
              <span className="eyebrow">Cotización</span>
              <h3>Solicitar cotización</h3>
              <p>Cuéntenos sobre su cultivo y nuestro equipo técnico-comercial le responderá.</p>
            </div>
            <div className="modal__body">
              <form onSubmit={submit} noValidate>
                <div className="form-grid">
                  {field('nombre', 'Nombre completo', { full: true, ph: 'Nombre y apellidos' })}
                  {field('empresa', 'Empresa', { ph: 'Razón social' })}
                  {field('cargo', 'Cargo', { ph: 'Ej: Gerente de compras' })}
                  {field('telefono', 'Teléfono', { type: 'tel', ph: '+57 ___ ___ ____' })}
                  {field('correo', 'Correo electrónico', { type: 'email', ph: 'correo@empresa.com' })}
                  {field('producto', 'Producto de interés', { select: true, optional: true })}
                  {field('cultivo', 'Tipo de cultivo', { optional: true, ph: 'Palma, banano, arroz, maíz, otro...' })}
                </div>
                <p className="legal-note">Al enviar acepto la <a href="#">Política de Privacidad</a> y el Tratamiento de Datos conforme a la Ley 1581 de 2012.</p>
                <button type="submit" className="btn btn-primary modal__submit">Enviar solicitud</button>
              </form>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

window.QuoteModal = QuoteModal;
