// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(42 - blocks); 
}

function distanceFromHqInFeet(blocks) {
    return Math.abs(42 - blocks) * 264;
}

function distanceTravelledInFeet(from, to) {
    return Math.abs(to - from) * 264;
}

function calculatesFarePrice(start, destination) {
    
    let fare;

    if ((Math.abs(destination - start)) * 264 <= 400) { 
        fare = 0;
        }
        else if ((Math.abs(destination - start) * 264) < 2000 > 0 ) {
          fare =((Math.abs(destination - start) * 264) - 400) * .02;
       }
        else if  ((Math.abs(destination - start) * 264) < 2500 > 0) {
            fare = 1 * 25;
        }
        else if ((Math.abs(destination - start) * 264) > 2500) {
             fare = 'cannot travel that far'
        }

      return fare      
    }