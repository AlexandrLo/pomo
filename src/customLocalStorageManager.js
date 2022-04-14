const hasSupport = () => typeof Storage !== "undefined";

const storageKey = "pomo-color-mode";

export const customLocalStorageManager = {
  get(init) {
    if (!hasSupport()) return init;
    const value = localStorage.getItem(storageKey);
    return value ?? init;
  },
  set(value) {
    if (!hasSupport()) return;
    localStorage.setItem(storageKey, value);
  },
  type: "localStorage",
};
