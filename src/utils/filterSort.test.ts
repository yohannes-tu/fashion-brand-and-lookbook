import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterLooks,
  filterCollections,
  validateInquiryForm,
  LookItem,
  Collection,
  InquiryFormData,
} from './filterSort';

const mockLooks: LookItem[] = [
  {
    id: 'l1',
    number: '01/08',
    title: 'Nocturne Cloak',
    collectionId: 'nocturne-001',
    collectionName: 'NOCTURNE / 001',
    category: 'Outerwear',
    silhouette: 'Oversized draped architectural hood',
    fabric: 'Dense structural gabardine with matte resin finish',
    image: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    description: 'A study in high volume and monolithic shadow.',
    credits: { photographer: 'Elena Vance', styling: 'Kaelen Thorne', model: 'Aria Cross' },
  },
  {
    id: 'l2',
    number: '02/08',
    title: 'LumaFlex Bodysuit',
    collectionId: 'kinetic-002',
    collectionName: 'KINETIC / 002',
    category: 'Bodysuit',
    silhouette: 'Ergonomic high-neck second skin',
    fabric: 'Conductive elastane with silver thread matrix',
    image: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    description: 'Engineered with intelligent fabric that contours to body mechanics.',
    credits: { photographer: 'Soren Lind', styling: 'Kaelen Thorne', model: 'Nyx Sato' },
  },
];

const mockCollections: Collection[] = [
  {
    id: 'c1',
    number: '001',
    title: 'NOCTURNE',
    season: 'Autumn-Winter',
    year: 2026,
    category: 'Autumn-Winter',
    heroImage: '/src/assets/images/lookbook_sculptural_cloak_1793173119635.jpg',
    secondaryImage: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    detailImage: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    tagline: 'A study in silhouette and shadow',
    description: 'Monolithic outerwear crafted for cold atmospheric worlds.',
    statement: 'Form follows darkness.',
    materials: ['Wool Gabardine', 'Polymer Film', 'Conductive Mesh'],
  },
  {
    id: 'c2',
    number: '002',
    title: 'KINETIC',
    season: 'Spring-Summer',
    year: 2025,
    category: 'Spring-Summer',
    heroImage: '/src/assets/images/lookbook_lumaflex_coat_1793173120263.jpg',
    secondaryImage: '/src/assets/images/campaign_after_static_1793173119977.jpg',
    detailImage: '/src/assets/images/studio_textile_detail_1793173120792.jpg',
    tagline: 'Adaptive motion and biometric contour',
    description: 'Dynamic silhouettes that flex with the kinetic body.',
    statement: 'Movement made structural.',
    materials: ['Intelligent Elastane', 'Silver Weave'],
  },
];

test('filterLooks returns all when collectionId is "all" or empty', () => {
  assert.equal(filterLooks(mockLooks, 'all').length, 2);
  assert.equal(filterLooks(mockLooks, '').length, 2);
});

test('filterLooks filters correctly by collectionId', () => {
  const filtered = filterLooks(mockLooks, 'nocturne-001');
  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].id, 'l1');
});

test('filterCollections filters by category and sorts newest first', () => {
  const allNewest = filterCollections(mockCollections, 'all', 'newest');
  assert.equal(allNewest[0].year, 2026);

  const allOldest = filterCollections(mockCollections, 'all', 'oldest');
  assert.equal(allOldest[0].year, 2025);

  const filteredSummer = filterCollections(mockCollections, 'Spring-Summer', 'newest');
  assert.equal(filteredSummer.length, 1);
  assert.equal(filteredSummer[0].title, 'KINETIC');
});

test('validateInquiryForm catches invalid and valid inputs accurately', () => {
  const invalidData: InquiryFormData = {
    name: 'A',
    email: 'bad-email',
    inquiryType: '',
    subject: '',
    message: 'short',
  };

  const resInvalid = validateInquiryForm(invalidData);
  assert.equal(resInvalid.isValid, false);
  assert.ok(resInvalid.errors.name);
  assert.ok(resInvalid.errors.email);
  assert.ok(resInvalid.errors.inquiryType);
  assert.ok(resInvalid.errors.subject);
  assert.ok(resInvalid.errors.message);

  const validData: InquiryFormData = {
    name: 'Yohannes Tulu',
    email: 'yohannes@example.com',
    inquiryType: 'Editorial commission',
    subject: 'Paris Fashion Week Editorial Feature',
    message: 'We would love to feature ATELIER NØIR in our upcoming autumn editorial monograph.',
  };

  const resValid = validateInquiryForm(validData);
  assert.equal(resValid.isValid, true);
  assert.equal(Object.keys(resValid.errors).length, 0);
});
