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
    const apText = document.querySelector('.ap-text'); // ap 100 class
    const hpText = document.querySelector('.hp-text'); // hp 100 class
    const apMeter = document.getElementById('ap-meter'); // id
    const hpMeter = document.getElementById('hp-meter'); //id 
    const fungus = document.querySelector('.freaky-fungus');
    const attackButtons = document.querySelectorAll('.attack-btn'); //all attack buttons 
    
    
    // 🧠 Remember
    // - Handle events that ->

    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

