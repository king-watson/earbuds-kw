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

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);


     
      const titleElement = document.createElement('h2');  
      titleElement.textContent = infoBox.title;
      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;
      selected.appendChild(titleElement);
      selected.appendChild(textElement);

 const imageElement = document.createElement('img'); 
    imageElement.src = infoBox.image; 
    selected.appendChild(imageElement); 



    });
  }


   function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
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

(() => {
    console.log("IIFE Called");

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 218;

    const images = [];
    const buds = {
        frame: 0
    }

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `images/scrolling-earbuds${(i+1).toString().padStart(3, '0')}.webp`;
        images.push(img);
    }

    console.log(images);
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

(() => {

    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor() {
<<<<<<< Updated upstream
        // console.log(slider.value);
=======
>>>>>>> Stashed changes
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);
})();
