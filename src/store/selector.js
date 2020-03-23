import { createSelector } from 'reselect';

const orderBySelector = state => state.orderBy;
const orderDirSelector = state => state.orderDir;
const listTaskSelector = state => state.listTasks;
const searchTextSelector = state => state.searchText;

const listTasksSortAndSearch = (listTasks, searchText, orderBy, orderDir) => {
  const newListTasks = listTasks.filter(task => {
    let nameLower = task.name.toLowerCase(),
      queryLower = searchText.toLowerCase();
    return nameLower.indexOf(queryLower) !== -1;
  })
  return newListTasks.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return orderDir === 'asc' ? -1 : 1;
    else if (a[orderBy] > b[orderBy]) return orderDir === 'asc' ? 1 : -1;
    return 0;
  })
}
const listTaskSortAndSearchSelector = createSelector(
  listTaskSelector,
  searchTextSelector,
  orderBySelector,
  orderDirSelector,
  listTasksSortAndSearch
)

export {
  searchTextSelector,
  listTaskSortAndSearchSelector
}