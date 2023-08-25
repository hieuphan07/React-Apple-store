import { useSelector, useDispatch } from "react-redux";

import classes from './Popup.module.css'

const Popup = ({ detail }) => {
  const dispatch = useDispatch()
  const showInfo = useSelector(state => state.showInfo);

  const hideInfoHandler = () => {
    dispatch({ type: 'HIDE_INFO' })
  }

  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'VND'
  });

  return <div className={classes['popup-overlay']} onClick={(event) => {
    if (event.target.className === 'Popup_popup-overlay__AIERW') { hideInfoHandler() }
  }}>
    <div className={classes.popup}>
      <div className={classes.img}>
        <img src={detail.img1}></img>
      </div>
      <div className={classes.info}>
        <span className={classes.name}>{detail.name}</span>
        <span className={classes.price}>{formatter.format(detail.price)}</span>
        <span className={classes.detail}>{detail['short_desc']}</span>
        <button>View Detail</button>
        <span className={classes.close} onClick={hideInfoHandler}></span>
      </div>
    </div>
  </div>
}

export default Popup;