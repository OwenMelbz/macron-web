export const fire = (name, detail) => document.dispatchEvent(new CustomEvent(name, {
    detail,
}))

export const off = (name, callback) => document.removeEventListener(name, callback);

export const on = (name, callback) => document.addEventListener(name, callback);

