var {
  useState: useStateN,
  useEffect: useEffectN
} = React;
function SectionHero() {
  return React.createElement("section", {
    className: "nb-hero",
    id: "top"
  }, React.createElement("div", {
    className: "nb-hero__bg"
  }), React.createElement("div", {
    className: "wrap nb-hero__wrap"
  }, React.createElement("nav", {
    className: "breadcrumb",
    "aria-label": "Ruta de navegaci\xF3n"
  }, React.createElement("a", {
    href: "/"
  }, "Inicio"), React.createElement(I.arrow, {
    size: 14
  }), React.createElement("span", {
    className: "cur"
  }, "Nosotros")), React.createElement("div", {
    className: "nb-hero__center"
  }, React.createElement("span", {
    className: "nb-hero__eyebrow"
  }, "Qui\xE9nes somos"), React.createElement("h1", null, "15 a\xF1os construyendo una agricultura m\xE1s eficiente"), React.createElement("p", null, "Empresa colombiana especializada en nutrici\xF3n vegetal de precisi\xF3n para el agro B2B."))));
}
function AboutHistory() {
  var facts = [{
    num: '+15',
    label: 'años en el mercado'
  }, {
    num: '8',
    label: 'líneas especializadas'
  }, {
    num: '100%',
    label: 'cobertura nacional'
  }];
  return React.createElement("section", {
    className: "nb-history section-pad"
  }, React.createElement("div", {
    className: "wrap nb-history__grid"
  }, React.createElement(Reveal, {
    className: "nb-history__text"
  }, React.createElement("span", {
    className: "nb-label"
  }, "Nuestra historia"), React.createElement("h2", null, "De la idea al campo: 15 a\xF1os de nutrici\xF3n vegetal a la medida"), React.createElement("span", {
    className: "nb-rule"
  }), React.createElement("p", null, "AgroBrokers naci\xF3 con una convicci\xF3n: el campo colombiano merec\xEDa fertilizantes dise\xF1ados para sus cultivos reales, no f\xF3rmulas gen\xE9ricas importadas. Durante 15 a\xF1os hemos construido un portafolio de ocho l\xEDneas especializadas \u2014 desde compuestos mezclados NPK hasta soluciones de liberaci\xF3n controlada \u2014 que responden a las necesidades espec\xEDficas de los principales cultivos del pa\xEDs."), React.createElement("p", null, "Hoy operamos con cobertura nacional, respaldados por m\xE1s de 30 registros ICA activos y un equipo t\xE9cnico-comercial que acompa\xF1a al cliente desde el an\xE1lisis de suelo hasta los resultados en campo. No vendemos insumos \u2014 construimos soluciones de nutrici\xF3n vegetal."), React.createElement("div", {
    className: "nb-facts"
  }, facts.map((f, i) => React.createElement("div", {
    className: "nb-fact",
    key: i
  }, React.createElement("span", {
    className: "nb-fact__num"
  }, f.num), React.createElement("span", {
    className: "nb-fact__label"
  }, f.label))))), React.createElement(Reveal, {
    className: "nb-history__figure",
    delay: 120
  }, React.createElement("div", {
    className: "nb-figure"
  }, React.createElement("div", {
    className: "nb-figure__ph"
  }, React.createElement(I.package, {
    size: 46
  }), React.createElement("span", null, "[ planta de producci\xF3n / equipo en campo ]")), React.createElement("span", {
    className: "nb-figure__accent"
  })))));
}
function MisionVision() {
  return React.createElement("section", {
    className: "nb-mv section-pad"
  }, React.createElement("div", {
    className: "wrap nb-mv__grid"
  }, React.createElement(Reveal, {
    className: "nb-mv__card",
    as: "article"
  }, React.createElement("div", {
    className: "nb-mv__icon"
  }, React.createElement(I.target, null)), React.createElement("span", {
    className: "nb-label"
  }, "Misi\xF3n"), React.createElement("p", null, "Ofrecer soluciones mediante productos que satisfagan los requerimientos y necesidades propios de cada cliente, entregando insumos y servicios a la medida del agro colombiano. Optimizamos costos y mejoramos la competitividad del sector para consolidarnos como la alternativa l\xEDder, integrando l\xEDneas de negocio que complementan la labor agr\xEDcola bajo lineamientos de calidad, \xE9tica y generaci\xF3n de valor para la sociedad.")), React.createElement(Reveal, {
    className: "nb-mv__card",
    as: "article",
    delay: 110
  }, React.createElement("div", {
    className: "nb-mv__icon"
  }, React.createElement(I.eye, null)), React.createElement("span", {
    className: "nb-label"
  }, "Visi\xF3n"), React.createElement("p", null, "Para el a\xF1o 2030, ser la mejor opci\xF3n en el suministro de insumos agr\xEDcolas con cobertura a nivel nacional, reconocidos como aliados estrat\xE9gicos para los productores del sector. Integraremos la cadena log\xEDstica al campo, liderados por la innovaci\xF3n constante y el desarrollo de las mejores alternativas para el agricultor colombiano."))));
}
var NB_VALUES = [{
  icon: 'flask',
  title: 'Rigor técnico',
  text: 'Cada recomendación parte de análisis científico del suelo y el cultivo. La intuición no reemplaza los datos.'
}, {
  icon: 'handshake',
  title: 'Alianza de largo plazo',
  text: 'No buscamos la venta puntual. Construimos relaciones comerciales duraderas con resultados medibles en campo.'
}, {
  icon: 'leaf',
  title: 'Sostenibilidad agrícola',
  text: 'Diseñamos soluciones que mejoran la productividad sin comprometer la salud del suelo ni del entorno.'
}, {
  icon: 'gear',
  title: 'Innovación aplicada',
  text: 'Incorporamos tecnología CRF, formulaciones activas y mezclas de precisión al servicio del agricultor colombiano.'
}, {
  icon: 'clipboard',
  title: 'Transparencia',
  text: 'Información técnica clara, trazable y verificable. Todos nuestros productos cuentan con registro ICA y análisis garantizado.'
}, {
  icon: 'award',
  title: 'Calidad garantizada',
  text: 'Estándares de calidad en cada etapa del proceso: formulación, mezcla, empaque y entrega.'
}];
function Values() {
  return React.createElement("section", {
    className: "nb-values section-pad",
    id: "valores"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "nb-head"
  }, React.createElement("span", {
    className: "nb-label center"
  }, "Lo que nos gu\xEDa"), React.createElement("h2", {
    className: "section-title"
  }, "Nuestros valores"), React.createElement("p", {
    className: "section-sub"
  }, "Los principios que orientan cada decisi\xF3n t\xE9cnica y comercial en AgroBrokers.")), React.createElement("div", {
    className: "nb-values__grid"
  }, NB_VALUES.map((v, i) => {
    var Ic = I[v.icon];
    return React.createElement(Reveal, {
      key: i,
      className: "nb-value",
      delay: i % 3 * 80
    }, React.createElement("div", {
      className: "nb-value__icon"
    }, React.createElement(Ic, {
      size: 32
    })), React.createElement("h3", null, v.title), React.createElement("p", null, v.text));
  }))));
}
var NB_REGIONS = ['Costa Caribe (Magdalena, Atlántico, Bolívar, Córdoba)', 'Región Andina (Cundinamarca, Antioquia, Boyacá, Nariño)', 'Llanos Orientales (Meta, Casanare, Vichada)', 'Eje Cafetero (Caldas, Risaralda, Quindío)', 'Pacífico y Suroccidente (Valle del Cauca, Cauca, Chocó)'];
function Coverage() {
  var cities = [{
    name: 'Barranquilla',
    top: '16%',
    left: '40%'
  }, {
    name: 'Santa Marta',
    top: '11%',
    left: '52%',
    main: true
  }, {
    name: 'Medellín',
    top: '40%',
    left: '33%'
  }, {
    name: 'Bogotá',
    top: '52%',
    left: '48%'
  }, {
    name: 'Villavicencio',
    top: '54%',
    left: '60%'
  }, {
    name: 'Cali',
    top: '66%',
    left: '30%'
  }];
  var [hover, setHover] = useStateN(null);
  return React.createElement("section", {
    className: "nb-coverage section-pad"
  }, React.createElement("div", {
    className: "wrap nb-coverage__grid"
  }, React.createElement(Reveal, {
    className: "nb-coverage__text"
  }, React.createElement("span", {
    className: "nb-label"
  }, "D\xF3nde operamos"), React.createElement("h2", null, "Cobertura a nivel nacional"), React.createElement("span", {
    className: "nb-rule"
  }), React.createElement("p", null, "AgroBrokers opera en todo el territorio colombiano. Desde la regi\xF3n Caribe hasta el piedemonte llanero, nuestro equipo t\xE9cnico y nuestra red log\xEDstica garantizan disponibilidad de productos y acompa\xF1amiento en campo donde el cliente lo necesite."), React.createElement("ul", {
    className: "nb-regions"
  }, NB_REGIONS.map((r, i) => React.createElement("li", {
    key: i
  }, React.createElement(I.check, {
    size: 17
  }), " ", React.createElement("span", null, r)))), React.createElement("p", {
    className: "nb-coverage__note"
  }, "\xBFNecesita confirmar disponibilidad en su regi\xF3n? ", React.createElement("a", {
    href: "/contacto"
  }, "Cont\xE1ctenos."))), React.createElement(Reveal, {
    className: "nb-coverage__map",
    delay: 120
  }, React.createElement("div", {
    className: "nb-map"
  }, React.createElement("div", {
    className: "nb-map__icon"
  }, React.createElement(I.map, {
    size: 40
  })), React.createElement("span", {
    className: "nb-map__label"
  }, "[ Mapa de Colombia \u2014 cobertura nacional ]"), cities.map((c, i) => React.createElement("span", {
    key: i,
    className: 'nb-map__pin ' + (c.main ? 'main' : ''),
    style: {
      top: c.top,
      left: c.left
    },
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null)
  }, React.createElement("span", {
    className: "nb-map__dot"
  }), hover === i && React.createElement("span", {
    className: "nb-map__tip"
  }, c.name)))), React.createElement("p", {
    className: "nb-map__seat"
  }, React.createElement(I.pin, {
    size: 15
  }), " Sede principal: Santa Marta, Magdalena"))));
}
var NB_FAM_COLOR = {
  GrowFlex: '#558B2F',
  NutriLimit: '#00796B',
  Solumix: '#0277BD',
  NovaMix: '#1565C0'
};
var NB_ICA = [['GrowFlex', 'GrowMix', '12-24-12-5(S)', '9153'], ['GrowFlex', 'Planter', '14-25-10-3,2 MgO', '10861'], ['GrowFlex', 'Perisson', '20-10-16-3,4 MgO', '10861'], ['GrowFlex', 'Comp. NPK', '13-5-27-5-0,5B', '10574'], ['GrowFlex', 'Comp. NPK', '12-24-12-5 CaO', '9153'], ['GrowFlex', 'Comp. NPK', '19-9-19', '9018'], ['GrowFlex', 'Comp. NPK', '27-6-6-2 CaO', '9019'], ['GrowFlex', 'Comp. NPK', '27-6-6', '9149'], ['GrowFlex', 'Comp. NPK', '25-4-24', '11456'], ['NutriLimit', 'BoroMix', '0-0-3-14B', '14070'], ['NutriLimit', 'Etibor 48', 'Bórax Pentahidratado', '7896'], ['NutriLimit', 'Borick K', 'Ácido Bórico', '9744'], ['NutriLimit', 'Boro + K', 'Bórax Pentahidratado', '9263'], ['Solumix', 'CalExact', '15-0-0-25 CaO', '13784'], ['NovaMix', 'N-Secured', 'Nitrógeno estabilizado', '10779'], ['NovaMix', 'Kieserita + K', '—', '9262'], ['NovaMix', 'Kieserita', '—', '7895'], ['NovaMix', 'KCL Granular', '—', '10073'], ['NovaMix', 'KCL Estándar', '—', '10073'], ['NovaMix', 'MAP', 'Fosfato Monoamónico', '10223']];
function IcaSection() {
  var badges = [{
    icon: 'shield',
    main: '+30 registros',
    sub: 'ICA activos'
  }, {
    icon: 'clipboard',
    main: 'ICA Colombia',
    sub: 'Norma vigente'
  }, {
    icon: 'leaf',
    main: 'Cobertura',
    sub: 'nacional'
  }];
  return React.createElement("section", {
    className: "nb-ica section-pad",
    id: "ica"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "nb-head"
  }, React.createElement("span", {
    className: "nb-label center"
  }, "Respaldo t\xE9cnico y legal"), React.createElement("h2", {
    className: "section-title"
  }, "Registros ICA activos"), React.createElement("p", {
    className: "section-sub"
  }, "Todos nuestros productos con f\xF3rmulas registradas cuentan con resoluci\xF3n ICA vigente, garantizando cumplimiento normativo y trazabilidad t\xE9cnica.")), React.createElement("div", {
    className: "nb-badges"
  }, badges.map((b, i) => {
    var Ic = I[b.icon];
    return React.createElement("div", {
      className: "nb-badge",
      key: i
    }, React.createElement("div", {
      className: "nb-badge__icon"
    }, React.createElement(Ic, {
      size: 34
    })), React.createElement("div", {
      className: "nb-badge__main"
    }, b.main), React.createElement("div", {
      className: "nb-badge__sub"
    }, b.sub));
  })), React.createElement("h3", {
    className: "nb-ica__title"
  }, "Detalle de registros por producto"), React.createElement("div", {
    className: "nb-table-wrap"
  }, React.createElement("table", {
    className: "nb-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Familia"), React.createElement("th", null, "Producto"), React.createElement("th", null, "F\xF3rmula"), React.createElement("th", null, "Registro ICA"))), React.createElement("tbody", null, NB_ICA.map((r, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", {
    "data-th": "Familia"
  }, React.createElement("span", {
    className: "nb-fchip",
    style: {
      '--c': NB_FAM_COLOR[r[0]]
    }
  }, r[0])), React.createElement("td", {
    "data-th": "Producto",
    className: "nb-td-name"
  }, r[1]), React.createElement("td", {
    "data-th": "F\xF3rmula"
  }, r[2]), React.createElement("td", {
    "data-th": "Registro ICA",
    className: "nb-td-ica"
  }, r[3])))))), React.createElement("p", {
    className: "nb-ica__foot"
  }, "Los registros ICA son p\xFAblicamente verificables en el sistema de consulta del Instituto Colombiano Agropecuario (ICA). Vigentes al a\xF1o 2026.")));
}
Object.assign(window, {
  SectionHero,
  AboutHistory,
  MisionVision,
  Values,
  Coverage,
  IcaSection
});