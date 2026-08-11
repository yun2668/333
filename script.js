const menuBtn=document.getElementById("menuBtn");
const mainNav=document.getElementById("mainNav");

if(menuBtn&&mainNav){
  menuBtn.addEventListener("click",()=>{
    const open=mainNav.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded",open?"true":"false");
    menuBtn.textContent=open?"✕":"☰";
  });

  mainNav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
      mainNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.textContent="☰";
    });
  });

  window.addEventListener("resize",()=>{
    if(window.innerWidth>760){
      mainNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.textContent="☰";
    }
  });
}

// 檢驗月份快速查詢
const monthSelect=document.getElementById("monthSelect");
const monthBtn=document.getElementById("monthBtn");
const monthResult=document.getElementById("monthResult");

if(monthSelect&&monthBtn&&monthResult){
  monthBtn.addEventListener("click",()=>{
    const month=Number(monthSelect.value);

    if(!month){
      monthResult.textContent="請先選擇行照原發照月份";
      return;
    }

    const previous=month===1?12:month-1;
    const next=month===12?1:month+1;

    monthResult.innerHTML=
      `原發照月份為 <strong>${month} 月</strong><br>`+
      `如果今年屬於你的排氣定檢年度，原則上可於 `+
      `<strong>${previous} 月、${month} 月、${next} 月</strong>辦理。`;
  });
}

// FAQ
document.querySelectorAll(".faq-item").forEach(item=>{
  const btn=item.querySelector(".faq-question");
  if(!btn)return;

  btn.addEventListener("click",()=>{
    const open=item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(other=>{
      other.classList.remove("active");
    });

    if(!open)item.classList.add("active");
  });
});

// 外部政府照片載入失敗時隱藏圖片，保留本地備援畫面
document.querySelectorAll(".remote-photo").forEach(image=>{
  image.addEventListener("error",()=>{
    image.style.display="none";
  });
});
