import { Page } from "../pages.enum";

const enumKeys = <string[]>Object.values(Page)
  .filter(value => typeof value === 'string');

export const links = enumKeys.map(key => {
  const url = `/${key === Page[Page.HOME] ? '' : key.toLowerCase()}`;
  // Title case
  const text = `${key[0].toUpperCase()}${key.substring(1).toLowerCase()}`

  return { url, text };
});
