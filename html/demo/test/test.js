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
    console.log(data);
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
    console.log(t1);
} 