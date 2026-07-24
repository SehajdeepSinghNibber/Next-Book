'use client'

import { useRouter } from "next/navigation"

const Page = () => {

    const router = useRouter()


    const Back = () =>{
        router.back()
    }

  return (
    <div>
        Login
        <br />
        <button onClick={() => Back()}>Back</button>    </div>
  )
}

export default Page
