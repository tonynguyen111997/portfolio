//Checks if section is in view
export const isElementInViewport = id => {
  const elem = document.getElementById(id);
  const rect = elem.getBoundingClientRect();
  return (rect.top - (window.innerHeight * (1/2)) < 0 && rect.bottom > 0)
}