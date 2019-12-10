
export default function isValidPhone(value){
    return value && value.match(/\d/g).length===10;
}