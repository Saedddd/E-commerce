import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { Catalog } from "@/widgets/catalog"



export default function Home() {
  return (
    <>
    <ToastContainer />
      <Header/>
      <Catalog/>
      <Footer/>
    </>
  )
}
