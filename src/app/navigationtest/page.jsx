"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const q = searchParams.get("q")

  console.log(q)

  const handleClick = ()=>{
    console.log("clicked");
    router.push("/"); // redirect to home page
    // router.replace("/") // it won't add a new entry in the browser history stack
    // router.refresh() // refreshes current make new request server to fetch data
    // router.back() // opens up previous page
    // router.forward() // opens up next page
  }

  return (
    <div>
      {/* you can use turn prefetch to improve performance */}
      <Link href="/" prefetch={false}>Click here</Link> 
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage