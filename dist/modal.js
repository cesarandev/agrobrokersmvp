function QuoteModal({
  open,
  onClose,
  presetFamily
}) {
  var [sent, setSent] = useState(false);
  var [errors, setErrors] = useState({});
  useEffect(() => {
    var onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  useEffect(() => {
    if (open) {
      setSent(false);
      setErrors({});
    }
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  var required = ['nombre', 'empresa', 'cargo', 'telefono', 'correo'];
  var submit = e => {
    e.preventDefault();
    var f = e.target;
    var errs = {};
    required.forEach(k => {
      if (!f[k].value.trim()) errs[k] = 'Campo obligatorio';
    });
    if (f.correo.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo.value)) errs.correo = 'Correo no válido';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };
  var field = (name, label, opts = {}) => React.createElement("div", {
    className: 'field ' + (opts.full ? 'full ' : '') + (errors[name] ? 'err' : '')
  }, React.createElement("label", {
    htmlFor: 'q_' + name
  }, label, " ", !opts.optional && React.createElement("span", {
    className: "req"
  }, "*")), opts.select ? React.createElement("select", {
    id: 'q_' + name,
    name: name,
    key: (presetFamily || '') + (open ? '1' : '0'),
    defaultValue: presetFamily || ''
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Seleccione una familia"), (window.FAMILIES_FULL || []).map(fm => React.createElement("option", {
    key: fm.name,
    value: fm.name
  }, fm.name))) : React.createElement("input", {
    id: 'q_' + name,
    name: name,
    type: opts.type || 'text',
    placeholder: opts.ph || ''
  }), errors[name] && React.createElement("span", {
    className: "err-msg"
  }, errors[name]));
  return React.createElement("div", {
    className: 'modal-backdrop ' + (open ? 'open' : ''),
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Solicitar cotizaci\xF3n"
  }, React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Cerrar"
  }, React.createElement(I.close, null)), sent ? React.createElement("div", {
    className: "modal-success"
  }, React.createElement("div", {
    className: "modal-success__icon"
  }, React.createElement(I.checkC, {
    size: 38
  })), React.createElement("h3", null, "Gracias, su solicitud fue recibida"), React.createElement("p", null, "Le contactaremos en m\xE1ximo 5 d\xEDas h\xE1biles."), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "Cerrar")) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal__head"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Cotizaci\xF3n"), React.createElement("h3", null, "Solicitar cotizaci\xF3n"), React.createElement("p", null, "Cu\xE9ntenos sobre su cultivo y nuestro equipo t\xE9cnico-comercial le responder\xE1.")), React.createElement("div", {
    className: "modal__body"
  }, React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, React.createElement("div", {
    className: "form-grid"
  }, field('nombre', 'Nombre completo', {
    full: true,
    ph: 'Nombre y apellidos'
  }), field('empresa', 'Empresa', {
    ph: 'Razón social'
  }), field('cargo', 'Cargo', {
    ph: 'Ej: Gerente de compras'
  }), field('telefono', 'Teléfono', {
    type: 'tel',
    ph: '+57 ___ ___ ____'
  }), field('correo', 'Correo electrónico', {
    type: 'email',
    ph: 'correo@empresa.com'
  }), field('producto', 'Producto de interés', {
    select: true,
    optional: true
  }), field('cultivo', 'Tipo de cultivo', {
    optional: true,
    ph: 'Palma, banano, arroz, maíz, otro...'
  })), React.createElement("p", {
    className: "legal-note"
  }, "Al enviar acepto la ", React.createElement("a", {
    href: "#"
  }, "Pol\xEDtica de Privacidad"), " y el Tratamiento de Datos conforme a la Ley 1581 de 2012."), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary modal__submit"
  }, "Enviar solicitud"))))));
}
window.QuoteModal = QuoteModal;