export const setFooterYear = () => {
  const yearNode = document.querySelector('#js-footer-year');

  if (!yearNode) {
    console.error(new ReferenceError('Элемент "#js-footer-year" не найден.'));

    return;
  }

  yearNode.textContent = new Date()
    .getFullYear()
    .toString();
};
