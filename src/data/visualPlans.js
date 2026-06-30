export const visualPlans = [
  {
    "id": "displacement-current-1",
    "title": "Need for Displacement Current Visual",
    "category": "Diagram",
    "diagramType": "displacement-current",
    "shows": "A self-made SVG visual for Need for Displacement Current showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "iD",
      "epsilon0",
      "dPhiE",
      "dt"
    ],
    "concept": "Changing electric field produces displacement current even where charges do not conduct.",
    "removesConfusion": "Displacement current is not electron flow through capacitor gap.",
    "manual": "Draw the main object, add direction arrows, label variables, then write iD = epsilon0 dPhiE/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"displacement-current\" draws this with free SVG primitives inside React."
  },
  {
    "id": "maxwell-law-2",
    "title": "Maxwell-Ampere Law Visual",
    "category": "Diagram",
    "diagramType": "maxwell-law",
    "shows": "A self-made SVG visual for Maxwell-Ampere Law showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "integral",
      "B",
      "dl",
      "mu0",
      "I",
      "iD"
    ],
    "concept": "Maxwell corrected Ampere law by adding displacement current.",
    "removesConfusion": "Both conduction and displacement current can create magnetic field.",
    "manual": "Draw the main object, add direction arrows, label variables, then write integral B dl = mu0(I + iD) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"maxwell-law\" draws this with free SVG primitives inside React."
  },
  {
    "id": "em-wave-3",
    "title": "Production of EM Waves Visual",
    "category": "Diagram",
    "diagramType": "em-wave",
    "shows": "A self-made SVG visual for Production of EM Waves showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "accelerated",
      "charge",
      ">",
      "EM",
      "wave"
    ],
    "concept": "Accelerated charges radiate electromagnetic waves.",
    "removesConfusion": "A steady charge or steady current alone does not radiate EM waves.",
    "manual": "Draw the main object, add direction arrows, label variables, then write accelerated charge -> EM wave below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"em-wave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "em-field-ratio-4",
    "title": "Transverse Nature Visual",
    "category": "Diagram",
    "diagramType": "em-field-ratio",
    "shows": "A self-made SVG visual for Transverse Nature showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "E",
      "perpendicular",
      "B",
      "perpendicular",
      "k"
    ],
    "concept": "Electric field, magnetic field and propagation direction are mutually perpendicular.",
    "removesConfusion": "E and B are not along direction of travel.",
    "manual": "Draw the main object, add direction arrows, label variables, then write E perpendicular B perpendicular k below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"em-field-ratio\" draws this with free SVG primitives inside React."
  },
  {
    "id": "wave-relation-5",
    "title": "Speed of EM Waves Visual",
    "category": "Diagram",
    "diagramType": "wave-relation",
    "shows": "A self-made SVG visual for Speed of EM Waves showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "c",
      "1",
      "sqrt",
      "mu0",
      "epsilon0"
    ],
    "concept": "Speed in vacuum follows from electric and magnetic constants.",
    "removesConfusion": "This equals speed of light in vacuum.",
    "manual": "Draw the main object, add direction arrows, label variables, then write c = 1/sqrt(mu0 epsilon0) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wave-relation\" draws this with free SVG primitives inside React."
  },
  {
    "id": "spectrum-6",
    "title": "E and B Amplitude Relation Visual",
    "category": "Graph",
    "diagramType": "spectrum",
    "shows": "A self-made SVG visual for E and B Amplitude Relation showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "E0",
      "B0",
      "c"
    ],
    "concept": "Electric and magnetic field amplitudes in an EM wave are related by c.",
    "removesConfusion": "Do not compare E and B by unitless ratio.",
    "manual": "Draw the main object, add direction arrows, label variables, then write E0/B0 = c below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"spectrum\" draws this with free SVG primitives inside React."
  },
  {
    "id": "radio-wave-7",
    "title": "Wave Equation Relation Visual",
    "category": "Diagram",
    "diagramType": "radio-wave",
    "shows": "A self-made SVG visual for Wave Equation Relation showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "c",
      "f",
      "lambda"
    ],
    "concept": "Frequency, wavelength and speed are linked.",
    "removesConfusion": "Frequency and wavelength vary inversely.",
    "manual": "Draw the main object, add direction arrows, label variables, then write c = f lambda below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"radio-wave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "microwave-8",
    "title": "Energy in Electric Field Visual",
    "category": "Diagram",
    "diagramType": "microwave",
    "shows": "A self-made SVG visual for Energy in Electric Field showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "uE",
      "1",
      "2",
      "epsilon0",
      "E",
      "2"
    ],
    "concept": "Electric field of EM wave carries energy density.",
    "removesConfusion": "Energy density depends on square of field.",
    "manual": "Draw the main object, add direction arrows, label variables, then write uE = 1/2 epsilon0 E^2 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"microwave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "infrared-9",
    "title": "Energy in Magnetic Field Visual",
    "category": "Diagram",
    "diagramType": "infrared",
    "shows": "A self-made SVG visual for Energy in Magnetic Field showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "uB",
      "B",
      "2",
      "2",
      "mu0"
    ],
    "concept": "Magnetic field of EM wave carries energy density.",
    "removesConfusion": "Average electric and magnetic energies are equal in EM wave.",
    "manual": "Draw the main object, add direction arrows, label variables, then write uB = B^2/(2 mu0) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"infrared\" draws this with free SVG primitives inside React."
  },
  {
    "id": "visible-spectrum-10",
    "title": "Intensity of EM Wave Visual",
    "category": "Graph",
    "diagramType": "visible-spectrum",
    "shows": "A self-made SVG visual for Intensity of EM Wave showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "I",
      "<u>",
      "c"
    ],
    "concept": "Intensity is power transmitted per unit area.",
    "removesConfusion": "Intensity is proportional to square of amplitude.",
    "manual": "Draw the main object, add direction arrows, label variables, then write I = <u> c below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"visible-spectrum\" draws this with free SVG primitives inside React."
  },
  {
    "id": "uv-xray-gamma-11",
    "title": "Radiation Pressure Visual",
    "category": "Diagram",
    "diagramType": "uv-xray-gamma",
    "shows": "A self-made SVG visual for Radiation Pressure showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "p",
      "I",
      "c"
    ],
    "concept": "EM waves carry momentum and exert pressure.",
    "removesConfusion": "Reflecting surface pressure is double absorbing surface pressure.",
    "manual": "Draw the main object, add direction arrows, label variables, then write p = I/c below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"uv-xray-gamma\" draws this with free SVG primitives inside React."
  },
  {
    "id": "intensity-wave-12",
    "title": "Electromagnetic Spectrum Visual",
    "category": "Diagram",
    "diagramType": "intensity-wave",
    "shows": "A self-made SVG visual for Electromagnetic Spectrum showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "c",
      "f",
      "lambda"
    ],
    "concept": "EM spectrum is continuous range of wavelengths/frequencies.",
    "removesConfusion": "Order by frequency is opposite order by wavelength.",
    "manual": "Draw the main object, add direction arrows, label variables, then write c = f lambda below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"intensity-wave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "radiation-pressure-13",
    "title": "Radio Waves Visual",
    "category": "Diagram",
    "diagramType": "radiation-pressure",
    "shows": "A self-made SVG visual for Radio Waves showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "low",
      "f",
      "long",
      "lambda"
    ],
    "concept": "Radio waves have long wavelength and are used in communication.",
    "removesConfusion": "Do not confuse radio wave with sound wave.",
    "manual": "Draw the main object, add direction arrows, label variables, then write low f, long lambda below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"radiation-pressure\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-14",
    "title": "Microwaves Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Microwaves showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "GHz",
      "range",
      "idea"
    ],
    "concept": "Microwaves are used in radar and microwave ovens.",
    "removesConfusion": "Water molecule heating is application-specific.",
    "manual": "Draw the main object, add direction arrows, label variables, then write GHz range idea below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "displacement-current-15",
    "title": "Infrared Radiation Visual",
    "category": "Diagram",
    "diagramType": "displacement-current",
    "shows": "A self-made SVG visual for Infrared Radiation showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "IR",
      "beyond",
      "red"
    ],
    "concept": "Infrared is heat radiation emitted by warm objects.",
    "removesConfusion": "It is invisible to human eye.",
    "manual": "Draw the main object, add direction arrows, label variables, then write IR beyond red below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"displacement-current\" draws this with free SVG primitives inside React."
  },
  {
    "id": "maxwell-law-16",
    "title": "Visible Light Visual",
    "category": "Diagram",
    "diagramType": "maxwell-law",
    "shows": "A self-made SVG visual for Visible Light showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "violet",
      "higher",
      "f",
      "than",
      "red"
    ],
    "concept": "Visible light is a small part of EM spectrum.",
    "removesConfusion": "Violet has shorter wavelength than red.",
    "manual": "Draw the main object, add direction arrows, label variables, then write violet higher f than red below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"maxwell-law\" draws this with free SVG primitives inside React."
  },
  {
    "id": "em-wave-17",
    "title": "Ultraviolet Radiation Visual",
    "category": "Diagram",
    "diagramType": "em-wave",
    "shows": "A self-made SVG visual for Ultraviolet Radiation showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "UV",
      "beyond",
      "violet"
    ],
    "concept": "UV has higher frequency than visible light and can cause fluorescence/photo effects.",
    "removesConfusion": "UV is more energetic than visible.",
    "manual": "Draw the main object, add direction arrows, label variables, then write UV beyond violet below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"em-wave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "em-field-ratio-18",
    "title": "X-Rays Visual",
    "category": "Diagram",
    "diagramType": "em-field-ratio",
    "shows": "A self-made SVG visual for X-Rays showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "high",
      "f",
      "short",
      "lambda"
    ],
    "concept": "X-rays have very short wavelengths and high penetration.",
    "removesConfusion": "Use shielding due to ionizing ability.",
    "manual": "Draw the main object, add direction arrows, label variables, then write high f, short lambda below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"em-field-ratio\" draws this with free SVG primitives inside React."
  },
  {
    "id": "wave-relation-19",
    "title": "Gamma Rays Visual",
    "category": "Diagram",
    "diagramType": "wave-relation",
    "shows": "A self-made SVG visual for Gamma Rays showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "highest",
      "f"
    ],
    "concept": "Gamma rays have highest frequencies in common EM spectrum order.",
    "removesConfusion": "Nuclear origin often associated.",
    "manual": "Draw the main object, add direction arrows, label variables, then write highest f below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wave-relation\" draws this with free SVG primitives inside React."
  },
  {
    "id": "spectrum-20",
    "title": "Spectrum Order by Frequency Visual",
    "category": "Graph",
    "diagramType": "spectrum",
    "shows": "A self-made SVG visual for Spectrum Order by Frequency showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "radio",
      "<",
      "micro",
      "<",
      "IR",
      "<"
    ],
    "concept": "Frequency increases from radio to gamma rays.",
    "removesConfusion": "Wavelength order is reverse.",
    "manual": "Draw the main object, add direction arrows, label variables, then write radio < micro < IR < visible < UV < X < gamma below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"spectrum\" draws this with free SVG primitives inside React."
  },
  {
    "id": "radio-wave-21",
    "title": "Spectrum Order by Wavelength Visual",
    "category": "Diagram",
    "diagramType": "radio-wave",
    "shows": "A self-made SVG visual for Spectrum Order by Wavelength showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "lambda_radio",
      ">",
      "lambda_gamma"
    ],
    "concept": "Wavelength decreases from radio to gamma rays.",
    "removesConfusion": "Do not memorize both independently; use c=f lambda.",
    "manual": "Draw the main object, add direction arrows, label variables, then write lambda_radio > lambda_gamma below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"radio-wave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "microwave-22",
    "title": "Polarization Foundation Visual",
    "category": "Diagram",
    "diagramType": "microwave",
    "shows": "A self-made SVG visual for Polarization Foundation showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "transverse",
      "wave",
      "can",
      "be",
      "polarized"
    ],
    "concept": "Polarization proves transverse nature of light waves.",
    "removesConfusion": "Longitudinal waves cannot be polarized.",
    "manual": "Draw the main object, add direction arrows, label variables, then write transverse wave can be polarized below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"microwave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "infrared-23",
    "title": "Momentum of EM Waves Visual",
    "category": "Diagram",
    "diagramType": "infrared",
    "shows": "A self-made SVG visual for Momentum of EM Waves showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "momentum",
      "density",
      "energy",
      "density",
      "c"
    ],
    "concept": "EM waves carry momentum as well as energy.",
    "removesConfusion": "Radiation pressure follows from momentum transfer.",
    "manual": "Draw the main object, add direction arrows, label variables, then write momentum density = energy density/c below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"infrared\" draws this with free SVG primitives inside React."
  },
  {
    "id": "visible-spectrum-24",
    "title": "Applications of EM Waves Visual",
    "category": "Graph",
    "diagramType": "visible-spectrum",
    "shows": "A self-made SVG visual for Applications of EM Waves showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "band",
      "use",
      "depends",
      "on",
      "f",
      "lambda"
    ],
    "concept": "Different bands have different uses depending on wavelength, frequency and energy.",
    "removesConfusion": "Application questions are NCERT-fact heavy.",
    "manual": "Draw the main object, add direction arrows, label variables, then write band use depends on f/lambda below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"visible-spectrum\" draws this with free SVG primitives inside React."
  },
  {
    "id": "uv-xray-gamma-25",
    "title": "Graph of EM Wave Visual",
    "category": "Diagram",
    "diagramType": "uv-xray-gamma",
    "shows": "A self-made SVG visual for Graph of EM Wave showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "E",
      "E0",
      "sin",
      "kx",
      "wt"
    ],
    "concept": "E and B fields vary sinusoidally in phase.",
    "removesConfusion": "E and B peaks occur together.",
    "manual": "Draw the main object, add direction arrows, label variables, then write E = E0 sin(kx - wt) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"uv-xray-gamma\" draws this with free SVG primitives inside React."
  },
  {
    "id": "intensity-wave-26",
    "title": "Graph of Spectrum Visual",
    "category": "Diagram",
    "diagramType": "intensity-wave",
    "shows": "A self-made SVG visual for Graph of Spectrum showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "E_photon",
      "proportional",
      "to",
      "f"
    ],
    "concept": "Spectrum graph organizes frequency, wavelength and energy.",
    "removesConfusion": "Higher frequency usually means higher photon energy.",
    "manual": "Draw the main object, add direction arrows, label variables, then write E_photon proportional to f below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"intensity-wave\" draws this with free SVG primitives inside React."
  },
  {
    "id": "radiation-pressure-27",
    "title": "Formula Mastery Visual",
    "category": "Diagram",
    "diagramType": "radiation-pressure",
    "shows": "A self-made SVG visual for Formula Mastery showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "iD",
      "c",
      "E",
      "B",
      "c",
      "f"
    ],
    "concept": "Core formulas connect displacement current, wave speed, E/B ratio and spectrum.",
    "removesConfusion": "Keep units visible.",
    "manual": "Draw the main object, add direction arrows, label variables, then write iD, c, E/B, c=f lambda below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"radiation-pressure\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-28",
    "title": "Common Conceptual Traps Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "check",
      "medium",
      "order",
      "transverse",
      "nature"
    ],
    "concept": "Traps include displacement current confusion, wrong spectrum order and treating EM waves as sound.",
    "removesConfusion": "EM waves do not need material medium.",
    "manual": "Draw the main object, add direction arrows, label variables, then write check medium, order, transverse nature below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "displacement-current-29",
    "title": "NCERT Line Focus Visual",
    "category": "Diagram",
    "diagramType": "displacement-current",
    "shows": "A self-made SVG visual for NCERT Line Focus showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "key",
      "statements"
    ],
    "concept": "NCERT emphasizes changing fields, transverse nature and spectrum applications.",
    "removesConfusion": "Statement questions are common in NEET.",
    "manual": "Draw the main object, add direction arrows, label variables, then write key statements below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"displacement-current\" draws this with free SVG primitives inside React."
  },
  {
    "id": "maxwell-law-30",
    "title": "Final Revision Section Visual",
    "category": "Diagram",
    "diagramType": "maxwell-law",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses Maxwell idea, wave relations, spectrum and energy.",
    "removesConfusion": "Revise spectrum with frequency and wavelength arrows.",
    "manual": "Draw the main object, add direction arrows, label variables, then write top formulas + traps below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"maxwell-law\" draws this with free SVG primitives inside React."
  }
]
