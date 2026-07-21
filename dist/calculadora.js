var {
  useState: useStateC
} = React;
var CALC_CROPS = [{
  name: 'Palma de aceite',
  base: [14, 7, 21]
}, {
  name: 'Banano',
  base: [12, 6, 24]
}, {
  name: 'Arroz',
  base: [18, 10, 10]
}, {
  name: 'Maíz',
  base: [15, 15, 15]
}, {
  name: 'Café',
  base: [17, 6, 18]
}, {
  name: 'Aguacate Hass',
  base: [10, 10, 20]
}, {
  name: 'Cítricos',
  base: [16, 8, 16]
}, {
  name: 'Otro cultivo',
  base: [15, 15, 15]
}];
var CALC_LEVELS = [{
  v: 'bajo',
  label: 'Bajo',
  factor: 1.25
}, {
  v: 'medio',
  label: 'Medio',
  factor: 1.0
}, {
  v: 'alto',
  label: 'Alto',
  factor: 0.7
}];
var CALC_STEPS = ['Cultivo', 'Área', 'Análisis de suelo', 'Resultado'];
function CalcProgress({
  step
}) {
  return React.createElement("div", {
    className: "calc-steps"
  }, CALC_STEPS.map((s, i) => React.createElement("div", {
    className: 'calc-step ' + (i === step ? 'active' : i < step ? 'done' : ''),
    key: s
  }, React.createElement("span", {
    className: "calc-step__n"
  }, i < step ? React.createElement(I.check, {
    size: 14
  }) : i + 1), React.createElement("span", {
    className: "calc-step__label"
  }, s))));
}
function CalcHero() {
  return React.createElement("section", {
    className: "calc-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("nav", {
    className: "breadcrumb",
    "aria-label": "Ruta de navegaci\xF3n"
  }, React.createElement("a", {
    href: "/"
  }, "Inicio"), React.createElement(I.arrow, {
    size: 14
  }), React.createElement("a", {
    href: "/productos"
  }, "Productos"), React.createElement(I.arrow, {
    size: 14
  }), React.createElement("span", {
    className: "cur"
  }, "Calculadora Tailored To")), React.createElement("span", {
    className: "calc-hero__eyebrow"
  }, React.createElement(I.gear, {
    size: 15
  }), " Tailored To"), React.createElement("h1", null, "Arme su f\xF3rmula de fertilizaci\xF3n a la medida"), React.createElement("p", null, "Responda estas preguntas y obtenga una f\xF3rmula NPK de referencia para su cultivo. Es una estimaci\xF3n orientativa \u2014 la f\xF3rmula definitiva se ajusta con nuestro equipo t\xE9cnico a partir de un an\xE1lisis de suelo formal.")));
}
function calcResult(form) {
  var crop = CALC_CROPS.find(c => c.name === form.crop) || CALC_CROPS[0];
  var fN = CALC_LEVELS.find(l => l.v === form.n).factor;
  var fP = CALC_LEVELS.find(l => l.v === form.p).factor;
  var fK = CALC_LEVELS.find(l => l.v === form.k).factor;
  var n = Math.round(crop.base[0] * fN);
  var p = Math.round(crop.base[1] * fP);
  var k = Math.round(crop.base[2] * fK);
  var avg = (fN + fP + fK) / 3;
  var dose = Math.round(280 * avg / 10) * 10;
  var hectares = Number(form.hectares) || 1;
  var total = Math.round(dose * hectares);
  return {
    crop: crop.name,
    n,
    p,
    k,
    dose,
    total,
    hectares
  };
}
function CalcApp({
  onQuote
}) {
  var [step, setStep] = useStateC(0);
  var [form, setForm] = useStateC({
    crop: '',
    hectares: '',
    n: '',
    p: '',
    k: ''
  });
  var set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  var canNext = [!!form.crop, Number(form.hectares) > 0, !!form.n && !!form.p && !!form.k, true][step];
  var next = () => setStep(s => Math.min(s + 1, CALC_STEPS.length - 1));
  var back = () => setStep(s => Math.max(s - 1, 0));
  var result = step === 3 ? calcResult(form) : null;
  return React.createElement("section", {
    className: "calc-body"
  }, React.createElement("div", {
    className: "wrap calc-card"
  }, React.createElement(CalcProgress, {
    step: step
  }), step === 0 && React.createElement("div", {
    className: "calc-panel"
  }, React.createElement("h2", null, "\xBFCu\xE1l es su cultivo?"), React.createElement("p", {
    className: "calc-panel__sub"
  }, "Seleccione el cultivo que quiere fertilizar."), React.createElement("div", {
    className: "calc-options"
  }, CALC_CROPS.map(c => React.createElement("button", {
    key: c.name,
    className: 'calc-opt ' + (form.crop === c.name ? 'active' : ''),
    onClick: () => set('crop', c.name)
  }, React.createElement(I.leaf, {
    size: 20
  }), " ", c.name)))), step === 1 && React.createElement("div", {
    className: "calc-panel"
  }, React.createElement("h2", null, "\xBFCu\xE1ntas hect\xE1reas va a fertilizar?"), React.createElement("p", {
    className: "calc-panel__sub"
  }, "Esto nos permite estimar la cantidad total de producto requerida."), React.createElement("div", {
    className: "calc-field"
  }, React.createElement("input", {
    type: "number",
    min: "1",
    step: "1",
    placeholder: "Ej. 12",
    value: form.hectares,
    onChange: e => set('hectares', e.target.value)
  }), React.createElement("span", null, "hect\xE1reas"))), step === 2 && React.createElement("div", {
    className: "calc-panel"
  }, React.createElement("h2", null, "\xBFC\xF3mo est\xE1 su suelo seg\xFAn el \xFAltimo an\xE1lisis?"), React.createElement("p", {
    className: "calc-panel__sub"
  }, "Si no tiene un an\xE1lisis reciente, elija \"Medio\" \u2014 nuestro equipo lo confirmar\xE1 con una muestra en campo."), ['n', 'p', 'k'].map(k => React.createElement("div", {
    className: "calc-nutrient",
    key: k
  }, React.createElement("span", {
    className: "calc-nutrient__label"
  }, k === 'n' ? 'Nitrógeno (N)' : k === 'p' ? 'Fósforo (P)' : 'Potasio (K)'), React.createElement("div", {
    className: "calc-pills"
  }, CALC_LEVELS.map(l => React.createElement("button", {
    key: l.v,
    className: 'calc-pill ' + (form[k] === l.v ? 'active' : ''),
    onClick: () => set(k, l.v)
  }, l.label)))))), step === 3 && result && React.createElement("div", {
    className: "calc-panel calc-result"
  }, React.createElement("span", {
    className: "calc-result__tag"
  }, React.createElement(I.gear, {
    size: 16
  }), " F\xF3rmula sugerida"), React.createElement("h2", {
    className: "calc-result__formula"
  }, result.n, "-", result.p, "-", result.k), React.createElement("p", {
    className: "calc-panel__sub"
  }, "Para ", result.crop.toLowerCase(), " \xB7 ", result.hectares, " ha"), React.createElement("div", {
    className: "calc-result__grid"
  }, React.createElement("div", {
    className: "calc-result__card"
  }, React.createElement("span", {
    className: "calc-result__num"
  }, result.dose, " kg"), React.createElement("span", null, "por hect\xE1rea")), React.createElement("div", {
    className: "calc-result__card"
  }, React.createElement("span", {
    className: "calc-result__num"
  }, result.total.toLocaleString('es-CO'), " kg"), React.createElement("span", null, "total estimado"))), React.createElement("p", {
    className: "calc-disclaimer"
  }, "Esta es una estimaci\xF3n referencial generada autom\xE1ticamente. La f\xF3rmula final \u2014micronutrientes incluidos\u2014 se define con nuestro equipo t\xE9cnico a partir de un an\xE1lisis de suelo y foliar formal."), React.createElement("div", {
    className: "calc-result__ctas"
  }, React.createElement("button", {
    className: "btn btn-gold btn-lg",
    onClick: onQuote
  }, "Solicitar cotizaci\xF3n con esta f\xF3rmula"), React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-wa-outline btn-lg"
  }, React.createElement(I.wa, {
    size: 17
  }), " Consultar por WhatsApp"))), React.createElement("div", {
    className: "calc-nav"
  }, step > 0 && React.createElement("button", {
    className: "btn btn-outline",
    onClick: back
  }, React.createElement(I.arrowLeft, {
    size: 16
  }), " Atr\xE1s"), step < 3 && React.createElement("button", {
    className: "btn btn-primary",
    disabled: !canNext,
    onClick: next
  }, "Siguiente ", React.createElement(I.arrow, {
    size: 16
  })), step === 3 && React.createElement("button", {
    className: "btn btn-outline",
    onClick: () => {
      setStep(0);
      setForm({
        crop: '',
        hectares: '',
        n: '',
        p: '',
        k: ''
      });
    }
  }, "Empezar de nuevo"))));
}
Object.assign(window, {
  CalcHero,
  CalcApp
});