(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Royal Fast Charging",
      text: "Powers up your earbuds at lightning speed, giving you hours of playtime in just minutes.",
      image: "images/lightning-boltz.jpg"
    },
    {
      title: "Clear Microphone",
      text: "Delivers crystal-clear voice pickup, so every command and call sounds flawless. Built for gamers who demand precision in every word.",
      image: "images/microphone1.jpg"
    },
    {
      title: "Memory Foam Earpiece",
      text: "Molds perfectly to your ears for all-day gaming comfort.",
    image: "images/comfortable.jpg"
    },
    {
      title: "Immersive 360 Audio",
      text: "Surrounds you in every direction. Hear every footstep, explosion, and whisper with pinpoint precision.",
image: "images/360.jpg"
    },
    {
      title: "Passive Noise Isolation",
      text: "Uses a snug, ergonomic design to block out noise naturally.",
      image: "images/noise-cancell.jpg"
    },
     {
      title: "Seamless Bluetooth",
      text: "Keeps your earbuds connected instantly and reliably.",
      image: "images/bluetooth.jpg"
    }
  ]

  //function

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
      // console.log(index+1);
      //selected will be the infobox on our page, eg.hotspot-1, hotspot-2 etc.
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);


      //lets create an h2
      const titleElement = document.createElement('h2');  
      //lets populate the h2
      titleElement.textContent = infoBox.title;

      //lets create a p
      const textElement = document.createElement('p');
      //lets populate the paragraph
      textElement.textContent = infoBox.text;

      //lets add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      //lets add the p to the selected hotspot
      selected.appendChild(textElement);

     


 const imageElement = document.createElement('img'); // create new img
    imageElement.src = infoBox.image; // set source
    selected.appendChild(imageElement); // add to the hotspot



    });
  }


   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

loadInfo();

})();

(() => {
    const menu = document.querySelector('#menu');
    const hamburger = document.querySelector('#hamburger');
    const closeButton = document.querySelector('#close');
    const menuLinks = document.querySelectorAll('#menu nav ul li a');


    function toggleMenu() {
        menu.classList.toggle('open');
        document.body.classList.toggle("no-scroll");
    }


    hamburger.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
})();


const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".shop-now-image");
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = "translateX(" + (-currentIndex * slideWidth) + "px)";
}

function handleNextClick() {
  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  updateCarousel();
}

function handlePrevClick() {
  if (currentIndex <= 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }
  updateCarousel();
}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);
window.addEventListener("resize", updateCarousel);

(() => {
    console.log("IIFE Called");

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    // Set this to the total number of frames you have
    const frameCount = 218;

    // Array to hold all images
    const images = [];

    // Object to hold current frame
    const buds = {
        frame: 0
    }

    // Populate the images array
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // Use your filename pattern
        img.src = `images/scrolling-earbuds${(i+1).toString().padStart(3, '0')}.webp`;
        images.push(img);
    }

    console.log(images);

    // Animate frame on scroll with GSAP
    gsap.to(buds, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: false
        },
        onUpdate: render
    });

    images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

})();
