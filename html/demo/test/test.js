/**
 * Created by a1 on 18/5/24.
 */
let a = [11,22,33,44,55,66,77];
let b =[2,1,2,3,4,2];
let c =[];
let index = 0;

for(let i=0;i<b.length;i++){
    c = a.slice(index,index+b[i]);
    if(index==a.length){
        index=0;
    }
    if(index>a.length){}
    index +=b[i];
    console.log(c);
}