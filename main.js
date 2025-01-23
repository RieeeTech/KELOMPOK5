let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow', window.scrollY > 0);
});



var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
});
var swiper = new Swiper(".film", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});

var copy = document.querySelector(".row").cloneNode(true);
      document.querySelector(".con").appendChild(copy);




      const texts = [
        "DEVELOPER",
        "YOUTUBER",
        "DESIGNER"
    ]
    
    let speed = 100;
    
    const textElements = document.querySelector(".typewriter-text")
    
    let textIndex = 0;
    let charcterIndex = 0;
    
    function typeWriter() {
        if(charcterIndex < texts[textIndex].length){
            textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
            charcterIndex++;
            setTimeout(typeWriter, speed); 
        }
        else{
            setTimeout(eraseText, 1000)
        }
    }
    
    function eraseText() {
        if(textElements.innerHTML.length > 0){
            textElements.innerHTML = textElements.innerHTML.slice(0,-1)
            setTimeout(eraseText, 50)
        }
        else{
            textIndex = (textIndex + 1) % texts.length;
            charcterIndex = 0;
            setTimeout(typeWriter,500)
        }
    }
    
    window.onload = typeWriter;