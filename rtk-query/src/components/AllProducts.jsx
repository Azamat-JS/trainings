import {useGetAllProductsQuery} from '../app/dummyData.js'


const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery();
    console.log(data)
    if(isError){
        return <h1>Error: Failed to fetch data</h1>
    }
    
    if(isLoading){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        {data?.products.map((p) => (
            <div key={p.id}>
            <img width={300} src={p.images[0]} alt="" />
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            </div>
        ))}
    </div>
  )
}

export default AllProducts