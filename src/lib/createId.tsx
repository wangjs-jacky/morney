// 通过函数的方式：自增
let id = 0;
const createId = ()=>{
    id += 1
    return id;
}

export {createId}