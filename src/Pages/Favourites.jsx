import s from "../App.module.scss";
import Card from "../Components/Card";
import {useContext} from "react";
import AppContext from "../context";

const Favourites = () => {
  const {favourites, isItemAdded, isLoading} = useContext(AppContext)
  let favouriteItems = (isLoading ? [...Array(8)] : favourites).map((e, index) => (
    <Card key={index} {...e} id={isLoading ? index : e.itemId} isItemAdded={isItemAdded} isLoading={isLoading}/>
  ))
  return (
    <div>
      <div className={`${s.content} p-40`}>
        <div className={`${s.contentInner} justify-between align-center mb-40`}>
          <h1>Мои закладки</h1>
        </div>
        <div className={s.carts}>
          {favouriteItems}
        </div>
      </div>
    </div>
  )
}

export default Favourites