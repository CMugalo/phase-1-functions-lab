// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 - distance;
  }
  return distance - 42;
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(distance) {
  distanceFromHqInBlocks();
  {
    if (distance < 42) {
      return (42 - distance) * 264;
    }
    return (distance - 42) * 264;
  }
}

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  }
  return (destination - start) * 264;
}

distanceTravelledInFeet(43, 48);

function calculatesFarePrice(start, destination) {
  if (destination > start) {
    if ((destination - start) * 264 < 400) {
      return 0;
    } else if ((destination - start) * 264 > 2000) {
      return 25;
    }
  }

  if (start > destination) {
    if ((start - destination) * 264 > 2500) {
      return "cannot travel that far";
    } else if ((start - destination) * 264 > 400) {
      return ((start - destination) * 264 - 400) * 0.02;
    }
  }
  calculatesFarePrice(43, 44);

  //   if ((start - destination) * 264 > 2500) {
  //     return "cannot travel that far";
  //   }

  //    else if ((destination - start) * -1 * 264 < 2000) {
  //     return ((destination - start) * -1 * 264 - 400) * 0.02;
  //   } // else if ((destination - start) * 264 > 2000) {
  // return 25;
  // }
  // return (destination - start) * 264;
}

// calculatesFarePrice(43, 44); // 264    //    -264   DONE
// calculatesFarePrice(34, 32); // -528   //     528 DONE
// calculatesFarePrice(50, 58); // 2,112  //     -2,112   DONE
// calculatesFarePrice(34, 24); // -2640  //    2640
