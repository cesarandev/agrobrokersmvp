function MarketplaceApp() {
  var [scrolled, setScrolled] = React.useState(false);
  var [drawer, setDrawer] = React.useState(false);
  var [quote, setQuote] = React.useState(false);
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
  var openQuote = () => setQuote(true);
  var openFicha = product => setFicha({
    open: true,
    product
  });
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    scrolled: scrolled,
    onQuote: openQuote,
    onBurger: () => setDrawer(true)
  }), React.createElement(Drawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    onQuote: openQuote
  }), React.createElement("main", null, React.createElement(Marketplace, {
    onQuote: openQuote,
    onFicha: openFicha
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
    open: quote,
    onClose: () => setQuote(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(MarketplaceApp, null));