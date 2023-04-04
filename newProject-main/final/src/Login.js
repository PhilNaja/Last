import React from 'react'
import { useState } from 'react'
import Main from './Components/Main'

function Login() {
    const [data,Setdata] = useState(null)
    const onC = ()=>{
        Setdata("1")
    }
    const onCR = ()=>{
        Setdata(null)
    }

  return (
    <div>
        {data ?(<Main/>):(<button type="button" class="btn btn-success" onClick={onC}>Base class</button>)}
        <button type="button" class="btn btn-danger" onClick={onCR}>Re</button>
        
        </div>
  )
}

export default Login