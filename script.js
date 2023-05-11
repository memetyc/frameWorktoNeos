
// NAVBAR İÇİN
// Kullanacağım dom yapılarının çağırılması

const collapseItem = document.querySelector('.collapse-item')
const navbar = document.querySelector('.navbar-logo')
const menuBtn = document.querySelector('.collapse')

if(navbar){
    let media = navbar.offsetWidth + collapseItem.offsetWidth + 100
    if(media < 475){
        media = 475
    }
    // eleman sayısına göre bir media quary belirledik  ! Mediaquarylist
    const mediaQuery = window.matchMedia(`(max-width: ${media}px)`)
   
    
    
    // Belirlenen media quary'e göre navbar responsive fonksyonun oluşturulması
    function responsiveNav(e) {
        if (e.matches) {
            collapseItem.classList.add('hidden-collapse')
            menuBtn.style.display='block'
        } else{
            collapseItem.classList.remove('hidden-collapse')
            menuBtn.style.display='none'
            if(collapseItem.classList.contains('active')){
                collapseItem.classList.remove('active')
            }
        }
    }   
    // fonksyonun çağırılması
    window.addEventListener('resize',function(){
        responsiveNav(mediaQuery) 
        
    })
    //  icona tıkladığımızda collapse yapısının görünür olması için active clasının eklenmesi
    menuBtn.addEventListener('click',function(){
        collapseItem.classList.toggle('active')
    })
    // Tıklanan yer eğer collapse menu yada icon değilse collapse kısmının tekrar kapanması için
    // composedPath bir dizi döndüyor tıkladığımız şeyden html e kadar
    document.addEventListener('click',(e)=>{
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(collapseItem)){
            collapseItem.classList.remove('active')
        }
    })  
    // fonksyon sayfa ilk açıldığındada çağırılıyor
    responsiveNav(mediaQuery)
    
}
  // İNPUT-GROUP İÇİN
const inputGrup = document.querySelectorAll('.input-group');
const fromDetails = document.querySelectorAll('.form-details ')
const fromLastChild = document.querySelectorAll('.input-group');
inputGrup.forEach(input =>{
    let childrenx = [...input.children]
    childrenx.forEach(childx =>{
        let islemYap = childx.className.includes('form-details')
        if(islemYap){
            fromDetails.forEach(formGroup =>{
                formGroup.style.width = '100%'
            })
        }
    })
    if (childrenx.length >= 2) { 
        childrenx[0].style.borderRadius = '10px 0px 0px 10px';
        childrenx[1].style.borderRadius = '0px'
        if(childrenx[2]){
          childrenx[2].style.borderRadius='0px'
        }
        if(childrenx[3]){
          childrenx[3].style.borderRadius='0px'
        }
        childrenx[childrenx.length-1].style.borderRadius = '0px 10px 10px 0px'
        
    }else{
        childrenx[0].style.borderRadius = '10px'
    }
});

// DROPDOWN İÇİN

const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
dropdownButtons.forEach((dropdownButton) => {
  const dropdownContainer = dropdownButton.parentNode;
  const dropdownListContainer = dropdownContainer.querySelector('.dropdown-menu');
  const arrowIcon = dropdownContainer.querySelector('.dropdown-arrowicon svg path');
  const menuLinks = dropdownContainer.querySelectorAll('.dropdown-menu a');
 

  dropdownButton.addEventListener('click', function() {
    dropdownContainer.classList.toggle('open');
  });

  document.addEventListener('click', function(event) {
    if (!dropdownContainer.contains(event.target)) {
      dropdownContainer.classList.remove('open');
    }
  });


  dropdownListContainer.style.backgroundColor = getComputedStyle(dropdownButton).backgroundColor;

  

  menuLinks.forEach(link => {
    link.style.color = arrowIcon.getAttribute('fill');
  });
});

// SELECT İÇİN

const selectGroup = document.querySelectorAll('.select-group');
const formDetails = document.querySelectorAll('.form-details');

selectGroup.forEach(group => {
  const childrenx = [...group.children];
  
  if (childrenx.length >= 2) {
    childrenx[0].style.borderRadius = '10px 0px 0px 10px';
    childrenx[childrenx.length - 1].style.borderRadius = '0px 10px 10px 0px';
  } else {
    childrenx[0].style.borderRadius = '10px';
  }
  
  const select = group.querySelector('select');
  const button = group.querySelector('button');
  
  
  
  formDetails.forEach(form => {
    form.style.width = '100%';
  });
});



  // ----- CAROUSEL -----

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("caros")
    );
    if (e.target.classList.contains("firstes")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("caros");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("caros");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('caros');
    }
  }
});


// ----- CAROUSEL2 -----
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('activite');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('activite');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('activite');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

// ---- CAROUSEL3 ----
const gap = 50;
const carousel = document.getElementById("slider-carousel"),
  content = document.getElementById("slider-content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

    
