const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});

for(var i = 0 ;i <= 2 ;i++){
  setTimeout( () => {console.log(i)} , i )
  }

  const slides = document.querySelectorAll('.slide');
  const circles = document.querySelectorAll('.circle');
  let currentSlide = 0;
  let prevTime = new Date().getTime() - 5000;
  function showSlide() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        // slide.style.transform = 'translateX(100)';
        slide.classList.add('active');
        circles[index].classList.add('active');
      } else {
        // slide.style.transform = 'translateX(-100%)';
        slide.classList.remove('active');
        circles[index].classList.remove('active');
      }
    });
  }
  
  function nextSlide() {
    if(new Date().getTime() - prevTime >= 3000){
      prevTime = new Date().getTime();
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }
    
  }
  
  function goToSlide(index) {
    currentSlide = index;
    showSlide();
  }
  
  setInterval(nextSlide, 3000);
  
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      prevTime = new Date().getTime();
      goToSlide(index);
    });
  });
  
  showSlide(); // Show initial slide
  