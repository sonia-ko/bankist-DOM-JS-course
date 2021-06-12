const helloWorldContainer = document.querySelector('.container');
const h1El = document.querySelector('h1');
const boxContainer = document.querySelector('.boxes');
const boxes = document.querySelectorAll('.box');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const elements = [helloWorldContainer, h1El, ...boxes, boxContainer];

for (const el of elements) {
  el.addEventListener('click', function () {
    console.log(el);
    console.log(el.getBoundingClientRect());
  });
}

const moveContainer = document.querySelector('.movecontainer');
const point = document.querySelector('.point');

document.addEventListener('keydown', function (e) {
  const pointLeft = getComputedStyle(point).left;
  const pointTop = getComputedStyle(point).top;

  if (e.key === 'ArrowUp') {
    point.style.top = Number.parseFloat(pointTop, 10) - 30 + 'px';
  } else if (e.key === 'ArrowDown') {
    point.style.top = Number.parseFloat(pointTop, 10) + 30 + 'px';
  } else if (e.key === 'ArrowRight') {
    point.style.left = Number.parseFloat(pointLeft, 10) + 30 + 'px';
  } else if (e.key === 'ArrowLeft') {
    point.style.left = Number.parseFloat(pointLeft, 10) - 30 + 'px';
  }
});

const alertFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    alert('Stop!');
    point.style.top = 0;
    point.style.left = 0;
  }
};
const pointObj = {
  root: moveContainer,
  threshold: 1,
};
const pointObserver = new IntersectionObserver(alertFunction, pointObj);
pointObserver.observe(point);
