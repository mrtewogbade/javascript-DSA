// Given a non-empty, singly linked list with head node head, return a middle node of linked list. If there are two middle nodes, return the second middle node.

/*
Example:

Input: [1, 2, 3, 4, 5]

Output: Node 3 from this list (Seralization: [3, 4, 5]) 
The returned node has value 3. (The judge's serialization of this node is [3, 4, 5].

Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.val = 5, and ans.next.next.next = NULL.
*/

const middleNode = function(head){
	let fast = head;
	let slow - head;

	while(fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;

	}

	return slow;

	};

