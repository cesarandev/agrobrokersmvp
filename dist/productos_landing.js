var {
  useState: useStateL
} = React;
function FLBurst({
  color
}) {
  var petals = Array.from({
    length: 16
  });
  return React.createElement("svg", {
    className: "fl-card__burst",
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
function CatHead({
  onSearch
}) {
  var [q, setQ] = useStateL('');
  var submit = e => {
    e.preventDefault();
    window.location.href = '/marketplace' + (q.trim() ? '?q=' + encodeURIComponent(q.trim()) : '');
  };
  return React.createElement("section", {
    className: "cat-head",
    id: "top"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("nav", {
    className: "cat-head__crumb",
    "aria-label": "Ruta"
  }, React.createElement("a", {
    href: "/"
  }, "Inicio"), React.createElement(I.arrow, {
    size: 13
  }), React.createElement("span", {
    className: "cur"
  }, "Productos")), React.createElement("div", {
    className: "cat-head__inner"
  }, React.createElement("h1", null, "Nuestro Portafolio"), React.createElement("p", {
    className: "cat-head__sub"
  }, "Ocho l\xEDneas de nutrici\xF3n vegetal dise\xF1adas para cubrir cada necesidad de su cultivo. Seleccione una familia para explorar el cat\xE1logo."), React.createElement("form", {
    className: "quick-search",
    onSubmit: submit,
    role: "search"
  }, React.createElement(I.search, null), React.createElement("input", {
    type: "text",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Buscar por producto, f\xF3rmula o cultivo...",
    "aria-label": "Buscar"
  })))));
}
function FamilyLandingCard({
  fam
}) {
  var href = '/marketplace?familia=' + fam.slug;
  var badgeColor = fam.badgeColor || fam.color;
  return React.createElement("a", {
    className: "fl-card",
    href: href,
    "data-screen-label": fam.name
  }, React.createElement("div", {
    className: "fl-card__img"
  }, React.createElement("span", {
    className: "fl-badge",
    style: {
      background: badgeColor
    }
  }, fam.badge), fam.img ? React.createElement("img", {
    className: "fl-card__prod",
    src: fam.img,
    alt: fam.name,
    loading: "lazy"
  }) : React.createElement(React.Fragment, null, React.createElement(FLBurst, {
    color: "rgba(255,255,255,0.9)"
  }), React.createElement("span", {
    className: "fl-card__ph"
  }, "[ ", fam.name, " ]"))), React.createElement("div", {
    className: "fl-card__body"
  }, React.createElement("span", {
    className: "fl-card__name"
  }, fam.name), React.createElement("span", {
    className: "fl-card__tag"
  }, fam.tagline), React.createElement("span", {
    className: "fl-card__cta"
  }, "Ver productos ", fam.short, " ", React.createElement(I.arrow, {
    size: 15
  }))));
}
function FamiliesLanding() {
  return React.createElement("section", {
    className: "fam-landing"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "fl-grid"
  }, FAMILIES_FULL.map(fam => React.createElement(FamilyLandingCard, {
    key: fam.slug,
    fam: fam
  })))));
}
var AV_ITEMS = [{
  icon: 'drone',
  title: 'AgroPilot — dron agrícola',
  text: 'Espectrometría, fumigación y aplicación de precisión desde el aire para grandes extensiones.'
}, {
  icon: 'flask',
  title: 'Análisis de suelo y foliar',
  text: 'Diagnóstico técnico del suelo y el follaje como base científica para el plan de fertilización.'
}, {
  icon: 'userCheck',
  title: 'Asesoría agronómica en campo',
  text: 'Acompañamiento técnico con profesionales especializados en cada cultivo, en cada etapa.'
}, {
  icon: 'clipboard',
  title: 'Plan de fertilización personalizado',
  text: 'Cronograma de aplicaciones y dosis por finca, cultivo y objetivo de rendimiento.'
}];
function AddedValueServices({
  onQuote
}) {
  return React.createElement("section", {
    className: "added-value"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "added-value__head"
  }, React.createElement("span", {
    className: "sv-label center"
  }, "Para clientes AgroBrokers"), React.createElement("h2", {
    className: "section-title"
  }, "Acompa\xF1amiento t\xE9cnico incluido en su relaci\xF3n con nosotros"), React.createElement("p", {
    className: "section-sub"
  }, "Al adquirir nuestras l\xEDneas de nutrici\xF3n vegetal, su cultivo cuenta adem\xE1s con este respaldo t\xE9cnico como valor agregado.")), React.createElement("div", {
    className: "av-grid"
  }, AV_ITEMS.map((s, i) => {
    var Ic = I[s.icon];
    return React.createElement("div", {
      className: "av-card",
      key: i
    }, React.createElement("span", {
      className: "av-card__icon"
    }, React.createElement(Ic, {
      size: 22
    })), React.createElement("h3", null, s.title), React.createElement("p", null, s.text));
  })), React.createElement("p", {
    className: "av-foot"
  }, "\xBFYa es cliente y quiere conocer estos servicios? ", React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener"
  }, "Escr\xEDbanos por WhatsApp"), " o ", React.createElement("button", {
    className: "av-foot__btn",
    onClick: onQuote
  }, "solicite una cotizaci\xF3n"), ".")));
}
function CatCtaBand({
  onQuote
}) {
  return React.createElement("section", {
    className: "cat-cta"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", null, "\xBFTiene una necesidad espec\xEDfica que no encaja en ninguna l\xEDnea?"), React.createElement("p", null, "Nuestro equipo t\xE9cnico dise\xF1a soluciones a la medida."), React.createElement("div", {
    className: "cat-cta__btns"
  }, React.createElement("button", {
    className: "btn btn-cream",
    onClick: onQuote
  }, "Solicitar consulta t\xE9cnica"), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-wa"
  }, React.createElement(I.wa, {
    size: 17
  }), " Escribir por WhatsApp"))));
}
Object.assign(window, {
  CatHead,
  FamiliesLanding,
  AddedValueServices,
  CatCtaBand
});