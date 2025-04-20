AOS.init();

let navbardark = document.querySelector(".navbar-dk");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 200) {
    navbardark.classList.add("dark");
  } else navbardark.classList.remove("dark");
  console.log("navbardark");
});



$('.your-slider-class').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true, // Pause autoplay when hovered
  centerMode: false, // Enable center mode for sliding
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
});



// داده‌های عکس‌ها
// داده‌های عکس‌ها
const Data = [
  { id: 1, src: "assets/img/eyebrow/banner-2.jpg" },
  { id: 2, src: "assets/img/eyebrow/banner-1.jpg" },
  { id: 3, src: "assets/img/eyebrow/banner-3.jpg" },
  { id: 4, src: "assets/img/eyebrow/banner-4.jpg" },
];

const smallData = [
  { id: 1, src: "assets/img/small-2.jpg" },
  { id: 2, src: "assets/img/small-1.jpg" },
  { id: 3, src: "assets/img/small-3.jpg" },
  { id: 4, src: "assets/img/small-4.jpg" },
];

// انتخاب المنت اسلایدر
const slider = document.querySelector(".slider");
if (!slider) {
  console.error("المنت اسلایدر پیدا نشد!");
}

let interval; // برای نگهداری تایمر
let index = 0; // ایندکس عکس فعلی

// تابع برای تغییر عکس
function nextImage(data) {
  index = (index + 1) % data.length; // به ایندکس بعدی برو و اگر به انتها رسیدی، از اول شروع کن
  slider.setAttribute("src", data[index].src);
  console.log("عکس تغییر کرد به:", data[index].src); // برای دیباگ
}

// تابع برای شروع اسلایدر
function startSlider(data) {
  if (interval) {
    clearInterval(interval); // اگر تایمر قبلی وجود دارد، آن را پاک کن
  }
  nextImage(data); // بلافاصله عکس مناسب را نمایش بده
  interval = setInterval(() => nextImage(data), 3000); // تایمر جدید را شروع کن
}

// تابع برای بررسی اندازه صفحه و تنظیم اسلایدر
function handleResize() {
  if (window.innerWidth < 900) {
    console.log("صفحه کوچک است، استفاده از smallData");
    startSlider(smallData);
  } else {
    console.log("صفحه بزرگ است، استفاده از Data");
    startSlider(Data);
  }
}

// شروع اولیه اسلایدر
handleResize();

// گوش دادن به رویداد تغییر اندازه صفحه
window.addEventListener("resize", handleResize);





// dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// بستن منو با کلیک بیرون از آن
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.getElementById("myDropdown").style.display = "none";
  }
});



