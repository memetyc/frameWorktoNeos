
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
  const button = dropdownContainer.querySelector('.btn');

  dropdownButton.addEventListener('click', function() {
    dropdownContainer.classList.toggle('open');
  });

  document.addEventListener('click', function(event) {
    if (!dropdownContainer.contains(event.target)) {
      dropdownContainer.classList.remove('open');
    }
  });


  dropdownListContainer.style.backgroundColor = getComputedStyle(button).backgroundColor;

  arrowIcon.setAttribute('fill', arrowIcon.getAttribute('fill'));

  menuLinks.forEach(link => {
    link.style.color = arrowIcon.getAttribute('fill');
  });
});




  
    
