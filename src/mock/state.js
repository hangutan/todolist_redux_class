
let listTasks = localStorage.getItem('listTasks');

if(!listTasks){
  listTasks = [];
}else{
  listTasks = JSON.parse(listTasks);
}

export default listTasks;

// export default [
//   {
//     id: uuidv4(),
//     name: 'ZBB ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c',
//     level: 1 // Medium
//   },
//   {
//     id: uuidv4(),
//     name: 'DEF Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c',
//     level: 2 // High
//   },
//   {
//     id: uuidv4(),
//     name: 'MPG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c',
//     level: 0 // Small
//   },
//   {
//     id: uuidv4(),
//     name: 'ABC ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c',
//     level: 0 // Small
//   },
// ]