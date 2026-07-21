/* Video corporativo + relatos de clientes en video — compartido entre Inicio, Blog y Nosotros */
const { useState: useStateV } = React;

function VideoLightbox({ item, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (item) document.addEventListener('keydown', onKey);
    document.body.style.overflow = item ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [item, onClose]);
  if (!item) return null;
  return (
    <div className="vlb-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="vlb-box" role="dialog" aria-modal="true" aria-label={item.title}>
        <button className="vlb-close" onClick={onClose} aria-label="Cerrar video"><I.close /></button>
        <div className="vlb-player" style={item.bg ? { background: item.bg } : null}>
          <span className="vlb-player__ph"><I.play size={30} /> Video pendiente de carga — reemplace este espacio con el archivo final</span>
        </div>
        {(item.title || item.quote) && (
          <div className="vlb-caption">
            {item.title && <h3>{item.title}</h3>}
            {item.quote && <p>&ldquo;{item.quote}&rdquo;</p>}
            {item.who && <span className="vlb-who">{item.who}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================== Video corporativo ===================== */
function CorporateVideo() {
  const [open, setOpen] = useStateV(false);
  return (
    <section className="corp-video section-pad">
      <div className="wrap cv-grid">
        <Reveal className="cv-text">
          <span className="eyebrow">Conózcanos</span>
          <h2 className="section-title">Nutrición vegetal de precisión, contada desde el campo</h2>
          <p className="section-sub">Un recorrido por nuestra planta, nuestro equipo técnico y los cultivos donde trabajamos todos los días.</p>
          <button className="btn btn-primary btn-lg cv-text__btn" onClick={() => setOpen(true)}><I.play size={17} /> Ver video corporativo</button>
        </Reveal>
        <Reveal className="cv-player" delay={110} onClick={() => setOpen(true)} role="button" tabIndex={0} aria-label="Reproducir video corporativo"
          onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}>
          <span className="cv-player__ph">[ video corporativo · 16:9 ]</span>
          <span className="cv-player__play"><I.play size={26} /></span>
          <span className="cv-player__dur">2:15</span>
        </Reveal>
      </div>
      <VideoLightbox item={open ? { title: 'AgroBrokers — video corporativo' } : null} onClose={() => setOpen(false)} />
    </section>
  );
}

/* ===================== Relatos de clientes en video ===================== */
const VIDEO_TESTIMONIALS = [
  { name: 'Director Agrónomo', org: 'Empresa Palmera del Llano', crop: 'Palma de aceite · Meta', quote: 'Desde que implementamos GrowFlex en nuestra plantación, los rendimientos mejoraron notablemente en la primera cosecha.', bg: 'linear-gradient(135deg,#2f6a31,#173d18)', dur: '1:48' },
  { name: 'Gerente de Compras', org: 'Bananera del Magdalena', crop: 'Banano · Magdalena', quote: 'El acompañamiento técnico marcó la diferencia. No solo nos vendieron el fertilizante, nos construyeron el plan.', bg: 'linear-gradient(135deg,#d8a93a,#9a6f12)', dur: '2:03' },
  { name: 'Jefe de Campo', org: 'Agrícola San Isidro', crop: 'Aguacate Hass · Antioquia', quote: 'La tecnología CRF de Chronos nos permitió reducir el número de aplicaciones manteniendo la nutrición constante.', bg: 'linear-gradient(135deg,#3a6b31,#1a3d16)', dur: '1:32' },
  { name: 'Administrador', org: 'Hacienda La Esperanza', crop: 'Arroz · Tolima', quote: 'El análisis de suelo y el plan de fertilización a la medida cambiaron nuestra forma de trabajar.', bg: 'linear-gradient(135deg,#cdb56a,#8a6e26)', dur: '2:21' },
];

function VideoTestimonials() {
  const [open, setOpen] = useStateV(null);
  return (
    <section className="video-testi section-pad">
      <div className="wrap">
        <div className="video-testi__head">
          <span className="eyebrow center">Historias en video</span>
          <h2 className="section-title">Lo que dicen nuestros clientes, en sus propias palabras</h2>
          <p className="section-sub">Relatos reales de productores que trabajan con AgroBrokers en campo.</p>
        </div>
        <div className="vt-grid">
          {VIDEO_TESTIMONIALS.map((t, i) => (
            <Reveal key={i} className="vt-card" as="button" delay={i * 80} onClick={() => setOpen(t)} aria-label={'Ver testimonio de ' + t.name}>
              <div className="vt-card__thumb" style={{ background: t.bg }}>
                <span className="vt-card__play"><I.play size={20} /></span>
                <span className="vt-card__dur">{t.dur}</span>
              </div>
              <div className="vt-card__body">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <span className="vt-card__who">{t.name} — {t.org}</span>
                <span className="vt-card__crop">{t.crop}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <VideoLightbox item={open ? { title: open.name + ' — ' + open.org, quote: open.quote, who: open.crop, bg: open.bg } : null} onClose={() => setOpen(null)} />
    </section>
  );
}

Object.assign(window, { CorporateVideo, VideoTestimonials, VideoLightbox });
