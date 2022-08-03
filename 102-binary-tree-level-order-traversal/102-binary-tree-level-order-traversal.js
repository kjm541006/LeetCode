/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    console.log(root);
    if(!root) return [];
    
    let queue = [root];
    let answer = [];
    
    while(queue.length !== 0){
        const qLength = queue.length;
        
        let currentLevel = [];
        for(let i = 0; i < qLength; i++){
            const current = queue.shift();
            
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
            currentLevel.push(current.val);
        }
        answer.push(currentLevel);
    }
    return answer;
}