export const isTouchDevice = () => {
  return 'ontouchstart' in window || (window.PointerEvent && navigator.maxTouchPoints > 0);
};
