/**
 * Created by a1 on 18/5/24.
 */

 /**
  * 分配老师1（按规律分配）
  */
let teachers = [11,22,33,44,55,66,77]; //老师
let qindex =[2,1,2,3,4,2]; //题数 
let len = teachers.length; // 老师的个数
let start = 0; // 索引
for(let i=0;i<qindex.length;i++){ // 循环题目
    let data = [];
    for(let j=start;j<start+qindex[i];j++){ 
       var ind = j % len ; // 取余
       data.push(teachers[ind]);
    }
    start = ind+1;
    // console.log(data);
}
console.log('---------------------------------------')
/**
  * 分配老师2（按规律分配）
  */
var index = 0;
for (let i = 0; i < qindex.length; i++) {
    let t1 = [];
    for (let j = 0; j < qindex[i]; j++) {
        if(index == len) {
            index =0;
            t1.push(teachers[index]);
        }else{
            t1.push(teachers[index]);
        }
        index++;
    }
    // console.log(t1);
} 

/**
  * 数组合并
  */
let x1 = {a:[1,2,4,5],b: [12, 22, 44, 55]}
let x2 = [...x1.a,...x1.b]
// console.log(x2)

/*
 * 对象合并 去掉重复的
 */
let a1 ={_a1:[1,2,3,4,5],_a2:[11,2,33,4,5,33]};
var arr = [];
// Object.keys(a1).forEach(function (key) {}
Object.values(a1).forEach(function (value,index) {
    value.forEach(function (v) {
        if (arr.indexOf(v) == -1) { //在字符串中首次出现的位置 
            arr.push(v);
        }
    })
});
console.log(arr)


// 排序
var a = [1,8,7,10,5];
var b = a.sort(function(a,b){
    return b-a;
});
console.log(b)