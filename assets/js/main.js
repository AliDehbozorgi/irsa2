AOS.init();
let Data = [
  { id: 1, src: "assets/img/banner-1.jpg" },
  { id: 2, src: "assets/img/banner-2.jpg" },
  { id: 3, src: "assets/img/banner-3.jpg" },
  { id: 4, src: "assets/img/banner-4.jpg" },
];

let ax = document.querySelector(".slider");
setInterval(nextimage, 5000);

let index = 0;
function nextimage() {
  index++;
  if (index >= 4) {
    index = 0;
  }
  ax.setAttribute("src", Data[index].src);
}

//responsive
if (this.window.innerWidth < 500) {
  let Data = [
    { id: 1, src: "assets/img/small-1.jpg" },
    { id: 2, src: "assets/img/small-2.jpg" },
    { id: 3, src: "assets/img/small-3.jpg" },
    { id: 4, src: "assets/img/small-4.jpg" },
  ];

  let ax = document.querySelector(".slider");
  setInterval(nextimage, 5000);

  let index = 0;
  function nextimage() {
    index++;
    if (index >= 4) {
      index = 0;
    }
    ax.setAttribute("src", Data[index].src);
    console.log("ax");
  }
}
else {
  let Data = [
    { id: 1, src: "assets/img/banner-1.jpg" },
    { id: 2, src: "assets/img/banner-2.jpg" },
    { id: 3, src: "assets/img/banner-3.jpg" },
    { id: 4, src: "assets/img/banner-4.jpg" },
  ];

  let ax = document.querySelector(".slider");
  setInterval(nextimage, 5000);

  let index = 0;
  function nextimage() {
    index++;
    if (index >= 4) {
      index = 0;
    }
    ax.setAttribute("src", Data[index].src);
  }
}

let navbardark = document.querySelector(".navbar-dk");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 200) {
    navbardark.classList.add("dark");
  } else navbardark.classList.remove("dark");
  console.log("navbardark");
});

$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: false,
  margin: 7,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    800: {
      items: 2,
    },
    900: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// $('.custom1').owlCarousel({
//   animateOut: 'slideOutDown',
//   animateIn: 'flipInX',
//   items:1,
//   margin:30,
//   stagePadding:30,
//   smartSpeed:450,
//   autoplay:true,
//   autoplayTimeout:1000,
// });








