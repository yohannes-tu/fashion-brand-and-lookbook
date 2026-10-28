import { LookItem, Collection } from '../utils/filterSort';

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Material Exploration' | 'Creative Direction' | 'Campaign Notes' | 'Philosophy';
  date: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  content: string[];
  quote: string;
  author: string;
}

export interface SelectedWork {
  id: string;
  title: string;
  category: 'Editorial' | 'Campaign' | 'Styling' | 'Collaboration' | 'Art Direction';
  year: number;
  client: string;
  image: string;
  description: string;
  role: string;
}

export interface StudioStep {
  step: string;
  title: string;
  description: string;
  image: string;
  detail: string;
}

export const BRAND_IDENTITY = {
  name: 'ATELIER NØIR',
  subname: 'HAUTE COUTURE ARCHITECTURE',
  tagline: 'FORM. FUTURE. IDENTITY.',
  heroStatement: 'WEAR THE UNIMAGINED.',
  heroSupporting: 'An exploration of form, material, and identity beyond the expected.',
  established: 'EST. 2024 / REYKJAVÍK — PARIS',
  philosophy:
    'Fashion is not simply what we wear. It is a language of form, movement, identity, and imagination. Every collection explores new relationships between material, silhouette, and the human experience.',
  manifesto: [
    'We believe clothing can become architecture.',
    'That texture can carry emotion.',
    'That a silhouette can challenge expectation.',
    'We create not to follow the future, but to imagine it differently.',
  ],
  principles: [
    {
      number: '01',
      title: 'FORM',
      subtitle: 'Sculptural Geometry',
      quote: 'We explore the boundaries of silhouette, proportion, and structure.',
      description:
        'Garments designed with cantilevered drapes, articulated shoulders, and monolithic volumes that redefine the human contour in motion.',
      image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    },
    {
      number: '02',
      title: 'MATERIAL',
      subtitle: 'Intelligent Substrates',
      quote: 'We treat fabric, texture, and surface as essential parts of visual expression.',
      description:
        'Sourcing conductive micro-weaves, matte carbon-coated wool, responsive thermo-chromic silks, and bonded architectural polymers.',
      image: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    },
    {
      number: '03',
      title: 'IDENTITY',
      subtitle: 'Post-Digital Sovereignty',
      quote: 'We create visual narratives that challenge convention and celebrate individuality.',
      description:
        'A dialogue between anonymity and commanding presence, crafted for those who move between physical monoliths and synthetic realms.',
      image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    },
  ],
  campaign: {
    title: 'AFTER THE STATIC',
    season: 'Autumn-Winter 2026',
    location: 'Brutalist Sub-Level VII, Paris',
    description:
      'A visual exploration of stillness, movement, and the architecture of the human form captured in raw monochromatic tension.',
    image: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    credits: {
      creativeDirector: 'Kaelen Vance',
      photographer: 'Elena Vance & Soren Lind',
      stylist: 'Noa Sylvan',
      soundDesign: 'Caelum Pulse',
    },
  },
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    number: '01/04',
    title: 'LumaFlex Bodysuit',
    tagline: 'Intelligent Contour System',
    description:
      'Engineered with intelligent fabric that contours to your body in real time, enhancing comfort and architectural flexibility.',
    image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    silhouette: 'Ergonomic high-neck articulated structure',
    fabric: 'Silver-threaded conductive micro-gabardine',
  },
  {
    id: 'slide-2',
    number: '02/04',
    title: 'Nocturne Cloak VII',
    tagline: 'Architectural Monolith',
    description:
      'Heavy drape sculptural cape constructed from bonded carbon-wool with integrated hooded reticle and weather-sealed pleating.',
    image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    silhouette: 'Floor-length flared cantilever cowl',
    fabric: 'Dense structural gabardine with matte resin finish',
  },
  {
    id: 'slide-3',
    number: '03/04',
    title: 'Static Void Robe',
    tagline: 'Monochromatic Draping',
    description:
      'Multi-tiered geometric pleats that absorb directional stage lighting, engineered in collaboration with textile acousticians.',
    image: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    silhouette: 'Multi-layered pleated brutalist drape',
    fabric: 'Acoustic absorbent micro-weave silk blend',
  },
  {
    id: 'slide-4',
    number: '04/04',
    title: 'HexaMatrix Weave',
    tagline: 'Responsive Bio-Textile',
    description:
      'Micro-embossed hexagonal relief patterning with conductive filaments that adapt thermal retention dynamically.',
    image: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    silhouette: 'Structured armor bodice contour',
    fabric: 'Thermal-active hexagonal Jacquard weave',
  },
];

export const COLLECTIONS_DATA: Collection[] = [
  {
    id: 'nocturne-001',
    number: '001',
    title: 'NOCTURNE',
    season: 'Autumn-Winter',
    year: 2026,
    category: 'Autumn-Winter',
    heroImage: '/public/assets/aistudio/image_71628699.png',
    secondaryImage: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    detailImage: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    tagline: 'A study in silhouette, shadow, and heavy volume',
    description:
      'A nocturnal study of architectural silhouettes, layered materials, and restrained expression conceived for high-density environments.',
    statement:
      'The cloak is not an ornament. It is an envelope that commands space through silence.',
    materials: ['Carbon Gabardine', 'Bonded Rubberized Cotton', 'Matte Titanium Fixtures'],
  },
  {
    id: 'kinetic-002',
    number: '002',
    title: 'AURA / KINETIC',
    season: 'Spring-Summer',
    year: 2026,
    category: 'Spring-Summer',
    heroImage: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    secondaryImage: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    detailImage: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    tagline: 'Biometric motion and micro-embroidered conductivity',
    description:
      'Exploring adaptive tension matrices and second-skin garments that articulate with every breath and gesture of the human form.',
    statement:
      'Technology should never look like plastic. It must weave into thread like forgotten myth.',
    materials: ['Intelligent Elastane', 'Silver Embroidered Brocade', 'Conductive Filaments'],
  },
  {
    id: 'matrix-003',
    number: '003',
    title: 'CHRONO / MATRIX',
    season: 'Concept Capsule',
    year: 2025,
    category: 'Experimental / Concept',
    heroImage: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    secondaryImage: '/public/assets/aistudio/image_71628699.png',
    detailImage: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    tagline: 'Brutalist monoliths and architectural pleating',
    description:
      'A conceptual laboratory collection examining monolithic drapes inspired by 1960s concrete architecture and deep-future subterranean habitats.',
    statement:
      'Garments that cast shadows sharper than steel.',
    materials: ['Molded Scuba Neoprene', 'Recycled Aerospace Fibers', 'Obsidian Dyes'],
  },
];

export const LOOKBOOK_DATA: LookItem[] = [
  {
    id: 'look-01',
    number: 'LOOK 01 / 08',
    title: 'The Architect of Shadows',
    collectionId: 'nocturne-001',
    collectionName: 'NOCTURNE / 001',
    category: 'Outerwear',
    silhouette: 'Cantilevered multi-fold hood with sharp geometric pleats',
    fabric: 'Heavy structural gabardine with matte rubberized finish',
    image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    description:
      'An imposing floor-length silhouette with faceted lapels and internal suspension harness, creating a protective architectural shelter.',
    credits: {
      photographer: 'Elena Vance',
      styling: 'Kaelen Vance',
      model: 'Vanya Novak',
    },
  },
  {
    id: 'look-02',
    number: 'LOOK 02 / 08',
    title: 'LumaFlex Embroidered Coat',
    collectionId: 'kinetic-002',
    collectionName: 'AURA / KINETIC',
    category: 'Bodysuit',
    silhouette: 'High-stand funnel neck with articulated raglan sleeves',
    fabric: 'Hand-guided metallic cord embroidery on heavy textured wool',
    image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    description:
      'Intricate organic and cybernetic embroidery that traces the thoracic nerve pathways with gold and charcoal metallic threads.',
    credits: {
      photographer: 'Soren Lind',
      styling: 'Noa Sylvan',
      model: 'Amara Diop',
    },
  },
  {
    id: 'look-03',
    number: 'LOOK 03 / 08',
    title: 'Monolithic Cloak & Reticle Helm',
    collectionId: 'nocturne-001',
    collectionName: 'NOCTURNE / 001',
    category: 'Architectural',
    silhouette: 'Full-bleed bell cloak with weighted cathedral train',
    fabric: 'Dense bonded wool twill with water-repellent carbon layer',
    image: '/public/assets/aistudio/image_71628699.png',
    description:
      'The signature silhouette from the Autumn-Winter campaign, paired with a custom matte titanium acoustic headpiece.',
    credits: {
      photographer: 'Elena Vance',
      styling: 'Kaelen Vance',
      model: 'Cipher 09',
    },
  },
  {
    id: 'look-04',
    number: 'LOOK 04 / 08',
    title: 'Brutalist Ensemble IV',
    collectionId: 'matrix-003',
    collectionName: 'CHRONO / MATRIX',
    category: 'Tailoring',
    silhouette: 'Quadrilateral cape sleeve with pleated columnar tunic',
    fabric: 'Raw matte wool crepe and high-density woven tech-membrane',
    image: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    description:
      'Four figures in varied manifestations of the monolithic veil, captured inside the abandoned concrete cisterns of Paris.',
    credits: {
      photographer: 'Soren Lind',
      styling: 'Noa Sylvan',
      model: 'Ensemble Cast',
    },
  },
  {
    id: 'look-05',
    number: 'LOOK 05 / 08',
    title: 'HexaMatrix Biometric Swatch',
    collectionId: 'kinetic-002',
    collectionName: 'AURA / KINETIC',
    category: 'Accessories',
    silhouette: 'Embossed honeycomb structure for articulated joints',
    fabric: 'Thermo-responsive Jacquard with reflective silver tracing',
    image: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    description:
      'Close-up investigation of our proprietary hexagonal woven substrate developed at the Reykjavík textile lab.',
    credits: {
      photographer: 'Dr. Mira Chen',
      styling: 'Atelier Labs',
      model: 'Textile Artifact',
    },
  },
  {
    id: 'look-06',
    number: 'LOOK 06 / 08',
    title: 'Nocturne Pleated Armor Vest',
    collectionId: 'nocturne-001',
    collectionName: 'NOCTURNE / 001',
    category: 'Tailoring',
    silhouette: 'Asymmetrical wrap front with reinforced shoulder ribs',
    fabric: 'Triple-weight Japanese serge with laser-cut edging',
    image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    description:
      'A modular mid-layer that integrates seamlessly under the signature cloak or functions as a standalone command vest.',
    credits: {
      photographer: 'Elena Vance',
      styling: 'Kaelen Vance',
      model: 'Vanya Novak',
    },
  },
  {
    id: 'look-07',
    number: 'LOOK 07 / 08',
    title: 'Aura High-Collar Kimono Gown',
    collectionId: 'kinetic-002',
    collectionName: 'AURA / KINETIC',
    category: 'Architectural',
    silhouette: 'Sculpted drop-shoulder with floor-grazing bell cuffs',
    fabric: 'Silk-viscose faille with metallic bullion stitchwork',
    image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    description:
      'Combining traditional high-fashion court robes with minimalist cybernetic geometry and discreet magnetic closures.',
    credits: {
      photographer: 'Soren Lind',
      styling: 'Noa Sylvan',
      model: 'Amara Diop',
    },
  },
  {
    id: 'look-08',
    number: 'LOOK 08 / 08',
    title: 'Subterranean Column Dress',
    collectionId: 'matrix-003',
    collectionName: 'CHRONO / MATRIX',
    category: 'Outerwear',
    silhouette: 'Strict architectural vertical column with radial pleats',
    fabric: 'Bonded acoustic felt and carbon thread',
    image: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    description:
      'Exemplifying the raw intersection of brutalist architecture and wearable sculptural form.',
    credits: {
      photographer: 'Elena Vance',
      styling: 'Kaelen Vance',
      model: 'Klara Ost',
    },
  },
];

export const STUDIO_PROCESS: StudioStep[] = [
  {
    step: '01',
    title: 'Architectural Volumetrics',
    description:
      'We model silhouettes in 3D computational software before touching fabric, testing cantilevered folds and gravity draping against human motion vectors.',
    image: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    detail: 'Digital Cloth Simulation & Gravity Studies',
  },
  {
    step: '02',
    title: 'Textile Formulation',
    description:
      'Partnering with specialized technical mills in Como and Kyoto to engineer fabrics that combine conductive filaments with luxury natural fibers.',
    image: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    detail: 'Responsive Polymer Weaves & Metallic Filaments',
  },
  {
    step: '03',
    title: 'Couture Hand Construction',
    description:
      'Every prototype is drafted and cut by hand in our Paris atelier. Laser precision meets bespoke tailoring to achieve knife-edge pleats that never soften.',
    image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    detail: 'Hand-Finished Seams & Bonded Interfaces',
  },
  {
    step: '04',
    title: 'Atmospheric Environmental Testing',
    description:
      'Garments are stress-tested across thermal variations, simulated wind tunnels, and low-light environments to verify sculptural silhouette retention.',
    image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    detail: 'Wind & Shadow Chamber Validation',
  },
];

export const SELECTED_WORKS: SelectedWork[] = [
  {
    id: 'work-1',
    title: 'AFTER THE STATIC',
    category: 'Campaign',
    year: 2026,
    client: 'ATELIER NØIR Global',
    image: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    description:
      'The definitive AW26 campaign exploring stillness, monumental scale, and monolithic drapes in concrete subterranean Paris.',
    role: 'Creative Direction & Garment Production',
  },
  {
    id: 'work-2',
    title: 'THE ARCHITECT OF SHADOWS',
    category: 'Editorial',
    year: 2026,
    client: 'Vogue Scandinavia & Avant Monograph',
    image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    description:
      'An 18-page feature on the revival of heavy monolithic outerwear and protective architectural fashion in Nordic winter.',
    role: 'Styling, Wardrobe & Production Design',
  },
  {
    id: 'work-3',
    title: 'LUMAFLEX KINETIC SUIT',
    category: 'Collaboration',
    year: 2025,
    client: 'Kyoto Textile Engineering Institute',
    image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    description:
      'Developing responsive biometric conductive garments that merge traditional high-collar silk embroidery with bio-feedback loops.',
    role: 'Costume Architecture & Hardware Integration',
  },
  {
    id: 'work-4',
    title: 'NOCTURNE CAPE MONOGRAPH',
    category: 'Art Direction',
    year: 2025,
    client: 'Venice Biennale Architecture Pavilion',
    image: '/public/assets/aistudio/image_71628699.png',
    description:
      'Site-specific installation exploring wearable architecture as the smallest habitable room in urban hyper-density.',
    role: 'Spatial Design & Headpiece Fabrication',
  },
  {
    id: 'work-5',
    title: 'HEXAMATRIX WEAVE LAB',
    category: 'Styling',
    year: 2025,
    client: 'Dazed & Confused Digital Issue',
    image: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    description:
      'Visual study of micro-relief textile textures catching directional studio lighting at 1200x magnification.',
    role: 'Macro Cinematography & Textile Styling',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-1',
    slug: 'the-architecture-of-garments',
    title: 'The Architecture of Garments: Why Fabric Must Learn from Monoliths',
    category: 'Philosophy',
    date: 'October 14, 2026',
    readTime: '6 min read',
    excerpt:
      'We examine how the brutalist forms of Marcel Breuer and Zaha Hadid inform the cantilevered folds of our Autumn-Winter 2026 collection.',
    heroImage: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    author: 'Kaelen Vance, Creative Director',
    quote: 'A garment is not a flat canvas wrapped on a cylinder. It is an inhabited structure with its own tectonic tension.',
    content: [
      'In traditional dressmaking, garments yield obediently to the body, conforming to conventional anatomy. At ATELIER NØIR, we propose an inverted dialogue: what if the garment establishes its own architectural space, inviting the body to inhabit it?',
      'Drawing direct inspiration from brutalist monoliths—concrete walls angled to catch low winter sun, deep recessed portals that swallow ambient noise—our latest patterns introduce rigid interior stays and weighted cathedral hemlines.',
      'When the wearer moves, the cloth does not merely ripple; it articulates like hinged stone. The silhouette commands three meters of surrounding space, asserting quiet sovereignty in an increasingly crowded physical world.',
    ],
  },
  {
    id: 'journal-2',
    slug: 'beyond-synthetic-conductive-threads',
    title: 'Beyond Synthetic: The Renaissance of Conductive Embroidery',
    category: 'Material Exploration',
    date: 'September 28, 2026',
    readTime: '5 min read',
    excerpt:
      'Inside our collaboration with Japanese gold-wire artisans to create wearable circuitry disguised as 18th-century court embroidery.',
    heroImage: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    author: 'Dr. Mira Chen, Head of Materials',
    quote: 'True technological luxury is indistinguishable from archaic magic.',
    content: [
      'For decades, wearable technology was synonymous with silicone straps, blinking indicators, and fragile screens. It looked alien, synthetic, and ephemeral.',
      'Our material research lab took the opposite approach: looking back to the gold bullion embroidery of ecclesiastical vestments and military uniforms of the 1700s. By substituting pure silver and carbon filament into the core of silk floss, we achieved full electrical conductivity with zero compromise on drape, hand-feel, and longevity.',
      'In the LumaFlex series, these embroidered pathways contour precisely along the wearer’s spine and collarbone, conducting ambient kinetic warmth without a single visible cable.',
    ],
  },
  {
    id: 'journal-3',
    slug: 'after-the-static-field-notes',
    title: 'After the Static: Notes from Sub-Level VII',
    category: 'Campaign Notes',
    date: 'August 19, 2026',
    readTime: '4 min read',
    excerpt:
      'Photographer Elena Vance documents 72 hours of subterranean shooting in Paris, exploring heavy drapes amidst raw concrete.',
    heroImage: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    author: 'Elena Vance, Lead Photographer',
    quote: 'In total darkness, you begin to see how black is not a single color, but an infinite spectrum of textures.',
    content: [
      'The shoot took place 30 meters beneath the streets of Paris in a decommissioned concrete subterranean reservoir. There was no natural daylight. Every ray was carved with narrow collimated fresnel lamps.',
      'What emerged was an extraordinary interplay between the rough texture of sixty-year-old poured concrete and the fluid density of our carbon-bonded wool cloaks.',
      'The resulting campaign stands as a testament to restraint: four silhouettes, pure monochrome grading, and the unmistakable weight of human presence in a quiet future.',
    ],
  },
];
