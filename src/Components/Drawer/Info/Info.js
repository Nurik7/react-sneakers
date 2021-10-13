import s from "../Drawer.module.scss";
import {useContext} from "react";
import AppContext from "../../../context";

const Info = ({title, text, image, manageOrders}) => {
  const {setIsCartOpened} = useContext(AppContext)

  // const manageOrders = () => {
  //   debugger
  //   setIsCartOpened(false)
  //   setIsOrderComplete(false)
  // }
  return (
    <div className={s.cartEmptyTop}>
      <div>
        <h2 className="d-flex justify-between mb-30 align-center">
          Корзина
          <img onClick={() => setIsCartOpened(false)} className={s.removeBtn + " mt-10"} src="img/btn-removed.svg"
               alt=""/>
        </h2>
      </div>
      <div>
        <img src={image} alt="empty!"/>
        <div className={s.cartEmptyTitle}>{title}</div>
        <div className={s.cartEmptyText}>{text}</div>
        <button onClick={() => manageOrders()} className={s.cartEmptyButton + " mt-25"}>
          <img src="img/cart-total-button.svg" alt="Go back"/>
          Вернуться назад
        </button>
      </div>
    </div>
  )
}

export default Info