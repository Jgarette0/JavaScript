// let numbers = [1,2,3,4,5];
// // let total = 0;

// // for(i = 0; i < numbers.length; i++){
// //   total = total + numbers[i];
// // }

// let total2 = numbers.reduce((total, number)=> total + number, 1);

// console.log(total2);

function app(state,output){
  R.compose(
    append(view(state)),
    clear()
  )(output);
 }

 
 function fullName ({firstname, lastname, age}){
  return `${firstname} ${lastname} (${age})`;
 }
 
 function view(state){
 const add = R.flip(append);
 return state
    .filter(person=>person.age > 30)
    .map(human)
    .reduce(add, tag('div'));

 }

 const human = (person,index) => {
    return R.compose(
      append(todo(fullName(person))),
      addClass('todo'),
      attr('id', index)
    )(tag('div'));
 }
app(
 Object.freeze([{
  firstname: 'Jilian Garette',
  lastname: 'Abangan',
  age: '20'
 },
 {
  firstname: 'William',
  lastname: 'Morthy',
  age: '34'
 },
 {
  firstname: 'Georgia Hira',
  lastname: 'Burlin',
  age: '43'
 },
 {
  firstname: 'Jenard Brint',
  lastname: 'Fint',
  age: '28'
 }]),
 get('list'),
);