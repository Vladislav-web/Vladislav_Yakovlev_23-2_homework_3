const circle = document.querySelector(".circle");

let count = 0;
let topPos = 0;

const circleMove = () => {
  if (count <= 1300 && topPos == 0) {
    count += 10;
    circle.style.left = `${count}px`; 
    setTimeout(circleMove, 10);
  } else if (count >= 600 && topPos <= 600) {
    topPos += 10;
    circle.style.top = `${topPos}px`; 
    setTimeout(circleMove, 10);
  } else if (topPos >= 500 && count != 0) {
    count -= 10;
    circle.style.left = `${count}px`;
    setTimeout(circleMove, 10);
  } else if (count == 0) {
    topPos -= 10;
    circle.style.top = `${topPos}px`;
    setTimeout(circleMove, 10);
  }
};
circleMove();
