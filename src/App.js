import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import {useEffect, useState} from "react";
import s from './App.module.scss'

function App() {
  const [sneakersItems, setSneakersItems] = useState([])
  const [sneakersCartItems, setSneakersCartItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://61589fed5167ba00174bbb8e.mockapi.io/sneakers')
      .then(res => res.json())
      .then(res => setSneakersItems(res))
  }, [])

  const onAddToCart = (obj) => {
    setSneakersCartItems(prev => [...prev, obj])
  }

  let sneakersCards = sneakersItems.map(e => (
    <Card imageSrc={e.imageSrc} alt={e.alt}
          title={e.title} price={e.price}
          onClickPlus={(obj) => onAddToCart(obj)}
    />
  ))

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer closeCart={() => setIsCartOpened(false)} items={sneakersCartItems}/>}
      <Header openCart={() => setIsCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className={s.carts}>
          {sneakersCards}
        </div>

      </div>
    </div>
  )
}

export default App;
