const backgroundColors = {
    hidrogen: '#758eb7',
    nobleGases: '#d8d531',
    alkaliM: '#c08fc1',
    alkaliEarthM: '#f2b0de',
    scandiumFamily: '#77aaff',
    lanthanides: '#94d9e8',
    actinides : '#6da55e',
    boronFamily: '#8aa038',
    carbonFamily: '#b217b5',
    pnictogens: '#828282',
    chalcogens: '#e2ad51',
    halogens: '#e28151'
}

const Elements = {
    period1:[
        {
            name: 'Hidrogen',
            number: 1,
            symbol: 'H',
            mass: 1.008,
            background: backgroundColors.hidrogen
        },
        {
            name: 'Helium',
            number: 2,
            symbol: 'He',
            mass: 4.003,
            background: backgroundColors.nobleGases
        }
    ],
    period2:[
        {
            name: 'Lithium',
            number: 3,
            symbol: 'Li',
            mass: 6.94,
            background: backgroundColors.alkaliM
        },
        {
            name: 'Beryllium',
            number: 4,
            symbol: 'Be',
            mass: 9.012,
            background: backgroundColors.alkaliEarthM
        },
        {
            name: 'Boron',
            number: 5,
            symbol: 'B',
            mass: 10.81,
            background: backgroundColors.boronFamily
        },
        {
            name: 'Carbon',
            number: 6,
            symbol: 'C',
            mass: 12.011,
            background: backgroundColors.carbonFamily
        },
        {
            name: 'Nitrogen',
            number: 7,
            symbol: 'N',
            mass: 14.007,
            background: backgroundColors.pnictogens
        },
        {
            name: 'Oxygen',
            number: 8,
            symbol: 'O',
            mass: 15.999,
            background: backgroundColors.chalcogens
        },
        {
            name: 'Fluorine',
            number: 9,
            symbol: 'F',
            mass: 18.998,
            background: backgroundColors.halogens
        },
        {
            name: 'Neon',
            number: 10,
            symbol: 'Ne',
            mass: 20.180,
            background: backgroundColors.nobleGases
        }
    ],
    period3: [
        {
            name: 'Sodium',
            number: 11,
            symbol: 'Na',
            mass: 22.990,
            background: backgroundColors.alkaliM                        
        },
        {
            name: 'Magnesium',
            number: 12,
            symbol: 'Mg',
            mass: 24.305,
            background: backgroundColors.alkaliEarthM
        },
        {
            name: 'Aluminium',
            number: 13,
            symbol: 'Al',
            mass: 26.982,
            background: backgroundColors.boronFamily

        },
        {
            name: 'Silicon',
            number: 14,
            symbol: 'Si',
            mass: 28.085,
            background: backgroundColors.carbonFamily
        },
        {
            name: 'Phosphorus',
            number: 15,
            symbol: 'P',
            mass: 30.974,
            background: backgroundColors.pnictogens
        },
        {
            name: 'Sulfur',
            number: 16,
            symbol: 'S',
            mass: 32.06,
            background: backgroundColors.chalcogens
        },
        {
            name: 'Chlorine',
            number: 17,
            symbol: 'Cl',
            mass: 35.45,
            background: backgroundColors.halogens
        },
        {
            name: 'Argon',
            number:18,
            symbol: 'Ar',
            mass: 39.948,
            background: backgroundColors.nobleGases
        }
    ],
    period4: [
        {
            name: 'Potassium',
            number: 19,
            symbol: 'K',
            mass: 39.098,
            background: backgroundColors.alkaliM
        },
        {
            name: 'Calcium',
            number: 20,
            symbol: 'Ca',
            mass: 40.078,
            background: backgroundColors.alkaliEarthM
        },
        {
            name: 'Scandium',
            number: 21,
            symbol: 'Sc',
            mass: 44.956,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Titanium',
            number: 22,
            symbol: 'Ti',
            mass: 47.867,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Vanadium',
            number:23,
            symbol: 'V',
            mass: 50.942,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Chromium',
            number: 24,
            symbol: 'Cr',
            mass: 51.996,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Manganese',
            number: 25,
            symbol: 'Mn',
            mass: 54.938,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Iron',
            number: 26,
            symbol: 'Fe',
            mass: 55.845,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Cobalt',
            number: 27,
            symbol: 'Co',
            mass: 58.933,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Nickel',
            number: 28,
            symbol: 'Ni',
            mass: 58.693,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Copper',
            number: 29,
            symbol: 'Cu',
            mass: 63.546,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Zinc',
            number: 30,
            symbol: 'Zn',
            mass: 65.38,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Gallium',
            number: 31,
            symbol: 'Ga',
            mass: 69.723,
            background: backgroundColors.boronFamily
        },
        {
            name: 'Germanium',
            number: 32,
            symbol: 'Ge',
            mass: 72.630,
            background: backgroundColors.carbonFamily
        },
        {
            name: 'Arsenic',
            number: 33,
            symbol: 'As',
            mass: 74.922,
            background: backgroundColors.pnictogens
        },
        {
            name: 'Selenium',
            number: 34,
            symbol: 'Se',
            mass: 78.971,
            background: backgroundColors.chalcogens
        },
        {
            name: 'Bromine',
            number: 35,
            symbol: 'Br',
            mass: 79.904,
            background: backgroundColors.halogens
        },
        {
            name: 'Krypton',
            number: 36,
            symbol: 'Kr',
            mass: 83.798,
            background: backgroundColors.nobleGases
        }
    ],
    period5: [
        {
            name: 'Rubidium',
            number: 37,
            symbol: 'Rb',
            mass: 85.468,
            background: backgroundColors.alkaliM
        },
        {
            name: 'Strontium',
            number: 38,
            symbol: 'Sr',
            mass: 87.62,
            background: backgroundColors.alkaliEarthM
        },
        {
            name: 'Yttrium',
            number: 39,
            symbol: 'Y',
            mass: 88.906,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Zirconium',
            number: 40,
            symbol: 'Zr',
            mass: 91.224,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Niobium',
            number: 41,
            symbol: 'Nb',
            mass: 92.906,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Molybdenum',
            number: 42,
            symbol: 'Mo',
            mass: 95.95,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Tachnetium',
            number: 43,
            symbol: 'Tc',
            mass: 98,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Ruthrenium',
            number: 44,
            symbol: 'Ru',
            mass: 101.07,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Rhodium',
            number: 45,
            symbol: 'Rh',
            mass: 102.906,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Palladium',
            number: 46,
            symbol: 'Pd',
            mass: 106.42,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Silver',
            number: 47,
            symbol: 'Ag',
            mass: 107.868,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Cadmium',
            number: 48,
            symbol: 'Cd',
            mass: 112.414,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Indium',
            number: 49,
            symbol: 'In',
            mass: 114.818,
            background: backgroundColors.boronFamily
        },
        {
            name: 'Tin',
            number: 50,
            symbol: 'Sn',
            mass: 118.710,
            background: backgroundColors.carbonFamily
        },
        {
            name: 'Antimony',
            number: 51,
            symbol: 'Sb',
            mass: 121.760,
            background: backgroundColors.pnictogens
        },
        {
            name: 'Tellerium',
            number: 52,
            symbol: 'Te',
            mass: 127.60,
            background: backgroundColors.chalcogens
        },
        {
            name: 'Iodine',
            number: 53,
            symbol: 'I',
            mass: 126.904,
            background: backgroundColors.halogens
        },
        {
            name: 'Xenon',
            number: 54,
            symbol: 'Xe',
            mass: 131.292,
            background: backgroundColors.nobleGases
        }
    ],
    period6: [
        {
            name: 'Caesium',
            number: 55,
            symbol: 'Cs',
            mass: 132.905,
            background: backgroundColors.alkaliM
        },
        {
            name: 'Barium',
            number: 56,
            symbol: 'Ba',
            mass: 137.327,
            background: backgroundColors.alkaliEarthM
        },
        {
            name: 'Lanthanum',
            number: 57,
            symbol: 'La',
            mass: 138.905,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Hafnium',
            number: 72,
            symbol: 'Hf',
            mass: 178.49,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Tantalum',
            number: 73,
            symbol: 'Ta',
            mass: 180.948,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Tungsten',
            number: 74,
            symbol: 'W',
            mass: 183.84,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Rhenium',
            number: 75,
            symbol: 'Re',
            mass: 186.207,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Osmium',
            number: 76,
            symbol: 'Os',
            mass: 190.23,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Iridium',
            number: 77,
            symbol: 'Ir',
            mass: 192.217,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Platinum',
            number: 78,
            symbol: 'Pt',
            mass: 195.084,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Gold',
            number: 79,
            symbol: 'Au',
            mass: 196.967,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Mercury',
            number: 80,
            symbol: 'Hg',
            mass: 200.592,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Thallium',
            number: 81,
            symbol: 'Tl',
            mass: 204.38,
            background: backgroundColors.boronFamily
        },
        {
            name: 'Lead',
            number: 82,
            symbol: 'Pb',
            mass: 207.2,
            background: backgroundColors.carbonFamily
        },
        {
            name: 'Bismuth',
            number: 83,
            symbol: 'Bi',
            mass: 208.980,
            background: backgroundColors.pnictogens
        },
        {
            name: 'Polonium',
            number: 84,
            symbol: 'Po',
            mass: 209,
            background: backgroundColors.chalcogens
        },
        {
            name: 'Astatine',
            number: 85,
            symbol: 'At',
            mass: 210,
            background: backgroundColors.halogens
        },
        {
            name: 'Radon',
            number: 86,
            symbol: 'Rn',
            mass: 222,
            background: backgroundColors.nobleGases
        }
    ],
    period7: [
        {
            name: 'Francium',
            number: 87,
            symbol: 'Fr',
            mass: 223,
            background: backgroundColors.alkaliM
        },
        {
            name: 'Radium',
            number: 88,
            symbol: 'Ra',
            mass: 226,
            background: backgroundColors.alkaliEarthM
        },
        {
            name: 'Actinium',
            number: 89,
            symbol: 'Ac',
            mass: 227,
            background: backgroundColors.actinides
        },
        {
            name: 'Rutherfordium',
            number: 104,
            symbol: 'Rf',
            mass: 267,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Dubnium',
            number: 105,
            symbol: 'Db',
            mass: 268,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Seaborgium',
            number: 106,
            symbol: 'Sg',
            mass: 269,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Bohrium',
            number: 107,
            symbol: 'Bh',
            mass: 270,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Hassium',
            number: 108,
            symbol: 'Hs',
            mass: 269,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Meitnerium',
            number: 109,
            symbol: 'Mt',
            mass: 278,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Darmstadtium',
            number: 110,
            symbol: 'Ds',
            mass: 281,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Roentgenium',
            number: 111,
            symbol: 'Rg',
            mass: 280,
            background: backgroundColors.scandiumFamily
        },
        {
            name: 'Copercinium',
            number: 112,
            symbol: 'Cn',
            mass: 285,
            background: backgroundColors.scandiumFamily
        },
        {
            name : 'Nihonium',
            number: 113,
            symbol: 'Nh',
            mass: 286,
            background: backgroundColors.boronFamily
        },
        {
            name: 'Flerovium',
            number: 114,
            symbol: 'Fl',
            mass: 289,
            background: backgroundColors.carbonFamily
        },
        {
            name: 'Moscovium',
            number: 115,
            symbol: 'Mc',
            mass: 289,
            background: backgroundColors.pnictogens
        },
        {
            name: 'Livermorium',
            number: 116,
            symbol: 'Lv',
            mass: 293,
            background: backgroundColors.chalcogens
        },
        {
            name: 'Tennessine',
            number: 117,
            symbol: 'Ts',
            mass: 294,
            background: backgroundColors.halogens    
        },
        {
            name: 'Oganesson',
            number: 118,
            symbol: 'Og',
            mass: 294,
            background: backgroundColors.nobleGases
        }
    ],
    lanthanides: [
        {
            name: 'Cerium',
            number: 58,
            symbol: 'Ce',
            mass: 140.116,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Paresodymium',
            number: 59,
            symbol: 'Pr',
            mass: 140.908,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Neodymium',
            number: 60,
            symbol: 'Nd',
            mass: 144.242,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Promethium',
            number: 61,
            symbol: 'Pm',
            mass: 145,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Samarium',
            number: 62,
            symbol: 'Sm',
            mass: 150.36,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Europium',
            number: 63,
            symbol: 'Eu',
            mass: 151.964,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Gadolinium',
            number: 64,
            symbol: 'Gd',
            mass: 157.25,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Terbium',
            number: 65,
            symbol: 'Tb',
            mass: 158.925,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Dysprosium',
            number: 66,
            symbol: 'Dy',
            mass: 162.5,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Holmium',
            number: 67,
            symbol: 'Ho',
            mass: 164.930,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Erbium',
            number: 68,
            symbol: 'Er',
            mass: 167.259,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Thulium',
            number: 69,
            symbol: 'Tm',
            mass: 168.934,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Ytterbium',
            number: 70,
            symbol: 'Yb',
            mass: 173.045,
            background: backgroundColors.lanthanides
        },
        {
            name: 'Lutetium',
            number: 71,
            symbol: 'Lu',
            mass: 174.967,
            background: backgroundColors.lanthanides
        }
    ],
    actinides: [
        {
            name: 'Thorium',
            number: 90,
            symbol: 'Th',
            mass: 232.038,
            background: backgroundColors.actinides
        },
        {
            name: 'Protactinium',
            number: 91,
            symbol: 'Pa',
            mass: 231.036,
            background: backgroundColors.actinides
        },
        {
            name: 'Uranium',
            number: 92,
            symbol: 'U',
            mass: 238.029,
            background: backgroundColors.actinides
        },
        {
            name: 'Neptunium',
            number: 93,
            symbol: 'Np',
            mass: 237,
            background: backgroundColors.actinides
        },
        {
            name: 'Plutonium',
            number: 94,
            symbol: 'Pu',
            mass: 244,
            background: backgroundColors.actinides
        },
        {
            name: 'Americium',
            number: 95,
            symbol: 'Am',
            mass: 243,
            background: backgroundColors.actinides
        },
        {
            name: 'Curium',
            number: 96,
            symbol: 'Cm',
            mass: 247,
            background: backgroundColors.actinides
        },
        {
            name: 'Barkelium',
            number: 97,
            symbol: 'Bk',
            mass: 247,
            background: backgroundColors.actinides
        },
        {
            name: 'Californium',
            number: 98,
            symbol: 'Cf',
            mass: 251,
            background: backgroundColors.actinides
        },
        {
            name: 'Einsteinium',
            number: 99,
            symbol: 'Es',
            mass: 252,
            background: backgroundColors.actinides
        },
        {
            name:  'Fermium',
            number: 100,
            symbol: 'Fm',
            mass: 257,
            background: backgroundColors.actinides
        },
        {
            name: 'Mandelevium',
            number: 101,
            symbol: 'Md',
            mass: 258,
            background: backgroundColors.actinides
        },
        {
            name: 'Nobelium',
            number: 102,
            symbol: 'No',
            mass: 259,
            background: backgroundColors.actinides
        },
        {
            name: 'Lawrencium',
            number: 103,
            symbol: 'Lr',
            mass: 262,
            background: backgroundColors.actinides
        }
    ]
};


export default Elements;