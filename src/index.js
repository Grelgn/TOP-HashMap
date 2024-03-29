import HashMap from "./hashMap";

const hashTest = new HashMap();

// const test = hashTest.hash("hello");

// console.log(test);

// hashTest.set("key", "value");

// console.log(hashTest.buckets);

// console.log(hashTest.get("key"));

// console.log(hashTest.has("key"));
// console.log(hashTest.has("notkey"));

// hashTest.set("test", "123");
// hashTest.set("testing", "345");
// console.log(hashTest.buckets);

// console.log(hashTest.remove("testing"));
// console.log(hashTest.remove("apple"));
// console.log(hashTest.buckets);

// console.log(hashTest.length());

// console.log(hashTest.keys());
// console.log(hashTest.values());
// console.log(hashTest.entries());

// hashTest.clear();
// console.log(hashTest.buckets);

hashTest.set("one", "1");
hashTest.set("two", "2");
hashTest.set("three", "3");
hashTest.set("four", "4");
hashTest.set("five", "5");
hashTest.set("six", "6");
hashTest.set("seven", "7");
hashTest.set("eight", "8");
hashTest.set("nine", "9");
hashTest.set("ten", "10");

console.log(hashTest.buckets);

console.log(hashTest.get("five"));
console.log(hashTest.get("six"));
console.log(hashTest.get("nine"));

console.log(hashTest.has("nine"));
console.log(hashTest.has("ten"));
console.log(hashTest.has("eleven"));
console.log(hashTest.has("nineteen"));

// console.log(hashTest.remove("five"));
console.log(hashTest.remove("six"));
// console.log(hashTest.remove("nine"));
console.log(hashTest.buckets);

console.log(hashTest.length());

// hashTest.clear();
// console.log(hashTest.buckets);

console.log(hashTest.keys());
console.log(hashTest.values());
console.log(hashTest.entries());
