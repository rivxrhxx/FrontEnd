
import { useState } from 'react';
import './App.css';


function App() {
  const [showPsw,setShowPsw] = useState(false);

  const toggleShowPsw = () =>{
    setShowPsw(!showPsw);
  };
  return (
    <div>
    <div style={title}>회원가입구현 과제</div>
    <div style ={divStyle}>
        
      <input style = {inputStyle} type="email" placeholder='이메일입력'></input>
      <div>
      <input class = "psw" style = {inputStyle} type={showPsw ? "password":"text"} placeholder='비밀번호입력'></input>
      <button onClick={toggleShowPsw}> {(!showPsw ? "🙈" : "👁")}</button>
      </div>
      <input style = {inputStyle} type="password" placeholder='비밀번호 재입력'></input>
      <input style = {inputStyle} type="text" placeholder='이름'></input>
      <input style = {inputStyle} type="text" placeholder='생년월일'></input>
      <button style={buttonStyle} >회원가입!</button> 

    </div>
    </div>
    
  );
}

const title = {
  display : "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  backgroundColor : "skyblue",
  height : "100vh",
}

const inputStyle = {
  width : "250px",
  height : "30px",
  borderRadius : "30px",

}

const buttonStyle ={
  borderRadius: "30px",
  width : "150px",
  height : "30px",
}

export default App;