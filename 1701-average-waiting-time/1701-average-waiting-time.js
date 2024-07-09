/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
  let startTime = customers[0][0];
  let waitTime = 0;

  for(let i = 0; i < customers.length; i++){
    if(startTime < customers[i][0]){
      startTime = customers[i][0];
    }
    startTime += customers[i][1];
    waitTime += (startTime - customers[i][0]);
  }

  return waitTime / customers.length;
    
};