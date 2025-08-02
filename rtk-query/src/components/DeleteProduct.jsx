import { useParams } from "react-router-dom"
import {useDeleteProductMutation} from '../app/dummyData.js'



const DeleteProduct = () => {
    const [deleteProduct, {data, error, isLoading}] = useDeleteProductMutation()
    const {id} = useParams();

        if(error){
      return  <h1>{error}</h1>
    }

    if(isLoading) return <h1>Loading...</h1>;

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(id)
        } catch (error) {
            console.error('Error delete product', error)
        }
    }
    
  return (
    <>
    <h1>{data?.title ? `${data.title} deleted successfully` : ""}</h1>
    <div>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
    </>
  )
}

export default DeleteProduct