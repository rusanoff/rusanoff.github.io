export const toggleGlitch = () => {
  const glitch = document.querySelector('.title--glitch') as HTMLElement;

  function addGlitch() {
    if (!glitch.classList.contains('title--glitch')) {
      glitch.classList.add('title--glitch');
    }

    setTimeout(removeGlitch, 2000);
  }

  function removeGlitch() {
    if (glitch.classList.contains('title--glitch')) {
      glitch.classList.remove('title--glitch');
    }

    setTimeout(addGlitch, 3000);
  }

  addGlitch();
};
