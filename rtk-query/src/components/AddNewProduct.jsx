import {useAddNewProductMutation} from '../app/dummyData.js'

const AddNewProduct = () => {
    const [addNewProduct, {data, error, isLoading}] = useAddNewProductMutation()
    
    if(error){
        return <h1>Error</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                id: 1,
                title: "Amazing T-Shirt",
                description: "some fake description for the new product"
            };

          await  addNewProduct(newProductData)
        } catch (error) {
            console.error('Error adding new Product:', error)
        }
    }

  return (
    <div>
        <h1>{data?.id}</h1>
      <h2>{data?.title}</h2>
      <h2>{data?.description}</h2>
        <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddNewProduct