const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
const colorSelect = document.getElementById('color-select');
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function addToCart() {
  var color = document.getElementById("colorSelector").value;
  var size = document.getElementById("size-select").value;
  var quantity = document.getElementById("quantity").value;
  alert('Embrace Sideboard added to cart.');
}


function slideImage() {
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

const colorBoxes = document.querySelectorAll('.color-box');

colorBoxes.forEach(box => {
  box.addEventListener('click', () => {

    colorBoxes.forEach(box => {
      box.classList.remove('selected');
    });

    box.classList.add('selected');
  });
});


window.addEventListener('resize', slideImage);