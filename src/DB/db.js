// Partie BOIS-----------------------------
const info_bois = [
  {
    category: "bois",
    name: "itauba",
    image: "./assets/Bois/itauba.jpg",
    subproducts: {
      title: ["95", "125", "155", "185"],
      total: [1000,1000,1000,1000],
    },

    stock: 4000,
    unit: "m²",
  },
  {
    category: "bois",
    name: "Ipé",
    image: "./assets/Bois/ipe.jpg",
    subproducts: [
      {
        title: "95",
        total: 1000,
      },

      {
        title: "125",
        total: 1000,
      },

      {
        title: "155",
        total: 1000,
      },

      {
        title: "185",
        total: 1000,
      },
    ],
    stock: 4000,
    unit: "m²",
  },
  {
    category: "bois",
    name: "Cumaru",
    image: "./assets/Bois/cumaru.jpg",
    subproducts: [
      {
        title: "95",
        total: 1000,
      },

      {
        title: "125",
        total: 1000,
      },

      {
        title: "155",
        total: 1000,
      },

      {
        title: "185",
        total: 1000,
      },
    ],
    stock: 4000,
    unit: "m²",
  },
  {
    category: "bois",
    name: "Structure",
    image: "./assets/Bois/Structure.jpg",
    subproducts: [
      {
        title: "200",
        total: 1000,
      },
    ],
    stock: 1000,
    unit: "m²",
  },
];

// Partie Quicailleries-----------------------------

const info_quincaillerie = [
  {
    category: "quincailleries",
    name: "Terrasses",
    image: "./assets/Quincaillerie/vis-terrasse.jpg",
    total: 65,
    stock: 2000,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Structure",
    image: "./assets/Quincaillerie/vis.jpg",
    total: 14,
    stock: 2000,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Plot Béton",
    image: "./assets/Quincaillerie/plot-beton.jpg",
    total: 5,
    stock: 10,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Lames de scie",
    image: "./assets/Quincaillerie/lame-scie-sauteuse.jpg",
    total: 25,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Chevilles",
    image: "./assets/Quincaillerie/cheville.jpg",
    total: 100,
    stock: 50,
    unit: "Boite",
  },
  {
    category: "quincailleries",
    name: "Boulon Charpente",
    image: "./assets/Quincaillerie/boulon-charpente.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Equerre de Fixation",
    image: "./assets/Quincaillerie/equerre-de-fixation-renforcee.jpg",
    total: 25,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Tige Filete",
    image: "./assets/Quincaillerie/tige-filleté.jpg",
    total: 5,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Ecrou m14",
    image: "./assets/Quincaillerie/ecrou-m14.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Rondelle plate",
    image: "./assets/Quincaillerie/rondelle.jpg",
    total: 90,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Pied de poteau",
    image: "./assets/Quincaillerie/pied-de-poteau.jpg",
    total: 8,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Vis de fondation",
    image: "./assets/Quincaillerie/vis-de-fondation.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Feutre geotextile",
    image: "./assets/Quincaillerie/feutre-geotextile.jpg",
    total: 100,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Disque a tronconner",
    image: "./assets/Quincaillerie/disque-a-tronconner.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Disque a ebarbe",
    image: "./assets/Quincaillerie/disque-a-ebarber.jpg",
    total: 80,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Disque de pollissage",
    image: "./assets/Quincaillerie/disque-pollissage.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Agraffes",
    image: "./assets/Quincaillerie/agraffe.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Sangle arrimage",
    image: "./assets/Quincaillerie/sangle.jpg",
    total: 100,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Masque FFP3 ",
    image: "./assets/Quincaillerie/masque-ffp3.jpg",
    total: 5,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Crayon",
    image: "./assets/Quincaillerie/crayon.jpg",
    total: 100,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Gant de protection",
    image: "./assets/Quincaillerie/gant-chantier.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Ruban signaletique",
    image: "./assets/Quincaillerie/ruban-signalisation.jpg",
    total: 100,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Lingette main",
    image: "./assets/Quincaillerie/lingette-main.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Degripant Universel",
    image: "./assets/Quincaillerie/degripant.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Cale PVC",
    image: "./assets/Quincaillerie/cales.jpg",
    total: 80,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Plot PVC",
    image: "./assets/Quincaillerie/plot.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Abrasif",
    image: "./assets/Quincaillerie/abrasif.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Chanfrein",
    image: "./assets/Quincaillerie/chanfrein.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "quincailleries",
    name: "Cale Caoutchouc",
    image: "./assets/Quincaillerie/cale-caoutchouc.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
];

// Partie Produits-----------------------------

const info_product = [
  {
    category: "produits",
    name: "Scellement Chimique",
    image: "/assets/Produits/chimique.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Silicone",
    image: "/assets/Produits/silicone.jpg",
    total: 65,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Sastic",
    image: "/assets/Produits/mastic.jpg",
    total: 10,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Caoutchouc liquide",
    image: "/assets/Produits/hbs200.jpg",
    total: 20,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Saturateur",
    image: "/assets/Produits/saturateur.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Lazure",
    image: "/assets/Produits/lazure.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Degriseur",
    image: "/assets/Produits/degriseur.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bombe de Tracage",
    image: "/assets/Produits/tracage.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Craie Cordex",
    image: "/assets/Produits/craie.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon Matefloc",
    image: "/assets/Produits/matefloc.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon Oxygen Actif",
    image: "/assets/Produits/oxygen-actif.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon Algicide ",
    image: "/assets/Produits/algicide.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon choc plus",
    image: "/assets/Produits/choc-plus-.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon PH Liquide",
    image: "/assets/Produits/ph.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon inoprotect",
    image: "/assets/Produits/inoprotect.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bidon AD Blue",
    image: "/assets/Produits/adblue.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Spray inox",
    image: "/assets/Produits/inox.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Colle EPDM",
    image: "/assets/Produits/colle-epdm-cartouche.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "colle EPDM pot",
    image: "/assets/Produits/colle-epdm.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "produits",
    name: "Bande joint EPDM",
    image: "/assets/Produits/joint-epdm.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
];

// Partie Autres-----------------------------

const info_other = [
  {
    category: "autres",
    name: "Garde Corps",
    image: "/assets/Autres/garde-corps.jpg",
    total: 65,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Pare Pluie",
    image: "/assets/Autres/pare-pluie.jpg",
    total: 10,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Scoth Pare Pluie",
    image: "/assets/Autres/scotch-pare-pluie.jpg",
    total: 20,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Gaine TPC",
    image: "/assets/Autres/gaine-tpc.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Gaine",
    image: "/assets/Autres/gaine.jpg",
    total: 65,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Cable",
    image: "/assets/Autres/cable.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Wago",
    image: "/assets/Autres/wago.jpg",
    total: 10,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Medicale",
    image: "/assets/Autres/medicale.jpg",
    total: 20,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Madrier",
    image: "./assets/Bois/Structure.jpg",
    total: 50,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Mat Voile Ombrage",
    image: "/assets/Autres/mat.jpg",
    total: 65,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Luminaire",
    image: "/assets/Autres/spot.jpg",
    total: 10,
    stock: 50,
    unit: "Boites",
  },
  {
    category: "autres",
    name: "Terreau",
    image: "/assets/Autres/terreau.jpg",
    total: 20,
    stock: 50,
    unit: "Boites",
  },
];

const info_all_item = [
  ...info_bois,
  ...info_quincaillerie,
  ...info_product,
  ...info_other,
];

export default info_all_item;
