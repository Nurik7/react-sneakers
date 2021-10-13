import s from './Card.module.scss'
import {useContext} from "react";
import Loader from "../Loader";
import AppContext from "../../context";

const Card = ({
                imageSrc,
                alt,
                title,
                price,
                id,
                inCart,
                inFavourite,
                isItemAdded,
                isLoading
              }) => {
  const {
    onAddToCart, onDeleteFromCart, onAddToFavourites,
    onDeleteFromFavourite, sneakersCartItems, favourites
  } = useContext(AppContext)
  const onPlus = () => {
    if (!isItemAdded(id, sneakersCartItems)) {
      onAddToCart({imageSrc, alt, title, price, id, inCart: true, inFavourite})
    } else {
      onDeleteFromCart(id)
    }
  }
  const onLike = () => {
    if (!isItemAdded(id, favourites)) {
      onAddToFavourites({imageSrc, alt, title, price, id, inCart, inFavourite: true})
    } else {
      onDeleteFromFavourite(id)
    }
  }
  return (
    <div className={s.card}>
      {isLoading ? <Loader/> : <>
        {isItemAdded &&
        <div className={s.favourite}>
          <img onClick={onLike} src={isItemAdded(id, favourites) ? "img/button-liked.svg" : "img/button-like.svg"}
               alt="favourite"/>
        </div>}
        <img width={133} height={112} src={imageSrc} alt={alt}/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          {isItemAdded &&
          <img className="cu-p" onClick={onPlus}
               src={isItemAdded(id, sneakersCartItems) ? 'img/button-added.svg' : 'img/button-add.svg'}
               alt="add"/>}
        </div>
      </>}
    </div>

  )
}

export default Card