import HashMap from "./hashMap";

const hashTest = new HashMap();

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

hashTest.set("six", "6");
hashTest.set("eleven", "11");
hashTest.set("twelve", "12");
hashTest.set("thirteen", "13");
hashTest.set("fourteen", "14");
hashTest.set("fifteen", "15");
hashTest.set("sixteen", "16");

console.log(hashTest.buckets);
console.log(hashTest.entries());

hashTest.set("seventeen", "17");
hashTest.set("eighteen", "18");
hashTest.set("nineteen", "19");
hashTest.set("twenty", "20");
hashTest.set("twentyone", "21");
hashTest.set("twentytwo", "22");
hashTest.set("twentythree", "23");
hashTest.set("twentyfour", "24");

console.log(hashTest.buckets);
console.log(hashTest.entries());
