/* /productos — app shell (Vista 1) */
function ProductosApp() {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [quote, setQuote] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openQuote = () => setQuote(true);

  return (
    <React.Fragment>
      <Header scrolled={scrolled} onQuote={openQuote} onBurger={() => setDrawer(true)} />
      <Drawer open={drawer} onClose={() => setDrawer(false)} onQuote={openQuote} />
      <main>
        <CatHead />
        <FamiliesLanding />
        <AddedValueServices onQuote={openQuote} />
        <CatCtaBand onQuote={openQuote} />
      </main>
      <Footer />
      <a href={WA_URL} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp"><I.wa size={30} /></a>
      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ProductosApp />);
