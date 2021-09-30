import s from './Drawer.module.scss'
import CartItem from "./CartItem";

const Drawer = (props) => {
  const cartItems = props.sneakers.map(e => <CartItem imageSrc={e.imageSrc} alt={e.alt} title={e.title}
                                                      price={e.price}/>)
  const countPrice = (el) => {
    let count = 0
    for (let i = 0; i < el.length; i++) {
      count += el[i].price
    }
    return count
  }
  const countTax = () => {
    return Math.round(countPrice(props.sneakers) * 0.05)
  }
  return (
    <div style={{display: "none"}} className={s.overlay}>
      <div className={s.drawer}>
        <div className={s.cartTop}>
          <h2 className="d-flex justify-between mb-30 align-center">
            Корзина
            <img className={s.removeBtn + " mt-10"} src="./img/btn-removed.svg" alt=""/>
          </h2>
          <div className={s.cartItems}>
            {cartItems}
          </div>
        </div>
        <div>
          <ul className={s.cartTotalBlock}>
            <li className='d-flex mb-20'>
              <span>Итого:</span>
              <div></div>
              <b>{countPrice(props.sneakers)} руб.</b>
            </li>
            <li className='d-flex mb-20'>
              <span>Налог 5%:</span>
              <div></div>
              <b>{countTax()} руб.</b>
            </li>
          </ul>
          <div>
            <button className={s.cartTotalButton + " mt-25"}>
              Оформить заказ
              <img src="./img/cart-total-button.svg" alt="Buy"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer