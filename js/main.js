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




// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.