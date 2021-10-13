import Card from "../Components/Card";
import s from "../App.module.scss";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const {data} = await axios.get('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/orders')
        setOrders(data.reduce((sum, el) => [...sum, ...el.item], []))
        setIsLoading(false)
      } catch (err) {
        alert('Could not download your orders :(')
        console.error(err)
      }
    })()
  }, [])

  const ordersItems = (isLoading ? [...Array(8)] : orders).map((e, index) => (
    <Card key={index} {...e} isLoading={isLoading}/>
  ))
  return (
    <div>
      {orders.length > 0 ?
        <div className={`${s.content} p-40`}>
          <div className={`${s.contentInner} justify-between align-center mb-40`}>
            <h1>Мои покупки</h1>
          </div>
          <div className={s.carts}>
            {ordersItems}
          </div>
        </div> :
        <div className={s.itemsEmpty}>
          <img src="img/orders-empty.png" className='mb-25' alt="Empty!"/>
          <div className={s.itemsTitle}>У вас нет заказов</div>
          <div className={s.itemsText}>Вы нищеброд? <br/> Оформите хотя бы один заказ.</div>
          <Link to={"../"}>
            <button className={s.cartEmptyButton}>
              <img src="img/cart-total-button.svg" alt="Go back"/>
              Вернуться назад
            </button>
          </Link>
        </div>
      }
    </div>
  )

}

export default Orders