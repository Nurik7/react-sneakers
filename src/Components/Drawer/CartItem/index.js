import s from "../Drawer.module.scss";
import {useContext} from "react";
import AppContext from "../../../context";

const CartItem = ({imageSrc, alt, title, price, id}) => {
  const {onDeleteFromCart} = useContext(AppContext)
  return (
    <div className={s.cartItem + " d-flex align-center pt-20 pb-30"}>
      <img className="mr-20 ml-20" width={70} src={imageSrc}
           alt={alt}/>
      <div className="mr-20">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img id={id} onClick={(e) => onDeleteFromCart(id)} className={s.removeBtn + " mt-10"}
           src="img/btn-removed.svg"
           alt=""/>
    </div>
  )
}

export default CartItem