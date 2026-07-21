/* AG_005 · Vista 2 — Marketplace con filtro preactivado */
const { useState: useStateM, useEffect: useEffectM, useMemo: useMemoM } = React;
const PAGE_SIZE = 9;

/* ---------- Tarjeta de producto normal ---------- */
function ProductCard({ product }) {
  const fam = famBySlug[product.fam];
  return (
    <article className="pcard">
      <ProductImage product={product} />
      <FamilyBadge fam={fam} />
      <div className="pcard__body">
        <h3 className="pcard__name">{product.name}</h3>
        {product.formula && <div className="pcard__formula">Fórmula: {product.formula}</div>}
        {product.ica && <div className="pcard__ica"><I.shield /> Reg. ICA {product.ica}</div>}
        <p className="pcard__desc">{product.desc}</p>
      </div>
      <div className="pcard__ctas">
        <a className="pbtn pbtn-primary" href={productHref(product)}>Ver producto <I.arrow size={16} /></a>
      </div>
    </article>
  );
}

/* ---------- Tarjeta "A la medida" ---------- */
function CustomCard({ product }) {
  return (
    <article className="pcard pcard--custom">
      <div className="pcard__img pcard__img--ph pcard--custom-img" style={{ background: 'radial-gradient(130% 130% at 80% 0%, #2f6a31 0%, #16330f 80%)' }}>
        <div className="pcard__ph-mark" style={{ background: 'rgba(255,255,255,0.14)', boxShadow: 'none' }}><I.flask size={38} /></div>
      </div>
      <span className="pcard__badge" style={{ background: '#B8860B' }}>A la medida</span>
      <div className="pcard__body">
        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__custom-note">{product.desc}</p>
      </div>
      <div className="pcard__ctas">
        <a className="pbtn pbtn-gold" href={productHref(product)}>Consultar esta línea <I.arrow size={16} /></a>
      </div>
    </article>
  );
}

/* ---------- Panel de filtros ---------- */
function FilterPanel({ activeFam, query, onPick, onClear, onQuery, open, onClose }) {
  return (
    <React.Fragment>
      <div className={'mk-filters__backdrop ' + (open ? 'open' : '')} onClick={onClose} />
      <aside className={'mk-filters ' + (open ? 'open' : '')}>
        <div className="mk-filters__head">
          <h3>Filtrar por familia</h3>
          {activeFam && <button className="mk-clear" onClick={onClear}>Limpiar filtros</button>}
          <button className="mk-filter-close drawer__close" style={{ color: '#fff', width: 34, height: 34 }} onClick={onClose} aria-label="Cerrar"><I.close /></button>
        </div>
        <div className="mk-famlist">
          {FAMILIES_FULL.map((f) => (
            <button key={f.slug} className={'mk-fam ' + (activeFam === f.slug ? 'active' : '')} onClick={() => onPick(f.slug)}>
              <span className="mk-fam__dot" style={{ background: f.color }} />
              <span className="mk-fam__name">{f.name}</span>
              <span className="mk-fam__count">({f.count})</span>
            </button>
          ))}
        </div>
        <div className="mk-filters__search">
          <label htmlFor="mk-q">Buscar producto</label>
          <div className="mk-search-field">
            <I.search />
            <input id="mk-q" type="text" value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Nombre, fórmula o cultivo..." />
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

/* ---------- Marketplace ---------- */
function Marketplace({ onQuote, onFicha }) {
  const params = new URLSearchParams(window.location.search);
  const initialFam = params.get('familia');
  const initialQ = params.get('q') || '';
  const [activeFam, setActiveFam] = useStateM(famBySlug[initialFam] ? initialFam : null);
  const [query, setQuery] = useStateM(initialQ);
  const [visible, setVisible] = useStateM(PAGE_SIZE);
  const [drawer, setDrawer] = useStateM(false);

  const filtered = useMemoM(() => {
    let list = activeFam ? PRODUCTS.filter((p) => p.fam === activeFam) : PRODUCTS;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => {
        const hay = [p.name, p.formula, p.desc, p.cult, famBySlug[p.fam].name].filter(Boolean).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    return list;
  }, [activeFam, query]);

  useEffectM(() => { setVisible(PAGE_SIZE); }, [activeFam, query]);

  const pick = (slug) => { setActiveFam(slug); setDrawer(false); const u = new URL(window.location); u.searchParams.set('familia', slug); u.searchParams.delete('q'); window.history.replaceState({}, '', u); };
  const clear = () => { setActiveFam(null); const u = new URL(window.location); u.searchParams.delete('familia'); window.history.replaceState({}, '', u); };

  const fam = activeFam ? famBySlug[activeFam] : null;
  const shown = filtered.slice(0, visible);
  const total = filtered.length;

  return (
    <React.Fragment>
      {/* Breadcrumb + back */}
      <section className="mk-head">
        <div className="wrap mk-head__row">
          <nav className="mk-head__crumb" aria-label="Ruta">
            <a href="/">Inicio</a>
            <I.arrow size={13} />
            <a href="/productos">Productos</a>
            {fam && <React.Fragment><I.arrow size={13} /><span className="cur">{fam.name}</span></React.Fragment>}
          </nav>
          <a className="mk-back" href="/productos"><I.arrowLeft /> Ver todas las familias</a>
        </div>
      </section>

      <section className="mk-body">
        <div className="wrap mk-layout">
          <FilterPanel activeFam={activeFam} query={query} onPick={pick} onClear={clear} onQuery={setQuery} open={drawer} onClose={() => setDrawer(false)} />

          <div className="mk-results">
            <div className="mk-results__bar">
              <div className="mk-count">
                Mostrando <b>{total}</b> {total === 1 ? 'producto' : 'productos'}{fam ? <React.Fragment> · Familia: <b>{fam.name}</b></React.Fragment> : ''}
              </div>
              <button className="mk-filter-toggle" onClick={() => setDrawer(true)}><I.sliders /> Filtrar</button>
            </div>

            {total === 0 ? (
              <div className="mk-grid">
                <EmptyState query={query} onClear={() => { setQuery(''); }} onConsulta={onQuote} />
              </div>
            ) : (
              <React.Fragment>
                <div className="mk-grid">
                  {shown.map((p, i) =>
                    p.custom
                      ? <CustomCard key={i} product={p} />
                      : <ProductCard key={i} product={p} />
                  )}
                </div>
                {visible < total && (
                  <div className="mk-more">
                    <button className="btn btn-outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>Cargar más productos</button>
                    <span className="mk-more__count">Mostrando {Math.min(visible, total)} de {total} productos</span>
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function EmptyState({ query, onClear, onConsulta }) {
  return (
    <div className="mk-empty">
      <div className="mk-empty__icon"><I.search /></div>
      <h3>No encontramos productos para <span>"{query}"</span></h3>
      <p>Intente con otro nombre, fórmula o cultivo. O contáctenos para una solución a la medida.</p>
      <div className="mk-empty__btns">
        <button className="btn btn-outline" onClick={onClear}>Limpiar búsqueda</button>
        <button className="btn btn-primary" onClick={onConsulta}>Solicitar consulta</button>
      </div>
    </div>
  );
}

Object.assign(window, { Marketplace });
