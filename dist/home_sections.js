var PHERO_CHIPS = ['Tailored To', 'Chronos CRF', 'ActiCoox', 'NutriLimit', 'NovaMix', 'Solumix', 'GrowFlex', 'CoverMax'];
var PHERO_PRODS = ['assets/prod-nutrilimit.png', 'assets/prod-tailoredto.png', 'assets/prod-chronos.png', 'assets/prod-growflex.png', 'assets/prod-acticoox.png'];
function ProductsHome({
  onQuote
}) {
  return React.createElement("section", {
    className: "phero section-pad",
    id: "productos"
  }, React.createElement("div", {
    className: "wrap phero__grid"
  }, React.createElement(Reveal, {
    className: "phero__text"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Portafolio"), React.createElement("h2", {
    className: "section-title"
  }, "Ocho l\xEDneas especializadas para la nutrici\xF3n de su cultivo"), React.createElement("p", null, "Desde compuestos mezclados NPK y liberaci\xF3n controlada hasta elementos menores e hidrosolubles de precisi\xF3n. Un portafolio t\xE9cnico \u2014con m\xE1s de 30 registros ICA\u2014 dise\xF1ado para los principales cultivos del agro colombiano."), React.createElement("div", {
    className: "phero__chips"
  }, PHERO_CHIPS.map(c => React.createElement("span", {
    className: "phero__chip",
    key: c
  }, c))), React.createElement("div", {
    className: "phero__cta"
  }, React.createElement("a", {
    href: "/productos",
    className: "btn btn-primary btn-lg"
  }, "Ver portafolio completo ", React.createElement(I.arrow, {
    size: 16
  })), React.createElement("button", {
    className: "btn btn-outline btn-lg",
    onClick: onQuote
  }, "Solicitar cotizaci\xF3n"))), React.createElement(Reveal, {
    className: "phero__art",
    delay: 120
  }, React.createElement("span", {
    className: "phero__tag"
  }, React.createElement(I.shield, null), " 8 l\xEDneas \xB7 +30 registros ICA"), React.createElement("div", {
    className: "phero__shelf"
  }, PHERO_PRODS.map((src, i) => React.createElement("img", {
    key: i,
    src: RES(src),
    alt: "",
    loading: "lazy"
  }))))));
}
var TLC_FEATS = [{
  icon: 'flask',
  text: 'Basada en el análisis de suelo y foliar de su finca'
}, {
  icon: 'sliders',
  text: 'Ajuste de fórmula NPK y micronutrientes a su medida'
}, {
  icon: 'target',
  text: 'Dosis calculada según cultivo, área y objetivo de rendimiento'
}];
function TailoredCalcTeaser() {
  return React.createElement("section", {
    className: "tlc section-pad"
  }, React.createElement("div", {
    className: "wrap tlc__grid"
  }, React.createElement(Reveal, {
    className: "tlc__art"
  }, React.createElement("img", {
    src: RES('assets/prod-tailoredto.png'),
    alt: "Saco Tailored To \u2014 fertilizante a la medida",
    loading: "lazy"
  })), React.createElement(Reveal, {
    className: "tlc__content",
    delay: 100
  }, React.createElement("span", {
    className: "tlc__eyebrow"
  }, React.createElement(I.gear, {
    size: 15
  }), " Tailored To \u2014 nutrici\xF3n a la medida"), React.createElement("h2", null, "Arme su fertilizante a la medida con Tailored To"), React.createElement("p", null, "Ning\xFAn cultivo es igual a otro. Dise\xF1e una f\xF3rmula de nutrici\xF3n vegetal personalizada seg\xFAn el an\xE1lisis de su suelo, su cultivo y sus objetivos de rendimiento."), React.createElement("ul", {
    className: "tlc__feats"
  }, TLC_FEATS.map((f, i) => {
    var Ic = I[f.icon];
    return React.createElement("li", {
      key: i
    }, React.createElement("span", {
      className: "tlc__feat-ico"
    }, React.createElement(Ic, {
      size: 18
    })), React.createElement("span", null, f.text));
  })), React.createElement("a", {
    href: "/calculadora",
    className: "btn btn-gold btn-lg"
  }, "Armar mi f\xF3rmula a la medida ", React.createElement(I.arrow, {
    size: 16
  })))));
}
var HOME_FAQS = [{
  q: '¿Qué significa que un fertilizante tenga Registro ICA?',
  a: 'El Registro ICA certifica que el producto fue analizado y cumple con la composición nutricional declarada en la etiqueta. Es el aval legal y técnico que garantiza que el producto que compra es exactamente lo que dice ser. Todos los productos registrados de AgroBrokers pueden verificarse en el sistema público del ICA.'
}, {
  q: '¿Qué es un fertilizante de liberación controlada (CRF)?',
  a: 'Es un fertilizante recubierto con una membrana polimérica que libera los nutrientes de forma gradual según la temperatura del suelo, reduciendo pérdidas por lixiviación y volatilización. La línea Chronos de AgroBrokers es nuestra propuesta en esta tecnología.'
}, {
  q: '¿Cuál es el tiempo de respuesta después de enviar una solicitud?',
  a: 'Nuestro equipo comercial responde en máximo 5 días hábiles. Para consultas urgentes, le recomendamos usar nuestro canal de WhatsApp Business (+57 316 478 1412).'
}, {
  q: '¿Tienen cobertura de entrega en todo el país?',
  a: 'Sí. AgroBrokers tiene cobertura logística a nivel nacional. El tiempo y costo de entrega varía según la región y el volumen del pedido. Indíquenos su ubicación al cotizar para incluir este detalle en la propuesta.'
}];
function FaqHome() {
  return React.createElement("section", {
    className: "home-faq section-pad",
    id: "faq"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "home-faq__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Preguntas frecuentes"), React.createElement("h2", {
    className: "section-title"
  }, "Resolvemos sus dudas"), React.createElement("p", {
    className: "section-sub"
  }, "Preguntas comunes sobre nuestros productos, servicios y procesos de compra.")), React.createElement("div", {
    className: "home-faq__acc"
  }, React.createElement(Accordion, {
    items: HOME_FAQS,
    startOpen: 0
  })), React.createElement("div", {
    className: "home-faq__foot"
  }, React.createElement("a", {
    href: "/faq",
    className: "btn btn-outline"
  }, "Ver todas las preguntas frecuentes ", React.createElement(I.arrow, {
    size: 16
  })))));
}
function SagrilaftHome() {
  return React.createElement("section", {
    className: "home-sag section-pad",
    id: "sagrilaft"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(Reveal, {
    className: "home-sag__inner"
  }, React.createElement("div", {
    className: "home-sag__icon"
  }, React.createElement(I.shield, {
    size: 34
  })), React.createElement("span", {
    className: "eyebrow"
  }, "Transparencia y cumplimiento"), React.createElement("h2", null, "SAGRILAFT"), React.createElement("p", null, "INPUTS BROKERS GROUP S.A.S. (AgroBrokers) ha implementado su Sistema de Autocontrol y Gesti\xF3n del Riesgo Integral de Lavado de Activos y Financiaci\xF3n del Terrorismo (SAGRILAFT), en cumplimiento de la normativa de la Superintendencia de Sociedades. Nos comprometemos con la legalidad, la transparencia y el rechazo absoluto a cualquier pr\xE1ctica relacionada con el lavado de activos o la financiaci\xF3n de actividades il\xEDcitas."), React.createElement("a", {
    className: "home-sag__mail",
    href: "mailto:denuncias@agrobrokers.com.co"
  }, React.createElement(I.mail, null), React.createElement("span", null, "denuncias@agrobrokers.com.co")), React.createElement("div", {
    className: "home-sag__cta"
  }, React.createElement("a", {
    href: "/sagrilaft",
    className: "btn btn-primary"
  }, "Conocer nuestro compromiso ", React.createElement(I.arrow, {
    size: 16
  }))))));
}
Object.assign(window, {
  ProductsHome,
  TailoredCalcTeaser,
  FaqHome,
  SagrilaftHome
});