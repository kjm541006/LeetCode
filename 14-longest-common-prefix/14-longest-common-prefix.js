/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = "";
    let lenArr = strs.map((x) => x.length);
    let minLen = Math.min(...lenArr);
    let first = strs[0][0];    
    if(first == undefined) return "";
    // console.log(strs);
    // console.log(`first : ${first}`);
    // console.log(minLen);
    
    for(let i = 0; i < minLen; i++){
        // 1. 0번째 인덱스 첫번째 문자 확인 (let first)
        // console.log(first);
        // 2. first와 나머지 인덱스의 첫번째 문자 체크
        for(let j of strs){
            if(j.startsWith(first)){
                // console.log('pass');
                continue;
            }else{
                // console.log('fail');
                // console.log(first.substring(0, first.length - 1));
                return first.substring(0, first.length - 1);
            }
            
        }

        // 3. 2에서 같다면 first에 그 다음 문자 추가 후 위 과정 반복
        if(!strs[0][1 + i]) {
            return first;
        }else{
            first += strs[0][1 + i];
        }
        
    }
    return first.substring(0, first.length - 1);
};