export const summaryTables = [
  {
    "title": "Core Formula Table",
    "columns": [
      "Concept",
      "Formula",
      "Unit",
      "Trap"
    ],
    "rows": [
      [
        "Need for Displacement Current",
        "iD = epsilon0 dPhiE/dt",
        "ampere (A)",
        "Displacement current is not electron flow through capacitor gap."
      ],
      [
        "Maxwell-Ampere Law",
        "integral B dl = mu0(I + iD)",
        "T m",
        "Both conduction and displacement current can create magnetic field."
      ],
      [
        "Production of EM Waves",
        "accelerated charge -> EM wave",
        "concept",
        "A steady charge or steady current alone does not radiate EM waves."
      ],
      [
        "Transverse Nature",
        "E perpendicular B perpendicular k",
        "concept",
        "E and B are not along direction of travel."
      ],
      [
        "Speed of EM Waves",
        "c = 1/sqrt(mu0 epsilon0)",
        "m s^-1",
        "This equals speed of light in vacuum."
      ],
      [
        "E and B Amplitude Relation",
        "E0/B0 = c",
        "m s^-1",
        "Do not compare E and B by unitless ratio."
      ],
      [
        "Wave Equation Relation",
        "c = f lambda",
        "m s^-1",
        "Frequency and wavelength vary inversely."
      ],
      [
        "Energy in Electric Field",
        "uE = 1/2 epsilon0 E^2",
        "J m^-3",
        "Energy density depends on square of field."
      ],
      [
        "Energy in Magnetic Field",
        "uB = B^2/(2 mu0)",
        "J m^-3",
        "Average electric and magnetic energies are equal in EM wave."
      ],
      [
        "Intensity of EM Wave",
        "I = <u> c",
        "W m^-2",
        "Intensity is proportional to square of amplitude."
      ]
    ]
  },
  {
    "title": "Graph and Direction Patterns",
    "columns": [
      "Topic",
      "Pattern",
      "Exam use"
    ],
    "rows": [
      [
        "Radiation Pressure",
        "p = I/c",
        "Reflecting surface pressure is double absorbing surface pressure."
      ],
      [
        "Electromagnetic Spectrum",
        "c = f lambda",
        "Order by frequency is opposite order by wavelength."
      ],
      [
        "Radio Waves",
        "low f, long lambda",
        "Do not confuse radio wave with sound wave."
      ],
      [
        "Microwaves",
        "GHz range idea",
        "Water molecule heating is application-specific."
      ],
      [
        "Infrared Radiation",
        "IR beyond red",
        "It is invisible to human eye."
      ],
      [
        "Visible Light",
        "violet higher f than red",
        "Violet has shorter wavelength than red."
      ],
      [
        "Ultraviolet Radiation",
        "UV beyond violet",
        "UV is more energetic than visible."
      ],
      [
        "X-Rays",
        "high f, short lambda",
        "Use shielding due to ionizing ability."
      ],
      [
        "Gamma Rays",
        "highest f",
        "Nuclear origin often associated."
      ],
      [
        "Spectrum Order by Frequency",
        "radio < micro < IR < visible < UV < X < gamma",
        "Wavelength order is reverse."
      ]
    ]
  },
  {
    "title": "NEET vs JEE Question Patterns",
    "columns": [
      "Cluster",
      "NEET asks",
      "JEE asks"
    ],
    "rows": [
      [
        "Maxwell idea",
        "Formula and NCERT statement from Displacement current and changing fields.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Wave nature",
        "Formula and NCERT statement from Transverse E and B fields, speed and E/B relation.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Spectrum",
        "Formula and NCERT statement from Radio to gamma rays with frequency, wavelength and uses.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Energy",
        "Formula and NCERT statement from Energy density, intensity and radiation pressure.",
        "Numerical, graph, direction and limiting-case combinations"
      ]
    ]
  }
]

export const memoryHooks = [
  "EM waves need changing electric and magnetic fields.",
  "E, B and direction of propagation are mutually perpendicular.",
  "E0/B0 = c.",
  "Higher frequency means shorter wavelength.",
  "Spectrum order: radio, microwave, IR, visible, UV, X-ray, gamma."
]

export const topFormulas = [
  "iD = epsilon0 dPhiE/dt",
  "integral B dl = mu0(I + iD)",
  "c = 1/sqrt(mu0 epsilon0)",
  "c = f lambda",
  "E0/B0 = c",
  "uE = 1/2 epsilon0 E^2",
  "uB = B^2/(2 mu0)",
  "I = <u> c",
  "p = I/c",
  "p = 2I/c",
  "E = E0 sin(kx - omega t)",
  "E = h f"
]

export const topConcepts = [
  "Need for Displacement Current: Changing electric field produces displacement current even where charges do not conduct.",
  "Maxwell-Ampere Law: Maxwell corrected Ampere law by adding displacement current.",
  "Production of EM Waves: Accelerated charges radiate electromagnetic waves.",
  "Transverse Nature: Electric field, magnetic field and propagation direction are mutually perpendicular.",
  "Speed of EM Waves: Speed in vacuum follows from electric and magnetic constants.",
  "E and B Amplitude Relation: Electric and magnetic field amplitudes in an EM wave are related by c.",
  "Wave Equation Relation: Frequency, wavelength and speed are linked.",
  "Energy in Electric Field: Electric field of EM wave carries energy density.",
  "Energy in Magnetic Field: Magnetic field of EM wave carries energy density.",
  "Intensity of EM Wave: Intensity is power transmitted per unit area.",
  "Radiation Pressure: EM waves carry momentum and exert pressure.",
  "Electromagnetic Spectrum: EM spectrum is continuous range of wavelengths/frequencies.",
  "Radio Waves: Radio waves have long wavelength and are used in communication.",
  "Microwaves: Microwaves are used in radar and microwave ovens.",
  "Infrared Radiation: Infrared is heat radiation emitted by warm objects.",
  "Visible Light: Visible light is a small part of EM spectrum.",
  "Ultraviolet Radiation: UV has higher frequency than visible light and can cause fluorescence/photo effects.",
  "X-Rays: X-rays have very short wavelengths and high penetration.",
  "Gamma Rays: Gamma rays have highest frequencies in common EM spectrum order.",
  "Spectrum Order by Frequency: Frequency increases from radio to gamma rays."
]

export const topTraps = [
  "Displacement current is not electron flow through capacitor gap.",
  "Both conduction and displacement current can create magnetic field.",
  "A steady charge or steady current alone does not radiate EM waves.",
  "E and B are not along direction of travel.",
  "This equals speed of light in vacuum.",
  "Do not compare E and B by unitless ratio.",
  "Frequency and wavelength vary inversely.",
  "Energy density depends on square of field.",
  "Average electric and magnetic energies are equal in EM wave.",
  "Intensity is proportional to square of amplitude.",
  "Reflecting surface pressure is double absorbing surface pressure.",
  "Order by frequency is opposite order by wavelength.",
  "Do not confuse radio wave with sound wave.",
  "Water molecule heating is application-specific.",
  "It is invisible to human eye."
]

export const topDiagrams = [
  "Need for Displacement Current Visual",
  "Maxwell-Ampere Law Visual",
  "Production of EM Waves Visual",
  "Transverse Nature Visual",
  "Speed of EM Waves Visual",
  "E and B Amplitude Relation Visual",
  "Wave Equation Relation Visual",
  "Energy in Electric Field Visual",
  "Energy in Magnetic Field Visual",
  "Intensity of EM Wave Visual"
]

export const graphPatterns = [
  "Need for Displacement Current: graph/variation follows iD = epsilon0 dPhiE/dt.",
  "Maxwell-Ampere Law: graph/variation follows integral B dl = mu0(I + iD).",
  "Production of EM Waves: graph/variation follows accelerated charge -> EM wave.",
  "Transverse Nature: graph/variation follows E perpendicular B perpendicular k.",
  "Speed of EM Waves: graph/variation follows c = 1/sqrt(mu0 epsilon0).",
  "E and B Amplitude Relation: graph/variation follows E0/B0 = c.",
  "Wave Equation Relation: graph/variation follows c = f lambda.",
  "Energy in Electric Field: graph/variation follows uE = 1/2 epsilon0 E^2.",
  "Energy in Magnetic Field: graph/variation follows uB = B^2/(2 mu0).",
  "Intensity of EM Wave: graph/variation follows I = <u> c."
]

export const questionTypes = [
  "Direct formula MCQ",
  "Direction/phase conceptual",
  "Graph interpretation",
  "Ratio numerical",
  "Statement correction",
  "Assertion-reason",
  "Integer answer",
  "Diagram labelling",
  "Case-based reasoning",
  "Limiting-case analysis"
]

export const revisionPlans = {
  "thirtyMinute": [
    "0-5 min: read formula sheet and units.",
    "5-10 min: redraw top diagrams.",
    "10-17 min: solve five direct MCQs and five numericals.",
    "17-24 min: revise traps and graph patterns.",
    "24-30 min: attempt mixed assertion/integer questions."
  ],
  "lastDay": [
    "Revise NCERT line alerts.",
    "Write derivation final formulas once.",
    "Review graph and direction rules.",
    "Solve one mixed practice set.",
    "Stop heavy new learning."
  ],
  "examHall": [
    "Draw a quick diagram.",
    "Write knowns in SI units.",
    "Choose the law with its condition.",
    "Keep signs/angles visible.",
    "Check dimensions and limiting case."
  ]
}

export const finalChecklist = [
  "I can explain, draw and solve Need for Displacement Current.",
  "I can explain, draw and solve Maxwell-Ampere Law.",
  "I can explain, draw and solve Production of EM Waves.",
  "I can explain, draw and solve Transverse Nature.",
  "I can explain, draw and solve Speed of EM Waves.",
  "I can explain, draw and solve E and B Amplitude Relation.",
  "I can explain, draw and solve Wave Equation Relation.",
  "I can explain, draw and solve Energy in Electric Field.",
  "I can explain, draw and solve Energy in Magnetic Field.",
  "I can explain, draw and solve Intensity of EM Wave.",
  "I can explain, draw and solve Radiation Pressure.",
  "I can explain, draw and solve Electromagnetic Spectrum."
]
