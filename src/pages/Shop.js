import { json } from "react-router-dom";

import ProductList from "../components/Shop/ProductList";

const ShopPage = () => {
  return <>
    <ProductList />
  </>
}

export default ShopPage;

// Fetch loader
export async function loader() {
  const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');

  if (!response.ok) {
    throw json({ message: 'Could not fetch data.' }, { status: 500 });
  } else {
    return response;
  }
}