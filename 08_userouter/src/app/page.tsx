'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"

const Home = () => {

  const router = useRouter()
  console.log(router)

  const navigate = (page:string) =>{
    router.push(`${page}`)
  }

  const refresh = () =>{
    router.refresh()
  }

  return (
    <div>
      <button onClick={()=> navigate("login")}>Go to the Login Page</button>
      <br />
      <button onClick={()=> refresh()}>Refresh the page</button>
      <br />
      <button><Link href ="/colors">Colors</Link></button>
    </div>
  )
}

export default Home
