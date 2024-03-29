import Node from "./node";

export default class LinkedList {
	constructor(key, value) {
		this.head = new Node(key, value);
	}

	append(key, value) {
		const newNode = new Node(key, value);
		if (this.head.nextNode === null) {
			this.head.nextNode = newNode;
			this.tail = newNode;
		} else {
			this.tail.nextNode = newNode;
			this.tail = newNode;
		}
	}

	find(key) {
		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentNode.key === key) {
				return currentNode.value;
			}
			currentNode = currentNode.nextNode;
		}
		return null;
	}

	contains(key) {
		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentNode.key === key) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}
}
