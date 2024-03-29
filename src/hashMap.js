import LinkedList from "./linkedList";

export default class HashMap {
	constructor() {
		this.bucketSize = 16;
		this.buckets = new Array(this.bucketSize).fill(null);
		this.loadFactor = 0.75;
	}

	hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
			hashCode %= this.bucketSize;
		}

		return hashCode;
	}

	set(key, value) {
		this.growBuckets();
		const hashCode = this.hash(key);
		if (this.buckets[hashCode] != null) {
			this.buckets[hashCode].append(key, value);
		} else this.buckets[hashCode] = new LinkedList(key, value);
	}

	growBuckets() {
		let fullBuckets = this.bucketSize;
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] == null) {
				fullBuckets--;
			}
		}
		if (fullBuckets >= this.bucketSize * this.loadFactor) {
			const entries = this.entries();

			this.bucketSize *= 2;
			this.buckets = new Array(this.bucketSize).fill(null);

			entries.forEach((element) => {
				this.set(element[0], element[1]);
			});
		}
	}

	get(key) {
		const hashCode = this.hash(key);
		return this.buckets[hashCode].find(key);
	}

	has(key) {
		const hashCode = this.hash(key);
		if (this.buckets[hashCode] == null) return false;
		return this.buckets[hashCode].contains(key);
	}

	remove(key) {
		if (this.has(key)) {
			const hashCode = this.hash(key);
			let currentNode = this.buckets[hashCode].head;
			const arr = [];
			while (currentNode !== null) {
				arr.push([currentNode.key, currentNode.value]);
				currentNode = currentNode.nextNode;
			}
			console.log(arr);

			const newArr = arr.filter((element) => element[0] !== key);
			console.log(newArr);

			this.buckets[hashCode] = null;
			newArr.forEach((element) => {
				this.set(element[0], element[1]);
			});

			return true;
		}
		return false;
	}

	length() {
		let length = 0;
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] !== null) {
				let currentNode = this.buckets[i].head;
				while (currentNode !== null) {
					length++;
					currentNode = currentNode.nextNode;
				}
			}
		}
		return length;
	}

	clear() {
		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = null;
		}
	}

	keys() {
		const arr = [];
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] != null) {
				let currentNode = this.buckets[i].head;
				while (currentNode !== null) {
					arr.push(currentNode.key);
					currentNode = currentNode.nextNode;
				}
			}
		}
		return arr;
	}

	values() {
		const arr = [];
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] != null) {
				let currentNode = this.buckets[i].head;
				while (currentNode !== null) {
					arr.push(currentNode.value);
					currentNode = currentNode.nextNode;
				}
			}
		}
		return arr;
	}

	entries() {
		const arr = [];
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] != null) {
				let currentNode = this.buckets[i].head;
				while (currentNode !== null) {
					arr.push([currentNode.key, currentNode.value]);
					currentNode = currentNode.nextNode;
				}
			}
		}
		return arr;
	}
}
