function mergeAlternately(word1:string,word2:string):string {
    let str = "";
    let str1 = 0;
    let str2 = 0;
    let i = 0;

    while (str1 < word1.length && str2 < word2.length) {
        if (i % 2 === 0){
            str += word1[str1];
            str1 += 1;
        } else {
            str += word2[str2];
            str2 += 1;
        }
 
        i += 1;
    }

    if (str1 < word1.length) str += word1.slice(str1);
    if (str2 < word2.length) str += word2.slice(str2);

    return str;
}

console.log(mergeAlternately("abc","pqr"));
console.log(mergeAlternately("ab","pqrs"));
console.log(mergeAlternately("abcd","pq"));
