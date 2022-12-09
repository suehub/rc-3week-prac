import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Resister() {

    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [pw, setPw] = useState('');
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if(nickname && pw) {
            setFlag(true);
            return;
        }
        setFlag(false);
    }, [nickname, pw]);

    const onClickResister = () => {
        if(!nickname){
            alert('닉네임을 입력해주세요.');
            return;
        }

        if(!nickname) {
            alert('비밀번호를 입력해주세요.');
            return;
        }

        navigate("/", {state: nickname});   
    };

    return (
        <div>
            <h4>회원가입</h4>
            <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <input value={pw} onChange={(e) => setPw(e.target.value)} />
            <button onClick={onClickResister} style={{color: flag? 'blue' : 'gray'}}>가입</button>
            {/* 버튼 입력 시 home으로 이동, 입력값 객체에 저장되어 전달 */}
        </div>
    )
}
