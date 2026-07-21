var Icon = ({
  children,
  size = 24,
  className = 'icon',
  sw = 2,
  style
}) => React.createElement("svg", {
  className: className,
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, children);
var I = {
  arrow: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  check: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  checkC: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), React.createElement("path", {
    d: "m22 4-10 10.01-3-3"
  })),
  shield: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }), React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  menu: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  close: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  wa: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p?.size || 24,
    height: p?.size || 24,
    fill: "currentColor",
    style: p?.style
  }, React.createElement("path", {
    d: "M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.46 9.46 0 0 1-4.83-1.32l-.35-.2-3.59.94.96-3.5-.23-.36a9.45 9.45 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.42 9.42 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zM20.5 3.49A11.8 11.8 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.49-8.43z"
  })),
  sprout: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M7 20h10"
  }), React.createElement("path", {
    d: "M10 20c5.5-2.5.8-6.4 3-10"
  }), React.createElement("path", {
    d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
  }), React.createElement("path", {
    d: "M14.1 6c-.9.8-1.6 2-2.1 3.6 1.4.6 2.9.5 4.5 0 1.5-.5 2.7-1.7 3.4-3.7-2.7-.6-4.4-.5-5.8.1z"
  })),
  atom: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.4"
  }), React.createElement("path", {
    d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
    style: {
      stroke: "rgb(45, 106, 47)"
    }
  }), React.createElement("path", {
    d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
  })),
  handshake: p => React.createElement(Icon, p, React.createElement("path", {
    d: "m11 17 2 2a1 1 0 1 0 3-3"
  }), React.createElement("path", {
    d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
  }), React.createElement("path", {
    d: "m21 3 1 11h-2"
  }), React.createElement("path", {
    d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
  }), React.createElement("path", {
    d: "M3 4h8"
  })),
  drone: p => React.createElement(Icon, p, React.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6",
    rx: "1"
  }), React.createElement("path", {
    d: "M3 5h4l2 4M21 5h-4l-2 4M3 19h4l2-4M21 19h-4l-2-4"
  }), React.createElement("circle", {
    cx: "4.5",
    cy: "4.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "19.5",
    cy: "4.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "4.5",
    cy: "19.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "19.5",
    cy: "19.5",
    r: "1.5"
  })),
  flask: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M10 2v6.3L4.4 18.2A2 2 0 0 0 6.1 21h11.8a2 2 0 0 0 1.7-2.8L14 8.3V2"
  }), React.createElement("path", {
    d: "M8.5 2h7M7 14h10"
  })),
  userCheck: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "m16 11 2 2 4-4"
  })),
  clipboard: p => React.createElement(Icon, p, React.createElement("rect", {
    x: "8",
    y: "2",
    width: "8",
    height: "4",
    rx: "1"
  }), React.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), React.createElement("path", {
    d: "M9 12l1.5 1.5L13 11M9 17h6"
  })),
  pin: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  mail: p => React.createElement(Icon, p, React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), React.createElement("path", {
    d: "m22 7-10 6L2 7"
  })),
  phone: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
  })),
  linkedin: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p?.size || 19,
    height: p?.size || 19,
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.81a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.53v-4.58c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.37-.97.96 0 1.35.73 1.35 1.81v4.47h2.64z"
  })),
  instagram: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p?.size || 19,
    height: p?.size || 19,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  facebook: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p?.size || 19,
    height: p?.size || 19,
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"
  })),
  search: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  fileText: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), React.createElement("path", {
    d: "M14 2v6h6M9 13h6M9 17h6M9 9h1"
  })),
  package: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }), React.createElement("path", {
    d: "m3.3 7 8.7 5 8.7-5M12 22V12"
  })),
  sliders: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
  })),
  arrowLeft: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M19 12H5M11 18l-6-6 6-6"
  })),
  chevronDown: p => React.createElement(Icon, p, React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  zoom: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), React.createElement("path", {
    d: "m21 21-4.3-4.3M11 8v6M8 11h6"
  })),
  calendar: p => React.createElement(Icon, p, React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  truck: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1"
  }), React.createElement("path", {
    d: "M14 9h4l3 3v5a1 1 0 0 1-1 1h-1"
  }), React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2"
  }), React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  }), React.createElement("path", {
    d: "M9 18h6"
  })),
  leaf: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
  }), React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6"
  })),
  target: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  eye: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  award: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "6"
  }), React.createElement("path", {
    d: "M8.2 13.3 7 22l5-3 5 3-1.2-8.7"
  })),
  gear: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
  })),
  map: p => React.createElement(Icon, p, React.createElement("path", {
    d: "m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z"
  }), React.createElement("path", {
    d: "M9 4v14M15 6v14"
  })),
  scan: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"
  }), React.createElement("path", {
    d: "M3 12h18"
  })),
  spray: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M12 3s4 4.8 4 7.6A4 4 0 0 1 8 10.6C8 7.8 12 3 12 3Z"
  }), React.createElement("path", {
    d: "M19 6h.01M19 10h.01M19 14h.01M22 8h.01M22 12h.01"
  })),
  route: p => React.createElement(Icon, p, React.createElement("circle", {
    cx: "6",
    cy: "19",
    r: "3"
  }), React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), React.createElement("path", {
    d: "M9 19h6a3 3 0 0 0 3-3V8"
  })),
  headset: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M3 14v-2a9 9 0 0 1 18 0v2"
  }), React.createElement("rect", {
    x: "3",
    y: "13.5",
    width: "4.2",
    height: "7.5",
    rx: "2.1"
  }), React.createElement("rect", {
    x: "16.8",
    y: "13.5",
    width: "4.2",
    height: "7.5",
    rx: "2.1"
  }), React.createElement("path", {
    d: "M21 18.5a4 4 0 0 1-4 3.5h-2"
  })),
  barChart: p => React.createElement(Icon, p, React.createElement("path", {
    d: "M3 3v18h18"
  }), React.createElement("path", {
    d: "M7 16v-4M12 16V8M17 16v-6"
  })),
  play: p => React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: p?.size || 24,
    height: p?.size || 24,
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14Z"
  }))
};
window.I = I;
window.Icon = Icon;