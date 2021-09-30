import s from "../Drawer.module.scss";

const CartItem = (props) => {
  return (
    <div className={s.cartItem + " d-flex align-center pt-20 pb-30"}>
      <img className="mr-20 ml-20" width={70} src={props.imageSrc}
           alt={props.alt}/>
      <div className="mr-20">
        <p className="mb-5">{props.title}</p>
        <b>{props.price} руб.</b>
      </div>
      <img className={s.removeBtn + " mt-10"} src="./img/btn-removed.svg" alt=""/>
    </div>
  )
}

export default CartItem