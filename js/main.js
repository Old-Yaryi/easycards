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