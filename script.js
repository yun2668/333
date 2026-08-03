// ==============================
// 手機版導覽選單
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});


// 點選選單後自動關閉手機版選單
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navMenu.classList.remove("active");

  });

});


// ==============================
// FAQ 展開 / 收合
// ==============================

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

  question.addEventListener("click", function () {

    const faqItem =
      question.parentElement;

    faqItem.classList.toggle("active");

  });

});


// ==============================
// 回到頂端
// ==============================

const topBtn =
  document.getElementById("topBtn");

window.addEventListener("scroll", function () {

  if (window.scrollY > 400) {

    topBtn.classList.add("show");

  } else {

    topBtn.classList.remove("show");

  }

});


topBtn.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ==============================
// 年份自動更新
// ==============================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ==============================
// 範例按鈕
// ==============================

function showDemoAlert() {

  alert(
    "此功能目前為網站範例。\n\n" +
    "正式發布時，可連結至實際查詢系統或官方網站。"
  );

}