import QueryString from 'qs';
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Result() {

    const location = useLocation();
    // console.log(location);

    const queryData = QueryString.parse(location.search, {  // parsing해서 queryData 객체로 받음
        ignoreQueryPrefix: true,
    });
    // console.log(queryData.s); // 입력한 값 출력됨
    console.log(queryData);     // key value 형태의 객체로 return됨

    return (
        <div>Result</div>
    )
}
