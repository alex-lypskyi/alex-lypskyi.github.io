// task 1
// Написать функцию, которая будет возвращать строку в которой будут все классы элмента через пробел
const classNames = ['firstClass', 'secondClass', 'thirdClass'];
function getClassName(classNames) {
    const gap = ' ';
    let result1 = '';
    for (let i=0; i < classNames.length; i++) {
        if (i !== 0) {
            result1 += gap;
        }
        result1 += classNames[i];
        // if (i !== classNames.length -1) {
        //     result1 += gap;
        // }
    }
    return result1;
}
// console.log(getClassName(classNames));
console.log('task1', getClassName(classNames) === 'firstClass secondClass thirdClass'); // true
const classNames2 = ['firstClass', 'secondClass', 'thirdClass'];
const result2 = classNames2.join(' ');
console.log(result2);

// task 2
// удаляет класс из строки
function removeClass(className, removedClass) {
    const removeClassArr = [];
    for (i=0; i < className.length; i++) {
        if (className[i] !== removedClass && className[i] !== ' ') {
            removeClassArr.push(className[i]);
        }
    }
    // console.log(removeClassArr.join(' '))
    return removeClassArr.join(' ');
}
console.log('task2', removeClass('t g m', 'g') === 't m');
console.log('task2', removeClass('t k m', 'g') === 't k m');
console.log('task2', removeClass('t g g m', 'g') === 't m');

// task 3
// добавить класс в строку
function addClass(className, addedClass) {
    const classNameFilter = [];
    for (let i=0; i < className.length; i++) {
        if (className[i] !== addedClass && className[i] !== ' ') {
            classNameFilter.push(className[i]);
        }
    }
    const result = (classNameFilter.concat(addedClass)).join(' ');
    // console.log(classNameFilter, result)
    return result;
}
console.log('task3', addClass('a b', 'c') === 'a b c' );
console.log('task3', addClass('a b c', 'c') === 'a b c' );

// task 4
// добавить класс, если его нет в строке и удалить, если он там есть
function toggleClass(className, toggledClass) {
    let result;
    const classNameFilter = [];
    for (let i=0; i < className.length; i++) {
        if (className[i] !== toggledClass && className[i] !== ' ') {
            classNameFilter.push(className[i]);
        }
        if (className[i] === toggledClass) {
            result = classNameFilter;
        }
    }
    if (result !== undefined) {
        // console.log(classNameFilter.join(' '));
        return classNameFilter.join(' ');
    }
    else {
        // console.log(className.concat(' ' + toggledClass));
        return className.concat(' ' + toggledClass);
    }
}
console.log('task 4', toggleClass('a b c', 'b') === 'a c');
console.log('task 4', toggleClass('a c', 'b') === 'a c b');

// task 5
// функция формирования классов из объекта
// Ключами обьекта, являются имена классов, значениями булевые true/false
// если стоит true, то класс добавляется к строке, если false, то не добавляется
// Object.keys, Object.values, Object.entries, for in
function cn(className, classObj) {
    let str = '';
    for (let prop in classObj) {
        if (classObj[prop]) {
            str += prop;
        }
    }
    let result = '';
    for (let i=0; i < str.length; i++) {
        if (!className.includes(str[i])) {
            result = result + ' ' + str[i];
        }
    }
    // console.log(className + result)
    return className + result;
}
console.log('task 5', cn('a b', { c: true, d: false, e: true }) === 'a b c e');
console.log('task 5', cn('a b', { c: false, d: false, e: true, b: true }) === 'a b e');

// task 6
// сформировать массив состоящий из elementsCount элементов
// первый и второй элемент этого массива передаются
// каждый следующий элемент получается путем суммы двух предидущих
function fib(firstElement, lastElement, elementsCount = 10) {
    let result = [firstElement, lastElement];
    if (elementsCount <= result.length) {
        result.length = elementsCount;
        // return result;
    }
    for (let i=2; i < elementsCount; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    return result;
}

console.log('task 6', fib(1, 1, 10).join(',') === [1, 1, 2, 3, 5, 8, 13, 21, 34, 55].join(','));
console.log('task 6', fib(2, 4, 4).join(',') === [2, 4, 6, 10].join(','));

// task 7
// Найти произведение элементов массива
function mult(arr) {
    return arr.reduce((a,b) => a*b);
}
console.log('task 7', mult([1, 2, 3, 1]) === 1*2*3*1 );
console.log('task 7', mult([1, 3, 3, 5]) === 1*3*3*5 );