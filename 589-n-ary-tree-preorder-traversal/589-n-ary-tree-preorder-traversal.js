/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, list = []) {
    console.log(root);
    if(root === null) return list;
    list.push(root.val);
    for(let children of root.children){
        preorder(children, list)
    }
    return list;
};