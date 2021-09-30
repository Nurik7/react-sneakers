import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

const sneakers = [
  {
    imageSrc: './img/sneakers/1.jpg',
    alt: 'Nike Blazer Mid Suede',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
  },
  {
    imageSrc: './img/sneakers/2.jpg',
    alt: 'Nike Air Max 270',
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15700,
  },
  {
    imageSrc: './img/sneakers/3.jpg',
    alt: 'Nike Blazer Mid Suede',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
  },
  {
    imageSrc: './img/sneakers/4.jpg',
    alt: 'Puma X Aka Boku Future Rider',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
  },
]


function App() {
  let sneakersCards = sneakers.map(e => <Card imageSrc={e.imageSrc} alt={e.alt} title={e.title} price={e.price}/>)
  return (
    <div className="wrapper clear">
      <Drawer sneakers={sneakers}/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex justify-around">
          {sneakersCards}
        </div>

      </div>
    </div>
  )
}

export default App;
