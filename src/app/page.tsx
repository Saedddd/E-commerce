import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


import { Catalog } from "@/widgets/catalog"



export default function Home() {
  return (
    <>
    <ToastContainer />
      <Catalog/>
    </>
  )
}
