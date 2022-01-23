let currentImageIndex = 0;

function fillSlider(evHTML: string) { 
    const sliderElement = document.getElementById("Slider");
    const existingHTML = sliderElement.innerHTML;
    sliderElement.innerHTML = evHTML+existingHTML;
}

function updateCurrentImageIndex(value: number) {
  const slider = document.querySelector('#Slider')
  const images = slider.querySelectorAll('img')
  const maxImageIndex = images.length - 1

  currentImageIndex += value;
  if (currentImageIndex < 0) currentImageIndex = maxImageIndex;
  else if (currentImageIndex > maxImageIndex) currentImageIndex = 0;
  images.forEach(image => {
    image.style.transform = `translateX(${-100 * currentImageIndex}%)`
  })
}

(<any>window).updateCurrentImageIndex = updateCurrentImageIndex;
(<any>window).fillSlider = fillSlider;
