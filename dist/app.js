function App() {
  var [scrolled, setScrolled] = useState(false);
  var [drawer, setDrawer] = useState(false);
  var [quote, setQuote] = useState(false);
  useEffect(() => {
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
  }), React.createElement("main", null, React.createElement(Hero, {
    onQuote: openQuote
  }), React.createElement(WhyUs, null), React.createElement(ProductsHome, {
    onQuote: openQuote
  }), React.createElement(TailoredCalcTeaser, null), React.createElement(CorporateVideo, null), React.createElement(Stats, null), React.createElement(Blog, null), React.createElement(Testimonials, null), React.createElement(VideoTestimonials, null), React.createElement(FaqHome, null), React.createElement(SagrilaftHome, null), React.createElement(CtaFinal, {
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
    onClose: () => setQuote(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));