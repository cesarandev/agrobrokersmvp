function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var {
  useState: _uS,
  useEffect: _uE,
  useRef: _uR
} = React;
function RES(path) {
  if (!path) return path;
  return typeof window !== 'undefined' && window.__resources && window.__resources[path] || path;
}
function useCountUp(target, duration = 1600) {
  var ref = _uR(null);
  var [val, setVal] = _uS(0);
  var done = _uR(false);
  _uE(() => {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          var start = performance.now();
          var tick = now => {
            var p = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.4
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return [ref, val];
}
function Reveal({
  children,
  as = 'div',
  delay = 0,
  className = '',
  ...rest
}) {
  var ref = _uR(null);
  _uE(() => {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay);
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.15
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  var Tag = as;
  return React.createElement(Tag, _extends({
    ref: ref,
    className: 'reveal ' + className
  }, rest), children);
}
function Accordion({
  items,
  startOpen = 0
}) {
  var [open, setOpen] = _uS(startOpen);
  return React.createElement("div", {
    className: "acc"
  }, items.map((it, i) => {
    var isOpen = open === i;
    return React.createElement("div", {
      className: 'acc__item ' + (isOpen ? 'open' : ''),
      key: i
    }, React.createElement("button", {
      className: "acc__q",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? null : i)
    }, React.createElement("span", null, it.q), React.createElement("span", {
      className: "acc__icon",
      "aria-hidden": "true"
    }, React.createElement("span", null), React.createElement("span", null))), React.createElement("div", {
      className: "acc__panel"
    }, React.createElement("div", {
      className: "acc__a"
    }, typeof it.a === 'string' ? React.createElement("p", null, it.a) : it.a)));
  }));
}
Object.assign(window, {
  useCountUp,
  Reveal,
  Accordion,
  RES
});