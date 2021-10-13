import s from "../App.module.scss";
import Card from "../Components/Card";
import {useContext} from "react";
import AppContext from "../context";

const Home = ({searchInput, setSearchInput}) => {
  const {sneakersItems, isItemAdded, isLoading} = useContext(AppContext)

  const sneakersCards = () => {
    const filtredItems = sneakersItems.filter(e => e.title.toLowerCase().includes(searchInput.toLowerCase()))
    return (isLoading ? [...Array(8)] : filtredItems)
      .map((e, index) => (
        <Card key={index} isLoading={isLoading} {...e} isItemAdded={isItemAdded}
        />
      ))
  }
  return (
    <div className={`${s.content} p-40`}>
      <div className={`${s.contentInner} justify-between align-center mb-40`}>
        {searchInput ? <h1>Поиск по кроссовкам: {searchInput}</h1> : <h1>Все кроссовки</h1>}
        <div className={s.searchBlock}>
          <img src="img/search.svg" alt="Search"/>
          <input onChange={e => setSearchInput(e.target.value)} value={searchInput} placeholder="Поиск..."/>
          {searchInput &&
          <img onClick={() => setSearchInput('')} className={s.searchButton} src="img/btn-remove.svg" alt=""/>}
        </div>
      </div>
      <div className={s.carts}>
        {sneakersCards()}
      </div>
    </div>
  )
}

export default Home