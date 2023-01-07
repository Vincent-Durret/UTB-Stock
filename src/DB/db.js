// Partie BOIS-----------------------------
const info_bois = [
  {
    category: 'bois',
    name: 'itauba',
    image: './assets/Bois/itauba.jpg',
    stock: 4000,
    unit: 'm²',
  },
  {
    category: 'bois',
    name: 'ipé',
    image: './assets/Bois/ipe.jpg',
    stock: 4000,
    unit: 'm²',
  },
  {
    category: 'bois',
    name: 'cumaru',
    image: './assets/Bois/cumaru.jpg',
    stock: 4000,
    unit: 'm²',
  },
  {
    category: 'bois',
    name: 'structure',
    image: './assets/Bois/Structure.jpg',
    stock: 1000,
    unit: 'm²',
  },
]

// Partie Quicailleries-----------------------------

const info_quincaillerie = [
  {
    category: 'quincailleries',
    name: 'vis terrasses',
    image: './assets/Quincaillerie/vis-terrasse.jpg',
    subproducts:  [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 2000,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'vis structure',
    image: './assets/Quincaillerie/vis.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 2000,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'plot béton',
    image: './assets/Quincaillerie/plot-beton.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 10,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'lames de scie',
    image: './assets/Quincaillerie/lame-scie-sauteuse.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'chevilles',
    image: './assets/Quincaillerie/cheville.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boite',
  },
  {
    category: 'quincailleries',
    name: 'boulon charpente',
    image: './assets/Quincaillerie/boulon-charpente.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'equerre de fixation',
    image: './assets/Quincaillerie/equerre-de-fixation-renforcee.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'tige Filete',
    image: './assets/Quincaillerie/tige-filleté.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'ecrou m14',
    image: './assets/Quincaillerie/ecrou-m14.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'rondelle plate',
    image: './assets/Quincaillerie/rondelle.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'pied de poteau',
    image: './assets/Quincaillerie/pied-de-poteau.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'vis de fondation',
    image: './assets/Quincaillerie/vis-de-fondation.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'feutre geotextile',
    image: './assets/Quincaillerie/feutre-geotextile.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'disque a tronconner',
    image: './assets/Quincaillerie/disque-a-tronconner.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'disque a ebarbe',
    image: './assets/Quincaillerie/disque-a-ebarber.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'disque de pollissage',
    image: './assets/Quincaillerie/disque-pollissage.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'agraffes',
    image: './assets/Quincaillerie/agraffe.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'sangle arrimage',
    image: './assets/Quincaillerie/sangle.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'masque ffp3 ',
    image: './assets/Quincaillerie/masque-ffp3.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'crayon',
    image: './assets/Quincaillerie/crayon.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'gant de protection',
    image: './assets/Quincaillerie/gant-chantier.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'ruban signaletique',
    image: './assets/Quincaillerie/ruban-signalisation.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'lingette main',
    image: './assets/Quincaillerie/lingette-main.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'degripant universel',
    image: './assets/Quincaillerie/degripant.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'cale pvc',
    image: './assets/Quincaillerie/cales.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'plot pvc',
    image: './assets/Quincaillerie/plot.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'abrasif',
    image: './assets/Quincaillerie/abrasif.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'chanfrein',
    image: './assets/Quincaillerie/chanfrein.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'quincailleries',
    name: 'cale caoutchouc',
    image: './assets/Quincaillerie/cale-caoutchouc.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
]

// Partie Produits-----------------------------

const info_product = [
  {
    category: 'produits',
    name: 'scellement chimique',
    image: '/assets/Produits/chimique.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'silicone',
    image: '/assets/Produits/silicone.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'mastic',
    image: '/assets/Produits/mastic.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'caoutchouc liquide',
    image: '/assets/Produits/hbs200.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'saturateur',
    image: '/assets/Produits/saturateur.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'lazure',
    image: '/assets/Produits/lazure.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'degriseur',
    image: '/assets/Produits/degriseur.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bombe de tracage',
    image: '/assets/Produits/tracage.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'craie cordex',
    image: '/assets/Produits/craie.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon matefloc',
    image: '/assets/Produits/matefloc.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon oxygen actif',
    image: '/assets/Produits/oxygen-actif.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon algicide ',
    image: '/assets/Produits/algicide.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon choc plus',
    image: '/assets/Produits/choc-plus-.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon ph liquide',
    image: '/assets/Produits/ph.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon inoprotect',
    image: '/assets/Produits/inoprotect.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bidon ad blue',
    image: '/assets/Produits/adblue.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'spray inox',
    image: '/assets/Produits/inox.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'colle epdm',
    image: '/assets/Produits/colle-epdm-cartouche.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'colle epdm pot',
    image: '/assets/Produits/colle-epdm.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'produits',
    name: 'bande joint epdm',
    image: '/assets/Produits/joint-epdm.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
]

// Partie Autres-----------------------------

const info_other = [
  {
    category: 'autres',
    name: 'garde corps',
    image: '/assets/Autres/garde-corps.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'pare pluie',
    image: '/assets/Autres/pare-pluie.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'scoth pare pluie',
    image: '/assets/Autres/scotch-pare-pluie.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'gaine tpc',
    image: '/assets/Autres/gaine-tpc.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'gaine',
    image: '/assets/Autres/gaine.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'cable',
    image: '/assets/Autres/cable.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'wago',
    image: '/assets/Autres/wago.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'medicale',
    image: '/assets/Autres/medicale.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'madrier',
    image: './assets/Bois/Structure.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'mat voile ombrage',
    image: '/assets/Autres/mat.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'luminaire',
    image: '/assets/Autres/spot.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
  {
    category: 'autres',
    name: 'terreau',
    image: '/assets/Autres/terreau.jpg',
    subproducts: [
      {
        title: '200',
        total: 1000,
      },
    ],
    stock: 50,
    unit: 'Boites',
  },
]

const info_all_item = [
  ...info_bois,
  ...info_quincaillerie,
  ...info_product,
  ...info_other,
]

export default info_all_item
