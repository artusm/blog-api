import slugify from 'slugify';

export const textToSlugUtil = (text: string) =>
  slugify(text, { lower: true, locale: 'pt', strict: true });
