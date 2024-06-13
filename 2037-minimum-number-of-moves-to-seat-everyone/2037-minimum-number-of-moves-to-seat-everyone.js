/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((x, y) => x - y);
  students.sort((x, y) => x - y);

  let answer = 0;

  for(let i = 0; i < seats.length; i++){
    answer += Math.abs(seats[i] - students[i]);
  }

  return answer;
    
};