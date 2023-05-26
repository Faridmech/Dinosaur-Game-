import {getCustomProperty, incrementCustomProperty, setCustomProperty} from "./updateCustoomProperty.js";

const groundElem = document.querySelectorAll("[data-ground]");

const SPEED = 0.09

export function setupGround(){
    setCustomProperty(groundElem[0], "--left", 0)
    setCustomProperty(groundElem[1], "--left", 300)
}
console.log(groundElem[1]);

export function updateGround(delta, speedScale){
  groundElem.forEach(ground =>{
    incrementCustomProperty(ground, "--left", delta  *  SPEED * -1)

    if (getCustomProperty(ground, "--left") <= -300) {

        
      incrementCustomProperty(ground, "--left", 600)
       console.log(5 * 2);
      
    }
  })
}