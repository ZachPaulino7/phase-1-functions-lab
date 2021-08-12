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
    
    const eq = (Math.abs(destination - start)) * 264
    let fare;

    if ( eq <= 400) { 
        fare = 0;
        }
        else if (eq < 2000 > 0 ) {
          fare =(eq - 400) * .02;
       }
        else if  (eq < 2500 > 0) {
            fare = 1 * 25;
        }
        else if (eq > 2500) {
             fare = 'cannot travel that far';
        }

      return fare      
    }