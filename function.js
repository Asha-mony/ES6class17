// function sendMoneytoEmploye (salary,bonus){
//     const initialBonus = bonus || 0;
//     const total = salary + initialBonus;
//     console.log(total);
//     return total;
// }

// const returnedTotal = sendMoneytoEmploye(30000,15000);


function sendMoneytoEmploye(salary, bonus=0){
    const total = salary + bonus;
    console.log(total);
    return total;
}

const returnedTotal = sendMoneytoEmploye(30000,15000);
const salarywithTrasportation = returnedTotal + 3500;
