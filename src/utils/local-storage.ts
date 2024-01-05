export const getLSItem = (key: string) => {
  return localStorage.getItem(key);
};

export const setLSItems = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeLSItem = (key: string): void => {
  localStorage.removeItem(key);
};
