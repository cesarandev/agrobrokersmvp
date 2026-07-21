var {
  useState: useStateM,
  useEffect: useEffectM,
  useMemo: useMemoM
} = React;
var PAGE_SIZE = 9;
function ProductCard({
  product
}) {
  var fam = famBySlug[product.fam];
  return React.createElement("article", {
    className: "pcard"
  }, React.createElement(ProductImage, {
    product: product
  }), React.createElement(FamilyBadge, {
    fam: fam
  }), React.createElement("div", {
    className: "pcard__body"
  }, React.createElement("h3", {
    className: "pcard__name"
  }, product.name), product.formula && React.createElement("div", {
    className: "pcard__formula"
  }, "F\xF3rmula: ", product.formula), product.ica && React.createElement("div", {
    className: "pcard__ica"
  }, React.createElement(I.shield, null), " Reg. ICA ", product.ica), React.createElement("p", {
    className: "pcard__desc"
  }, product.desc)), React.createElement("div", {
    className: "pcard__ctas"
  }, React.createElement("a", {
    className: "pbtn pbtn-primary",
    href: productHref(product)
  }, "Ver producto ", React.createElement(I.arrow, {
    size: 16
  }))));
}
function CustomCard({
  product
}) {
  return React.createElement("article", {
    className: "pcard pcard--custom"
  }, React.createElement("div", {
    className: "pcard__img pcard__img--ph pcard--custom-img",
    style: {
      background: 'radial-gradient(130% 130% at 80% 0%, #2f6a31 0%, #16330f 80%)'
    }
  }, React.createElement("div", {
    className: "pcard__ph-mark",
    style: {
      background: 'rgba(255,255,255,0.14)',
      boxShadow: 'none'
    }
  }, React.createElement(I.flask, {
    size: 38
  }))), React.createElement("span", {
    className: "pcard__badge",
    style: {
      background: '#B8860B'
    }
  }, "A la medida"), React.createElement("div", {
    className: "pcard__body"
  }, React.createElement("h3", {
    className: "pcard__name"
  }, product.name), React.createElement("p", {
    className: "pcard__custom-note"
  }, product.desc)), React.createElement("div", {
    className: "pcard__ctas"
  }, React.createElement("a", {
    className: "pbtn pbtn-gold",
    href: productHref(product)
  }, "Consultar esta l\xEDnea ", React.createElement(I.arrow, {
    size: 16
  }))));
}
function FilterPanel({
  activeFam,
  query,
  onPick,
  onClear,
  onQuery,
  open,
  onClose
}) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: 'mk-filters__backdrop ' + (open ? 'open' : ''),
    onClick: onClose
  }), React.createElement("aside", {
    className: 'mk-filters ' + (open ? 'open' : '')
  }, React.createElement("div", {
    className: "mk-filters__head"
  }, React.createElement("h3", null, "Filtrar por familia"), activeFam && React.createElement("button", {
    className: "mk-clear",
    onClick: onClear
  }, "Limpiar filtros"), React.createElement("button", {
    className: "mk-filter-close drawer__close",
    style: {
      color: '#fff',
      width: 34,
      height: 34
    },
    onClick: onClose,
    "aria-label": "Cerrar"
  }, React.createElement(I.close, null))), React.createElement("div", {
    className: "mk-famlist"
  }, FAMILIES_FULL.map(f => React.createElement("button", {
    key: f.slug,
    className: 'mk-fam ' + (activeFam === f.slug ? 'active' : ''),
    onClick: () => onPick(f.slug)
  }, React.createElement("span", {
    className: "mk-fam__dot",
    style: {
      background: f.color
    }
  }), React.createElement("span", {
    className: "mk-fam__name"
  }, f.name), React.createElement("span", {
    className: "mk-fam__count"
  }, "(", f.count, ")")))), React.createElement("div", {
    className: "mk-filters__search"
  }, React.createElement("label", {
    htmlFor: "mk-q"
  }, "Buscar producto"), React.createElement("div", {
    className: "mk-search-field"
  }, React.createElement(I.search, null), React.createElement("input", {
    id: "mk-q",
    type: "text",
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "Nombre, f\xF3rmula o cultivo..."
  })))));
}
function Marketplace({
  onQuote,
  onFicha
}) {
  var params = new URLSearchParams(window.location.search);
  var initialFam = params.get('familia');
  var initialQ = params.get('q') || '';
  var [activeFam, setActiveFam] = useStateM(famBySlug[initialFam] ? initialFam : null);
  var [query, setQuery] = useStateM(initialQ);
  var [visible, setVisible] = useStateM(PAGE_SIZE);
  var [drawer, setDrawer] = useStateM(false);
  var filtered = useMemoM(() => {
    var list = activeFam ? PRODUCTS.filter(p => p.fam === activeFam) : PRODUCTS;
    var q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(p => {
        var hay = [p.name, p.formula, p.desc, p.cult, famBySlug[p.fam].name].filter(Boolean).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    return list;
  }, [activeFam, query]);
  useEffectM(() => {
    setVisible(PAGE_SIZE);
  }, [activeFam, query]);
  var pick = slug => {
    setActiveFam(slug);
    setDrawer(false);
    var u = new URL(window.location);
    u.searchParams.set('familia', slug);
    u.searchParams.delete('q');
    window.history.replaceState({}, '', u);
  };
  var clear = () => {
    setActiveFam(null);
    var u = new URL(window.location);
    u.searchParams.delete('familia');
    window.history.replaceState({}, '', u);
  };
  var fam = activeFam ? famBySlug[activeFam] : null;
  var shown = filtered.slice(0, visible);
  var total = filtered.length;
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "mk-head"
  }, React.createElement("div", {
    className: "wrap mk-head__row"
  }, React.createElement("nav", {
    className: "mk-head__crumb",
    "aria-label": "Ruta"
  }, React.createElement("a", {
    href: "/"
  }, "Inicio"), React.createElement(I.arrow, {
    size: 13
  }), React.createElement("a", {
    href: "/productos"
  }, "Productos"), fam && React.createElement(React.Fragment, null, React.createElement(I.arrow, {
    size: 13
  }), React.createElement("span", {
    className: "cur"
  }, fam.name))), React.createElement("a", {
    className: "mk-back",
    href: "/productos"
  }, React.createElement(I.arrowLeft, null), " Ver todas las familias"))), React.createElement("section", {
    className: "mk-body"
  }, React.createElement("div", {
    className: "wrap mk-layout"
  }, React.createElement(FilterPanel, {
    activeFam: activeFam,
    query: query,
    onPick: pick,
    onClear: clear,
    onQuery: setQuery,
    open: drawer,
    onClose: () => setDrawer(false)
  }), React.createElement("div", {
    className: "mk-results"
  }, React.createElement("div", {
    className: "mk-results__bar"
  }, React.createElement("div", {
    className: "mk-count"
  }, "Mostrando ", React.createElement("b", null, total), " ", total === 1 ? 'producto' : 'productos', fam ? React.createElement(React.Fragment, null, " \xB7 Familia: ", React.createElement("b", null, fam.name)) : ''), React.createElement("button", {
    className: "mk-filter-toggle",
    onClick: () => setDrawer(true)
  }, React.createElement(I.sliders, null), " Filtrar")), total === 0 ? React.createElement("div", {
    className: "mk-grid"
  }, React.createElement(EmptyState, {
    query: query,
    onClear: () => {
      setQuery('');
    },
    onConsulta: onQuote
  })) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "mk-grid"
  }, shown.map((p, i) => p.custom ? React.createElement(CustomCard, {
    key: i,
    product: p
  }) : React.createElement(ProductCard, {
    key: i,
    product: p
  }))), visible < total && React.createElement("div", {
    className: "mk-more"
  }, React.createElement("button", {
    className: "btn btn-outline",
    onClick: () => setVisible(v => v + PAGE_SIZE)
  }, "Cargar m\xE1s productos"), React.createElement("span", {
    className: "mk-more__count"
  }, "Mostrando ", Math.min(visible, total), " de ", total, " productos")))))));
}
function EmptyState({
  query,
  onClear,
  onConsulta
}) {
  return React.createElement("div", {
    className: "mk-empty"
  }, React.createElement("div", {
    className: "mk-empty__icon"
  }, React.createElement(I.search, null)), React.createElement("h3", null, "No encontramos productos para ", React.createElement("span", null, "\"", query, "\"")), React.createElement("p", null, "Intente con otro nombre, f\xF3rmula o cultivo. O cont\xE1ctenos para una soluci\xF3n a la medida."), React.createElement("div", {
    className: "mk-empty__btns"
  }, React.createElement("button", {
    className: "btn btn-outline",
    onClick: onClear
  }, "Limpiar b\xFAsqueda"), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onConsulta
  }, "Solicitar consulta")));
}
Object.assign(window, {
  Marketplace
});