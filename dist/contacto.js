var {
  useState: useStateC
} = React;
function CtHero() {
  return React.createElement("section", {
    className: "ct-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap ct-hero__wrap"
  }, React.createElement("nav", {
    className: "breadcrumb",
    "aria-label": "Ruta de navegaci\xF3n",
    style: {
      color: 'var(--muted)'
    }
  }, React.createElement("a", {
    href: "/",
    style: {
      color: 'var(--muted)'
    }
  }, "Inicio"), React.createElement(I.arrow, {
    size: 14
  }), React.createElement("span", {
    className: "cur",
    style: {
      color: 'var(--green)'
    }
  }, "Contacto")), React.createElement("div", {
    className: "ct-hero__center"
  }, React.createElement("span", {
    className: "ct-hero__eyebrow"
  }, "Hablemos de su cultivo"), React.createElement("h1", null, "Estamos para acompa\xF1arlo"), React.createElement("p", null, "Escr\xEDbanos por el canal que prefiera. Nuestro equipo t\xE9cnico-comercial le responde en m\xE1ximo 5 d\xEDas h\xE1biles."))));
}
function CtForm() {
  var [sent, setSent] = useStateC(false);
  var [errors, setErrors] = useStateC({});
  var required = ['nombre', 'correo', 'mensaje'];
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
  var fld = (name, label, opts = {}) => React.createElement("div", {
    className: 'field ' + (opts.full ? 'full ' : '') + (errors[name] ? 'err' : '')
  }, React.createElement("label", {
    htmlFor: 'c_' + name
  }, label, " ", !opts.optional && React.createElement("span", {
    className: "req"
  }, "*")), opts.select ? React.createElement("select", {
    id: 'c_' + name,
    name: name,
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Seleccione un tema"), React.createElement("option", null, "Cotizaci\xF3n de productos"), React.createElement("option", null, "Servicio AgroPilot (dron)"), React.createElement("option", null, "An\xE1lisis de suelo / asesor\xEDa"), React.createElement("option", null, "Plan de fertilizaci\xF3n"), React.createElement("option", null, "Distribuci\xF3n / alianzas"), React.createElement("option", null, "Otro")) : opts.area ? React.createElement("textarea", {
    id: 'c_' + name,
    name: name,
    rows: "4",
    placeholder: opts.ph || ''
  }) : React.createElement("input", {
    id: 'c_' + name,
    name: name,
    type: opts.type || 'text',
    placeholder: opts.ph || ''
  }), errors[name] && React.createElement("span", {
    className: "err-msg"
  }, errors[name]));
  return React.createElement(Reveal, {
    className: "ct-form"
  }, sent ? React.createElement("div", {
    className: "ct-success"
  }, React.createElement("div", {
    className: "ct-success__icon"
  }, React.createElement(I.checkC, {
    size: 40
  })), React.createElement("h3", null, "Gracias, su mensaje fue recibido"), React.createElement("p", null, "Nuestro equipo t\xE9cnico-comercial le contactar\xE1 en m\xE1ximo 5 d\xEDas h\xE1biles. Para consultas urgentes, escr\xEDbanos por WhatsApp."), React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setSent(false)
  }, "Enviar otra consulta")) : React.createElement(React.Fragment, null, React.createElement("h2", {
    className: "ct-form__title"
  }, "Env\xEDenos su consulta"), React.createElement("p", {
    className: "ct-form__sub"
  }, "Complete el formulario y le responderemos con la mayor brevedad."), React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, React.createElement("div", {
    className: "form-grid"
  }, fld('nombre', 'Nombre completo', {
    full: true,
    ph: 'Nombre y apellidos'
  }), fld('empresa', 'Empresa', {
    ph: 'Razón social',
    optional: true
  }), fld('telefono', 'Teléfono', {
    type: 'tel',
    ph: '+57 ___ ___ ____',
    optional: true
  }), fld('correo', 'Correo electrónico', {
    type: 'email',
    ph: 'correo@empresa.com'
  }), fld('tema', 'Tema de la consulta', {
    select: true,
    optional: true
  }), fld('mensaje', 'Mensaje', {
    full: true,
    area: true,
    ph: 'Cuéntenos sobre su cultivo, su necesidad o la información que busca...'
  })), React.createElement("p", {
    className: "legal-note"
  }, "Al enviar acepto la ", React.createElement("a", {
    href: "/sagrilaft"
  }, "Pol\xEDtica de Privacidad"), " y el Tratamiento de Datos conforme a la Ley 1581 de 2012."), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary modal__submit"
  }, "Enviar consulta"))));
}
function CtSide() {
  return React.createElement(Reveal, {
    className: "ct-side",
    delay: 120
  }, React.createElement("a", {
    className: "ct-channel",
    href: WA_URL,
    target: "_blank",
    rel: "noopener"
  }, React.createElement("div", {
    className: "ct-channel__icon wa"
  }, React.createElement(I.wa, {
    size: 24
  })), React.createElement("div", null, React.createElement("div", {
    className: "lbl"
  }, "WhatsApp \xB7 canal prioritario"), React.createElement("div", {
    className: "val"
  }, "+57 316 478 1412"), React.createElement("div", {
    className: "desc"
  }, "Respuesta r\xE1pida en horario laboral"))), React.createElement("a", {
    className: "ct-channel",
    href: "mailto:contacto@agrobrokers.com.co"
  }, React.createElement("div", {
    className: "ct-channel__icon"
  }, React.createElement(I.mail, {
    size: 24
  })), React.createElement("div", null, React.createElement("div", {
    className: "lbl"
  }, "Correo electr\xF3nico"), React.createElement("div", {
    className: "val"
  }, "contacto@agrobrokers.com.co"), React.createElement("div", {
    className: "desc"
  }, "Para cotizaciones y consultas t\xE9cnicas"))), React.createElement("a", {
    className: "ct-channel",
    href: "tel:+576012345678"
  }, React.createElement("div", {
    className: "ct-channel__icon"
  }, React.createElement(I.phone, {
    size: 24
  })), React.createElement("div", null, React.createElement("div", {
    className: "lbl"
  }, "Tel\xE9fono"), React.createElement("div", {
    className: "val"
  }, "+57 (601) 234 5678"), React.createElement("div", {
    className: "desc"
  }, "Atenci\xF3n comercial directa"))), React.createElement("div", {
    className: "ct-hours"
  }, React.createElement("h3", null, React.createElement(I.calendar, null), " Horario de atenci\xF3n"), React.createElement("div", {
    className: "row"
  }, React.createElement("span", null, "Lunes a viernes"), React.createElement("b", null, "7:00 a.m. \u2013 5:00 p.m.")), React.createElement("div", {
    className: "row"
  }, React.createElement("span", null, "S\xE1bados"), React.createElement("b", null, "8:00 a.m. \u2013 12:00 m.")), React.createElement("div", {
    className: "row"
  }, React.createElement("span", null, "Domingos y festivos"), React.createElement("b", null, "Cerrado"))), React.createElement("div", {
    className: "ct-social"
  }, React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, React.createElement(I.linkedin, {
    size: 20
  })), React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, React.createElement(I.instagram, {
    size: 20
  })), React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, React.createElement(I.facebook, {
    size: 20
  }))));
}
function CtMain() {
  return React.createElement("section", {
    className: "ct-main"
  }, React.createElement("div", {
    className: "wrap ct-grid"
  }, React.createElement(CtForm, null), React.createElement(CtSide, null)));
}
function CtMap() {
  return React.createElement("section", {
    className: "ct-map"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "ct-map__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "D\xF3nde estamos"), React.createElement("h2", {
    className: "section-title"
  }, "Cobertura nacional"), React.createElement("p", {
    className: "section-sub"
  }, "Operaci\xF3n log\xEDstica en todo el territorio colombiano, con sede administrativa en Bogot\xE1.")), React.createElement(Reveal, {
    className: "ct-map__frame"
  }, React.createElement("div", {
    className: "ct-map__pin"
  }, React.createElement(I.pin, null)), React.createElement("div", {
    className: "ct-map__cap"
  }, React.createElement("div", {
    className: "city"
  }, "Bogot\xE1 D.C. \xB7 Colombia"), React.createElement("div", {
    className: "note"
  }, "[ mapa de ubicaci\xF3n \xB7 embeber Google Maps ]")))));
}
Object.assign(window, {
  CtHero,
  CtMain,
  CtMap
});