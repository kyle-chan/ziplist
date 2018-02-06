const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(list1In, list2In) {
  const result = [];
  for (let i = 0; i < list1In.length; i++) {
    result.push(list1In[i]);
    result.push(list2In[i]);
  }
  return result;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1In, list2In) {
  return _.flatten(_.zip(list1In, list2In));
}

console.log(zipListTheSimpleWay(list1, list2));
