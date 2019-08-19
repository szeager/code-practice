const DataLoader = require('dataloader');
const _ = require('lodash');

async function getData(keys) {
  // 模拟数据
  const data = [
    { id: 'a', name: 'abc' },
    { id: 'b', name: 'bcd' },
    { id: 'c', name: 'cdf' }
  ];
  const ret = [];
  // 数据匹配
  keys.map(i => {
    data.map(a => {
      if (a.id === i) {
        ret.push(a);
      }
    })
  });

  // 模拟MongoDB 返回结果按id排序
  ret.sort((a, b) => { return a.id > b.id ? 1 : -1 })
  return ret;
}

async function main() {
  const data_loader = new DataLoader(keys => getData(keys));
  // IDList
  let id_list = ['b', 'c', 'a'];
  // 查找
  const row1 = await data_loader.loadMany(id_list);
  // 返回结果
  console.log('row1 b c a =>', row1);
  // 第二次IDList
  id_list = ['c', 'a'];
  // 第二次查找
  const row2 = await data_loader.loadMany(id_list);
  // 第二次返回结果
  console.log('row2 c a =>', row2);
}

main();
