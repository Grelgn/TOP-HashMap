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
		const hashCode = this.hash(key);
		this.buckets[hashCode] = value;
	}

	get(key) {
		const hashCode = this.hash(key);
		return this.buckets[hashCode];
	}

	has(key) {
		const hashCode = this.hash(key);
		return this.buckets[hashCode] != null;
	}

	remove(key) {
		if (this.has(key)) {
			const hashCode = this.hash(key);
			this.buckets[hashCode] = null;
			return true;
		}
		return false;
	}

	length() {
		let length = 0;
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] != null) length++;
		}
		return length;
	}

	clear() {
		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = null;
		}
	}
}
