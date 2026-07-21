var {
  useState,
  useEffect,
  useRef
} = React;
var NAV_ITEMS = ['Inicio', 'Nosotros', 'Productos', 'Blog', 'FAQ', 'SAGRILAFT', 'Contacto'];
var WA_URL = 'https://wa.me/573164781412?text=' + encodeURIComponent('Hola, me interesa información sobre los productos de AgroBrokers.');
var HOME_PAGE = '/';
var CURRENT_PAGE = typeof document !== 'undefined' && document.body && document.body.dataset.page || 'home';
var NAV_ANCHOR = {
  Inicio: '#inicio',
  Nosotros: '#nosotros',
  Productos: '#productos',
  Blog: '#blog',
  FAQ: '#faq',
  SAGRILAFT: '#sagrilaft',
  Contacto: '#contacto'
};
var NAV_PAGE = {
  Inicio: HOME_PAGE,
  Nosotros: '/nosotros',
  Productos: '/productos',
  Blog: '/blog',
  FAQ: '/faq',
  SAGRILAFT: '/sagrilaft',
  Contacto: '/contacto'
};
var NAV_PAGEKEY = {
  Inicio: 'home',
  Nosotros: 'nosotros',
  Productos: 'productos',
  Blog: 'blog',
  FAQ: 'faq',
  SAGRILAFT: 'sagrilaft',
  Contacto: 'contacto'
};
var navActive = it => {
  if (CURRENT_PAGE === 'home') return it === 'Inicio';
  if (it === 'Productos') return CURRENT_PAGE === 'productos' || CURRENT_PAGE === 'marketplace';
  return NAV_PAGEKEY[it] === CURRENT_PAGE;
};
var navHref = it => {
  if (CURRENT_PAGE === 'home') {
    return NAV_ANCHOR[it];
  }
  if (navActive(it)) return '#top';
  return NAV_PAGE[it] || HOME_PAGE + NAV_ANCHOR[it];
};
var homeHref = CURRENT_PAGE === 'home' ? '#inicio' : HOME_PAGE;
function Header({
  scrolled,
  onQuote,
  onBurger
}) {
  var solid = scrolled;
  return React.createElement("header", {
    className: 'header ' + (solid ? 'solid' : 'transparent')
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("a", {
    href: homeHref,
    className: "header__logo",
    "aria-label": "AgroBrokers inicio"
  }, React.createElement("img", {
    src: solid ? RES('assets/logo.png') : RES('assets/logo-white.png'),
    alt: "AgroBrokers"
  })), React.createElement("nav", {
    className: "nav"
  }, NAV_ITEMS.map(it => React.createElement("a", {
    key: it,
    href: navHref(it),
    className: navActive(it) ? 'active' : ''
  }, it))), React.createElement("div", {
    className: "header__cta"
  }, React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-wa wa-compact",
    "aria-label": "WhatsApp"
  }, React.createElement(I.wa, {
    size: 17
  }), React.createElement("span", {
    className: "num"
  }, "+57 316 478 1412")), React.createElement("button", {
    className: "btn btn-primary btn-quote-header",
    onClick: onQuote,
    style: {
      backgroundColor: "rgb(177, 195, 23)"
    }
  }, "Solicitar cotizaci\xF3n"), React.createElement("button", {
    className: "burger",
    onClick: onBurger,
    "aria-label": "Abrir men\xFA"
  }, React.createElement(I.menu, null)))));
}
function Drawer({
  open,
  onClose,
  onQuote
}) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: 'drawer-backdrop ' + (open ? 'open' : ''),
    onClick: onClose
  }), React.createElement("aside", {
    className: 'drawer ' + (open ? 'open' : ''),
    "aria-hidden": !open
  }, React.createElement("div", {
    className: "drawer__top"
  }, React.createElement("img", {
    src: RES('assets/logo-white.png'),
    alt: "AgroBrokers"
  }), React.createElement("button", {
    className: "drawer__close",
    onClick: onClose,
    "aria-label": "Cerrar men\xFA"
  }, React.createElement(I.close, null))), React.createElement("nav", null, NAV_ITEMS.map(it => React.createElement("a", {
    key: it,
    href: navHref(it),
    onClick: onClose
  }, it))), React.createElement("div", {
    className: "drawer__cta"
  }, React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-wa"
  }, React.createElement(I.wa, {
    size: 17
  }), " Escribir por WhatsApp"), React.createElement("button", {
    className: "btn btn-cream",
    onClick: () => {
      onClose();
      onQuote();
    }
  }, "Solicitar cotizaci\xF3n"))));
}
var HERO_BRANDS = [{
  t: 'AgroNova',
  c: 'lm-1'
}, {
  t: 'Verdalia',
  c: 'lm-2'
}, {
  t: 'CampoFértil',
  c: 'lm-3'
}, {
  t: 'TerraViva',
  c: 'lm-4'
}, {
  t: 'biosemillas',
  c: 'lm-5'
}, {
  t: 'COSECHA ANDINA',
  c: 'lm-6'
}, {
  t: 'NutriAgro',
  c: 'lm-7'
}, {
  t: 'Sembrar & Co.',
  c: 'lm-8'
}];
function Hero({
  onQuote
}) {
  return React.createElement("section", {
    className: "hero",
    id: "inicio"
  }, React.createElement("div", {
    className: "hero__bg"
  }), React.createElement("div", {
    className: "hero__overlay"
  }), React.createElement("div", {
    className: "hero__noise",
    style: {
      opacity: "1"
    }
  }), React.createElement("div", {
    className: "wrap hero__inner"
  }, React.createElement("div", {
    className: "hero__content"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Nutrici\xF3n vegetal de precisi\xF3n"), React.createElement("h1", {
    style: {
      color: "rgb(177, 195, 23)"
    }
  }, "Soluciones de nutrici\xF3n vegetal para una agricultura ", React.createElement("em", {
    style: {
      color: "rgb(177, 195, 23)"
    }
  }, "t\xE9cnica, eficiente y sostenible")), React.createElement("p", {
    className: "hero__sub"
  }, "15 a\xF1os dise\xF1ando fertilizantes a la medida del agro colombiano. Cobertura nacional. Respaldo t\xE9cnico en campo."), React.createElement("div", {
    className: "hero__cta"
  }, React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: onQuote,
    style: {
      backgroundColor: "rgb(177, 195, 23)"
    }
  }, "Solicitar cotizaci\xF3n"), React.createElement("a", {
    href: "#productos",
    className: "btn btn-outline-light btn-lg"
  }, "Ver nuestros productos")))), React.createElement("div", {
    className: "hero__trust"
  }, React.createElement(I.shield, null), React.createElement("span", null, React.createElement("b", null, "15 a\xF1os"), " en el mercado \xB7 Cobertura nacional \xB7 Registros ICA")), React.createElement("div", {
    className: "scroll-hint",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "mouse"
  }), React.createElement("span", null, "Scroll")), React.createElement("div", {
    className: "hero__brands",
    "aria-label": "Empresas del sector agro que conf\xEDan en AgroBrokers"
  }, React.createElement("span", {
    className: "hero__brands-label"
  }, "Conf\xEDan en nosotros"), React.createElement("div", {
    className: "hero__brands-viewport"
  }, React.createElement("div", {
    className: "hero__brands-track",
    "aria-hidden": "true"
  }, [...HERO_BRANDS, ...HERO_BRANDS].map((b, i) => React.createElement("span", {
    key: i,
    className: 'lm ' + b.c
  }, b.t))))));
}
Object.assign(window, {
  Header,
  Drawer,
  Hero,
  NAV_ITEMS,
  WA_URL,
  navHref,
  navActive
});