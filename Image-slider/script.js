const initSlider = () => {
    const imageList = document.querySelector('.images');
    const slideButtons = document.querySelectorAll('.slide-button');
  
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        let direction =button.id==="left-button"? -1:1;
        const slideAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: slideAmount, behavior: "smooth" });
      });
    });
  };
  
  window.addEventListener("load", initSlider);
  