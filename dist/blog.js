var {
  useState: useStateB
} = React;
var BL_CATS = {
  'Palma de aceite': {
    color: '#1B5E20',
    bg: 'linear-gradient(135deg,#2f6a31,#173d18)'
  },
  'Banano': {
    color: '#F57F17',
    bg: 'linear-gradient(135deg,#d8a93a,#9a6f12)'
  },
  'Arroz': {
    color: '#B8860B',
    bg: 'linear-gradient(135deg,#cdb56a,#8a6e26)'
  },
  'Maíz': {
    color: '#E65100',
    bg: 'linear-gradient(135deg,#e0894a,#a8551a)'
  },
  'Suelos': {
    color: '#4E342E',
    bg: 'linear-gradient(135deg,#a98e6f,#5d4037)'
  },
  'Casos de éxito': {
    color: '#1565C0',
    bg: 'linear-gradient(135deg,#3a6b31,#1a3d16)'
  }
};
var catVars = cat => ({
  '--cat': (BL_CATS[cat] || {}).color,
  '--cat-bg': (BL_CATS[cat] || {}).bg
});
function BlHero() {
  return React.createElement("section", {
    className: "bl-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap bl-hero__wrap"
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
  }, "Blog")), React.createElement("div", {
    className: "bl-hero__center"
  }, React.createElement("span", {
    className: "bl-hero__eyebrow"
  }, "Conocimiento t\xE9cnico al servicio del campo"), React.createElement("h1", null, "Blog t\xE9cnico agron\xF3mico"), React.createElement("p", null, "Art\xEDculos especializados en nutrici\xF3n vegetal para palma de aceite, banano, arroz y ma\xEDz."), React.createElement("form", {
    className: "bl-search",
    onSubmit: e => e.preventDefault(),
    role: "search"
  }, React.createElement(I.search, null), React.createElement("input", {
    type: "search",
    placeholder: "Buscar art\xEDculos por cultivo, nutriente o producto...",
    "aria-label": "Buscar art\xEDculos"
  })))));
}
var BL_FEATURED = {
  cat: 'Palma de aceite',
  title: '¿Por qué usar fertilizantes de liberación controlada en viveros de palma?',
  excerpt: 'La etapa de vivero es crítica para el desarrollo de la palma africana. Una nutrición mal formulada en esta fase compromete el rendimiento de toda la plantación. Le explicamos por qué los CRF son la mejor inversión en esta etapa.',
  date: 'Abril 2024',
  read: '7 min'
};
function BlFeatured() {
  var f = BL_FEATURED;
  return React.createElement("section", {
    className: "bl-feat"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(Reveal, {
    className: "bl-feat__card",
    as: "article"
  }, React.createElement("div", {
    className: "bl-ph bl-feat__media",
    style: catVars(f.cat)
  }, React.createElement("span", {
    className: "bl-badge",
    style: {
      background: 'var(--cat)'
    }
  }, f.cat), React.createElement("span", {
    className: "bl-ph__cap"
  }, "[ foto cultivo de palma \xB7 16:9 ]")), React.createElement("div", {
    className: "bl-feat__body"
  }, React.createElement("div", null, React.createElement("span", {
    className: "bl-badge",
    style: {
      background: 'var(--cat)',
      ...catVars(f.cat)
    }
  }, "Art\xEDculo destacado")), React.createElement("h2", null, f.title), React.createElement("p", {
    className: "bl-feat__excerpt"
  }, f.excerpt), React.createElement("div", {
    className: "bl-feat__foot"
  }, React.createElement("span", {
    className: "bl-feat__meta"
  }, f.date, " \xB7 ", f.read, " de lectura"), React.createElement("span", {
    className: "bl-cta"
  }, "Leer art\xEDculo ", React.createElement(I.arrow, {
    size: 15
  })))))));
}
var BL_TABS = ['Todos', 'Palma de aceite', 'Banano', 'Arroz', 'Maíz', 'Suelos'];
var BL_POSTS = [{
  cat: 'Banano',
  title: 'Maximizando el potencial del banano: una guía de nutrición por etapas',
  excerpt: 'Cada fase fenológica del banano demanda un balance nutricional distinto. Así se diseña un plan por etapas.',
  date: 'Mayo 2024',
  read: '9 min'
}, {
  cat: 'Suelos',
  title: 'La importancia del carbono orgánico oxidable en la agricultura',
  excerpt: 'El COox es un indicador clave de salud y fertilidad del suelo. Entender su rol mejora la eficiencia del manejo.',
  date: 'Julio 2024',
  read: '6 min'
}, {
  cat: 'Palma de aceite',
  title: 'Nutrición en etapa de producción de palma africana: claves para maximizar el rendimiento',
  excerpt: 'En plena producción, la palma exige un equilibrio preciso de potasio y magnesio. Revisamos las claves técnicas.',
  date: 'Marzo 2024',
  read: '8 min'
}, {
  cat: 'Maíz',
  title: 'Fertilización NPK en maíz tecnificado: dosis, momentos y fuentes',
  excerpt: 'El maíz responde a la fertilización fraccionada. Dosis, momentos de aplicación y fuentes recomendadas.',
  date: 'Enero 2024',
  read: '7 min'
}, {
  cat: 'Arroz',
  title: 'Manejo nutricional del arroz de riego: del trasplante a la maduración',
  excerpt: 'La nutrición del arroz de riego cambia en cada etapa. Una guía práctica del trasplante a la cosecha.',
  date: 'Febrero 2024',
  read: '8 min'
}, {
  cat: 'Suelos',
  title: 'Micronutrientes olvidados: el papel del boro y el zinc en la productividad',
  excerpt: 'Boro y zinc son determinantes y a menudo deficitarios. Cómo detectarlos y corregirlos a tiempo.',
  date: 'Junio 2024',
  read: '5 min'
}];
function BlCard({
  p
}) {
  return React.createElement("article", {
    className: "bl-card",
    style: catVars(p.cat)
  }, React.createElement("div", {
    className: "bl-ph bl-card__media"
  }, React.createElement("span", {
    className: "bl-badge",
    style: {
      background: 'var(--cat)'
    }
  }, p.cat), React.createElement("span", {
    className: "bl-ph__cap"
  }, "[ foto ", p.cat.toLowerCase(), " ]")), React.createElement("div", {
    className: "bl-card__body"
  }, React.createElement("div", {
    className: "bl-card__meta"
  }, p.date, " \xB7 ", p.read, " de lectura"), React.createElement("h3", null, p.title), React.createElement("p", {
    className: "bl-card__excerpt"
  }, p.excerpt), React.createElement("span", {
    className: "bl-cta"
  }, "Leer m\xE1s ", React.createElement(I.arrow, {
    size: 14
  }))));
}
function BlGrid() {
  var [tab, setTab] = useStateB('Todos');
  var posts = tab === 'Todos' ? BL_POSTS : BL_POSTS.filter(p => p.cat === tab);
  return React.createElement("section", {
    className: "bl-grid-sec",
    id: "articulos"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "bl-tabs",
    role: "tablist",
    "aria-label": "Filtrar por categor\xEDa"
  }, BL_TABS.map(t => React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": tab === t,
    className: 'bl-tab ' + (tab === t ? 'active' : ''),
    onClick: () => setTab(t)
  }, t))), React.createElement("div", {
    className: "bl-grid"
  }, posts.length ? posts.map((p, i) => React.createElement(BlCard, {
    key: i,
    p: p
  })) : React.createElement("p", {
    className: "bl-empty"
  }, "No hay art\xEDculos en esta categor\xEDa todav\xEDa.")), React.createElement("div", {
    className: "bl-more"
  }, React.createElement("button", {
    className: "btn btn-outline"
  }, "Cargar m\xE1s art\xEDculos"), React.createElement("span", {
    className: "bl-more__count"
  }, "Mostrando ", posts.length, " de 24 art\xEDculos"))));
}
var BL_CASOS = [{
  cat: 'Palma de aceite',
  prod: 'GrowFlex',
  title: 'Mejora en el desarrollo vegetativo de palma con Planter 14-25-10',
  desc: 'Finca palmera en el Magdalena Medio. Aplicación de Planter durante la etapa de levante con análisis de suelo previo realizado por el equipo AgroBrokers.',
  result: 'Mejora visible en el color y vigor del follaje a las 8 semanas de aplicación.'
}, {
  cat: 'Banano',
  prod: 'NutriLimit',
  title: 'Corrección de deficiencia de boro en banano tecnificado',
  desc: 'Productor de banano en la zona bananera del Magdalena. El diagnóstico foliar reveló deficiencia crítica de boro. Aplicación de BoroMix con seguimiento técnico quincenal.',
  result: 'Normalización de la síntesis de punta de cigarro en el 85% de las plantas en un ciclo.'
}];
function BlCasos() {
  return React.createElement("section", {
    className: "bl-casos"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "bl-casos__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Casos de \xE9xito"), React.createElement("h2", null, "Resultados reales en campo"), React.createElement("p", null, "Aplicaciones exitosas de nuestros productos documentadas en clientes reales.")), React.createElement("div", {
    className: "bl-casos__grid"
  }, BL_CASOS.map((c, i) => React.createElement(Reveal, {
    key: i,
    className: "bl-caso",
    as: "article",
    delay: i * 100
  }, React.createElement("div", {
    className: "bl-ph bl-caso__media",
    style: catVars(c.cat)
  }, React.createElement("span", {
    className: "bl-ph__cap"
  }, "[ resultado en campo \xB7 ", c.cat.toLowerCase(), " ]")), React.createElement("div", {
    className: "bl-caso__body"
  }, React.createElement("div", {
    className: "bl-caso__badges"
  }, React.createElement("span", {
    className: "bl-badge",
    style: catVars(c.cat)
  }, c.cat), React.createElement("span", {
    className: "bl-prodbadge"
  }, c.prod)), React.createElement("h3", null, c.title), React.createElement("p", {
    className: "bl-caso__desc"
  }, c.desc), React.createElement("div", {
    className: "bl-caso__result"
  }, c.result), React.createElement("span", {
    className: "bl-cta"
  }, "Leer caso completo ", React.createElement(I.arrow, {
    size: 15
  })))))), React.createElement("div", {
    className: "bl-casos__foot"
  }, React.createElement("a", {
    href: "#articulos",
    className: "btn btn-outline-light"
  }, "Ver todos los casos de \xE9xito"))));
}
function BlNewsletter() {
  var [sent, setSent] = useStateB(false);
  var [agree, setAgree] = useStateB(false);
  return React.createElement("section", {
    className: "bl-news"
  }, React.createElement("div", {
    className: "wrap bl-news__grid"
  }, React.createElement(Reveal, {
    className: "bl-news__text"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Bolet\xEDn t\xE9cnico agron\xF3mico"), React.createElement("h2", null, "Reciba nuestros art\xEDculos directamente en su correo"), React.createElement("p", null, "Suscr\xEDbase y reciba cada nuevo art\xEDculo t\xE9cnico sobre nutrici\xF3n vegetal, manejo de cultivos y novedades de AgroBrokers. Sin spam \u2014 solo contenido relevante para su labor."), React.createElement("ul", {
    className: "bl-benefits"
  }, ['Artículos técnicos mensuales por cultivo', 'Novedades del portafolio AgroBrokers', 'Casos de éxito y resultados en campo', 'Puede cancelar en cualquier momento'].map(b => React.createElement("li", {
    key: b
  }, React.createElement(I.check, {
    size: 18
  }), " ", React.createElement("span", null, b))))), React.createElement(Reveal, {
    className: "bl-form",
    delay: 120
  }, sent ? React.createElement("div", {
    className: "bl-success"
  }, React.createElement(I.checkC, {
    size: 22
  }), " \xA1Bienvenido! Recibir\xE1 el pr\xF3ximo art\xEDculo t\xE9cnico en su correo.") : React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (agree) setSent(true);
    }
  }, React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Nombre completo ", React.createElement("span", {
    className: "req",
    style: {
      color: 'var(--green)'
    }
  }, "*")), React.createElement("input", {
    type: "text",
    placeholder: "Nombre y apellidos",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Correo electr\xF3nico corporativo ", React.createElement("span", {
    className: "req",
    style: {
      color: 'var(--green)'
    }
  }, "*")), React.createElement("input", {
    type: "email",
    placeholder: "correo@empresa.com",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Cultivo de mayor inter\xE9s"), React.createElement("select", {
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Seleccione un cultivo"), React.createElement("option", null, "Palma de aceite"), React.createElement("option", null, "Banano"), React.createElement("option", null, "Arroz"), React.createElement("option", null, "Ma\xEDz"), React.createElement("option", null, "Otro"))), React.createElement("label", {
    className: "bl-check"
  }, React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    required: true
  }), React.createElement("span", null, "Acepto recibir el bolet\xEDn y la ", React.createElement("a", {
    href: "/#sagrilaft"
  }, "Pol\xEDtica de Privacidad"), " (Ley 1581 de 2012).")), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: '100%'
    },
    disabled: !agree
  }, "Suscribirme al bolet\xEDn"), React.createElement("p", {
    className: "bl-privacy"
  }, "Sus datos son confidenciales y se usan exclusivamente para el env\xEDo del bolet\xEDn. No compartimos su informaci\xF3n con terceros.")))));
}
var BL_MAGNETS = [{
  badge: 'PALMA',
  cat: 'Palma de aceite',
  title: 'Guía de fertilización en viveros de palma africana',
  desc: 'Protocolo de nutrición desde la germinación hasta el trasplante. Incluye análisis de suelo, dosis recomendadas y cronograma de aplicación.',
  pages: '14 págs'
}, {
  badge: 'BANANO',
  cat: 'Banano',
  title: 'Manejo nutricional del banano por etapas fenológicas',
  desc: 'Guía práctica de nutrición para productores de banano tecnificado. Requerimientos por etapa, fuentes de nutrientes y dosis de referencia.',
  pages: '12 págs'
}, {
  badge: 'ARROZ',
  cat: 'Arroz',
  title: 'Plan de fertilización para arroz de riego',
  desc: 'Nutrición del arroz desde la preparación del suelo hasta la maduración. Basado en análisis de suelo y necesidades del cultivo.',
  pages: '10 págs'
}];
function BlLeadMagnets({
  onDownload
}) {
  return React.createElement("section", {
    className: "bl-lead"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "bl-lead__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Recursos t\xE9cnicos gratuitos"), React.createElement("h2", {
    className: "section-title"
  }, "Gu\xEDas t\xE9cnicas para descarga"), React.createElement("p", {
    className: "section-sub"
  }, "Material t\xE9cnico desarrollado por el equipo agron\xF3mico de AgroBrokers. Descargue gratuitamente con su correo corporativo.")), React.createElement("div", {
    className: "bl-lead__grid"
  }, BL_MAGNETS.map((m, i) => React.createElement(Reveal, {
    key: i,
    className: "bl-magnet",
    delay: i * 90,
    style: catVars(m.cat)
  }, React.createElement("span", {
    className: "bl-magnet__icon"
  }, React.createElement(I.fileText, {
    size: 56
  })), React.createElement("span", {
    className: "bl-badge",
    style: {
      background: 'var(--cat)'
    }
  }, m.badge), React.createElement("h3", null, m.title), React.createElement("p", {
    className: "bl-magnet__desc"
  }, m.desc), React.createElement("span", {
    className: "bl-magnet__pages"
  }, m.pages, " \xB7 PDF"), React.createElement("button", {
    className: "btn btn-outline",
    onClick: () => onDownload(m)
  }, "Descargar gu\xEDa"))))));
}
function BlDownloadModal({
  guide,
  onClose
}) {
  var [done, setDone] = useStateB(false);
  var [agree, setAgree] = useStateB(false);
  React.useEffect(() => {
    var onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = guide ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [guide, onClose]);
  React.useEffect(() => {
    if (guide) {
      setDone(false);
      setAgree(false);
    }
  }, [guide]);
  if (!guide) return null;
  return React.createElement("div", {
    className: "modal-backdrop open",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  }, React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Cerrar"
  }, React.createElement(I.close, null)), done ? React.createElement("div", {
    className: "modal-success"
  }, React.createElement("div", {
    className: "modal-success__icon"
  }, React.createElement(I.checkC, {
    size: 38
  })), React.createElement("h3", null, "Descarga iniciada"), React.createElement("p", null, "Tambi\xE9n le enviamos el documento \xAB", guide.title, "\xBB a su correo corporativo."), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "Cerrar")) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal__head"
  }, React.createElement("div", {
    className: "bl-modal-icon"
  }, React.createElement(I.fileText, null)), React.createElement("h3", null, "Descargue gratis: ", guide.title), React.createElement("p", null, "Complete sus datos y reciba el PDF en su correo corporativo.")), React.createElement("div", {
    className: "modal__body"
  }, React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (agree) setDone(true);
    }
  }, React.createElement("div", {
    className: "form-grid"
  }, React.createElement("div", {
    className: "field full"
  }, React.createElement("label", null, "Nombre completo ", React.createElement("span", {
    className: "req"
  }, "*")), React.createElement("input", {
    type: "text",
    placeholder: "Nombre y apellidos",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Empresa ", React.createElement("span", {
    className: "req"
  }, "*")), React.createElement("input", {
    type: "text",
    placeholder: "Raz\xF3n social",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", null, "Correo corporativo ", React.createElement("span", {
    className: "req"
  }, "*")), React.createElement("input", {
    type: "email",
    placeholder: "correo@empresa.com",
    required: true
  }))), React.createElement("label", {
    className: "bl-check"
  }, React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    required: true
  }), React.createElement("span", null, "Acepto la ", React.createElement("a", {
    href: "/#sagrilaft"
  }, "Pol\xEDtica de Privacidad"), " y el Tratamiento de Datos (Ley 1581 de 2012).")), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary modal__submit",
    disabled: !agree
  }, "Descargar ahora ", React.createElement(I.arrow, {
    size: 16
  })))))));
}
Object.assign(window, {
  BlHero,
  BlFeatured,
  BlGrid,
  BlCasos,
  BlNewsletter,
  BlLeadMagnets,
  BlDownloadModal
});