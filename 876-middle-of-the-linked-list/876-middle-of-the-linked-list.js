/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    function getCount(){
        let temp = head;
        let count = 0;
        while(temp != null){
            count++;
            temp = temp.next;
        }
        return count;
    }
    
    let length = getCount(head);
    
    let count = Math.floor(length / 2);
    
    let temp = head;

    for(let i = 0; i < count; i++){
        temp = temp.next;
    }
    
    return temp;
};