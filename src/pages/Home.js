import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HomePageContent from "../components/Home/HomePageContent";
import TrendingProducts from '../components/Home/TrendingProducts'
import Popup from "../components/Home/Popup";

const HomePage = () => {
  const trendingProducts = useLoaderData();

  const showInfo = useSelector(state => state.showInfo);
  const detail = useSelector(state => state.detail)

  const dispatch = useDispatch();
  const hideInfoHandler = () => {
    dispatch({ type: 'HIDE_INFO' })
  }

  // Press 'escape" key to close popup
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        hideInfoHandler();
      }
    }
    document.addEventListener('keydown', handleEscape);

    return () => { document.removeEventListener('keydown', handleEscape) }
  }, [hideInfoHandler])

  return <>
    <HomePageContent />
    <TrendingProducts trendingProducts={trendingProducts} />
    {showInfo && detail && <Popup detail={detail} />}
  </>
}

export default HomePage;

export async function loader() {
  const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
  const shopData = await response.json();
  return shopData;
}