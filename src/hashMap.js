export default class HashMap {
    constructor() {
        this.bucketSize = 16;
        
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
}