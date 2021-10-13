import s from './Drawer.module.scss'
import CartItem from "./CartItem";
import {useContext, useState} from "react";
import AppContext from "../../context";
import Info from "./Info/Info";
import axios from "axios";

const Drawer = ({opened}) => {
  const {
    sneakersCartItems,
    totalPrice,
    setIsCartOpened,
    setSneakersCartItems,
    onDeleteWholeCart,
    updateSneakers
  } = useContext(AppContext)
  const cartItems = sneakersCartItems.map(e => <CartItem imageSrc={e.imageSrc} alt={e.alt} title={e.title}
                                                         price={e.price} id={e.itemId} key={e.id}/>)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/orders', {
        item: sneakersCartItems
      })
      setOrderId(data.id)
      setIsOrderComplete(true)
      setSneakersCartItems([])
      for (let i = 0; i < sneakersCartItems.length; i++) {
        onDeleteWholeCart(sneakersCartItems[i].itemId, sneakersCartItems.length)
      }
      updateSneakers()

    } catch (err) {
      alert('Can not make an order! :(')
      console.error(err)
    }
    setIsLoading(false)
  }

  const manageOrders = () => {
    setIsCartOpened(false)
    setIsOrderComplete(false)
  }
  return (
    <div className={`${s.overlay} ${opened ? s.overlayVisible : ''}`}>
      <div className={s.drawer}>
        {cartItems.length > 0 ? <>
            <div className={s.cartTop}>
              <h2 className="d-flex justify-between mb-30 align-center">
                Корзина
                <img onClick={() => manageOrders()} className={s.removeBtn + " mt-10"} src="img/btn-removed.svg"
                     alt=""/>
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
                  <b>{totalPrice} руб.</b>
                </li>
                <li className='d-flex mb-20'>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <div>
                <button disabled={isLoading} onClick={onClickOrder} className={s.cartTotalButton + " mt-25"}>
                  Оформить заказ
                  <img src="img/cart-total-button.svg" alt="Buy"/>
                </button>
              </div>
            </div>
          </> :
          <Info manageOrders={manageOrders} title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                text={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : `Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.`}
                image={isOrderComplete ? 'img/cart-complete.png' : 'img/cart-empty.png'}/>
        }
      </div>

    </div>
  )
}

export default Drawer