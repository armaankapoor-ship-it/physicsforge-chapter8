export const derivations = [
  {
    "id": "derive-displacement-current",
    "title": "Derivation: Displacement current",
    "startsFrom": "Start from the definition and a labelled diagram.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Displacement current.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: iD = epsilon0 dPhiE/dt.",
        "Changing electric flux acts like current in Maxwell theory."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: iD = epsilon0 dPhiE/dt.",
        "Check A, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "iD = epsilon0 dPhiE/dt",
    "shortcut": "Remember the condition attached to iD = epsilon0 dPhiE/dt; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Not conduction current through gap."
  },
  {
    "id": "derive-maxwell-ampere-correction",
    "title": "Derivation: Maxwell-Ampere correction",
    "startsFrom": "Start from the governing law and ideal geometry.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Maxwell-Ampere correction.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: integral B dl = mu0(I + iD).",
        "Magnetic field is produced by conduction plus displacement current."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: integral B dl = mu0(I + iD).",
        "Check T m, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "integral B dl = mu0(I + iD)",
    "shortcut": "Remember the condition attached to integral B dl = mu0(I + iD); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Ignoring iD breaks capacitor continuity."
  },
  {
    "id": "derive-speed-of-electromagnetic-waves",
    "title": "Derivation: Speed of electromagnetic waves",
    "startsFrom": "Start from conservation/energy or force balance.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Speed of electromagnetic waves.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: c = 1/sqrt(mu0 epsilon0).",
        "Vacuum speed follows from field constants."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: c = 1/sqrt(mu0 epsilon0).",
        "Check m/s, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "c = 1/sqrt(mu0 epsilon0)",
    "shortcut": "Remember the condition attached to c = 1/sqrt(mu0 epsilon0); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "This is speed in vacuum."
  },
  {
    "id": "derive-relation-e0-b0-c",
    "title": "Derivation: Relation E0/B0 = c",
    "startsFrom": "Start from graph/variation and convert to equation.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Relation E0/B0 = c.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: c = f lambda.",
        "Speed equals frequency times wavelength."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: c = f lambda.",
        "Check s^-1 m = m/s, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "c = f lambda",
    "shortcut": "Remember the condition attached to c = f lambda; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Frequency does not change in refraction, speed/wavelength do."
  },
  {
    "id": "derive-frequency-wavelength-relation",
    "title": "Derivation: Frequency-wavelength relation",
    "startsFrom": "Start from the definition and a labelled diagram.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Frequency-wavelength relation.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: E0/B0 = c.",
        "Fields in EM wave have fixed amplitude ratio."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: E0/B0 = c.",
        "Check (V/m)/T = m/s, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "E0/B0 = c",
    "shortcut": "Remember the condition attached to E0/B0 = c; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Ratio has units of speed."
  },
  {
    "id": "derive-energy-density-in-electric-field",
    "title": "Derivation: Energy density in electric field",
    "startsFrom": "Start from the governing law and ideal geometry.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Energy density in electric field.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: uE = 1/2 epsilon0 E^2.",
        "Energy stored in electric field."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: uE = 1/2 epsilon0 E^2.",
        "Check J/m^3, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "uE = 1/2 epsilon0 E^2",
    "shortcut": "Remember the condition attached to uE = 1/2 epsilon0 E^2; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Use instantaneous or average carefully."
  },
  {
    "id": "derive-energy-density-in-magnetic-field",
    "title": "Derivation: Energy density in magnetic field",
    "startsFrom": "Start from conservation/energy or force balance.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Energy density in magnetic field.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: uB = B^2/(2 mu0).",
        "Energy stored in magnetic field."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: uB = B^2/(2 mu0).",
        "Check J/m^3, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "uB = B^2/(2 mu0)",
    "shortcut": "Remember the condition attached to uB = B^2/(2 mu0); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Use mu0 in vacuum."
  },
  {
    "id": "derive-average-intensity",
    "title": "Derivation: Average intensity",
    "startsFrom": "Start from graph/variation and convert to equation.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Average intensity.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: I = <u> c.",
        "Energy flow per unit area per second."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: I = <u> c.",
        "Check J/m^3 m/s = W/m^2, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "I = <u> c",
    "shortcut": "Remember the condition attached to I = <u> c; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Do not confuse current I with intensity I."
  },
  {
    "id": "derive-radiation-pressure-for-absorption",
    "title": "Derivation: Radiation pressure for absorption",
    "startsFrom": "Start from the definition and a labelled diagram.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Radiation pressure for absorption.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: p = I/c.",
        "Absorbing surface receives EM momentum."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: p = I/c.",
        "Check W/m^2 divided by m/s = Pa, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "p = I/c",
    "shortcut": "Remember the condition attached to p = I/c; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Reflecting case is double."
  },
  {
    "id": "derive-radiation-pressure-for-reflection",
    "title": "Derivation: Radiation pressure for reflection",
    "startsFrom": "Start from the governing law and ideal geometry.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Radiation pressure for reflection.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: p = 2I/c.",
        "Perfect reflection reverses momentum, doubling pressure."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: p = 2I/c.",
        "Check Pa, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "p = 2I/c",
    "shortcut": "Remember the condition attached to p = 2I/c; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Only for perfect reflector."
  },
  {
    "id": "derive-spectrum-ordering",
    "title": "Derivation: Spectrum ordering",
    "startsFrom": "Start from conservation/energy or force balance.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Spectrum ordering.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: E = E0 sin(kx - omega t).",
        "Field varies sinusoidally in space and time."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: E = E0 sin(kx - omega t).",
        "Check V/m, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "E = E0 sin(kx - omega t)",
    "shortcut": "Remember the condition attached to E = E0 sin(kx - omega t); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "B field is in phase with E."
  },
  {
    "id": "derive-transverse-nature-of-em-waves",
    "title": "Derivation: Transverse nature of EM waves",
    "startsFrom": "Start from graph/variation and convert to equation.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Transverse nature of EM waves.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: E = h f.",
        "Higher frequency radiation has higher photon energy."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: E = h f.",
        "Check J, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "E = h f",
    "shortcut": "Remember the condition attached to E = h f; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Useful for spectrum risk, though chapter is classical."
  }
]
