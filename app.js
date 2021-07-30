//Hadith In An Array
let secretMessage = ['WHO', 'is', 'not', 'merciful', 'to', 'the', 'get', 'easily', 'the', 'first', 'time,', 'will', 'not', 'be', 'shown', 'mercy', 'to', 'by', 'Allah.', 'Prophet', 'Muhammad', 'May Peace', 'Be Upon', 'His'];

secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to');
secretMessage.push('Him.');
secretMessage[7] ='right';
secretMessage.shift();
secretMessage.unshift('Whoever');
secretMessage.splice(6,5,'creation');
console.log(secretMessage.join(' '));