import Card from "../Components/Card";
import s from "../App.module.scss";
import axios from "axios";
import {useEffect, useState} from "react";

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
    <div className={`${s.content} p-40`}>
      <div className={`${s.contentInner} justify-between align-center mb-40`}>
        <h1>Мои покупки</h1>
      </div>
      <div className={s.carts}>
        {ordersItems}
      </div>
    </div>
  )

}

export default Orders