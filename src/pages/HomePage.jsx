import { Fragment } from "react"
import Navbar from "../components/navbar/Navbar"
import ProductForm from "../components/productform/ProductForm"



const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <ProductForm />
    </Fragment>
  )
}

export default HomePage