export const normalizeTags = (tags: string): string[] => {
  const normalizedTags = tags
    .split(' ')
    .filter((item: string) => item !== '')
    .map((tag: string) => {
      if (tag.includes('#')) {
        return tag.trim();
      } else {
        return `#${tag.trim()}`;
      }
    });

  return normalizedTags;
};
