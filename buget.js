let intialIncome = 7000;
let interstRate = .03;
let monthlyCost = 1500;
let raiseRate = .04;

let monthlyInvestment = intialIncome - monthlyCost;

const compound = (years, rate, principal, monthly, period, raise) => {
    console.log(`
    Years: ${years}
    Rate: ${rate}
    Starting Investment: ${principal}
    Monthly Investment: ${monthly}
    Compounds per Year: ${period}
    Running Total: ${principal}
    `);
    let total = principal;


    for (let j = 0; j < years; j++) {
        monthly += monthly*raise
        console.log("Monthly Contribution Increased. New Rate is: " + monthly)
        for (let i = 0; i < period; i++) {

            total += monthly
            let interst = total * rate
            console.log("interst: "+ interst)
            total += interst
            console.log(`Month ${i+1} total: ${total}`)

        }
    }
}


compound(10, interstRate, 5000, monthlyInvestment, 12, raiseRate)