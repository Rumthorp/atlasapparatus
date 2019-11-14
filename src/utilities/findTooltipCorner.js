const findTooltipCorner = (mouseY, mouseX) => {
  let corner = '';
  const height = window.innerHeight;
  const width = window.innerWidth;
  mouseY >= height / 2 ? corner += 't' : corner += 'b';
  mouseX >= width / 2 ? corner += 'l' : corner += 'r';
  return corner;
};

export default findTooltipCorner;
