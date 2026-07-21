/* S-01 Header + Mobile drawer, S-02 Hero */
const { useState, useEffect, useRef } = React;

const NAV_ITEMS = ['Inicio', 'Nosotros', 'Productos', 'Blog', 'FAQ', 'SAGRILAFT', 'Contacto'];
const WA_URL = 'https://wa.me/573164781412?text=' + encodeURIComponent('Hola, me interesa información sobre los productos de AgroBrokers.');

const HOME_PAGE = '/';
const CURRENT_PAGE = (typeof document !== 'undefined' && document.body && document.body.dataset.page) || 'home';

/* Where each nav item points to on the landing (anchors) */
const NAV_ANCHOR = { Inicio: '#inicio', Nosotros: '#nosotros', Productos: '#productos', Blog: '#blog', FAQ: '#faq', SAGRILAFT: '#sagrilaft', Contacto: '#contacto' };
/* Dedicated page file for each item. SAGRILAFT has no standalone page yet → it lives as a section on the landing. */
const NAV_PAGE = { Inicio: HOME_PAGE, Nosotros: '/nosotros', Productos: '/productos', Blog: '/blog', FAQ: '/faq', SAGRILAFT: '/sagrilaft', Contacto: '/contacto' };
/* data-page value that marks each dedicated page as the current page */
const NAV_PAGEKEY = { Inicio: 'home', Nosotros: 'nosotros', Productos: 'productos', Blog: 'blog', FAQ: 'faq', SAGRILAFT: 'sagrilaft', Contacto: 'contacto' };

const navActive = (it) => {
  if (CURRENT_PAGE === 'home') return it === 'Inicio';
  if (it === 'Productos') return CURRENT_PAGE === 'productos' || CURRENT_PAGE === 'marketplace';
  return NAV_PAGEKEY[it] === CURRENT_PAGE;
};
const navHref = (it) => {
  // En el inicio: la mayoría de ítems hacen scroll a su sección…
  if (CURRENT_PAGE === 'home') {
    return NAV_ANCHOR[it];
  }
  // Already on this item's own page → scroll to top.
  if (navActive(it)) return '#top';
  // On any other page, go to the dedicated page.
  return NAV_PAGE[it] || (HOME_PAGE + NAV_ANCHOR[it]);
};
const homeHref = CURRENT_PAGE === 'home' ? '#inicio' : HOME_PAGE;

function Header({ scrolled, onQuote, onBurger }) {
  const solid = scrolled;
  return (
    <header className={'header ' + (solid ? 'solid' : 'transparent')}>
      <div className="wrap">
        <a href={homeHref} className="header__logo" aria-label="AgroBrokers inicio">
          <img src={solid ? RES('assets/logo.png') : RES('assets/logo-white.png')} alt="AgroBrokers" />
        </a>
        <nav className="nav">
          {NAV_ITEMS.map((it) =>
          <a key={it} href={navHref(it)} className={navActive(it) ? 'active' : ''}>{it}</a>
          )}
        </nav>
        <div className="header__cta">
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-wa wa-compact" aria-label="WhatsApp">
            <I.wa size={17} />
            <span className="num">+57 316 478 1412</span>
          </a>
          <button className="btn btn-primary btn-quote-header" onClick={onQuote} style={{ backgroundColor: "rgb(177, 195, 23)" }}>Solicitar cotización</button>
          <button className="burger" onClick={onBurger} aria-label="Abrir menú"><I.menu /></button>
        </div>
      </div>
    </header>);

}

function Drawer({ open, onClose, onQuote }) {
  return (
    <React.Fragment>
      <div className={'drawer-backdrop ' + (open ? 'open' : '')} onClick={onClose} />
      <aside className={'drawer ' + (open ? 'open' : '')} aria-hidden={!open}>
        <div className="drawer__top">
          <img src={RES('assets/logo-white.png')} alt="AgroBrokers" />
          <button className="drawer__close" onClick={onClose} aria-label="Cerrar menú"><I.close /></button>
        </div>
        <nav>
          {NAV_ITEMS.map((it) =>
          <a key={it} href={navHref(it)} onClick={onClose}>{it}</a>
          )}
        </nav>
        <div className="drawer__cta">
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-wa"><I.wa size={17} /> Escribir por WhatsApp</a>
          <button className="btn btn-cream" onClick={() => {onClose();onQuote();}}>Solicitar cotización</button>
        </div>
      </aside>
    </React.Fragment>);

}

/* Marquesina de logos simulados — 8 empresas agro ficticias, cada una con su propia tipografía */
const HERO_BRANDS = [
  { t: 'AgroNova',        c: 'lm-1' },
  { t: 'Verdalia',        c: 'lm-2' },
  { t: 'CampoFértil',     c: 'lm-3' },
  { t: 'TerraViva',       c: 'lm-4' },
  { t: 'biosemillas',     c: 'lm-5' },
  { t: 'COSECHA ANDINA',  c: 'lm-6' },
  { t: 'NutriAgro',       c: 'lm-7' },
  { t: 'Sembrar & Co.',   c: 'lm-8' },
];

function Hero({ onQuote }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__noise" style={{ opacity: "1" }} />
      <div className="wrap hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Nutrición vegetal de precisión</span>
          <h1 style={{ color: "rgb(177, 195, 23)" }}>Soluciones de nutrición vegetal para una agricultura <em style={{ color: "rgb(177, 195, 23)" }}>técnica, eficiente y sostenible</em></h1>
          <p className="hero__sub">15 años diseñando fertilizantes a la medida del agro colombiano. Cobertura nacional. Respaldo técnico en campo.</p>
          <div className="hero__cta">
            <button className="btn btn-primary btn-lg" onClick={onQuote} style={{ backgroundColor: "rgb(177, 195, 23)" }}>Solicitar cotización</button>
            <a href="#productos" className="btn btn-outline-light btn-lg">Ver nuestros productos</a>
          </div>
        </div>
      </div>
      <div className="hero__trust">
        <I.shield />
        <span><b>15 años</b> en el mercado · Cobertura nacional · Registros ICA</span>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
      <div className="hero__brands" aria-label="Empresas del sector agro que confían en AgroBrokers">
        <span className="hero__brands-label">Confían en nosotros</span>
        <div className="hero__brands-viewport">
          <div className="hero__brands-track" aria-hidden="true">
            {[...HERO_BRANDS, ...HERO_BRANDS].map((b, i) => (
              <span key={i} className={'lm ' + b.c}>{b.t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Header, Drawer, Hero, NAV_ITEMS, WA_URL, navHref, navActive });