var {
  useState: useStateP,
  useEffect: useEffectP
} = React;
function GalleryFrame({
  item,
  fam,
  main
}) {
  if (item && item.type === 'img') {
    return React.createElement("div", {
      className: "pg-frame__inner"
    }, React.createElement("img", {
      src: RES(item.src),
      alt: fam.name
    }));
  }
  return React.createElement("div", {
    className: "pg-frame__inner pg-frame__ph",
    style: {
      '--fam': fam.color
    }
  }, React.createElement("div", {
    className: "pg-ph__mark"
  }, React.createElement(I.package, {
    size: main ? 56 : 26
  })), React.createElement("span", {
    className: "pg-ph__label"
  }, "[ ", item ? item.label : fam.name, " ]"));
}
function ProductGallery({
  gallery,
  fam
}) {
  var [active, setActive] = useStateP(0);
  return React.createElement("div", {
    className: "pg"
  }, React.createElement("div", {
    className: "pg-frame"
  }, React.createElement("span", {
    className: "pg-frame__badge",
    style: {
      background: fam.color
    }
  }, fam.name), React.createElement(GalleryFrame, {
    item: gallery[active],
    fam: fam,
    main: true
  }), React.createElement("span", {
    className: "pg-frame__zoom"
  }, React.createElement(I.zoom, {
    size: 18
  }))), gallery.length > 1 && React.createElement("div", {
    className: "pg-thumbs"
  }, gallery.map((g, i) => React.createElement("button", {
    key: i,
    className: 'pg-thumb ' + (i === active ? 'active' : ''),
    onClick: () => setActive(i),
    "aria-label": g.label
  }, React.createElement(GalleryFrame, {
    item: g,
    fam: fam
  })))));
}
function StdInfo({
  product,
  detail,
  fam,
  onFicha
}) {
  return React.createElement("div", {
    className: "pp-info"
  }, React.createElement("a", {
    className: "pp-famtag",
    href: '/marketplace?familia=' + fam.slug
  }, fam.name), React.createElement("h1", {
    className: "pp-name"
  }, product.name), product.formula && React.createElement("div", {
    className: "pp-formula"
  }, product.formula), product.ica && React.createElement("div", {
    className: "pp-ica"
  }, React.createElement(I.shield, null), " Registro ICA N\xBA ", product.ica), React.createElement("hr", {
    className: "pp-rule"
  }), React.createElement("div", {
    className: "pp-block"
  }, React.createElement("span", {
    className: "pp-label"
  }, "Descripci\xF3n"), React.createElement("p", {
    className: "pp-desc"
  }, detail.longDesc)), detail.presentations.length > 0 && React.createElement("div", {
    className: "pp-block"
  }, React.createElement("span", {
    className: "pp-label"
  }, "Presentaciones"), React.createElement("div", {
    className: "pp-chips"
  }, detail.presentations.map((pr, i) => React.createElement("span", {
    key: i,
    className: "pp-chip"
  }, pr.label)))), React.createElement("hr", {
    className: "pp-rule"
  }), React.createElement("div", {
    className: "pp-ctas"
  }, React.createElement("button", {
    className: "btn btn-primary pp-cta",
    onClick: () => onFicha(product)
  }, React.createElement(I.fileText, {
    size: 18
  }), " Obtener ficha t\xE9cnica"), React.createElement("a", {
    className: "btn btn-wa-outline pp-cta",
    href: waProductMsg(product),
    target: "_blank",
    rel: "noopener"
  }, React.createElement(I.wa, {
    size: 18
  }), " Consultar por WhatsApp")), React.createElement("div", {
    className: "pp-guarantee"
  }, React.createElement("div", {
    className: "pp-guarantee__row"
  }, React.createElement(I.check, {
    size: 16
  }), " Respuesta en m\xE1ximo 5 d\xEDas h\xE1biles"), React.createElement("div", {
    className: "pp-guarantee__row"
  }, React.createElement(I.check, {
    size: 16
  }), " Cobertura de entrega a nivel nacional"), React.createElement("div", {
    className: "pp-guarantee__row"
  }, React.createElement(I.check, {
    size: 16
  }), " Asesor\xEDa t\xE9cnica incluida con su pedido")));
}
var CUSTOM_STEPS = [{
  icon: 'flask',
  title: 'Análisis',
  sub: 'de suelo'
}, {
  icon: 'clipboard',
  title: 'Diagnóstico',
  sub: 'técnico'
}, {
  icon: 'atom',
  title: 'Formulación',
  sub: 'a la medida'
}, {
  icon: 'truck',
  title: 'Entrega',
  sub: 'en finca'
}];
function CustomSteps() {
  return React.createElement("div", {
    className: "pp-steps"
  }, CUSTOM_STEPS.map((s, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("div", {
    className: "pp-step"
  }, React.createElement("div", {
    className: "pp-step__icon"
  }, I[s.icon]({
    size: 22
  })), React.createElement("div", {
    className: "pp-step__title"
  }, s.title), React.createElement("div", {
    className: "pp-step__sub"
  }, s.sub)), i < CUSTOM_STEPS.length - 1 && React.createElement("span", {
    className: "pp-step__arrow"
  }, React.createElement(I.arrow, {
    size: 18
  })))));
}
function CustomInfo({
  product,
  fam,
  onConsulta
}) {
  return React.createElement("div", {
    className: "pp-info"
  }, React.createElement("span", {
    className: "pp-famtag pp-famtag--gold"
  }, "A la medida \xB7 ", fam.name), React.createElement("h1", {
    className: "pp-name"
  }, product.name), React.createElement("hr", {
    className: "pp-rule"
  }), React.createElement("div", {
    className: "pp-block"
  }, React.createElement("span", {
    className: "pp-label"
  }, "\xBFC\xF3mo funciona esta l\xEDnea?"), React.createElement("p", {
    className: "pp-desc"
  }, "Esta l\xEDnea no tiene un cat\xE1logo fijo de referencias. Cada f\xF3rmula se dise\xF1a a partir de un an\xE1lisis t\xE9cnico de su suelo, sus condiciones de cultivo y sus objetivos de rendimiento. El resultado es un fertilizante \xFAnico para su finca.")), React.createElement(CustomSteps, null), React.createElement("hr", {
    className: "pp-rule"
  }), React.createElement("div", {
    className: "pp-ctas"
  }, React.createElement("button", {
    className: "btn pp-cta pp-cta--gold",
    onClick: () => onConsulta(product)
  }, React.createElement(I.calendar, {
    size: 18
  }), " Solicitar consulta t\xE9cnica gratuita")), React.createElement("p", {
    className: "pp-cta-note"
  }, "Sin costo ni compromiso. Nuestro equipo t\xE9cnico le contactar\xE1 en 5 d\xEDas h\xE1biles."));
}
function CompTable({
  rows
}) {
  if (!rows || rows.length === 0) {
    return React.createElement("p", {
      className: "pp-tab-note"
    }, "La composici\xF3n garantizada se detalla en la ficha t\xE9cnica del producto. Solic\xEDtela con el formulario o cons\xFAltenos por WhatsApp.");
  }
  var hasForm = rows.some(r => r.form && r.form !== '—');
  return React.createElement("table", {
    className: "pp-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Nutriente"), React.createElement("th", null, "S\xEDmbolo"), React.createElement("th", null, "Contenido"), hasForm && React.createElement("th", null, "Forma"))), React.createElement("tbody", null, rows.map((r, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", null, r.name), React.createElement("td", null, r.sym), React.createElement("td", {
    className: "pp-table__val"
  }, r.val), hasForm && React.createElement("td", null, r.form && r.form !== '—' ? r.form : '—')))));
}
function CultivosTab({
  cultivos
}) {
  if (!cultivos) {
    return React.createElement("p", {
      className: "pp-tab-note"
    }, "Las recomendaciones de cultivo para este producto se entregan junto con la asesor\xEDa t\xE9cnica. Consulte con nuestro equipo para una recomendaci\xF3n seg\xFAn su an\xE1lisis de suelo.");
  }
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "pp-crops"
  }, cultivos.map((c, i) => React.createElement("span", {
    key: i,
    className: "pp-crop"
  }, React.createElement(I.leaf, {
    size: 15
  }), " ", c))), React.createElement("p", {
    className: "pp-tab-note italic"
  }, "Este producto tambi\xE9n puede aplicarse a otros cultivos seg\xFAn an\xE1lisis de suelo. Consulte con nuestro equipo t\xE9cnico."));
}
function PresTable({
  presentations
}) {
  if (!presentations || presentations.length === 0) {
    return React.createElement("p", {
      className: "pp-tab-note"
    }, "Consulte las presentaciones disponibles de este producto con nuestro equipo comercial.");
  }
  return React.createElement("table", {
    className: "pp-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Presentaci\xF3n"), React.createElement("th", null, "Peso neto"), React.createElement("th", null, "Observaci\xF3n"))), React.createElement("tbody", null, presentations.map((p, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", null, p.label.replace(/ × .*/, '')), React.createElement("td", {
    className: "pp-table__val"
  }, p.weight), React.createElement("td", null, p.note)))));
}
var STD_TABS = ['Composición garantizada', 'Cultivos recomendados', 'Presentaciones'];
var CUSTOM_TABS = ['¿Qué incluye la consulta?', 'Cultivos recomendados', 'Proceso de formulación'];
function ProductTabs({
  detail,
  custom
}) {
  var tabs = custom ? CUSTOM_TABS : STD_TABS;
  var [tab, setTab] = useStateP(0);
  return React.createElement("section", {
    className: "pp-tabs-sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "pp-tabbar",
    role: "tablist"
  }, tabs.map((t, i) => React.createElement("button", {
    key: i,
    role: "tab",
    "aria-selected": tab === i,
    className: 'pp-tab ' + (tab === i ? 'active' : ''),
    onClick: () => setTab(i)
  }, t))), React.createElement("div", {
    className: "pp-tab-panel"
  }, !custom && tab === 0 && React.createElement(CompTable, {
    rows: detail.composition
  }), custom && tab === 0 && React.createElement("div", {
    className: "pp-consult-grid"
  }, React.createElement("div", null, React.createElement("h4", null, "Visita y an\xE1lisis"), React.createElement("p", null, "Tomamos muestras de suelo y follaje en su finca y las procesamos en laboratorio.")), React.createElement("div", null, React.createElement("h4", null, "Diagn\xF3stico nutricional"), React.createElement("p", null, "Interpretamos los resultados frente a las exigencias de su cultivo y meta de rendimiento.")), React.createElement("div", null, React.createElement("h4", null, "F\xF3rmula a la medida"), React.createElement("p", null, "Dise\xF1amos una mezcla espec\xEDfica para sus condiciones, sin cat\xE1logo fijo.")), React.createElement("div", null, React.createElement("h4", null, "Acompa\xF1amiento"), React.createElement("p", null, "Asesor\xEDa t\xE9cnica durante la aplicaci\xF3n y seguimiento en campo."))), tab === 1 && React.createElement(CultivosTab, {
    cultivos: detail.cultivos
  }), !custom && tab === 2 && React.createElement(PresTable, {
    presentations: detail.presentations
  }), custom && tab === 2 && React.createElement("ol", {
    className: "pp-process"
  }, CUSTOM_STEPS.map((s, i) => React.createElement("li", {
    key: i
  }, React.createElement("span", {
    className: "pp-process__n"
  }, i + 1), React.createElement("div", null, React.createElement("b", null, s.title, " ", s.sub))))))));
}
function RelatedCard({
  product
}) {
  var fam = famBySlug[product.fam];
  return React.createElement("a", {
    className: "rel-card",
    href: productHref(product)
  }, React.createElement("div", {
    className: "rel-card__img"
  }, React.createElement(ProductImage, {
    product: product
  }), React.createElement(FamilyBadge, {
    fam: fam
  })), React.createElement("div", {
    className: "rel-card__body"
  }, React.createElement("span", {
    className: "rel-card__name"
  }, product.name), product.formula && React.createElement("span", {
    className: "rel-card__formula"
  }, product.formula), React.createElement("span", {
    className: "rel-card__cta"
  }, "Ver producto ", React.createElement(I.arrow, {
    size: 14
  }))));
}
function RelatedSection({
  product,
  fam
}) {
  var items = relatedProducts(product, 4);
  if (items.length === 0) return null;
  return React.createElement("section", {
    className: "pp-related"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", {
    className: "pp-related__title"
  }, "Otros productos de ", fam.name), React.createElement("div", {
    className: "rel-grid"
  }, items.map(p => React.createElement(RelatedCard, {
    key: p.slug,
    product: p
  }))), React.createElement("div", {
    className: "pp-related__foot"
  }, React.createElement("a", {
    className: "btn btn-outline",
    href: '/marketplace?familia=' + fam.slug
  }, "Ver todo el cat\xE1logo ", fam.name, " ", React.createElement(I.arrow, {
    size: 16
  })))));
}
function ProductPage({
  onFicha,
  onConsulta
}) {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('p');
  var product = productBySlug[slug] || productBySlug['planter'];
  var fam = famBySlug[product.fam];
  var custom = !!product.custom;
  var detail = custom ? {
    cultivos: null
  } : getProductDetail(product);
  useEffectP(() => {
    document.title = product.name + ' — ' + fam.name + ' · AgroBrokers';
  }, [product, fam]);
  var customGallery = [{
    type: 'ph',
    label: 'Laboratorio agronómico'
  }];
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "pp-crumb-sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("nav", {
    className: "pp-crumb",
    "aria-label": "Ruta"
  }, React.createElement("a", {
    href: "/"
  }, "Inicio"), React.createElement("span", null, "/"), React.createElement("a", {
    href: "/productos"
  }, "Productos"), React.createElement("span", null, "/"), React.createElement("a", {
    href: '/marketplace?familia=' + fam.slug
  }, fam.name), React.createElement("span", null, "/"), React.createElement("em", null, product.name)))), React.createElement("section", {
    className: "pp-main"
  }, React.createElement("div", {
    className: "wrap pp-cols",
    "data-screen-label": product.name
  }, React.createElement("div", {
    className: "pp-left"
  }, custom ? React.createElement(ProductGallery, {
    gallery: customGallery,
    fam: {
      ...fam,
      color: '#B8860B',
      name: 'A la medida'
    }
  }) : React.createElement(ProductGallery, {
    gallery: detail.gallery,
    fam: fam
  })), React.createElement("div", {
    className: "pp-right"
  }, custom ? React.createElement(CustomInfo, {
    product: product,
    fam: fam,
    onConsulta: onConsulta
  }) : React.createElement(StdInfo, {
    product: product,
    detail: detail,
    fam: fam,
    onFicha: onFicha
  })))), React.createElement(ProductTabs, {
    detail: detail,
    custom: custom
  }), !custom && React.createElement(RelatedSection, {
    product: product,
    fam: fam
  }), React.createElement("div", {
    className: "pp-sticky"
  }, custom ? React.createElement("button", {
    className: "btn pp-cta--gold",
    onClick: () => onConsulta(product)
  }, React.createElement(I.calendar, {
    size: 17
  }), " Consulta gratuita") : React.createElement(React.Fragment, null, React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onFicha(product)
  }, React.createElement(I.fileText, {
    size: 17
  }), " Ficha t\xE9cnica"), React.createElement("a", {
    className: "btn btn-wa",
    href: waProductMsg(product),
    target: "_blank",
    rel: "noopener"
  }, React.createElement(I.wa, {
    size: 17
  }), " WhatsApp"))));
}
window.ProductPage = ProductPage;