// SpecificProduct.jsx
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../app/dummyData.js';

const SpecificProduct = () => {
  const { id } = useParams(); // 👈 Get dynamic ID from URL
  const { data, isError, isLoading } = useGetProductByIdQuery(id); // 👈 pass dynamic id
  console.log(data);

  if (isError) return <h1>Error: Failed to fetch data</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
        <img width={300} src={data?.images[0]} alt="" />
        <h1>{data?.title}</h1>
      <h1>{data?.brand}</h1>
      <h2>{data?.category}</h2>
    </div>
  );
};

export default SpecificProduct;
