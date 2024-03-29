import HashMap from "./hashMap";

const hashTest = new HashMap();

const test = hashTest.hash("hello");

console.log(test);

hashTest.set("key", "value");

console.log(hashTest.buckets);

console.log(hashTest.get("key"));

console.log(hashTest.has("key"));
console.log(hashTest.has("notkey"));

hashTest.set("test", "123");
hashTest.set("testing", "345");
console.log(hashTest.buckets);

console.log(hashTest.remove("testing"));
console.log(hashTest.remove("apple"));
console.log(hashTest.buckets);

console.log(hashTest.length());

console.log(hashTest.keys());
console.log(hashTest.values());
console.log(hashTest.entries());

hashTest.clear();
console.log(hashTest.buckets);