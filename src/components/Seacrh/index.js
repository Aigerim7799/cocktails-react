import React from 'react'
import './search.css'

export default function Search({send, changeName, name}) {
    return (
        <>
        <form onSubmit = {send}>
            <input
                value ={name}
                placeholder ='enter name'
                onChange ={(e)=>changeName(e.target.value)}
            />
            <button type='submit'>Search</button>
        
        </form>
        </>
    )
}
