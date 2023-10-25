// Write your solution in this file!
const employee = {
    name: "Jame",
    streetAddress: "365, A1 Block"
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
        ...employeeObj, 
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const clone = Object.assign({}, obj);
    delete clone[key];
    return clone
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}