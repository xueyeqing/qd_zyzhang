/**********Set有序集合 Start*************/
// 检查元素
const set = new Set(
    [1, 2, 3, 4, 5, 6]
);

set.has(2); // true
set.has(9); // false

// 添加元素
set.add(11).add(12);

// 删除元素
set.delete(3);

// 清空集合
// set.clear();

// 遍历元素
set.forEach(item => {
    // console.log(item);/*  */
});

for (const val of set) {
    console.log(val)
}

// console.log(set);

/**********Set有序集合 End*************/