import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetail() {

    const {id} = useParams();
    
    // const params = useParams();
    // console.log(params);    // 객체 출력 id

  return (
    <div>CourseDetail</div>
  )
}
