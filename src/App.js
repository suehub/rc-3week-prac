import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');

  useEffect(() => {
    console.log("App Component가 처음 Mount 됐을 때")
  }, []);

  useEffect(() => { // 처음에 input에 입력하지 않아도 name이 빈 문자열로 바뀌기 때문에 호출됨
    console.log(`App Component가 Update 되었음 : ${name}`);
    console.log(`App Component가 Update 되었음 : ${sex}`);

  }, [name, sex]);  // 둘 중 하나만 변경되어도 둘 다 호출됨
  

  return (
    <div className="App">
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />
        <input 
        value={sex}
        onChange={(e) => setSex(e.target.value)} 
        />
    </div>
  );
}

export default App;
