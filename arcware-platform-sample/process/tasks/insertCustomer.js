const process = require("bpm/v4/process");
const customersDao = require("arcware-platform-sample/data/customersDao");

let customer = getCustomerFromContext();

customersDao.insert(customer);

function getCustomerFromContext() {
    let execution = process.getExecutionContext();
    let customer = process.getVariable(execution.getId(), "selectedCustomer");
    return JSON.parse(customer);
}