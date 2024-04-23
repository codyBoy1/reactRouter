import react , {useEffect ,useState} from "react"
import {useLoaderData} from "react-router-dom"

function Github(){
  const Data = useLoaderData()
/* 1st method to fetch

 const [Data,setData] = useState([])
 useEffect(()=>{
    fetch("https://api.github.com/users/codyBoy1").then(res=>res.json()).then(data=>setData(data))
    },[])
    
    */
  return (
    <div className = "bg-gray-600 text-white text-3xl">
   Github Followers :{Data.followers}
   <img className ="p-10" src={Data.avatar_url} alt="github pic" with ="300px"/>
    </div>
    )
}

export default Github
export const githubInfoLoader = async function (){
 const response = await fetch("https://api.github.com/users/codyBoy1")
 return response.json()
}