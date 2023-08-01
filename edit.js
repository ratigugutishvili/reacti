// const text = "გამარჯობა გიორგი როგორ ხარ"
// const subtext = "გიორგი"
// const funct = (text,subtext) =>{
//     var rame = text.indexOf(subtext)
//     if (rame < 0) {
//         return true
//     }
//     else{
//         return false
//     }
// }

// var text = 'alex'
// var reversed = ''
// for (let index = text.length; index > 0; index--) {
//     const element = text[index];
//     reversed += element
    
// }
// console.log(reversed);


const text = 'გამარჯობა'
var luwi = ''
for (let i = 1; i < text.length; i++) {
    const element = text[i];
    if (i%2 == 0) {
        luwi += element
    }
}

console.log(luwi);