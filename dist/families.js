function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WhyUs() {
  var items = [{
    icon: 'sprout',
    title: 'Nutrición vegetal diseñada a la medida del cultivo',
    text: 'Cada fórmula parte de un análisis técnico-científico del suelo y las necesidades reales del cultivo. Sin fórmulas genéricas.'
  }, {
    icon: 'atom',
    title: 'Tecnología para mejorar la eficiencia de los nutrientes',
    text: 'Tecnología CRF, formulaciones activas y mezclas de precisión que maximizan la absorción y reducen pérdidas.'
  }, {
    icon: 'handshake',
    title: 'Acompañamiento técnico-comercial con visión de campo',
    text: 'Equipo técnico que acompaña desde el diagnóstico hasta los resultados. No vendemos productos, construimos soluciones.'
  }];
  return React.createElement("section", {
    className: "why section-pad",
    id: "nosotros"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "why__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Por qu\xE9 elegirnos"), React.createElement("h2", {
    className: "section-title"
  }, "M\xE1s que un proveedor, un aliado t\xE9cnico de su cultivo")), React.createElement("div", {
    className: "why__grid"
  }, items.map((it, i) => {
    var Ic = I[it.icon];
    return React.createElement(Reveal, {
      key: i,
      className: "why__card",
      delay: i * 110
    }, React.createElement("div", {
      className: "why__icon",
      style: {
        color: "rgb(177, 195, 23)"
      }
    }, React.createElement(Ic, null)), React.createElement("h3", null, it.title), React.createElement("p", null, it.text));
  })), React.createElement("div", {
    className: "why__foot"
  }, React.createElement("a", {
    href: "/nosotros",
    className: "btn btn-outline"
  }, "Saber m\xE1s sobre nosotros ", React.createElement(I.arrow, {
    size: 16
  })))));
}
var FAMILIES = [{
  name: 'Tailored To',
  tag: 'Fórmulas diseñadas a la medida de cada finca y cultivo',
  color: 'var(--fam-tailored)',
  badge: 'A la medida',
  prod: 'assets/prod-tailoredto.png'
}, {
  name: 'Chronos (CRF)',
  tag: 'Liberación controlada: el nutriente disponible en el momento exacto',
  color: 'var(--fam-chronos)',
  badge: 'A la medida',
  prod: 'assets/prod-chronos.png'
}, {
  name: 'ActiCoox',
  tag: 'Fósforo y potasio de alta eficiencia: FosfoCox y ProduCox',
  color: 'var(--fam-acticoox)',
  badge: 'ActiCoox',
  prod: 'assets/prod-acticoox.png'
}, {
  name: 'NutriLimit',
  tag: 'Elementos menores — boro y zinc para nutrición vegetal completa',
  color: 'var(--fam-nutrilimit)',
  badge: 'NutriLimit',
  prod: 'assets/prod-nutrilimit.png'
}, {
  name: 'NovaMix / NextGen',
  tag: 'Fertilizantes simples de nueva generación y alta pureza',
  color: 'var(--fam-novamix)',
  badge: 'NovaMix',
  prod: null
}, {
  name: 'Solumix',
  tag: 'Hidrosolubles de precisión para sistemas de fertirrigación',
  color: 'var(--fam-solumix)',
  badge: 'Solumix',
  prod: null
}, {
  name: 'GrowFlex',
  tag: 'Compuestos mezclados NPK: marcas propias y genéricos para exigentes',
  color: 'var(--fam-growflex)',
  badge: 'GrowFlex',
  prod: 'assets/prod-growflex.png'
}, {
  name: 'CoverMax',
  tag: 'Semillas de cobertura para suelos saludables y sistemas silvopastoriles',
  color: 'var(--fam-covermax)',
  badge: 'CoverMax',
  prod: null
}];
function Burst({
  color
}) {
  var petals = Array.from({
    length: 16
  });
  return React.createElement("svg", {
    className: "fam-card__burst",
    viewBox: "0 0 100 100",
    "aria-hidden": "true"
  }, React.createElement("g", {
    transform: "translate(50,50)"
  }, petals.map((_, i) => {
    var a = i / petals.length * 360;
    var len = i % 2 === 0 ? 40 : 32;
    var op = i % 2 === 0 ? 0.5 : 0.28;
    return React.createElement("rect", {
      key: i,
      x: "-3.2",
      y: -len,
      width: "6.4",
      height: len * 0.72,
      rx: "3.2",
      transform: `rotate(${a})`,
      fill: color,
      opacity: op
    });
  }), React.createElement("circle", {
    r: "6",
    fill: color,
    opacity: "0.85"
  })));
}
function FamilyCard({
  fam,
  onQuote
}) {
  return React.createElement("article", {
    className: "fam-card",
    onClick: onQuote
  }, React.createElement("div", {
    className: "fam-card__img"
  }, React.createElement("span", {
    className: "fam-badge",
    style: {
      background: fam.color
    }
  }, fam.badge), fam.prod ? React.createElement("img", {
    className: "fam-card__prod",
    src: RES(fam.prod),
    alt: fam.name,
    loading: "lazy"
  }) : React.createElement(React.Fragment, null, React.createElement(Burst, {
    color: "rgba(255,255,255,0.9)"
  }), React.createElement("span", {
    className: "fam-card__ph"
  }, "[ ", fam.name, " ]"))), React.createElement("div", {
    className: "fam-card__body"
  }, React.createElement("span", {
    className: "fam-card__name"
  }, fam.name), React.createElement("span", {
    className: "fam-card__tag"
  }, fam.tag), React.createElement("span", {
    className: "fam-card__cta"
  }, "Ver productos ", React.createElement(I.arrow, {
    size: 15
  }))));
}
function Families({
  onQuote
}) {
  return React.createElement("section", {
    className: "families section-pad",
    id: "productos"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "families__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Portafolio"), React.createElement("h2", {
    className: "section-title"
  }, "Nuestro Portafolio"), React.createElement("p", {
    className: "section-sub"
  }, "Ocho l\xEDneas especializadas dise\xF1adas para cubrir cada necesidad de nutrici\xF3n de su cultivo.")), React.createElement("div", {
    className: "fam-grid"
  }, FAMILIES.map((fam, i) => React.createElement(FamilyCard, {
    key: i,
    fam: fam,
    onQuote: onQuote
  }))), React.createElement("div", {
    className: "families__foot"
  }, React.createElement("a", {
    href: "#productos",
    className: "btn btn-outline"
  }, "Ver todo el cat\xE1logo"))));
}
function Stats() {
  var data = [{
    n: 15,
    pre: '+',
    label: 'Años en el mercado'
  }, {
    n: 8,
    pre: '',
    label: 'Líneas especializadas'
  }, {
    n: 100,
    pre: '',
    suf: '%',
    label: 'Cobertura nacional'
  }, {
    n: 30,
    pre: '+',
    label: 'Registros ICA activos'
  }];
  return React.createElement("section", {
    className: "stats",
    style: {
      height: "400px",
      margin: "0px",
      padding: "120px 0px 0px",
      backgroundColor: "rgb(115, 129, 9)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, data.map((d, i) => React.createElement(Stat, _extends({
    key: i
  }, d)))));
}
function Stat({
  n,
  pre = '',
  suf = '',
  label
}) {
  var [ref, val] = useCountUp(n);
  return React.createElement("div", {
    className: "stat"
  }, React.createElement("div", {
    className: "stat__num",
    ref: ref
  }, pre, val, suf), React.createElement("div", {
    className: "stat__label"
  }, label));
}
Object.assign(window, {
  WhyUs,
  Families,
  Stats
});