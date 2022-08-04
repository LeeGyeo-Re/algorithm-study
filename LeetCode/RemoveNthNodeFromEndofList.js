/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let result = new ListNode(-1, null);
    let tHead = head;
    
    let temp = result;
    let size = 0;
    let i = 0;
    
    while(tHead){
        size++;
        tHead = tHead.next;
    }
    
    while(head){
        if(i === size-n) head = head.next;
        if(!head) break;
        
        result.val = head.val;
        if(head.next && i !== size-2) result.next = new ListNode(-1, null);
        
        result = result.next;
        head = head.next;
        i++;
    }
    
    if(temp.val === -1) return null;
    return temp;
};
