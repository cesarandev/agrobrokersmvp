function ProductoApp() {
  var [scrolled, setScrolled] = React.useState(false);
  var [drawer, setDrawer] = React.useState(false);
  var [quote, setQuote] = React.useState({
    open: false,
    family: null
  });
  var [ficha, setFicha] = React.useState({
    open: false,
    product: null
  });
  React.useEffect(() => {
    var onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  var openFicha = product => setFicha({
    open: true,
    product
  });
  var openConsulta = product => setQuote({
    open: true,
    family: product ? famBySlug[product.fam].name : null
  });
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    scrolled: scrolled,
    onQuote: () => setQuote({
      open: true,
      family: null
    }),
    onBurger: () => setDrawer(true)
  }), React.createElement(Drawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    onQuote: () => setQuote({
      open: true,
      family: null
    })
  }), React.createElement("main", null, React.createElement(ProductPage, {
    onFicha: openFicha,
    onConsulta: openConsulta
  })), React.createElement(Footer, null), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "wa-float",
    "aria-label": "WhatsApp"
  }, React.createElement(I.wa, {
    size: 30
  })), React.createElement(FichaModal, {
    open: ficha.open,
    product: ficha.product,
    onClose: () => setFicha(s => ({
      ...s,
      open: false
    }))
  }), React.createElement(QuoteModal, {
    open: quote.open,
    presetFamily: quote.family,
    onClose: () => setQuote(s => ({
      ...s,
      open: false
    }))
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(ProductoApp, null));