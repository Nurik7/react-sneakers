import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import {useEffect, useState} from "react";
import s from './App.module.scss'
import axios from "axios";
import Home from "./Pages/Home";
import {Route} from "react-router-dom";
import Favourites from "./Pages/Favourites";
import AppContext from "./context";
import Orders from "./Pages/Orders";

function App() {
  const [sneakersItems, setSneakersItems] = useState([])
  const [sneakersCartItems, setSneakersCartItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  function updateSneakers() {
    try {
      axios.get('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items')
        .then(res => setSneakersItems(res.data))
    } catch (error) {
      alert('Could not download sneakers from server. Please wait for couple seconds and refresh the page. Thx ;)')
      console.error(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const [itemsResponse, cartResponse, favouritesResponse] = await Promise.all([
          axios.get('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items'),
          axios.get('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart'),
          axios.get('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/favourites')])

        setIsLoading(false)

        setSneakersCartItems(cartResponse.data)
        setFavourites(favouritesResponse.data)
        setSneakersItems(itemsResponse.data)

      } catch (err) {
        alert('Could not render! Sorry I am just indian programmer')
        console.error(err)
      }
    }

    fetchData()
  }, [])

  const onAddToFavourites = async (obj) => {
    try {
      const {data} = await axios.post('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/favourites', {
        imageSrc: obj.imageSrc,
        alt: obj.alt,
        title: obj.title,
        price: obj.price,
        inCart: obj.inCart,
        inFavourite: obj.inFavourite,
        itemId: obj.id
      })
      axios.put(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/${obj.id}`, {
        "inFavourite": true
      }).then(() => updateSneakers())
      setFavourites(prev => [...prev, data])
    } catch (err) {
      alert('Can not download favourite sneakers!')
      console.error(err)
    }
  }
  const onAddToCart = async (obj) => {
    try {
      const {data} = await axios.post('https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart', {
        imageSrc: obj.imageSrc,
        alt: obj.alt,
        title: obj.title,
        price: obj.price,
        inCart: obj.inCart,
        inFavourite: obj.inFavourite,
        itemId: obj.id
      })
      axios.put(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/${obj.id}`, {
        "inCart": true
      }).then(() => updateSneakers())
      setSneakersCartItems(prev => [...prev, data])
    } catch (error) {
      alert('Could not put the sneakers to the cart!')
      console.error(error)
    }
  }
  const onDeleteFromFavourite = (id) => {
    try {
      if (sneakersItems.some(e => Number(e.id) === Number(id))) {
        const obj = favourites.find(e => Number(e.itemId) === Number(sneakersItems.find(el => el.id === id).id))
        axios.delete(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/favourites/${obj.id}`)
        axios.put(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/${id}`, {
          "inFavourite": false
        }).then(() => updateSneakers())
        setFavourites(favourites.filter((e) => Number(e.itemId) !== Number(id)))
      }
    } catch (error) {
      alert('Sorry, could not delete from favourite. Wait for couple of seconds and refresh the page. Thx ;)')
      console.error(error)
    }

  }
  const onDeleteFromCart = (id) => {
    try {
      if (sneakersItems.some(e => Number(e.id) === Number(id))) {
        const obj = sneakersCartItems.find(e => Number(e.itemId) === Number(sneakersItems.find(el => el.id === id).id))
        axios.delete(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart/${obj.id}`)
        axios.put(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/${id}`, {
          "inCart": false
        }).then(() => updateSneakers())
        setSneakersCartItems(sneakersCartItems.filter((e) => Number(e.itemId) !== Number(id)))
      }
    } catch (error) {
      alert('Sorry, could not delete from cart. Wait for couple of seconds and refresh the page. Thx ;)')
      console.log(error)
    }

  }
  const onDeleteWholeCart = (id, length) => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const obj = sneakersCartItems.find(e => Number(e.itemId) === Number(sneakersItems.find(el => el.id === id).id))
    axios.delete(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart/${obj.id}`)
    delay(1000)
    axios.put(`https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/${id}`, {
      "inCart": false
    })

  }

  const totalPrice = sneakersCartItems.reduce((sum, el) => el.price + sum, 0)

  const isItemAdded = (id, checkedSneakers) => {
    return checkedSneakers.some(el => Number(el.itemId) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      isItemAdded, sneakersItems, favourites, sneakersCartItems, setSneakersCartItems, totalPrice,
      onAddToCart, onDeleteFromCart, onAddToFavourites, onDeleteFromFavourite, onDeleteWholeCart,
      setIsCartOpened, updateSneakers, isLoading
    }}>
      <div className="wrapper clear">
        <div>
          <Drawer opened={isCartOpened}/>
        </div>

        <Header openCart={() => setIsCartOpened(true)}/>

        <Route path={'/'} exact render={() =>
          <Home searchInput={searchInput}
                setSearchInput={setSearchInput}
          />
        }/>

        <Route path={'/favourites'} exact render={() =>
          <Favourites/>
        }/>
        <Route path={'/orders'} exact render={() =>
          <Orders/>
        }/>
      </div>
    </AppContext.Provider>
  )
}

export default App;