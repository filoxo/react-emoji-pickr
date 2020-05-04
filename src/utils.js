export const toId = (str) => str.replace(/\W/g, "_");

export const toPx = (v) => `${v}px`;

export const getNthSibling = (elem, index) => {
  if (!elem || index === 0) return elem;
  if (Math.sign(index) === 1) {
    return index > 1
      ? getNthSibling(elem.nextElementSibling, index - 1)
      : elem.nextElementSibling;
  } else {
    return index < -1
      ? getNthSibling(elem.previousElementSibling, index + 1)
      : elem.previousElementSibling;
  }
};
