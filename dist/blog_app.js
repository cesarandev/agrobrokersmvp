function BlogApp() {
  var [scrolled, setScrolled] = React.useState(false);
  var [drawer, setDrawer] = React.useState(false);
  var [quote, setQuote] = React.useState(false);
  var [guide, setGuide] = React.useState(null);
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
  }), React.createElement("main", null, React.createElement(BlHero, null), React.createElement(BlFeatured, null), React.createElement(BlGrid, null), React.createElement(BlCasos, null), React.createElement(VideoTestimonials, null), React.createElement(BlNewsletter, null), React.createElement(BlLeadMagnets, {
    onDownload: setGuide
  }), React.createElement(CtaFinal, {
    onQuote: openQuote
  })), React.createElement(Footer, null), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "wa-float",
    "aria-label": "WhatsApp"
  }, React.createElement(I.wa, {
    size: 30
  })), React.createElement(BlDownloadModal, {
    guide: guide,
    onClose: () => setGuide(null)
  }), React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(BlogApp, null));