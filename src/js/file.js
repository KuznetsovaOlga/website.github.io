function shiftLeft() {
const boxes = document.querySelectorAll(".box");
const tmpNode = boxes[0];
boxes[0].className = "box move-out-from-left";
 
setTimeout(function() {
    if (boxes.length > 5) {
        tmpNode.classList.add("box--hide");
        boxes[5].className = "box move-to-position5-from-left";
    }

    boxes[1].className = "box move-to-position1-from-left";
    boxes[2].className = "box move-to-position2-from-left";
    boxes[3].className = "box move-to-position3-from-left";
    boxes[4].className = "box move-to-position4-from-left";
    boxes[0].remove();
    document.querySelector(".screenshots-menu").appendChild(tmpNode);

}, 500);
}

function shiftRight() {
const boxes = document.querySelectorAll(".box");
boxes[4].className = "box move-out-from-right";

setTimeout(function() {
    const noOfCards = boxes.length;

    if (noOfCards > 4) {
        boxes[4].className = "box box--hide";
    }

    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();

    let parentObj = document.querySelector(".screenshots-menu");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "box move-to-position1-from-right";
    boxes[0].className = "box move-to-position2-from-right";
    boxes[1].className = "box move-to-position3-from-right";
    boxes[2].className = "box move-to-position4-from-right";
    boxes[3].className = "box move-to-position5-from-right";
}, 500);

}

    /* конфигурация */
let width = 372; // ширина картинки
let count = 3; // видимое количество изображений

let list = document.querySelector('.testimonials-block-list');
let listElems = list.querySelectorAll('.testimonials-block-item');

let position = 0; // положение ленты прокрутки

document.querySelector('.testimonials_button-arrow--left').onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

  document.querySelector('.testimonials__button-arrow--right').onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };