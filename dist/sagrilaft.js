function SgHero() {
  return React.createElement("section", {
    className: "sg-hero",
    id: "top"
  }, React.createElement("div", {
    className: "sg-hero__bg"
  }), React.createElement("div", {
    className: "wrap sg-hero__wrap"
  }, React.createElement("nav", {
    className: "breadcrumb",
    "aria-label": "Ruta de navegaci\xF3n"
  }, React.createElement("a", {
    href: "/"
  }, "Inicio"), React.createElement(I.arrow, {
    size: 14
  }), React.createElement("span", {
    className: "cur"
  }, "SAGRILAFT")), React.createElement("div", {
    className: "sg-hero__inner"
  }, React.createElement("span", {
    className: "sg-hero__badge"
  }, React.createElement(I.shield, null), " ", React.createElement("span", null, "Transparencia y cumplimiento")), React.createElement("h1", null, "Sistema de Autocontrol y Gesti\xF3n del Riesgo Integral \u2014 SAGRILAFT"), React.createElement("p", {
    className: "sg-hero__full"
  }, "INPUTS BROKERS GROUP S.A.S. (AgroBrokers) est\xE1 comprometida con la legalidad, la transparencia y la prevenci\xF3n del lavado de activos, la financiaci\xF3n del terrorismo y la financiaci\xF3n de la proliferaci\xF3n de armas de destrucci\xF3n masiva."), React.createElement("div", {
    className: "sg-hero__meta"
  }, React.createElement("span", null, React.createElement(I.shield, null), " INPUTS BROKERS GROUP S.A.S."), React.createElement("span", null, React.createElement(I.award, null), " Supersociedades \xB7 sector real"), React.createElement("span", null, React.createElement(I.check, null), " Ley 1581 de 2012 \xB7 datos personales")))));
}
function SgAbout() {
  return React.createElement("section", {
    className: "sg-about"
  }, React.createElement("div", {
    className: "wrap sg-about__grid"
  }, React.createElement(Reveal, {
    className: "sg-about__text"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Qu\xE9 es SAGRILAFT"), React.createElement("h2", null, "Un compromiso con la legalidad y la prevenci\xF3n del riesgo"), React.createElement("p", null, "SAGRILAFT es el Sistema de Autocontrol y Gesti\xF3n del Riesgo Integral de Lavado de Activos, Financiaci\xF3n del Terrorismo y Financiaci\xF3n de la Proliferaci\xF3n de Armas de Destrucci\xF3n Masiva, exigido por la Superintendencia de Sociedades a las empresas del sector real en Colombia."), React.createElement("p", null, "Para AgroBrokers, implementar SAGRILAFT no es solo cumplir una obligaci\xF3n normativa: es una declaraci\xF3n de principios. Trabajamos \xFAnicamente con clientes, proveedores y aliados que comparten nuestro compromiso con la transparencia y el rechazo absoluto a cualquier actividad il\xEDcita."), React.createElement("p", null, "Nuestro sistema se apoya en la debida diligencia de las contrapartes, la identificaci\xF3n y administraci\xF3n de riesgos, y el monitoreo permanente de las operaciones.")), React.createElement(Reveal, {
    className: "sg-acronym",
    delay: 120
  }, React.createElement("h3", null, "Qu\xE9 previene el sistema"), React.createElement("dl", null, React.createElement("div", {
    className: "row"
  }, React.createElement("dt", null, "LA"), React.createElement("dd", null, React.createElement("b", null, "Lavado de Activos."), " Prevenci\xF3n del ingreso de recursos de origen il\xEDcito a la econom\xEDa a trav\xE9s de operaciones comerciales.")), React.createElement("div", {
    className: "row"
  }, React.createElement("dt", null, "FT"), React.createElement("dd", null, React.createElement("b", null, "Financiaci\xF3n del Terrorismo."), " Control para evitar que recursos \u2014l\xEDcitos o il\xEDcitos\u2014 sean destinados a financiar actividades terroristas.")), React.createElement("div", {
    className: "row"
  }, React.createElement("dt", null, "FPADM"), React.createElement("dd", null, React.createElement("b", null, "Financiaci\xF3n de la Proliferaci\xF3n de Armas de Destrucci\xF3n Masiva."), " Vigilancia frente a operaciones vinculadas a este riesgo."))))));
}
var SG_PRINC = [{
  icon: 'userCheck',
  title: 'Debida diligencia',
  text: 'Conocemos a nuestras contrapartes —clientes, proveedores y aliados— mediante procedimientos de identificación y verificación antes de iniciar relaciones comerciales.'
}, {
  icon: 'target',
  title: 'Gestión del riesgo',
  text: 'Identificamos, medimos, controlamos y monitoreamos los riesgos asociados a cada operación, ajustando los controles según el nivel de exposición.'
}, {
  icon: 'eye',
  title: 'Monitoreo permanente',
  text: 'Realizamos seguimiento continuo de las operaciones para detectar señales de alerta y reportar oportunamente a las autoridades competentes.'
}, {
  icon: 'gear',
  title: 'Oficial de cumplimiento',
  text: 'Contamos con un responsable designado para la administración del sistema, su actualización y la atención de requerimientos de las autoridades.'
}, {
  icon: 'shield',
  title: 'Cultura de legalidad',
  text: 'Promovemos entre nuestro equipo y aliados una cultura de transparencia, ética y rechazo a cualquier práctica relacionada con actividades ilícitas.'
}, {
  icon: 'fileText',
  title: 'Confidencialidad y datos',
  text: 'Tratamos la información de las contrapartes conforme a la Ley 1581 de 2012 de protección de datos personales, garantizando su reserva y uso adecuado.'
}];
function SgPrincipios() {
  return React.createElement("section", {
    className: "sg-princ"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sg-princ__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Nuestros principios"), React.createElement("h2", {
    className: "section-title"
  }, "C\xF3mo gestionamos el cumplimiento"), React.createElement("p", {
    className: "section-sub"
  }, "Seis pilares que sostienen nuestro Sistema de Autocontrol y Gesti\xF3n del Riesgo Integral.")), React.createElement("div", {
    className: "sg-princ__grid"
  }, SG_PRINC.map((c, i) => {
    var Ic = I[c.icon];
    return React.createElement(Reveal, {
      key: i,
      className: "sg-card",
      delay: i % 3 * 90
    }, React.createElement("div", {
      className: "sg-card__icon"
    }, React.createElement(Ic, {
      size: 28
    })), React.createElement("h3", null, c.title), React.createElement("p", null, c.text));
  }))));
}
function SgChannel() {
  return React.createElement("section", {
    className: "sg-channel",
    id: "denuncias"
  }, React.createElement("div", {
    className: "wrap sg-channel__inner"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "eyebrow"
  }, "Canal de denuncias"), React.createElement("h2", null, "Reporte una situaci\xF3n de riesgo"), React.createElement("p", null, "Si tiene conocimiento de una operaci\xF3n sospechosa o de cualquier conducta que pueda estar relacionada con lavado de activos, financiaci\xF3n del terrorismo o actividades il\xEDcitas vinculadas a AgroBrokers, rep\xF3rtela a trav\xE9s de nuestro canal confidencial."), React.createElement("p", {
    className: "sg-channel__note"
  }, "Todas las denuncias se tratan de forma confidencial. La identidad del denunciante est\xE1 protegida.")), React.createElement(Reveal, {
    className: "sg-channel__card",
    delay: 120
  }, React.createElement("div", {
    className: "sg-channel__row"
  }, React.createElement(I.mail, null), React.createElement("div", null, React.createElement("div", {
    className: "lbl"
  }, "Correo de denuncias"), React.createElement("a", {
    className: "val",
    href: "mailto:denuncias@agrobrokers.com.co"
  }, "denuncias@agrobrokers.com.co"))), React.createElement("div", {
    className: "sg-channel__row"
  }, React.createElement(I.shield, null), React.createElement("div", null, React.createElement("div", {
    className: "lbl"
  }, "Oficial de cumplimiento"), React.createElement("div", {
    className: "val"
  }, "\xC1rea de cumplimiento SAGRILAFT"))), React.createElement("div", {
    className: "sg-channel__row"
  }, React.createElement(I.calendar, null), React.createElement("div", null, React.createElement("div", {
    className: "lbl"
  }, "Tiempo de atenci\xF3n"), React.createElement("div", {
    className: "val"
  }, "Respuesta en m\xE1ximo 5 d\xEDas h\xE1biles"))))));
}
function SgDoc() {
  return React.createElement("section", {
    className: "sg-doc"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(Reveal, {
    className: "sg-doc__box"
  }, React.createElement("div", {
    className: "sg-doc__icon"
  }, React.createElement(I.fileText, {
    size: 32
  })), React.createElement("span", {
    className: "sg-doc__tag"
  }, "Documento en actualizaci\xF3n"), React.createElement("h2", null, "Pol\xEDtica y manual SAGRILAFT"), React.createElement("p", null, "El documento de pol\xEDtica completo y el manual de procedimientos SAGRILAFT se encuentran en proceso de actualizaci\xF3n por el \xE1rea jur\xEDdica de AgroBrokers. Estar\xE1n disponibles para descarga en esta p\xE1gina pr\xF3ximamente."), React.createElement("div", {
    className: "sg-doc__btn"
  }, React.createElement("button", {
    className: "btn btn-outline",
    disabled: true
  }, "Descargar pol\xEDtica (pr\xF3ximamente)")))));
}
Object.assign(window, {
  SgHero,
  SgAbout,
  SgPrincipios,
  SgChannel,
  SgDoc
});