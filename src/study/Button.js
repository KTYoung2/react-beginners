
import style from "./Button.module.css";
/* 리액트는 css도 분활해서 재사용. css 코드를 js객체로 변환시켜줌
    따라서 해당 css 코드에 작정된 className(여기서는 btn)을 
    프로퍼티로 접근. 연산자 (.)을 사용해서 이용 가능
    {style.btn}
    
*/

function Button ({text}){
    return <button className={style.btn}>{text}</button>;
}




export default Button;
