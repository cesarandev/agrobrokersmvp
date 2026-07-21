/* Shared hooks: reveal-on-scroll + count-up */
const { useState: _uS, useEffect: _uE, useRef: _uR } = React;

function useCountUp(target, duration = 1600) {
  const ref = _uR(null);
  const [val, setVal] = _uS(0);
  const done = _uR(false);
  _uE(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return [ref, val];
}

/* Wrap children; adds .in when scrolled into view */
function Reveal({ children, as = 'div', delay = 0, className = '', ...rest }) {
  const ref = _uR(null);
  _uE(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), delay); obs.unobserve(el); }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  const Tag = as;
  return <Tag ref={ref} className={'reveal ' + className} {...rest}>{children}</Tag>;
}

/* Shared accordion — one item open at a time (set startOpen to an index, or null) */
function Accordion({ items, startOpen = 0 }) {
  const [open, setOpen] = _uS(startOpen);
  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={'acc__item ' + (isOpen ? 'open' : '')} key={i}>
            <button className="acc__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{it.q}</span>
              <span className="acc__icon" aria-hidden="true"><span /><span /></span>
            </button>
            <div className="acc__panel">
              <div className="acc__a">{typeof it.a === 'string' ? <p>{it.a}</p> : it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { useCountUp, Reveal, Accordion });
