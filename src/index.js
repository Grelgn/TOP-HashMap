import HashMap from "./hashMap";

const hashTest = new HashMap();

const test = hashTest.hash("hello");

console.log(test);

hashTest.set("key", "value");

console.log(hashTest.buckets);

console.log(hashTest.get("key"));