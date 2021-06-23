// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


function maximumWealth(accounts) {
    totalWealth = []
    accounts.forEach(acc => {
        total = 0
        acc.forEach(wealth => {
            total = total + wealth
        })
        totalWealth.push(total)
    })
    return Math.max(...totalWealth)
}; 

let accounts1 = [[1,2,3],[3,2,1]]
let accounts2 = [[1,5],[7,3],[3,5]]
let accounts3 = [[2,8,7],[7,1,3],[1,9,5]]

console.log(maximumWealth(accounts1))
console.log(maximumWealth(accounts2))
console.log(maximumWealth(accounts3))