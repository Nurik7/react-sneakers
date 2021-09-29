import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
    </div>
  )
}

export default App;
