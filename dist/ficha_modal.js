function FichaModal({
  open,
  product,
  onClose
}) {
  var [sent, setSent] = React.useState(false);
  var [accepted, setAccepted] = React.useState(false);
  var [errors, setErrors] = React.useState({});
  var [email, setEmail] = React.useState('');
  React.useEffect(() => {
    var onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  React.useEffect(() => {
    if (open) {
      setSent(false);
      setAccepted(false);
      setErrors({});
      setEmail('');
    }
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  if (!product && !open) return null;
  var required = ['nombre', 'empresa', 'cargo', 'correo', 'telefono'];
  var submit = e => {
    e.preventDefault();
    if (!accepted) return;
    var f = e.target;
    var errs = {};
    required.forEach(k => {
      if (!f[k].value.trim()) errs[k] = 'Campo obligatorio';
    });
    if (f.correo.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo.value)) errs.correo = 'Correo no válido';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setEmail(f.correo.value);
      setSent(true);
    }
  };
  var field = (name, label, opts = {}) => React.createElement("div", {
    className: 'field full ' + (errors[name] ? 'err' : '')
  }, React.createElement("label", {
    htmlFor: 'fc_' + name
  }, label, " ", React.createElement("span", {
    className: "req"
  }, "*")), React.createElement("input", {
    id: 'fc_' + name,
    name: name,
    type: opts.type || 'text',
    placeholder: opts.ph || ''
  }), errors[name] && React.createElement("span", {
    className: "err-msg"
  }, errors[name]));
  var waUrl = product ? waProductUrl(product.name) : WA_BASE;
  return React.createElement("div", {
    className: 'modal-backdrop ' + (open ? 'open' : ''),
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Obtener ficha t\xE9cnica"
  }, React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Cerrar"
  }, React.createElement(I.close, null)), sent ? React.createElement("div", {
    className: "modal__body",
    style: {
      paddingTop: 40
    }
  }, React.createElement("div", {
    className: "modal-success",
    style: {
      padding: '8px 0 16px'
    }
  }, React.createElement("div", {
    className: "modal-success__icon"
  }, React.createElement(I.checkC, {
    size: 38
  })), React.createElement("h3", null, "Su ficha t\xE9cnica ha sido enviada"), React.createElement("p", null, "Enviamos la ficha de ", React.createElement("b", null, product && product.name), " a ", React.createElement("b", null, email), ". Revise su bandeja de entrada."), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "Cerrar"))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal__head"
  }, React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, "Descargue la ficha t\xE9cnica de:"), React.createElement("div", {
    className: "modal__product"
  }, product ? product.name : ''), React.createElement("p", null, "Para enviarle el documento necesitamos sus datos de contacto.")), React.createElement("div", {
    className: "modal__body"
  }, React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, React.createElement("div", {
    className: "form-grid"
  }, field('nombre', 'Nombre completo'), field('empresa', 'Empresa'), field('cargo', 'Cargo'), field('correo', 'Correo electrónico', {
    type: 'email',
    ph: 'correo@empresa.com'
  }), field('telefono', 'Teléfono', {
    type: 'tel',
    ph: '+57 ___ ___ ____'
  })), React.createElement("label", {
    className: "check-field"
  }, React.createElement("input", {
    type: "checkbox",
    checked: accepted,
    onChange: e => setAccepted(e.target.checked)
  }), React.createElement("span", null, "Acepto la ", React.createElement("a", {
    href: "#"
  }, "Pol\xEDtica de Privacidad"), " y el tratamiento de mis datos conforme a la Ley 1581 de 2012. ", React.createElement("span", {
    className: "req",
    style: {
      color: 'var(--green)'
    }
  }, "*"))), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary modal__submit",
    disabled: !accepted
  }, "Enviar y descargar ficha ", React.createElement(I.arrow, {
    size: 16
  }))), React.createElement("div", {
    className: "modal__divider"
  }, "\xBFPrefiere hablar directamente?"), React.createElement("a", {
    className: "btn btn-wa modal__wa",
    href: waUrl,
    target: "_blank",
    rel: "noopener"
  }, React.createElement(I.wa, {
    size: 17
  }), " Escribir por WhatsApp")))));
}
window.FichaModal = FichaModal;