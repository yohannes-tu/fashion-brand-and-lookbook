export interface LookItem {
  id: string;
  number: string;
  title: string;
  collectionId: string;
  collectionName: string;
  category: 'Outerwear' | 'Bodysuit' | 'Architectural' | 'Tailoring' | 'Accessories';
  silhouette: string;
  fabric: string;
  image: string;
  description: string;
  credits: {
    photographer: string;
    styling: string;
    model: string;
  };
}

export interface Collection {
  id: string;
  number: string;
  title: string;
  season: string;
  year: number;
  category: 'Autumn-Winter' | 'Spring-Summer' | 'Experimental / Concept';
  heroImage: string;
  secondaryImage: string;
  detailImage: string;
  tagline: string;
  description: string;
  statement: string;
  materials: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function filterLooks(looks: LookItem[], activeCollectionId: string): LookItem[] {
  if (!activeCollectionId || activeCollectionId === 'all') {
    return looks;
  }
  return looks.filter((item) => item.collectionId === activeCollectionId);
}

export function filterCollections(
  collections: Collection[],
  categoryFilter: string,
  sortOrder: 'newest' | 'oldest' = 'newest'
): Collection[] {
  let filtered = collections;
  if (categoryFilter && categoryFilter !== 'all') {
    filtered = collections.filter((c) => c.category === categoryFilter);
  }

  return [...filtered].sort((a, b) => {
    if (sortOrder === 'newest') {
      return b.year - a.year || b.number.localeCompare(a.number);
    }
    return a.year - b.year || a.number.localeCompare(b.number);
  });
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.inquiryType || data.inquiryType.trim() === '') {
    errors.inquiryType = 'Please select an inquiry type.';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Please provide a project or inquiry subject.';
  }

  if (!data.message || data.message.trim().length < 15) {
    errors.message = 'Please provide details regarding your inquiry (minimum 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
