import {useState} from 'react';
function Test1() {
    //声明对象类型
    type Coordinates = {
        name:string,
        age:number
    };
    // 对象
    let [userState, setUserState] = useState<Coordinates>({ name: 'John', age: 30 });
    // 数组
    let [list, setList] = useState<Coordinates[]>([{ name: '李四', age: 30 },{ name: '王五', age: 40 }]);

// 如果你的 => 后面跟了一对花括号 { ，那你必须使用 return 来指定返回值！
    const listItem = list.map((oi)=>{
        return <div key={oi.age}>{oi.name}</div>
    });

    return (
       <>
           {
               list.map((oi)=>{
                   return <div className='main-list-title' key={oi.age}>{oi.name}</div>
               })
           }
           <div>{ listItem }</div>
       </>
)
}

export default Test1;