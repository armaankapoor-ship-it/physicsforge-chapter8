export const formulas = [
  {
    "id": "displacement-current",
    "title": "Displacement Current",
    "formula": "iD = epsilon0 dPhiE/dt",
    "display": "iD = epsilon0 dPhiE/dt",
    "symbols": [
      [
        "iD",
        "displacement current",
        "A"
      ],
      [
        "epsilon0",
        "permittivity",
        "F m^-1"
      ],
      [
        "PhiE",
        "electric flux",
        "N m^2 C^-1"
      ]
    ],
    "meaning": "Changing electric flux acts like current in Maxwell theory.",
    "dimension": "A",
    "graph": "iD increases with rate of electric flux change.",
    "trap": "Not conduction current through gap.",
    "easyExample": "Easy example: identify symbols and substitute in iD = epsilon0 dPhiE/dt after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Changing electric flux acts like current in Maxwell theory.",
    "jeeExample": "JEE Main pattern: combine iD = epsilon0 dPhiE/dt with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Not conduction current through gap."
  },
  {
    "id": "maxwell-ampere",
    "title": "Maxwell-Ampere Law",
    "formula": "integral B dl = mu0(I + iD)",
    "display": "integral B dl = mu0(I + iD)",
    "symbols": [
      [
        "B",
        "magnetic field",
        "T"
      ],
      [
        "I",
        "conduction current",
        "A"
      ]
    ],
    "meaning": "Magnetic field is produced by conduction plus displacement current.",
    "dimension": "T m",
    "graph": "B depends on total effective current.",
    "trap": "Ignoring iD breaks capacitor continuity.",
    "easyExample": "Easy example: identify symbols and substitute in integral B dl = mu0(I + iD) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Magnetic field is produced by conduction plus displacement current.",
    "jeeExample": "JEE Main pattern: combine integral B dl = mu0(I + iD) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Ignoring iD breaks capacitor continuity."
  },
  {
    "id": "wave-speed",
    "title": "Speed of EM Waves",
    "formula": "c = 1/sqrt(mu0 epsilon0)",
    "display": "c = 1/sqrt(mu0 epsilon0)",
    "symbols": [
      [
        "c",
        "speed of light",
        "m s^-1"
      ],
      [
        "mu0",
        "permeability",
        "N A^-2"
      ]
    ],
    "meaning": "Vacuum speed follows from field constants.",
    "dimension": "m/s",
    "graph": "Constant in vacuum.",
    "trap": "This is speed in vacuum.",
    "easyExample": "Easy example: identify symbols and substitute in c = 1/sqrt(mu0 epsilon0) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Vacuum speed follows from field constants.",
    "jeeExample": "JEE Main pattern: combine c = 1/sqrt(mu0 epsilon0) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: This is speed in vacuum."
  },
  {
    "id": "wave-relation",
    "title": "Wave Relation",
    "formula": "c = f lambda",
    "display": "c = f lambda",
    "symbols": [
      [
        "f",
        "frequency",
        "Hz"
      ],
      [
        "lambda",
        "wavelength",
        "m"
      ]
    ],
    "meaning": "Speed equals frequency times wavelength.",
    "dimension": "s^-1 m = m/s",
    "graph": "f-lambda inverse for fixed c.",
    "trap": "Frequency does not change in refraction, speed/wavelength do.",
    "easyExample": "Easy example: identify symbols and substitute in c = f lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Speed equals frequency times wavelength.",
    "jeeExample": "JEE Main pattern: combine c = f lambda with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Frequency does not change in refraction, speed/wavelength do."
  },
  {
    "id": "eb-ratio",
    "title": "E-B Ratio",
    "formula": "E0/B0 = c",
    "display": "E0/B0 = c",
    "symbols": [
      [
        "E0",
        "electric field amplitude",
        "V m^-1"
      ],
      [
        "B0",
        "magnetic field amplitude",
        "T"
      ]
    ],
    "meaning": "Fields in EM wave have fixed amplitude ratio.",
    "dimension": "(V/m)/T = m/s",
    "graph": "E and B in phase.",
    "trap": "Ratio has units of speed.",
    "easyExample": "Easy example: identify symbols and substitute in E0/B0 = c after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Fields in EM wave have fixed amplitude ratio.",
    "jeeExample": "JEE Main pattern: combine E0/B0 = c with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Ratio has units of speed."
  },
  {
    "id": "electric-energy",
    "title": "Electric Field Energy Density",
    "formula": "uE = 1/2 epsilon0 E^2",
    "display": "uE = 1/2 epsilon0 E^2",
    "symbols": [
      [
        "uE",
        "energy density",
        "J m^-3"
      ]
    ],
    "meaning": "Energy stored in electric field.",
    "dimension": "J/m^3",
    "graph": "u grows as E squared.",
    "trap": "Use instantaneous or average carefully.",
    "easyExample": "Easy example: identify symbols and substitute in uE = 1/2 epsilon0 E^2 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy stored in electric field.",
    "jeeExample": "JEE Main pattern: combine uE = 1/2 epsilon0 E^2 with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Use instantaneous or average carefully."
  },
  {
    "id": "magnetic-energy",
    "title": "Magnetic Field Energy Density",
    "formula": "uB = B^2/(2 mu0)",
    "display": "uB = B^2/(2 mu0)",
    "symbols": [
      [
        "uB",
        "energy density",
        "J m^-3"
      ]
    ],
    "meaning": "Energy stored in magnetic field.",
    "dimension": "J/m^3",
    "graph": "u grows as B squared.",
    "trap": "Use mu0 in vacuum.",
    "easyExample": "Easy example: identify symbols and substitute in uB = B^2/(2 mu0) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy stored in magnetic field.",
    "jeeExample": "JEE Main pattern: combine uB = B^2/(2 mu0) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Use mu0 in vacuum."
  },
  {
    "id": "intensity",
    "title": "EM Wave Intensity",
    "formula": "I = <u> c",
    "display": "I = <u> c",
    "symbols": [
      [
        "I",
        "intensity",
        "W m^-2"
      ],
      [
        "<u>",
        "average energy density",
        "J m^-3"
      ]
    ],
    "meaning": "Energy flow per unit area per second.",
    "dimension": "J/m^3 m/s = W/m^2",
    "graph": "Intensity proportional to amplitude squared.",
    "trap": "Do not confuse current I with intensity I.",
    "easyExample": "Easy example: identify symbols and substitute in I = <u> c after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy flow per unit area per second.",
    "jeeExample": "JEE Main pattern: combine I = <u> c with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Do not confuse current I with intensity I."
  },
  {
    "id": "pressure-absorb",
    "title": "Radiation Pressure Absorbing",
    "formula": "p = I/c",
    "display": "p = I/c",
    "symbols": [
      [
        "p",
        "pressure",
        "Pa"
      ]
    ],
    "meaning": "Absorbing surface receives EM momentum.",
    "dimension": "W/m^2 divided by m/s = Pa",
    "graph": "Pressure grows with intensity.",
    "trap": "Reflecting case is double.",
    "easyExample": "Easy example: identify symbols and substitute in p = I/c after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Absorbing surface receives EM momentum.",
    "jeeExample": "JEE Main pattern: combine p = I/c with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Reflecting case is double."
  },
  {
    "id": "pressure-reflect",
    "title": "Radiation Pressure Reflecting",
    "formula": "p = 2I/c",
    "display": "p = 2I/c",
    "symbols": [
      [
        "p",
        "pressure",
        "Pa"
      ]
    ],
    "meaning": "Perfect reflection reverses momentum, doubling pressure.",
    "dimension": "Pa",
    "graph": "Twice absorbing pressure.",
    "trap": "Only for perfect reflector.",
    "easyExample": "Easy example: identify symbols and substitute in p = 2I/c after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Perfect reflection reverses momentum, doubling pressure.",
    "jeeExample": "JEE Main pattern: combine p = 2I/c with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Only for perfect reflector."
  },
  {
    "id": "wave-equation",
    "title": "Sinusoidal EM Field",
    "formula": "E = E0 sin(kx - omega t)",
    "display": "E = E0 sin(kx - omega t)",
    "symbols": [
      [
        "k",
        "wave number",
        "m^-1"
      ],
      [
        "omega",
        "angular frequency",
        "rad s^-1"
      ]
    ],
    "meaning": "Field varies sinusoidally in space and time.",
    "dimension": "V/m",
    "graph": "Wave graph is sinusoidal.",
    "trap": "B field is in phase with E.",
    "easyExample": "Easy example: identify symbols and substitute in E = E0 sin(kx - omega t) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Field varies sinusoidally in space and time.",
    "jeeExample": "JEE Main pattern: combine E = E0 sin(kx - omega t) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: B field is in phase with E."
  },
  {
    "id": "photon-link",
    "title": "Photon Energy Link",
    "formula": "E = h f",
    "display": "E = h f",
    "symbols": [
      [
        "h",
        "Planck constant",
        "J s"
      ]
    ],
    "meaning": "Higher frequency radiation has higher photon energy.",
    "dimension": "J",
    "graph": "Energy increases with frequency.",
    "trap": "Useful for spectrum risk, though chapter is classical.",
    "easyExample": "Easy example: identify symbols and substitute in E = h f after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Higher frequency radiation has higher photon energy.",
    "jeeExample": "JEE Main pattern: combine E = h f with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Useful for spectrum risk, though chapter is classical."
  }
]

export const formulaGroups = [
  {
    "title": "Maxwell idea",
    "formulas": [
      "displacement-current",
      "maxwell-ampere",
      "wave-speed",
      "wave-relation",
      "eb-ratio"
    ]
  },
  {
    "title": "Wave nature",
    "formulas": [
      "electric-energy",
      "magnetic-energy",
      "intensity",
      "pressure-absorb",
      "pressure-reflect"
    ]
  },
  {
    "title": "Spectrum",
    "formulas": [
      "wave-equation",
      "photon-link"
    ]
  },
  {
    "title": "Energy",
    "formulas": []
  }
]

