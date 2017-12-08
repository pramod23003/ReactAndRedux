/* eslint-disable import/prefer-default-export */
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`,
  }));
}
