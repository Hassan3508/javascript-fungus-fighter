
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let ap= 100;
let hp = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    // const apText = document.querySelector('.ap-text'); // ap 100 class
    // const hpText = document.querySelector('.hp-text'); // hp 100 class
    // const apMeter = document.getElementById('ap-meter'); // id
    // const hpMeter = document.getElementById('hp-meter'); //id 
    // const fungus = document.querySelector('.freaky-fungus');
    //const attackButtons = document.querySelectorAll('.attack-btn'); //all attack buttons 
    
    
    // 🧠 Remember
    // - Handle events that ->

   function arcaneAttack(event) {
  if (ap > 0) {
    ap -= 12;   // AP cost for arcane attack
    hp -= 14;   // HP damage for arcane attack
    if (ap < 0) ap = 0; // Ensure AP doesn't go negative
    if (hp < 0) hp = 0; // Ensure HP doesn't go negative

    }
}
    
   function arcaneAttack(event) {
  if (ap > 0) {
    ap -= 23;   // AP cost for arcane attack
    hp -= 9;   // HP damage for arcane attack
    if (ap < 0) ap = 0; // Ensure AP doesn't go negative
    if (hp < 0) hp = 0; // Ensure HP doesn't go negative

    updateState();

  }
}
   function dragonButton(event) {
  if (ap > 0) {
    ap -= 38;   // AP cost for dragon attack
    hp -= 47;   // HP damage for dragon attack
    if (ap < 0) ap = 0; // Ensure AP doesn't go negative
    if (hp < 0) hp = 0; // Ensure HP doesn't go negative

   }
}

   function starFireButton(event) {
  if (ap > 0) {
    ap -= 33;   // AP cost for starfire attack
    hp -= 25;   // HP damage for starfire attack
    if (ap < 0) ap = 0; // Ensure AP doesn't go negative
    if (hp < 0) hp = 0; // Ensure HP doesn't go negative


   }
}

    // - Updates state which is ->

function updateState() {
  const apText = document.querySelector('.ap-text');
  const hpText = document.querySelector('.hp-text');
  const apMeter = document.getElementById('ap-meter');
  const hpMeter = document.getElementById('hp-meter');
  
  apText.textContent = `${ap} AP`;
  hpText.textContent = `${hp} HP`;
  apMeter.value = ap;
  hpMeter.value = hp;
    // - Rendered to the DOM
}

// Function to check win/loss conditions
function checkGameOver() {
    const fungus = document.querySelector('.freaky-fungus');
    
    if (hp === 0) {
      fungus.classList.replace('walk'); 
      fungus.classList.add('walk'); 
      

      alert("You win! The Freaky Fungus is dead.");
    } else if (ap === 0) {
      fungus.classList.replace('walk');
      fungus.classList.add('walk');
      

      alert("Humanity is doomed! The Freaky Fungus wins.");
    }
  }

onReady()
}