let counter = 0;
 
while (true) {

    counter++;

    const myWord = prompt('Enter breack or continue:');
    if (myWord === 'break') {
        break;
    } else if (myWord === 'continue') {
        continue;
    }

    alert(`Counter is: ${counter}`);
}















// const ageQuestion = confirm('Есть ли вам 18 лет?');
// if (ageQuestion) {
//     const timeGetUp = +prompt('Во сколько вы встаете?');
//     if (Number.isInteger(timeGetUp)) {
//         if (timeGetUp <= 0 || timeGetUp > 24) {
//             alert('Научись пользоваться часами!');
//         } else {
//             if (timeGetUp > 0 && timeGetUp <= 5) {
//                 alert('Очень рано');
//             } else if (timeGetUp > 5 && timeGetUp <= 8) {
//                 alert('Всё равно рано');
//             } else if (timeGetUp > 8 && timeGetUp <= 11) {
//                 alert('Нормально');
//             } else if (timeGetUp > 11 && timeGetUp <= 14) {
//                 alert('Слишком поздно');
//             } else {
//                 alert('Очень-очень поздно');
//             }
//         }
//     } else {
//         alert('некорректный ввод');
//     }
// } else {
//     alert('Вам запрещено проходить опрос');
// }
