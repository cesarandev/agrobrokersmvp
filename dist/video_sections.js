var {
  useState: useStateV
} = React;
function VideoLightbox({
  item,
  onClose
}) {
  React.useEffect(() => {
    var onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    if (item) document.addEventListener('keydown', onKey);
    document.body.style.overflow = item ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);
  if (!item) return null;
  return React.createElement("div", {
    className: "vlb-backdrop open",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, React.createElement("div", {
    className: "vlb-box",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": item.title
  }, React.createElement("button", {
    className: "vlb-close",
    onClick: onClose,
    "aria-label": "Cerrar video"
  }, React.createElement(I.close, null)), React.createElement("div", {
    className: "vlb-player",
    style: item.bg ? {
      background: item.bg
    } : null
  }, React.createElement("span", {
    className: "vlb-player__ph"
  }, React.createElement(I.play, {
    size: 30
  }), " Video pendiente de carga \u2014 reemplace este espacio con el archivo final")), (item.title || item.quote) && React.createElement("div", {
    className: "vlb-caption"
  }, item.title && React.createElement("h3", null, item.title), item.quote && React.createElement("p", null, "\u201C", item.quote, "\u201D"), item.who && React.createElement("span", {
    className: "vlb-who"
  }, item.who))));
}
function CorporateVideo() {
  var [open, setOpen] = useStateV(false);
  return React.createElement("section", {
    className: "corp-video section-pad"
  }, React.createElement("div", {
    className: "wrap cv-grid"
  }, React.createElement(Reveal, {
    className: "cv-text"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Con\xF3zcanos"), React.createElement("h2", {
    className: "section-title"
  }, "Nutrici\xF3n vegetal de precisi\xF3n, contada desde el campo"), React.createElement("p", {
    className: "section-sub"
  }, "Un recorrido por nuestra planta, nuestro equipo t\xE9cnico y los cultivos donde trabajamos todos los d\xEDas."), React.createElement("button", {
    className: "btn btn-primary btn-lg cv-text__btn",
    onClick: () => setOpen(true)
  }, React.createElement(I.play, {
    size: 17
  }), " Ver video corporativo")), React.createElement(Reveal, {
    className: "cv-player",
    delay: 110,
    onClick: () => setOpen(true),
    role: "button",
    tabIndex: 0,
    "aria-label": "Reproducir video corporativo",
    onKeyDown: e => {
      if (e.key === 'Enter') setOpen(true);
    }
  }, React.createElement("span", {
    className: "cv-player__ph"
  }, "[ video corporativo \xB7 16:9 ]"), React.createElement("span", {
    className: "cv-player__play"
  }, React.createElement(I.play, {
    size: 26
  })), React.createElement("span", {
    className: "cv-player__dur"
  }, "2:15"))), React.createElement(VideoLightbox, {
    item: open ? {
      title: 'AgroBrokers — video corporativo'
    } : null,
    onClose: () => setOpen(false)
  }));
}
var VIDEO_TESTIMONIALS = [{
  name: 'Director Agrónomo',
  org: 'Empresa Palmera del Llano',
  crop: 'Palma de aceite · Meta',
  quote: 'Desde que implementamos GrowFlex en nuestra plantación, los rendimientos mejoraron notablemente en la primera cosecha.',
  bg: 'linear-gradient(135deg,#2f6a31,#173d18)',
  dur: '1:48'
}, {
  name: 'Gerente de Compras',
  org: 'Bananera del Magdalena',
  crop: 'Banano · Magdalena',
  quote: 'El acompañamiento técnico marcó la diferencia. No solo nos vendieron el fertilizante, nos construyeron el plan.',
  bg: 'linear-gradient(135deg,#d8a93a,#9a6f12)',
  dur: '2:03'
}, {
  name: 'Jefe de Campo',
  org: 'Agrícola San Isidro',
  crop: 'Aguacate Hass · Antioquia',
  quote: 'La tecnología CRF de Chronos nos permitió reducir el número de aplicaciones manteniendo la nutrición constante.',
  bg: 'linear-gradient(135deg,#3a6b31,#1a3d16)',
  dur: '1:32'
}, {
  name: 'Administrador',
  org: 'Hacienda La Esperanza',
  crop: 'Arroz · Tolima',
  quote: 'El análisis de suelo y el plan de fertilización a la medida cambiaron nuestra forma de trabajar.',
  bg: 'linear-gradient(135deg,#cdb56a,#8a6e26)',
  dur: '2:21'
}];
function VideoTestimonials() {
  var [open, setOpen] = useStateV(null);
  return React.createElement("section", {
    className: "video-testi section-pad"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "video-testi__head"
  }, React.createElement("span", {
    className: "eyebrow center"
  }, "Historias en video"), React.createElement("h2", {
    className: "section-title"
  }, "Lo que dicen nuestros clientes, en sus propias palabras"), React.createElement("p", {
    className: "section-sub"
  }, "Relatos reales de productores que trabajan con AgroBrokers en campo.")), React.createElement("div", {
    className: "vt-grid"
  }, VIDEO_TESTIMONIALS.map((t, i) => React.createElement(Reveal, {
    key: i,
    className: "vt-card",
    as: "button",
    delay: i * 80,
    onClick: () => setOpen(t),
    "aria-label": 'Ver testimonio de ' + t.name
  }, React.createElement("div", {
    className: "vt-card__thumb",
    style: {
      background: t.bg
    }
  }, React.createElement("span", {
    className: "vt-card__play"
  }, React.createElement(I.play, {
    size: 20
  })), React.createElement("span", {
    className: "vt-card__dur"
  }, t.dur)), React.createElement("div", {
    className: "vt-card__body"
  }, React.createElement("p", null, "\u201C", t.quote, "\u201D"), React.createElement("span", {
    className: "vt-card__who"
  }, t.name, " \u2014 ", t.org), React.createElement("span", {
    className: "vt-card__crop"
  }, t.crop)))))), React.createElement(VideoLightbox, {
    item: open ? {
      title: open.name + ' — ' + open.org,
      quote: open.quote,
      who: open.crop,
      bg: open.bg
    } : null,
    onClose: () => setOpen(null)
  }));
}
Object.assign(window, {
  CorporateVideo,
  VideoTestimonials,
  VideoLightbox
});