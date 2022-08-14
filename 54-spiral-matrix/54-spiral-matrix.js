/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let x, y, num;
    x = y = num = 0;
    x --;
    let direction = 1;
    let xLen = matrix[0].length;
    let yLen = matrix.length;
    console.log(xLen);
    console.log(yLen);
    let length = xLen* yLen;
    
    if(xLen == 1){
        return [...matrix];
    }
    
    while(1){
        for(let i = 0; i < xLen; i++){
            x += direction;
            console.log(matrix[y][x]);
            result.push(matrix[y][x]);
        }
        xLen --;
        console.log(result);
        
        for(let j = 0; j < yLen - 1; j++){
            y += direction;
            console.log(`y는 ${y}, x는 ${x}`);
            console.log(matrix[y][x]);

            result.push(matrix[y][x]);
        }
        yLen --;
        console.log(result);

        if(yLen == 0 || result.length == length) break;
        
        direction *= -1;
        console.log(result);

    }
    console.log(result);
    return result;
};



// [00 01 02]
// [10 11 12]
// [20 21 22]

// 00 01 02 12 22 21 20 10 11


// [00 01 02 03]
// [10 11 12 13]
// [20 21 22 23]
// [30 31 32 33]

// 00 01 02 03 13 23 33 32 31 30 20 10 11 12 22 21
    
// [00 01 02 03]
// [10 11 12 13]
// [20 21 22 23]
    
// 00 01 02 03 13 23 22 21 20 10 11 12
// matrix.length => 3, matrix[0].length => 4