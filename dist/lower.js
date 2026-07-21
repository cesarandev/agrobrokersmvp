var {
  useState,
  useEffect
} = React;
var POSTS = [{
  cat: 'Palma de Aceite',
  catColor: '#1B5E20',
  date: 'Abril 2024',
  title: '¿Por qué usar fertilizantes de liberación controlada en viveros de palma?',
  excerpt: 'La tecnología CRF reduce pérdidas por lixiviación y asegura disponibilidad nutricional en cada etapa del vivero.',
  bg: 'linear-gradient(135deg,#2f6a31,#173d18)'
}, {
  cat: 'Banano',
  catColor: '#C79A12',
  date: 'Mayo 2024',
  title: 'Maximizando el potencial del banano: una guía de nutrición por etapas',
  excerpt: 'Cada fase fenológica del banano demanda un balance nutricional distinto. Así se diseña un plan por etapas.',
  bg: 'linear-gradient(135deg,#d8c98a,#a8923f)'
}, {
  cat: 'Suelos',
  catColor: '#5D4037',
  date: 'Julio 2024',
  title: 'La importancia del carbono orgánico oxidable en la agricultura',
  excerpt: 'El COox es un indicador clave de salud y fertilidad del suelo. Entender su rol mejora la eficiencia del manejo.',
  bg: 'linear-gradient(135deg,#a98e6f,#6f543b)'
}];
function Blog() {
  return React.createElement("section", {
    className: "blog section-pad",
    id: "blog"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "blog__head"
  }, React.createElement("div", {
    className: "left"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Blog t\xE9cnico"), React.createElement("h2", {
    className: "section-title"
  }, "Conocimiento t\xE9cnico al servicio del campo")), React.createElement("a", {
    href: "/blog",
    className: "btn btn-outline"
  }, "Ver todos los art\xEDculos")), React.createElement("div", {
    className: "blog-grid"
  }, POSTS.map((p, i) => React.createElement(Reveal, {
    key: i,
    className: "post",
    as: "article",
    delay: i * 90
  }, React.createElement("div", {
    className: "post__img",
    style: {
      background: p.bg
    }
  }, React.createElement("span", {
    className: "post__cat",
    style: {
      background: p.catColor
    }
  }, p.cat), React.createElement("span", {
    className: "ph"
  }, "[ foto cultivo 16:9 ]")), React.createElement("div", {
    className: "post__meta"
  }, p.date), React.createElement("h3", null, p.title), React.createElement("p", {
    className: "post__excerpt"
  }, p.excerpt), React.createElement("span", {
    className: "post__more"
  }, "Leer m\xE1s ", React.createElement(I.arrow, {
    size: 14
  })))))));
}
var TESTIMONIALS = [{
  text: 'Desde que implementamos los compuestos mezclados GrowFlex en nuestra plantación de palma, los rendimientos mejoraron notablemente en la primera cosecha.',
  name: 'Director Agrónomo',
  org: 'Empresa Palmera del Llano',
  crop: 'Palma de aceite · Meta',
  initials: 'PL'
}, {
  text: 'El acompañamiento técnico del equipo de AgroBrokers marcó la diferencia. No solo nos vendieron el fertilizante, nos construyeron el plan.',
  name: 'Gerente de Compras',
  org: 'Bananera del Magdalena',
  crop: 'Banano · Magdalena',
  initials: 'BM'
}, {
  text: 'La tecnología CRF de Chronos nos permitió reducir el número de aplicaciones manteniendo la nutrición constante. Un ahorro real en mano de obra.',
  name: 'Jefe de Campo',
  org: 'Agrícola San Isidro',
  crop: 'Aguacate Hass · Antioquia',
  initials: 'SI'
}, {
  text: 'Con los hidrosolubles Solumix nuestro sistema de fertirriego ganó precisión. El cultivo respondió con uniformidad y mejor calidad de fruta.',
  name: 'Ingeniera Agrónoma',
  org: 'Frutales del Cauca',
  crop: 'Cítricos · Valle del Cauca',
  initials: 'FC'
}, {
  text: 'El análisis de suelo y el plan de fertilización a la medida cambiaron nuestra forma de trabajar. Decisiones basadas en datos, no en costumbre.',
  name: 'Administrador',
  org: 'Hacienda La Esperanza',
  crop: 'Arroz · Tolima',
  initials: 'LE'
}, {
  text: 'NutriLimit corrigió la deficiencia de boro que arrastrábamos hace años. El equipo técnico estuvo en campo en cada etapa del proceso.',
  name: 'Propietario',
  org: 'Finca El Mirador',
  crop: 'Café · Huila',
  initials: 'EM'
}, {
  text: 'El servicio AgroPilot con dron nos dio una cobertura de aplicación que antes era imposible en nuestros lotes de ladera. Precisión total.',
  name: 'Gerente Técnico',
  org: 'Plantaciones del Quindío',
  crop: 'Plátano · Quindío',
  initials: 'PQ'
}, {
  text: 'ActiCoox mejoró la eficiencia del fósforo en suelos que tenían fijación alta. Vimos diferencia en el desarrollo radicular desde el primer ciclo.',
  name: 'Director de Producción',
  org: 'Agroindustria del Sinú',
  crop: 'Maíz · Córdoba',
  initials: 'AS'
}];
function Testimonials() {
  var PER_PAGE = 2;
  var pages = [];
  for (var i = 0; i < TESTIMONIALS.length; i += PER_PAGE) pages.push(TESTIMONIALS.slice(i, i + PER_PAGE));
  var [page, setPage] = useState(0);
  var [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    var id = setInterval(() => setPage(p => (p + 1) % pages.length), 5500);
    return () => clearInterval(id);
  }, [paused, pages.length]);
  return React.createElement("section", {
    className: "testi section-pad"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "testi__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Casos de \xE9xito"), React.createElement("h2", {
    className: "section-title"
  }, "Resultados reales en campo")), React.createElement("div", {
    className: "testi-carousel",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, React.createElement("div", {
    className: "testi-track",
    style: {
      transform: `translateX(-${page * 100}%)`
    }
  }, pages.map((group, gi) => React.createElement("div", {
    className: "testi-slide",
    key: gi,
    "aria-hidden": gi !== page
  }, group.map((t, i) => React.createElement("article", {
    className: "testi-card",
    key: i
  }, React.createElement("span", {
    className: "testi-card__quote"
  }, "\u201C"), React.createElement("p", null, t.text), React.createElement("div", {
    className: "testi-card__who"
  }, React.createElement("div", {
    className: "testi-avatar"
  }, t.initials), React.createElement("div", null, React.createElement("div", {
    className: "testi-card__name"
  }, t.name, " \u2014 ", t.org), React.createElement("div", {
    className: "testi-card__crop"
  }, t.crop))))))))), React.createElement("div", {
    className: "testi-dots",
    role: "tablist",
    "aria-label": "P\xE1ginas de testimonios"
  }, pages.map((_, i) => React.createElement("button", {
    key: i,
    className: 'testi-dot ' + (i === page ? 'active' : ''),
    role: "tab",
    "aria-selected": i === page,
    "aria-label": `Página ${i + 1} de ${pages.length}`,
    onClick: () => setPage(i)
  })))));
}
function CtaFinal({
  onQuote
}) {
  return React.createElement("section", {
    className: "cta-final section-pad",
    id: "contacto"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", null, "\xBFListo para transformar la nutrici\xF3n de sus cultivos?"), React.createElement("p", null, "Hable con nuestro equipo t\xE9cnico-comercial. Le respondemos en m\xE1ximo 5 d\xEDas h\xE1biles."), React.createElement("div", {
    className: "cta-final__btns"
  }, React.createElement("button", {
    className: "btn btn-cream btn-lg",
    onClick: onQuote
  }, "Solicitar cotizaci\xF3n"), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-wa btn-lg"
  }, React.createElement(I.wa, {
    size: 18
  }), " Escribir por WhatsApp")), React.createElement("a", {
    className: "cta-final__link",
    href: "/contacto"
  }, "Ver todas las formas de contacto ", React.createElement(I.arrow, {
    size: 15
  }))));
}
function Footer() {
  var navLinks = ['Inicio', 'Nosotros', 'Productos', 'Blog', 'FAQ', 'SAGRILAFT', 'Contacto'];
  var legal = [['Política de Privacidad', '/sagrilaft'], ['Tratamiento de Datos (Ley 1581/12)', '/sagrilaft'], ['SAGRILAFT', '/sagrilaft']];
  return React.createElement("footer", {
    className: "footer"
  }, React.createElement("div", {
    className: "wrap footer__grid"
  }, React.createElement("div", {
    className: "footer__col footer__brand"
  }, React.createElement("img", {
    src: RES('assets/logo-white.png'),
    alt: "AgroBrokers"
  }), React.createElement("p", null, "Soluciones de nutrici\xF3n vegetal para una agricultura t\xE9cnica, eficiente y sostenible."), React.createElement("div", {
    className: "footer__social"
  }, React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, React.createElement(I.linkedin, null)), React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, React.createElement(I.instagram, null)), React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, React.createElement(I.facebook, null)))), React.createElement("div", {
    className: "footer__col"
  }, React.createElement("h4", null, "Navegaci\xF3n"), React.createElement("nav", null, navLinks.map(l => React.createElement("a", {
    key: l,
    href: navHref(l)
  }, l)), legal.map(([l, href]) => React.createElement("a", {
    key: l,
    href: href,
    className: "legal"
  }, l)))), React.createElement("div", {
    className: "footer__col"
  }, React.createElement("h4", null, "Contacto"), React.createElement("div", {
    className: "footer__contact"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement(I.pin, null), React.createElement("span", null, React.createElement("b", null, "Oficina Principal y Planta"), React.createElement("br", null), "Km 5.5 V\xEDa alterna al Puerto, Parque Industrial Puerto del Sol, Bodega 1A. Santa Marta \u2013 Magdalena \u2013 Colombia")), React.createElement("div", {
    className: "row"
  }, React.createElement(I.mail, null), React.createElement("a", {
    href: "mailto:servicio.cliente@agrobrokers.com.co"
  }, "servicio.cliente@agrobrokers.com.co")), React.createElement("div", {
    className: "row"
  }, React.createElement(I.phone, null), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener"
  }, "+57 316 478 1412")))), React.createElement("div", {
    className: "footer__col footer__news"
  }, React.createElement("h4", null, "Bolet\xEDn t\xE9cnico"), React.createElement("p", null, "Reciba art\xEDculos t\xE9cnicos sobre palma, banano, arroz y ma\xEDz directamente en su correo."), React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      e.target.reset();
      alert('Gracias por suscribirse al boletín técnico de AgroBrokers.');
    }
  }, React.createElement("input", {
    type: "email",
    placeholder: "Ingrese su correo corporativo",
    required: true
  }), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Suscribirse")))), React.createElement("div", {
    className: "footer__bar"
  }, "\xA9 2026 AgroBrokers \u2014 INPUTS BROKERS GROUP S.A.S. Todos los derechos reservados."));
}
Object.assign(window, {
  Blog,
  Testimonials,
  CtaFinal,
  Footer
});