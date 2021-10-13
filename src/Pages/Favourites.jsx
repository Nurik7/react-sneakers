import s from "../App.module.scss";
import Card from "../Components/Card";
import {useContext} from "react";
import AppContext from "../context";
import {Link} from "react-router-dom";

const Favourites = () => {
  const {favourites, isItemAdded, isLoading} = useContext(AppContext)
  let favouriteItems = (isLoading ? [...Array(8)] : favourites).map((e, index) => (
    <Card key={index} {...e} id={isLoading ? index : e.itemId} isItemAdded={isItemAdded} isLoading={isLoading}/>
  ))
  return (
    <div>
      {favourites.length > 0 ?
        <div className={`${s.content} p-40`}>
          <div className={`${s.contentInner} justify-between align-center mb-40`}>
            <h1>Мои закладки</h1>
          </div>

          <div className={s.carts}>
            {favouriteItems}
          </div>
        </div> :
        <div className={s.itemsEmpty}>
          <img width={70} height={70} src="img/favourites-empty.png" className='mb-25' alt="Empty!"/>
          <div className={s.itemsTitle}>Закладок нет :(</div>
          <div className={s.itemsText}>Вы ничего не добавляли в закладки</div>
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

export default Favourites