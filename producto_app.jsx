/* /producto — app shell (página de producto individual, AG_006) */
function ProductoApp() {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [quote, setQuote] = React.useState({ open: false, family: null });
  const [ficha, setFicha] = React.useState({ open: false, product: null });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openFicha = (product) => setFicha({ open: true, product });
  const openConsulta = (product) => setQuote({ open: true, family: product ? famBySlug[product.fam].name : null });

  return (
    <React.Fragment>
      <Header scrolled={scrolled} onQuote={() => setQuote({ open: true, family: null })} onBurger={() => setDrawer(true)} />
      <Drawer open={drawer} onClose={() => setDrawer(false)} onQuote={() => setQuote({ open: true, family: null })} />
      <main>
        <ProductPage onFicha={openFicha} onConsulta={openConsulta} />
      </main>
      <Footer />
      <a href={WA_URL} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp"><I.wa size={30} /></a>
      <FichaModal open={ficha.open} product={ficha.product} onClose={() => setFicha((s) => ({ ...s, open: false }))} />
      <QuoteModal open={quote.open} presetFamily={quote.family} onClose={() => setQuote((s) => ({ ...s, open: false }))} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ProductoApp />);
