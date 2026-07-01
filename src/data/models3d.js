export const models3d = {
  "repo": "physicsforge-chapter8",
  "chapterNumber": 8,
  "chapterName": "Electromagnetic Waves",
  "shortName": "EM Waves",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "EM Wave Orthogonal Fields",
      "kind": "wave",
      "formula": "c = 1/sqrt(mu0 epsilon0)",
      "concept": "Electric and magnetic fields oscillate perpendicular to each other and to propagation.",
      "exam": "E/B equals speed of light.",
      "labels": [
        "E field",
        "B field",
        "direction"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Displacement Current Gap",
      "kind": "capacitor",
      "formula": "Id = epsilon0 dPhiE/dt",
      "concept": "A changing electric field completes current continuity between capacitor plates.",
      "exam": "Maxwell added displacement current to Ampere law.",
      "labels": [
        "plates",
        "changing E",
        "Id"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Maxwell Field Coupling",
      "kind": "wave",
      "formula": "changing E creates B; changing B creates E",
      "concept": "Self-sustaining fields propagate as electromagnetic waves.",
      "exam": "No material medium is required.",
      "labels": [
        "changing E",
        "changing B",
        "wavefront"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Plane Wavefront Sheet",
      "kind": "wave",
      "formula": "E perpendicular B",
      "concept": "Flat wavefronts move through space with fixed phase planes.",
      "exam": "Rays are normal to wavefronts.",
      "labels": [
        "wavefront",
        "ray",
        "phase"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Energy Flow Poynting Vector",
      "kind": "phasor",
      "formula": "S = (1/mu0) E x B",
      "concept": "Energy flows in the direction of E cross B.",
      "exam": "Intensity is energy per area per time.",
      "labels": [
        "E",
        "B",
        "S"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Radiation Pressure Panel",
      "kind": "thermal",
      "formula": "p = I/c",
      "concept": "Light carries momentum and can exert pressure.",
      "exam": "Perfect reflection doubles pressure.",
      "labels": [
        "light beam",
        "surface",
        "pressure"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Spectrum Ladder 3D",
      "kind": "energy-level",
      "formula": "radio to gamma",
      "concept": "The EM spectrum differs by frequency and wavelength.",
      "exam": "All EM waves travel at c in vacuum.",
      "labels": [
        "radio",
        "visible",
        "gamma"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Antenna Radiation",
      "kind": "dipole",
      "formula": "accelerated charges radiate",
      "concept": "Oscillating charges emit electromagnetic waves.",
      "exam": "Static charges do not radiate.",
      "labels": [
        "antenna",
        "oscillation",
        "radiation"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Microwave Cavity",
      "kind": "resonance",
      "formula": "standing EM field",
      "concept": "Microwave fields can form resonant patterns in a cavity.",
      "exam": "Frequency decides wavelength and mode spacing.",
      "labels": [
        "nodes",
        "antinodes",
        "cavity"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Visible Light Wave Packet",
      "kind": "wave",
      "formula": "lambda f = c",
      "concept": "Visible light is a small part of the EM spectrum.",
      "exam": "Higher frequency means smaller wavelength.",
      "labels": [
        "lambda",
        "frequency",
        "packet"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Polarization of EM Wave",
      "kind": "phasor",
      "formula": "E-field direction defines polarization",
      "concept": "Only transverse waves can be polarized.",
      "exam": "Polarization is tied to electric field direction.",
      "labels": [
        "vertical E",
        "horizontal E",
        "analyzer"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Infrared Heating Surface",
      "kind": "thermal",
      "formula": "thermal radiation",
      "concept": "Infrared radiation transfers energy to matter as heat.",
      "exam": "IR has lower frequency than visible red.",
      "labels": [
        "IR beam",
        "surface",
        "heating"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "X-Ray Penetration Model",
      "kind": "photoelectric",
      "formula": "high photon energy",
      "concept": "Short wavelength X-rays penetrate matter more strongly.",
      "exam": "Energy increases as wavelength decreases.",
      "labels": [
        "X-ray",
        "object",
        "detector"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Gamma Ray Photon Stack",
      "kind": "photoelectric",
      "formula": "highest frequency EM",
      "concept": "Gamma photons have very high energy and tiny wavelength.",
      "exam": "They are electromagnetic, not material particles.",
      "labels": [
        "gamma photon",
        "energy",
        "path"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Radio Wave Broadcast",
      "kind": "wave",
      "formula": "long wavelength",
      "concept": "Radio waves spread around large obstacles and carry signals.",
      "exam": "Antenna size relates to wavelength.",
      "labels": [
        "tower",
        "wavefront",
        "receiver"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "UV Photoelectric Link",
      "kind": "photoelectric",
      "formula": "E = hf",
      "concept": "Ultraviolet photons can eject electrons from suitable metals.",
      "exam": "Intensity cannot overcome below-threshold frequency.",
      "labels": [
        "UV photon",
        "metal",
        "electron"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Maxwell Equation Cube",
      "kind": "default",
      "formula": "four Maxwell equations",
      "concept": "The four laws connect electric fields, magnetic fields, charges and currents.",
      "exam": "EM waves emerge from coupled changing fields.",
      "labels": [
        "Gauss E",
        "Gauss B",
        "Faraday/Ampere"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Wave Intensity Decay",
      "kind": "charge-field",
      "formula": "I proportional E0^2",
      "concept": "Larger field amplitude means greater wave intensity.",
      "exam": "Intensity depends on square of amplitude.",
      "labels": [
        "amplitude",
        "intensity",
        "area"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Speed in Medium",
      "kind": "optics",
      "formula": "v = c/n",
      "concept": "EM waves slow down in transparent media.",
      "exam": "Frequency stays same at boundary; wavelength changes.",
      "labels": [
        "vacuum",
        "medium",
        "slower wave"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Communication Carrier",
      "kind": "wave",
      "formula": "modulated carrier",
      "concept": "A carrier wave can encode information by changing amplitude or frequency.",
      "exam": "This is a conceptual bridge to communication systems.",
      "labels": [
        "carrier",
        "signal",
        "receiver"
      ],
      "color": "#7c3aed"
    }
  ]
}
