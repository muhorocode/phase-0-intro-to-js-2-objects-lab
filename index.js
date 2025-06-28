// Write your solution in this file!
const employee={
    name:'Elijah',
    streetAddress:'77 location',
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newEmployee={...obj}
    newEmployee[key]=value  
    return newEmployee
}
console.log(updateEmployeeWithKeyAndValue(employee,'name','kamau'))

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value
    return obj;
};console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','claire'))

function deleteFromEmployeeByKey(obj,key){
   const newEmployee={...obj}
   delete newEmployee[key]
   return newEmployee
};console.log(deleteFromEmployeeByKey(employee))

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key]
    return obj
};console.log(destructivelyDeleteFromEmployeeByKey(employee,'streetAddress'))