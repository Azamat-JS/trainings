import {useUpdateProductMutation} from '../app/dummyData.js';
import { useParams } from 'react-router-dom';


const UpdatePorduct = () => {
    const { id } = useParams();
    const [updatedProduct, {data, error, isLoading}] = useUpdateProductMutation();

    if(error){
      return  <h1>{error}</h1>
    }

    if(isLoading) return <h1>Loading...</h1>;

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Blue Shirt",
                description: "Fake Blue shirt is updating for testing"
            };

            await updatedProduct({
                id, 
               updatedProduct: updatedProductData
            })
        } catch (error) {
            
        }
    }

  return (
    <div>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdatePorduct