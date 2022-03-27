a = [2,5,8,10]
rls = require('readline-sync')

ab = rls.question('Qual a data desejada?')

console.log(a.filter(a =>(a == ab)))