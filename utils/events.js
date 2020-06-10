export const fire = name => document.dispatchEvent(new Event(name))

export const off = (name, callback) => document.removeEventListener(name, callback);

export const on = (name, callback) => document.addEventListener(name, callback);

