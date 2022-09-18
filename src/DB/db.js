// Partie BOIS-----------------------------
const info_bois = [
  {
    name: "Itauba",
    image: "/assets/Bois/itauba.jpg",
    total: "4000",
  },
  {
    name: "Ipé",
    image: "./assets/Bois/ipe.jpg",
    total: "100",
  },
  {
    name: "Cumaru",
    image: "./assets/Bois/cumaru.jpg",
    total: "55",
  },
  {
    name: "Structure",
    image: "./assets/Bois/Structure.jpg",
    total: "3500",
  },
];

// Partie Quicailleries-----------------------------

const info_quincaillerie = [
  {
    name: "Terrasses",
    image: "./assets/Quincaillerie/vis-terrasse.jpg",
    total: "65",
  },
  {
    name: "Structure",
    image: "./assets/Quincaillerie/vis.jpg",

    total: "14",
  },
  {
    name: "Plot Béton",
    image: "./assets/Quincaillerie/plot-beton.jpg",

    total: "15",
  },
  {
    name: "Lames de scie",
    image: "./assets/Quincaillerie/lame-scie-sauteuse.jpg",
    total: "25",
  },
  {
    name: "Chevilles",
    image: "./assets/Quincaillerie/cheville.jpg",
    total: "100",
  },
  {
    name: "Boulon Charpente",
    image: "./assets/Quincaillerie/boulon-charpente.jpg",

    total: "50",
  },
  {
    name: "Equerre de Fixation",
    image: "./assets/Quincaillerie/equerre-de-fixation-renforcee.jpg",

    total: "25",
  },
  {
    name: "Tige Filete",
    image: "./assets/Quincaillerie/tige-filleté.jpg",

    total: "5",
  },
  {
    name: "Ecrou m14",
    image: "./assets/Quincaillerie/ecrou-m14.jpg",

    total: "50",
  },
  {
    name: "Rondelle plate",
    image: "./assets/Quincaillerie/rondelle.jpg",

    total: "90",
  },
  {
    name: "Pied de poteau",
    image: "./assets/Quincaillerie/pied-de-poteau.jpg",

    total: "8",
  },
  {
    name: "Vis de fondation",
    image: "./assets/Quincaillerie/vis-de-fondation.jpg",

    total: "50",
  },
  {
    name: "Feutre geotextile",
    image: "./assets/Quincaillerie/feutre-geotextile.jpg",

    total: "100",
  },
  {
    name: "Disaue a tronconner",
    image: "./assets/Quincaillerie/disque-a-tronconner.jpg",

    total: "50",
  },
  {
    name: "Disaue a ebarbe",
    image: "./assets/Quincaillerie/disque-a-ebarber.jpg",

    total: "80",
  },
  {
    name: "Disaue de pollissage",
    image: "./assets/Quincaillerie/disque-pollissage.jpg",

    total: "50",
  },
  {
    name: "agraffe",
    image: "./assets/Quincaillerie/agraffe.jpg",

    total: "50",
  },
  {
    name: "sangle darrimage",
    image: "./assets/Quincaillerie/sangle.jpg",

    total: "100",
  },
  {
    name: "Masque FFP3 ",
    image: "./assets/Quincaillerie/masque-ffp3.jpg",

    total: "5",
  },
  {
    name: "Crayon",
    image: "./assets/Quincaillerie/crayon.jpg",

    total: "100",
  },
  {
    name: "Gant de protection",
    image: "./assets/Quincaillerie/gant-chantier.jpg",

    total: "50",
  },
  {
    name: "Ruban signaletique",
    image: "./assets/Quincaillerie/ruban-signalisation.jpg",

    total: "100",
  },
  {
    name: "Lingette main",
    image: "./assets/Quincaillerie/lingette-main.jpg",

    total: "50",
  },
  {
    name: "Degripant Universel",
    image: "./assets/Quincaillerie/degripant.jpg",
    total: "50",
  },
  {
    name: "Cale PVC",
    image: "./assets/Quincaillerie/cales.jpg",
    total: "80",
  },
  {
    name: "Plot PVC",
    image: "./assets/Quincaillerie/plot.jpg",
    total: "50",
  },
  {
    name: "Abrasif",
    image: "./assets/Quincaillerie/abrasif.jpg",
    total: "50",
  },
  {
    name: "Chanfrein",
    image: "./assets/Quincaillerie/chanfrein.jpg",
    total: "50",
  },
  {
    name: "Cale Caoutchouc",
    image: "./assets/Quincaillerie/cale-caoutchouc.jpg",
    total: "50",
  },
];

// Partie Produits-----------------------------

const info_product = [
  {
    name: "Scellement Chimique",
    image: "/assets/Produits/chimique.jpg",
    total: "50",
  },
  {
    name: "silicone",
    image: "/assets/Produits/silicone.jpg",
    total: "65",
  },
  {
    name: "mastic",
    image: "/assets/Produits/mastic.jpg",
    total: "10",
  },
  {
    name: "Caoutchouc liquide",
    image: "/assets/Produits/hbs200.jpg",
    total: "20",
  },
  {
    name: "Saturateur",
    image: "/assets/Produits/saturateur.jpg",
    total: "50",
  },
  {
    name: "Lazure",
    image: "/assets/Produits/lazure.jpg",
    total: "50",
  },
  {
    name: "Degriseur",
    image: "/assets/Produits/degriseur.jpg",
    total: "50",
  },
  {
    name: "Bombe de Tracage",
    image: "/assets/Produits/tracage.jpg",
    total: "50",
  },
  {
    name: "Craie Cordex",
    image: "/assets/Produits/craie.jpg",
    total: "50",
  },
  {
    name: "Bidon Matefloc",
    image: "/assets/Produits/matefloc.jpg",
    total: "50",
  },
  {
    name: "Bidon Oxygen Actif",
    image: "/assets/Produits/oxygen-actif.jpg",
    total: "50",
  },
  {
    name: "Bidon Algicide ",
    image: "/assets/Produits/algicide.jpg",
    total: "50",
  },
  {
    name: "Bidon choc plus",
    image: "/assets/Produits/choc-plus-.jpg",
    total: "50",
  },
  {
    name: "Bidon PH Liquide",
    image: "/assets/Produits/ph.jpg",
    total: "50",
  },
  {
    name: "Bidon inoprotect",
    image: "/assets/Produits/inoprotect.jpg",
    total: "50",
  },
  {
    name: "Bidon AD Blue",
    image: "/assets/Produits/adblue.jpg",
    total: "50",
  },
  {
    name: "spray inox",
    image: "/assets/Produits/inox.jpg",
    total: "50",
  },
  {
    name: "colle EPDM",
    image: "/assets/Produits/colle-epdm-cartouche.jpg",
    total: "50",
  },
  {
    name: "colle EPDM pot",
    image: "/assets/Produits/colle-epdm.jpg",
    total: "50",
  },
  {
    name: "Bande joint EPDM",
    image: "/assets/Produits/joint-epdm.jpg",
    total: "50",
  },
];

// Partie Autres-----------------------------

const info_other = [
  {
    name: "Garde Corps",
    image: "/assets/Autres/garde-corps.jpg",
    total: "65",
  },
  {
    name: "Pare Pluie",
    image: "/assets/Autres/pare-pluie.jpg",
    total: "10",
  },
  {
    name: "Scoth Pare Pluie",
    image: "/assets/Autres/scotch-pare-pluie.jpg",
    total: "20",
  },
  {
    name: "Gaine TPC",
    image: "/assets/Autres/gaine-tpc.jpg",
    total: "50",
  },
  {
    name: "Gaine",
    image: "/assets/Autres/gaine.jpg",
    total: "65",
  },
  {
    name: "Cable",
    image: "/assets/Autres/cable.jpg",
    total: "50",
  },
  {
    name: "Wago",
    image: "/assets/Autres/wago.jpg",
    total: "10",
  },
  {
    name: "Medicale",
    image: "/assets/Autres/medicale.jpg",
    total: "20",
  },
  {
    name: "Madrier",
    image: "./assets/Bois/Structure.jpg",
    total: "50",
  },
  {
    name: "Mat Voile Ombrage",
    image: "/assets/Autres/mat.jpg",
    total: "65",
  },
  {
    name: "Luminaire",
    image: "/assets/Autres/spot.jpg",
    total: "10",
  },
  {
    name: "Terreau",
    image: "/assets/Autres/terreau.jpg",
    total: "20",
  },
];

const info_itauba = [
  {
    name: "95",
    total: "2000",
  },
  {
    name: "120",
    total: "2000",
  },
  {
    name: "150",
    total: "2000",
  },
  {
    name: "180",
    total: "2000",
  },
];

export { info_bois, info_quincaillerie, info_product, info_other, info_itauba };
