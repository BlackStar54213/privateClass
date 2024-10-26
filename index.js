// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();

//     const listitem = document.createElement('li');
//     listitem.innerHTML = document.getElementById('names').value;
//     document.querySelector('ul').appendChild(listitem);

//     document.getElementById('fire').setAttribute('class', "flame")
// })

// $(document).ready(function funct1() {
//     setInterval(function (){
//     $('#bbt').carousel('prev')
//     }, 5000)

// })


// $(document).ready(function () {
//     $('#caro').carousel();
//     $('#bbt').on('click', function () {
//         $('#caro').carousel('prev')
//     })
// })

// $(document).read(function () {
//     $('#caro').carousel();
//     $('#btt').on('click', function () {
//         $('#caro').carousel('next')
//     })
// })




// $(document).ready(function () {
//     let currentIndex = 0;
//     const items = $('#slides');
//     const itemCount = items.length;

//     function showSlide(index) {
//         const newTransformValue = -index * 100;
//         $('.carousel-inner').css('transform', `translateX(${newTransformValue}%)`);
//     }

//     $('#bto').click(function () {
//         currentIndex = (currentIndex + 1) % itemCount;
//         showSlide(currentIndex);
//     });

//     $('#btn').click(function () {
//         currentIndex = (currentIndex - 1 + itemCount) % itemCount;
//         showSlide(currentIndex);
//     });


// })



let slide1 = $('#slide1');
let slide2 = $('#slide2');
let slide3 = $('#slide3');
slide2.hide();
slide3.hide();
let counter = 0;
$('#bto').on('click', () => {
    if (counter == 0) {
        slide1.hide();
        slide2.show(); counter++
    } else if (counter == 1) {
        slide2.hide();
        slide3.show(); counter++
    } else if (counter == 2) {
        slide1.show();
        slide3.hide();
        counter = 0
    } else {
        slide3.show();
        slide1.hide();
        counter = 0
    }


})
$('#btn').on('click', () => {
    console.log('foe')
    if (counter == 0) {
        slide1.hide();
        slide3.show(); counter = 2;
    } else if (counter == 1) {
        slide2.hide();
        slide1.show(); counter--
    } else if (counter == 2) {
        slide3.hide();
        slide2.show();
        counter--
    } else {
        slide3.show();
        slide1.hide();
        counter = 0
    }
});




