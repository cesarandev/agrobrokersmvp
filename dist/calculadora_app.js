function CalculadoraApp() {
  var [scrolled, setScrolled] = React.useState(false);
  var [drawer, setDrawer] = React.useState(false);
  var [quote, setQuote] = React.useState(false);
  React.useEffect(() => {
    var onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  var openQuote = () => setQuote(true);
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    scrolled: scrolled,
    onQuote: openQuote,
    onBurger: () => setDrawer(true)
  }), React.createElement(Drawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    onQuote: openQuote
  }), React.createElement("main", null, React.createElement(CalcHero, null), React.createElement(CalcApp, {
    onQuote: openQuote
  })), React.createElement(Footer, null), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "wa-float",
    "aria-label": "WhatsApp"
  }, React.createElement(I.wa, {
    size: 30
  })), React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false),
    presetFamily: "Tailored To"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(CalculadoraApp, null));