(()=>{"use strict";let e=(new class{constructor(){this.bucketSize=16}hash(e){let t=0;for(let l=0;l<e.length;l++)t=31*t+e.charCodeAt(l);return t}}).hash("hello");console.log(e)})();