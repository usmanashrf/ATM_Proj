import users from "./Users.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    let answer = await inquirer.prompt([{
            name: "accountNumber",
            type: Number,
            message: "Enter your account number"
        },
        {
            name: "pin",
            type: Number,
            message: "Enter your pin code"
        }
    ]);
    let userExist = users.find(x => x.accountNumber == answer.accountNumber && x.pin == answer.pin);
    if (typeof userExist !== "undefined") {
        console.log(`Well come ${userExist.userName}...`);
        await mainScreen(userExist.balance);
    }
    else {
        console.log("Enter valid cridentials");
    }
}
export default login();
