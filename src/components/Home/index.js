import React, {useEffect, useState} from 'react'
import Search from '../Seacrh'
import Output from '../Output'
import { GET_ALL_COCKTAILS, GET_COCKTAILS_BY_NAME } from '../../config'
export default function Home() {

    const [cocktails, setCocktails] = useState()
    const [name, setName]=useState()

    useEffect(()=>{
        getAllCocktails()
    },[])

    const getAllCocktails = async()=>{
        const req = await fetch(GET_ALL_COCKTAILS)
        const res = await req.json()
        setCocktails(res.drinks)
    }
    const serchCocktailsByName = async(event) => {
        event.preventDefault()
        const req = await fetch (GET_COCKTAILS_BY_NAME+name)
        const resp = await req.json() 
        setCocktails(resp.drinks)
        setName('')
    }
    return (
        <div>
            <Search
                name = {name}
                changeName = {setName}
                send = {serchCocktailsByName}
            />
            <Output
                cocktails={cocktails}
               
            />
          
        </div>
    )
}
