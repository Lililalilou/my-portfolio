export function sanitize(string) {
  let result = string.toLowerCase().replace(' ', '-').replace('é', 'e');
  return result;
};
