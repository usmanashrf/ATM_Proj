import inquirer from "inquirer";
import cashWithdrawal from "./TransactionsOptions/cashWithdrawal.js";
import AddAmount from "./TransactionsOptions/deposits.js";
async function doAnotherTransaction() {
    const moreTransaction = await inquirer.prompt([{
            name: "otherTran",
            type: "list",
            choices: ['Yes', 'No'],
            message: "Do You want another transaction"
        }]);
    return moreTransaction;
}
async function mainScreen(balance) {
    do {
        const answer = await inquirer.prompt([{
                name: "mainOption",
                type: "list",
                choices: [
                    'Balance Inquiry',
                    'Cash Withdrawal',
                    'Deposits',
                    'Bill payments',
                    'Transfer',
                    'Exit'
                ],
                message: "Please select a transaction"
            }]);
        switch (answer.mainOption) {
            case "Balance Inquiry":
                console.log(`your balance is: ${balance}`);
                break;
            case "Cash Withdrawal":
                balance = await cashWithdrawal(balance);
                break;
            case "Deposits":
                balance = await AddAmount(balance);
                break;
            case "Bill payments":
                console.log("Bill");
                break;
            case "Transfer":
                console.log("transfer");
            case "Exit":
                anotherTrans = "No";
                break;
        }
        if (answer.mainOption !== "Exit") {
            var anotherTrans = await doAnotherTransaction();
        }
    } while (anotherTrans.otherTran == "Yes");
}
export default mainScreen;
