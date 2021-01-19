let energLevel =0;  // max=3

function  updateUI(pEnergyLevel, pBatteryContainer){
    pBatteryContainer.className = `energy-level-${pEnergyLevel}`;

}

const increasingElemet = document.querySelector("#increase-handle");
const  decreasingElemet = document.querySelector("#decrease-handle");
const batteryElement = document.querySelector("#battery");


increasingElemet.addEventListener("click", function(eventBilgisi){
    if(energLevel < 3){
        energLevel++;
    }
    updateUI(energLevel, batteryElement);
});    



decreasingElemet.addEventListener("click", function(eventBilgisi){
    if(energLevel > 0){
        energLevel--;
    }
    
    updateUI(energLevel, batteryElement);
});
