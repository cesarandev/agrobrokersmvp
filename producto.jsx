/* AG_006 · Página de Producto Individual (estándar + variante "A la medida") */
const { useState: useStateP, useEffect: useEffectP } = React;

/* ===================== Galería ===================== */
function GalleryFrame({ item, fam, main }) {
  if (item && item.type === 'img') {
    return <div className="pg-frame__inner"><img src={RES(item.src)} alt={fam.name} /></div>;
  }
  return (
    <div className="pg-frame__inner pg-frame__ph" style={{ '--fam': fam.color }}>
      <div className="pg-ph__mark"><I.package size={main ? 56 : 26} /></div>
      <span className="pg-ph__label">[ {item ? item.label : fam.name} ]</span>
    </div>
  );
}

function ProductGallery({ gallery, fam }) {
  const [active, setActive] = useStateP(0);
  return (
    <div className="pg">
      <div className="pg-frame">
        <span className="pg-frame__badge" style={{ background: fam.color }}>{fam.name}</span>
        <GalleryFrame item={gallery[active]} fam={fam} main />
        <span className="pg-frame__zoom"><I.zoom size={18} /></span>
      </div>
      {gallery.length > 1 && (
        <div className="pg-thumbs">
          {gallery.map((g, i) => (
            <button key={i} className={'pg-thumb ' + (i === active ? 'active' : '')} onClick={() => setActive(i)} aria-label={g.label}>
              <GalleryFrame item={g} fam={fam} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===================== Columna derecha — estándar ===================== */
function StdInfo({ product, detail, fam, onFicha }) {
  return (
    <div className="pp-info">
      <a className="pp-famtag" href={'/marketplace?familia=' + fam.slug}>{fam.name}</a>
      <h1 className="pp-name">{product.name}</h1>
      {product.formula && <div className="pp-formula">{product.formula}</div>}
      {product.ica && <div className="pp-ica"><I.shield /> Registro ICA Nº {product.ica}</div>}

      <hr className="pp-rule" />

      <div className="pp-block">
        <span className="pp-label">Descripción</span>
        <p className="pp-desc">{detail.longDesc}</p>
      </div>

      {detail.presentations.length > 0 && (
        <div className="pp-block">
          <span className="pp-label">Presentaciones</span>
          <div className="pp-chips">
            {detail.presentations.map((pr, i) => <span key={i} className="pp-chip">{pr.label}</span>)}
          </div>
        </div>
      )}

      <hr className="pp-rule" />

      <div className="pp-ctas">
        <button className="btn btn-primary pp-cta" onClick={() => onFicha(product)}><I.fileText size={18} /> Obtener ficha técnica</button>
        <a className="btn btn-wa-outline pp-cta" href={waProductMsg(product)} target="_blank" rel="noopener"><I.wa size={18} /> Consultar por WhatsApp</a>
      </div>

      <div className="pp-guarantee">
        <div className="pp-guarantee__row"><I.check size={16} /> Respuesta en máximo 5 días hábiles</div>
        <div className="pp-guarantee__row"><I.check size={16} /> Cobertura de entrega a nivel nacional</div>
        <div className="pp-guarantee__row"><I.check size={16} /> Asesoría técnica incluida con su pedido</div>
      </div>
    </div>
  );
}

/* ===================== Columna derecha — "A la medida" ===================== */
const CUSTOM_STEPS = [
  { icon: 'flask', title: 'Análisis', sub: 'de suelo' },
  { icon: 'clipboard', title: 'Diagnóstico', sub: 'técnico' },
  { icon: 'atom', title: 'Formulación', sub: 'a la medida' },
  { icon: 'truck', title: 'Entrega', sub: 'en finca' },
];

function CustomSteps() {
  return (
    <div className="pp-steps">
      {CUSTOM_STEPS.map((s, i) => (
        <React.Fragment key={i}>
          <div className="pp-step">
            <div className="pp-step__icon">{I[s.icon]({ size: 22 })}</div>
            <div className="pp-step__title">{s.title}</div>
            <div className="pp-step__sub">{s.sub}</div>
          </div>
          {i < CUSTOM_STEPS.length - 1 && <span className="pp-step__arrow"><I.arrow size={18} /></span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function CustomInfo({ product, fam, onConsulta }) {
  return (
    <div className="pp-info">
      <span className="pp-famtag pp-famtag--gold">A la medida · {fam.name}</span>
      <h1 className="pp-name">{product.name}</h1>

      <hr className="pp-rule" />

      <div className="pp-block">
        <span className="pp-label">¿Cómo funciona esta línea?</span>
        <p className="pp-desc">Esta línea no tiene un catálogo fijo de referencias. Cada fórmula se diseña a partir de un análisis técnico de su suelo, sus condiciones de cultivo y sus objetivos de rendimiento. El resultado es un fertilizante único para su finca.</p>
      </div>

      <CustomSteps />

      <hr className="pp-rule" />

      <div className="pp-ctas">
        <button className="btn pp-cta pp-cta--gold" onClick={() => onConsulta(product)}><I.calendar size={18} /> Solicitar consulta técnica gratuita</button>
      </div>
      <p className="pp-cta-note">Sin costo ni compromiso. Nuestro equipo técnico le contactará en 5 días hábiles.</p>
    </div>
  );
}

/* ===================== Tabs (sección inferior) ===================== */
function CompTable({ rows }) {
  if (!rows || rows.length === 0) {
    return <p className="pp-tab-note">La composición garantizada se detalla en la ficha técnica del producto. Solicítela con el formulario o consúltenos por WhatsApp.</p>;
  }
  const hasForm = rows.some((r) => r.form && r.form !== '—');
  return (
    <table className="pp-table">
      <thead>
        <tr><th>Nutriente</th><th>Símbolo</th><th>Contenido</th>{hasForm && <th>Forma</th>}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{r.name}</td>
            <td>{r.sym}</td>
            <td className="pp-table__val">{r.val}</td>
            {hasForm && <td>{r.form && r.form !== '—' ? r.form : '—'}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CultivosTab({ cultivos }) {
  if (!cultivos) {
    return <p className="pp-tab-note">Las recomendaciones de cultivo para este producto se entregan junto con la asesoría técnica. Consulte con nuestro equipo para una recomendación según su análisis de suelo.</p>;
  }
  return (
    <React.Fragment>
      <div className="pp-crops">
        {cultivos.map((c, i) => <span key={i} className="pp-crop"><I.leaf size={15} /> {c}</span>)}
      </div>
      <p className="pp-tab-note italic">Este producto también puede aplicarse a otros cultivos según análisis de suelo. Consulte con nuestro equipo técnico.</p>
    </React.Fragment>
  );
}

function PresTable({ presentations }) {
  if (!presentations || presentations.length === 0) {
    return <p className="pp-tab-note">Consulte las presentaciones disponibles de este producto con nuestro equipo comercial.</p>;
  }
  return (
    <table className="pp-table">
      <thead><tr><th>Presentación</th><th>Peso neto</th><th>Observación</th></tr></thead>
      <tbody>
        {presentations.map((p, i) => (
          <tr key={i}><td>{p.label.replace(/ × .*/, '')}</td><td className="pp-table__val">{p.weight}</td><td>{p.note}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

const STD_TABS = ['Composición garantizada', 'Cultivos recomendados', 'Presentaciones'];
const CUSTOM_TABS = ['¿Qué incluye la consulta?', 'Cultivos recomendados', 'Proceso de formulación'];

function ProductTabs({ detail, custom }) {
  const tabs = custom ? CUSTOM_TABS : STD_TABS;
  const [tab, setTab] = useStateP(0);
  return (
    <section className="pp-tabs-sec">
      <div className="wrap">
        <div className="pp-tabbar" role="tablist">
          {tabs.map((t, i) => (
            <button key={i} role="tab" aria-selected={tab === i} className={'pp-tab ' + (tab === i ? 'active' : '')} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
        <div className="pp-tab-panel">
          {!custom && tab === 0 && <CompTable rows={detail.composition} />}
          {custom && tab === 0 && (
            <div className="pp-consult-grid">
              <div><h4>Visita y análisis</h4><p>Tomamos muestras de suelo y follaje en su finca y las procesamos en laboratorio.</p></div>
              <div><h4>Diagnóstico nutricional</h4><p>Interpretamos los resultados frente a las exigencias de su cultivo y meta de rendimiento.</p></div>
              <div><h4>Fórmula a la medida</h4><p>Diseñamos una mezcla específica para sus condiciones, sin catálogo fijo.</p></div>
              <div><h4>Acompañamiento</h4><p>Asesoría técnica durante la aplicación y seguimiento en campo.</p></div>
            </div>
          )}
          {tab === 1 && <CultivosTab cultivos={detail.cultivos} />}
          {!custom && tab === 2 && <PresTable presentations={detail.presentations} />}
          {custom && tab === 2 && (
            <ol className="pp-process">
              {CUSTOM_STEPS.map((s, i) => (
                <li key={i}><span className="pp-process__n">{i + 1}</span><div><b>{s.title} {s.sub}</b></div></li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}

/* ===================== Productos relacionados ===================== */
function RelatedCard({ product }) {
  const fam = famBySlug[product.fam];
  return (
    <a className="rel-card" href={productHref(product)}>
      <div className="rel-card__img">
        <ProductImage product={product} />
        <FamilyBadge fam={fam} />
      </div>
      <div className="rel-card__body">
        <span className="rel-card__name">{product.name}</span>
        {product.formula && <span className="rel-card__formula">{product.formula}</span>}
        <span className="rel-card__cta">Ver producto <I.arrow size={14} /></span>
      </div>
    </a>
  );
}

function RelatedSection({ product, fam }) {
  const items = relatedProducts(product, 4);
  if (items.length === 0) return null;
  return (
    <section className="pp-related">
      <div className="wrap">
        <h2 className="pp-related__title">Otros productos de {fam.name}</h2>
        <div className="rel-grid">
          {items.map((p) => <RelatedCard key={p.slug} product={p} />)}
        </div>
        <div className="pp-related__foot">
          <a className="btn btn-outline" href={'/marketplace?familia=' + fam.slug}>Ver todo el catálogo {fam.name} <I.arrow size={16} /></a>
        </div>
      </div>
    </section>
  );
}

/* ===================== Página ===================== */
function ProductPage({ onFicha, onConsulta }) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('p');
  const product = productBySlug[slug] || productBySlug['planter'];
  const fam = famBySlug[product.fam];
  const custom = !!product.custom;
  const detail = custom ? { cultivos: null } : getProductDetail(product);

  useEffectP(() => { document.title = product.name + ' — ' + fam.name + ' · AgroBrokers'; }, [product, fam]);

  const customGallery = [{ type: 'ph', label: 'Laboratorio agronómico' }];

  return (
    <React.Fragment>
      <section className="pp-crumb-sec">
        <div className="wrap">
          <nav className="pp-crumb" aria-label="Ruta">
            <a href="/">Inicio</a><span>/</span>
            <a href="/productos">Productos</a><span>/</span>
            <a href={'/marketplace?familia=' + fam.slug}>{fam.name}</a><span>/</span>
            <em>{product.name}</em>
          </nav>
        </div>
      </section>

      <section className="pp-main">
        <div className="wrap pp-cols" data-screen-label={product.name}>
          <div className="pp-left">
            {custom
              ? <ProductGallery gallery={customGallery} fam={{ ...fam, color: '#B8860B', name: 'A la medida' }} />
              : <ProductGallery gallery={detail.gallery} fam={fam} />}
          </div>
          <div className="pp-right">
            {custom
              ? <CustomInfo product={product} fam={fam} onConsulta={onConsulta} />
              : <StdInfo product={product} detail={detail} fam={fam} onFicha={onFicha} />}
          </div>
        </div>
      </section>

      <ProductTabs detail={detail} custom={custom} />

      {!custom && <RelatedSection product={product} fam={fam} />}

      {/* Barra CTA sticky (mobile) */}
      <div className="pp-sticky">
        {custom ? (
          <button className="btn pp-cta--gold" onClick={() => onConsulta(product)}><I.calendar size={17} /> Consulta gratuita</button>
        ) : (
          <React.Fragment>
            <button className="btn btn-primary" onClick={() => onFicha(product)}><I.fileText size={17} /> Ficha técnica</button>
            <a className="btn btn-wa" href={waProductMsg(product)} target="_blank" rel="noopener"><I.wa size={17} /> WhatsApp</a>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

window.ProductPage = ProductPage;
