export const getValue = (key: string): string | undefined => {
  return localStorage.getItem(key) || undefined;
};

export const setValue = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeValue = (key: string) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
