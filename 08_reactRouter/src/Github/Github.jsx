import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' 
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    console.log(data);
    
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://randomuser.me/api/')
    //     .then(response => response.json())
    //     .then(data =>{ 
    //         setData(data)})
    // },[])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git picture" width="300" height="300"/>
        </div>
    )
}

export default Github

export const githubLoader=async () => {
    const response = await fetch('https://api.github.com/users/Sohamcool411')
    return response.json()
}