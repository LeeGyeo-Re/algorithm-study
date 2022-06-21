/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return solution(l1, l2)
};

var solution = function(l1, l2){
    let temp = 0;
    let listNode = new ListNode(0);
    const result = listNode;
    
    while(l1 || l2){
        let cal = result.val;
        if(l1) {
            cal += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            cal += l2.val;
            l2 = l2.next;
        }
        
        temp = cal > 9 ? 1 : 0;
        listNode.val = (cal > 9 ? cal-10 : cal);
        if(temp === 1 || (l1 || l2)){
            listNode.next = new ListNode(temp);
            listNode = listNode.next;
        }
            
        
    }
    return result;
}

