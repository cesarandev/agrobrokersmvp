/* /marketplace — app shell (Vista 2) */
function MarketplaceApp() {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [quote, setQuote] = React.useState(false);
  const [ficha, setFicha] = React.useState({ open: false, product: null });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openQuote = () => setQuote(true);
  const openFicha = (product) => setFicha({ open: true, product });

  return (
    <React.Fragment>
      <Header scrolled={scrolled} onQuote={openQuote} onBurger={() => setDrawer(true)} />
      <Drawer open={drawer} onClose={() => setDrawer(false)} onQuote={openQuote} />
      <main>
        <Marketplace onQuote={openQuote} onFicha={openFicha} />
      </main>
      <Footer />
      <a href={WA_URL} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp"><I.wa size={30} /></a>
      <FichaModal open={ficha.open} product={ficha.product} onClose={() => setFicha((s) => ({ ...s, open: false }))} />
      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MarketplaceApp />);
