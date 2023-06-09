const faqBlock = document.querySelectorAll('.faq-block__request');
for (item of faqBlock) {
  item.addEventListener('click' ,function(){
    if(this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      for(el of faqBlock) {
        el.classList.remove('active')
        this.classList.add('active')
      }
    }
  })
}
const popupTrigger = document.querySelector (".button-select.bank");
const popupBlock = document.querySelector('.popup')
const popupClosed = document.querySelector('.popup-inner__close')
popupTrigger.addEventListener('click', function(){
  popupBlock.classList.add('active')
  
})
popupClosed.addEventListener('click', function(){
  popupBlock.classList.toggle('active')
})
popupBlock.addEventListener('click', function(e){
  let actMenu = document.querySelector(".popup-item");
   if (e.target !== actMenu && !actMenu.contains(e.target)) {                    
     popupBlock.classList.remove('active');
  }
  console.log('preved')
})


