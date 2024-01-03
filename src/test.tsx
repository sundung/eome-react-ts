import  {useEffect} from 'react';

function Test() {
    useEffect(()=>{
        const sss = window.atob("aHR0cHM6Ly9naXRlZS5jb20vaWZlcmNhcmx5L3JlYWN0X3JlZHV4X3Rz")
        console.log(sss)
    },[])
    return (
        <div></div>
    );
}
// 用 ts 写一个节流函数
// function  throttle(func:Function, delay:string) { throttle(func, delay) {
//   let timer = string | null;
//   return function() {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func.apply(this, arguments);
//         timer = null;
//       }, delay);
//     }
//   };
// }
export default Test;