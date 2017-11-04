// Code your solution in this file!
function distanceFromHqInBlocks (pickup_block){
  return Math.abs(pickup_block - 42);
}

function distanceFromHqInFeet (pickup_block){
  return distanceFromHqInBlocks(pickup_block) * 264;
}