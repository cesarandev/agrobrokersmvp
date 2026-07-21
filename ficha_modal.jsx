/* AG_005 · Modal de captura — ficha técnica */
function FichaModal({ open, product, onClose }) {
  const [sent, setSent] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  React.useEffect(() => {
    if (open) { setSent(false); setAccepted(false); setErrors({}); setEmail(''); }
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!product && !open) return null;
  const required = ['nombre', 'empresa', 'cargo', 'correo', 'telefono'];

  const submit = (e) => {
    e.preventDefault();
    if (!accepted) return;
    const f = e.target;
    const errs = {};
    required.forEach((k) => { if (!f[k].value.trim()) errs[k] = 'Campo obligatorio'; });
    if (f.correo.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo.value)) errs.correo = 'Correo no válido';
    setErrors(errs);
    if (Object.keys(errs).length === 0) { setEmail(f.correo.value); setSent(true); }
  };

  const field = (name, label, opts = {}) => (
    <div className={'field full ' + (errors[name] ? 'err' : '')}>
      <label htmlFor={'fc_' + name}>{label} <span className="req">*</span></label>
      <input id={'fc_' + name} name={name} type={opts.type || 'text'} placeholder={opts.ph || ''} />
      {errors[name] && <span className="err-msg">{errors[name]}</span>}
    </div>
  );

  const waUrl = product ? waProductUrl(product.name) : WA_BASE;

  return (
    <div className={'modal-backdrop ' + (open ? 'open' : '')} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Obtener ficha técnica">
        <button className="modal__close" onClick={onClose} aria-label="Cerrar"><I.close /></button>
        {sent ? (
          <div className="modal__body" style={{ paddingTop: 40 }}>
            <div className="modal-success" style={{ padding: '8px 0 16px' }}>
              <div className="modal-success__icon"><I.checkC size={38} /></div>
              <h3>Su ficha técnica ha sido enviada</h3>
              <p>Enviamos la ficha de <b>{product && product.name}</b> a <b>{email}</b>. Revise su bandeja de entrada.</p>
              <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="modal__head">
              <span style={{ fontSize: 14, color: 'var(--muted)' }}>Descargue la ficha técnica de:</span>
              <div className="modal__product">{product ? product.name : ''}</div>
              <p>Para enviarle el documento necesitamos sus datos de contacto.</p>
            </div>
            <div className="modal__body">
              <form onSubmit={submit} noValidate>
                <div className="form-grid">
                  {field('nombre', 'Nombre completo')}
                  {field('empresa', 'Empresa')}
                  {field('cargo', 'Cargo')}
                  {field('correo', 'Correo electrónico', { type: 'email', ph: 'correo@empresa.com' })}
                  {field('telefono', 'Teléfono', { type: 'tel', ph: '+57 ___ ___ ____' })}
                </div>
                <label className="check-field">
                  <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
                  <span>Acepto la <a href="#">Política de Privacidad</a> y el tratamiento de mis datos conforme a la Ley 1581 de 2012. <span className="req" style={{ color: 'var(--green)' }}>*</span></span>
                </label>
                <button type="submit" className="btn btn-primary modal__submit" disabled={!accepted}>Enviar y descargar ficha <I.arrow size={16} /></button>
              </form>
              <div className="modal__divider">¿Prefiere hablar directamente?</div>
              <a className="btn btn-wa modal__wa" href={waUrl} target="_blank" rel="noopener"><I.wa size={17} /> Escribir por WhatsApp</a>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
window.FichaModal = FichaModal;
