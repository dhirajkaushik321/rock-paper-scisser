
const status=(first,second)=>{
    const combination=first[0].toLowerCase() +second[0].toLowerCase()
switch(combination){
    case 'rs':
        return 1;
    case 'pr':
        return 1;
    case 'sp':
        return 1;
    default:
        return 0;
}
}
module.exports ={status}
