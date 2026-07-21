var FAMILIES_FULL = [{
  slug: 'tailored-to',
  name: 'Tailored To',
  short: 'Tailored To',
  tagline: 'Fórmulas diseñadas a la medida de cada finca según análisis de suelo y foliar.',
  color: '#B8860B',
  badge: 'A la medida',
  custom: true,
  count: 1,
  img: 'assets/prod-tailoredto.png'
}, {
  slug: 'chronos',
  name: 'Chronos',
  short: 'Chronos',
  tagline: 'Liberación controlada: el nutriente disponible en el momento exacto que el cultivo lo necesita.',
  color: '#1B5E20',
  badge: 'A la medida',
  badgeColor: '#B8860B',
  custom: true,
  count: 2,
  img: 'assets/prod-chronos.png'
}, {
  slug: 'acticoox',
  name: 'ActiCoox',
  short: 'ActiCoox',
  tagline: 'Fósforo y potasio de alta eficiencia: FosfoCox y ProduCox para maximizar la absorción radical.',
  color: '#388E3C',
  badge: 'Alta eficiencia',
  count: 2,
  img: 'assets/prod-acticoox.png'
}, {
  slug: 'nutrilimit',
  name: 'NutriLimit',
  short: 'NutriLimit',
  tagline: 'Elementos menores especializados — boro y zinc — para una nutrición vegetal verdaderamente completa.',
  color: '#00796B',
  badge: 'Elementos menores',
  count: 4,
  img: 'assets/prod-nutrilimit.png'
}, {
  slug: 'novamix',
  name: 'NovaMix / NextGen',
  short: 'NovaMix',
  tagline: 'Fertilizantes simples de nueva generación y convencionales de alta pureza para cualquier sistema.',
  color: '#1565C0',
  badge: 'Simples',
  count: 10,
  img: null
}, {
  slug: 'solumix',
  name: 'Solumix',
  short: 'Solumix',
  tagline: 'Hidrosolubles de precisión formulados para sistemas de fertirrigación de alto rendimiento.',
  color: '#0277BD',
  badge: 'Hidrosolubles',
  count: 1,
  img: null
}, {
  slug: 'growflex',
  name: 'GrowFlex',
  short: 'GrowFlex',
  tagline: 'Compuestos mezclados NPK con marcas propias y genéricos para los cultivos más exigentes del país.',
  color: '#558B2F',
  badge: 'NPK',
  count: 17,
  img: 'assets/prod-growflex.png'
}, {
  slug: 'covermax',
  name: 'CoverMax',
  short: 'CoverMax',
  tagline: 'Semillas de cobertura para la gestión sostenible del suelo y sistemas silvopastoriles.',
  color: '#5D4037',
  badge: 'Coberturas',
  count: 4,
  img: null
}];
var famBySlug = Object.fromEntries(FAMILIES_FULL.map(f => [f.slug, f]));
var GF_TAG = FAMILIES_FULL.find(f => f.slug === 'growflex').tagline;
var P = (fam, name, formula, ica, desc, extra = {}) => ({
  fam,
  name,
  formula,
  ica,
  desc,
  ...extra
});
var PRODUCTS = [P('growflex', 'GrowMix', '12-24-12-5(S)', '9153', GF_TAG, {
  cult: 'arroz maíz'
}), P('growflex', 'Planter', '14-25-10-3,2 MgO', '10861', GF_TAG, {
  cult: 'palma banano'
}), P('growflex', 'Perisson', '20-10-16-3,4 MgO', '10861', GF_TAG, {
  img: 'assets/prod-growflex.png',
  cult: 'café cítricos'
}), P('growflex', 'Vergel', '21-0-28-2 MgO', null, GF_TAG, {
  cult: 'aguacate'
}), P('growflex', 'Compuesto NPK 25-4-24', '25-4-24', '11456', GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 13-5-27-5-0,5B', '13-5-27-5-0,5B', '10574', GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 15-4-23-4 MgO', '15-4-23-4 MgO', null, GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 10-5-27-4 MgO', '10-5-27-4 MgO', null, GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 11-4-26-6 MgO', '11-4-26-6 MgO', null, GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 12-8-22-4 MgO', '12-8-22-4 MgO', null, GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 17-6-23-4 MgO', '17-6-23-4 MgO', null, GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 12-24-12-5 CaO', '12-24-12-5 CaO', '9153', GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 19-9-19', '19-9-19', '9018', GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 27-6-6-2 CaO', '27-6-6-2 CaO', '9019', GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 27-6-6', '27-6-6', '9149', GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 13-3-26-4,3 MgO-3,9S + Zn/B', '13-3-26-4,3 MgO-3,9S + Zn/B', null, GF_TAG, {
  generic: true
}), P('growflex', 'Compuesto NPK 13-3-26-4,5 MgO-4,1S', '13-3-26-4,5 MgO-4,1S', null, GF_TAG, {
  generic: true
}), P('nutrilimit', 'BoroMix', '0-0-3-14B', '14070', 'Boro de acción prolongada para corregir deficiencias de forma sostenida.', {
  img: 'assets/prod-nutrilimit.png'
}), P('nutrilimit', 'Etibor 48 / Bórax Pentahidratado', null, '7896', 'Fuente de boro soluble de aplicación versátil.'), P('nutrilimit', 'Borick K / Ácido Bórico', null, '9744', 'Boro foliar de alta pureza para aplicación directa.'), P('nutrilimit', 'Boro + K / Bórax Pentahidratado', null, '9263', 'Boro y potasio combinados en una sola fuente.'), P('novamix', 'N-Secured', null, '10779', 'Nitrógeno estabilizado de liberación eficiente.'), P('novamix', 'KCL Granular', null, '10073', 'Cloruro de potasio granular de alta solubilidad.'), P('novamix', 'KCL Estándar', null, '10073', 'Cloruro de potasio estándar para mezcla física.'), P('novamix', 'MAP', null, '10223', 'Fosfato monoamónico — fósforo y nitrógeno de arranque.'), P('novamix', 'Kieserita + K', null, '9262', 'Magnesio y potasio en una fuente combinada.'), P('novamix', 'Kieserita', null, '7895', 'Fuente de magnesio de alta disponibilidad.'), P('novamix', 'DAP', null, null, 'Fosfato diamónico — fósforo y nitrógeno concentrados.'), P('novamix', 'Urea', null, null, 'Nitrógeno ureico de uso general.'), P('novamix', 'Super Fosfato', null, null, 'Fósforo simple para corrección de suelos.'), P('novamix', 'PatenKali', null, null, 'Potasio, magnesio y azufre en una sola aplicación.'), P('solumix', 'CalExact', '15-0-0-25 CaO', '13784', 'Hidrosoluble de nitrógeno y calcio para fertirrigación de precisión.'), P('covermax', 'Kudzu', null, null, 'Leguminosa de cobertura tropical para protección del suelo.'), P('covermax', 'Desmodium', null, null, 'Cobertura ideal para sistemas ganaderos y silvopastoriles.'), P('covermax', 'Mucuna', null, null, 'Cobertura nitrificante con efecto de control de malezas.'), P('covermax', 'Rhizobium', null, null, 'Inoculante biológico para fijación de nitrógeno en leguminosas.'), P('acticoox', 'FosfoCox', null, null, 'Fósforo activado de alta eficiencia y absorción radical.'), P('acticoox', 'ProduCox', null, null, 'Potasio activado con tecnología COOX para máxima asimilación.', {
  img: 'assets/prod-acticoox.png'
}), P('tailored-to', 'Tailored To', null, null, 'Esta línea se formula a partir de un análisis técnico de su suelo y cultivo. No existe un catálogo fijo.', {
  custom: true
}), P('chronos', 'Chronos Release', null, null, 'Esta línea se formula a partir de un análisis técnico de su suelo y cultivo. No existe un catálogo fijo.', {
  custom: true
}), P('chronos', 'Chronos Release Mix', null, null, 'Esta línea se formula a partir de un análisis técnico de su suelo y cultivo. No existe un catálogo fijo.', {
  custom: true
})];
var WA_BASE = 'https://wa.me/573164781412';
var waProductUrl = name => WA_BASE + '?text=' + encodeURIComponent(`Hola, me interesa el producto ${name}. Quisiera más información.`);
function ProductImage({
  product
}) {
  var fam = famBySlug[product.fam];
  if (product.img) {
    return React.createElement("div", {
      className: "pcard__img"
    }, React.createElement("img", {
      src: RES(product.img),
      alt: product.name,
      loading: "lazy"
    }));
  }
  return React.createElement("div", {
    className: "pcard__img pcard__img--ph",
    style: {
      '--fam': fam.color
    }
  }, React.createElement("div", {
    className: "pcard__ph-mark"
  }, React.createElement(I.package, {
    size: 40
  })), product.formula ? React.createElement("span", {
    className: "pcard__ph-formula"
  }, product.formula) : React.createElement("span", {
    className: "pcard__ph-name"
  }, product.name));
}
function FamilyBadge({
  fam,
  custom
}) {
  var isCustom = custom || fam.custom;
  var color = isCustom ? '#B8860B' : fam.color;
  var label = isCustom ? 'A la medida' : fam.name;
  return React.createElement("span", {
    className: "pcard__badge",
    style: {
      background: color
    }
  }, label);
}
var slugify = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
PRODUCTS.forEach(p => {
  p.slug = slugify(p.name);
});
var productBySlug = Object.fromEntries(PRODUCTS.map(p => [p.slug, p]));
var productHref = p => '/producto?p=' + p.slug;
var waProductMsg = p => {
  var label = p.formula ? `${p.name} (${p.formula})` : p.name;
  return WA_BASE + '?text=' + encodeURIComponent(`Hola, me interesa el producto ${label}. Quisiera más información.`);
};
function parseComposition(formula) {
  if (!formula) return null;
  var segs = formula.split('-').map(s => s.trim()).filter(Boolean);
  if (segs.length < 3) return null;
  var macroDefs = [{
    name: 'Nitrógeno total',
    sym: 'N'
  }, {
    name: 'Fósforo asimilable',
    sym: 'P₂O₅'
  }, {
    name: 'Potasio soluble',
    sym: 'K₂O'
  }];
  var rows = [];
  for (var i = 0; i < 3; i++) {
    var m = segs[i].match(/[\d.,]+/);
    if (m) rows.push({
      ...macroDefs[i],
      val: m[0] + '%'
    });
  }
  var units = [[/MgO/, 'Magnesio', 'MgO'], [/CaO/, 'Calcio', 'CaO'], [/Zn/, 'Zinc', 'Zn'], [/\bB\b|[\d,]B/, 'Boro', 'B'], [/S\b|\(S\)|[\d,]S/, 'Azufre', 'S']];
  var _loop = function () {
    var seg = segs[_i];
    var num = seg.match(/[\d.,]+/);
    var val = num ? num[0] : '';
    if (!val) return 1;
    var hit = units.find(([re]) => re.test(seg));
    if (hit) rows.push({
      name: hit[1],
      sym: hit[2],
      val: val + '%'
    });
  };
  for (var _i = 3; _i < segs.length; _i++) {
    if (_loop()) continue;
  }
  return rows.length ? rows : null;
}
var PRODUCT_DETAILS = {
  planter: {
    longDesc: 'Compuesto mezclado NPK de alta solubilidad, formulado para acompañar las etapas de establecimiento y desarrollo vegetativo en cultivos exigentes como palma de aceite, banano y maíz. Su composición balanceada de nitrógeno, fósforo y potasio, complementada con magnesio, azufre, zinc y boro, garantiza una nutrición completa desde las primeras etapas del ciclo productivo.',
    cultivos: ['Palma de aceite', 'Banano / plátano', 'Maíz', 'Arroz', 'Caña de azúcar'],
    presentations: [{
      label: 'Bulto × 50 kg',
      weight: '50 kg',
      note: 'Empaque polipropileno laminado'
    }, {
      label: 'Big Bag × 1.000 kg',
      weight: '1.000 kg',
      note: 'Disponible por pedido mínimo'
    }],
    composition: [{
      name: 'Nitrógeno total',
      sym: 'N',
      val: '14%',
      form: 'Ureico 9% · Amoniacal 5%'
    }, {
      name: 'Fósforo asimilable',
      sym: 'P₂O₅',
      val: '25%',
      form: 'Soluble en agua y citrato'
    }, {
      name: 'Potasio soluble',
      sym: 'K₂O',
      val: '10%',
      form: 'Soluble en agua'
    }, {
      name: 'Magnesio',
      sym: 'MgO',
      val: '3,2%',
      form: 'Soluble en agua'
    }, {
      name: 'Azufre',
      sym: 'S',
      val: '2,6%',
      form: 'Soluble en agua'
    }, {
      name: 'Zinc',
      sym: 'Zn',
      val: '0,1%',
      form: 'Quelado EDTA'
    }, {
      name: 'Boro',
      sym: 'B',
      val: '0,05%',
      form: 'Soluble en agua'
    }],
    gallery: [{
      type: 'img',
      src: 'assets/prod-growflex.png',
      label: 'Arte de producto'
    }, {
      type: 'ph',
      label: 'Aplicación en campo'
    }, {
      type: 'ph',
      label: 'Detalle granulometría'
    }, {
      type: 'ph',
      label: 'Credencial Registro ICA'
    }]
  }
};
function getProductDetail(p) {
  var fam = famBySlug[p.fam];
  var base = PRODUCT_DETAILS[p.slug] || {};
  var composition = base.composition || (parseComposition(p.formula) || []).map(r => ({
    ...r,
    form: '—'
  }));
  var presentations = base.presentations || (p.formula ? [{
    label: 'Bulto × 50 kg',
    weight: '50 kg',
    note: 'Empaque polipropileno laminado'
  }] : []);
  var cultivos = base.cultivos || null;
  var longDesc = base.longDesc || p.desc;
  var gallery = base.gallery || [p.img ? {
    type: 'img',
    src: p.img,
    label: 'Arte de producto'
  } : {
    type: 'ph',
    label: p.name
  }, {
    type: 'ph',
    label: 'Aplicación en campo'
  }, {
    type: 'ph',
    label: 'Detalle del producto'
  }];
  return {
    fam,
    composition,
    presentations,
    cultivos,
    longDesc,
    gallery
  };
}
function relatedProducts(p, n = 4) {
  return PRODUCTS.filter(x => x.fam === p.fam && x.slug !== p.slug && !x.custom).sort((a, b) => a.generic === b.generic ? 0 : a.generic ? 1 : -1).slice(0, n);
}
Object.assign(window, {
  FAMILIES_FULL,
  famBySlug,
  PRODUCTS,
  waProductUrl,
  waProductMsg,
  WA_BASE,
  ProductImage,
  FamilyBadge,
  slugify,
  productBySlug,
  productHref,
  parseComposition,
  PRODUCT_DETAILS,
  getProductDetail,
  relatedProducts
});