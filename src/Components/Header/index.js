import s from './Header.module.scss'
import {Link} from "react-router-dom";
import {useContext} from "react";
import AppContext from "../../context";

const Header = (props) => {
  const {totalPrice} = useContext(AppContext)

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={'/'}>
        <div className="d-flex align-center cu-p">
          <img width={40} height={40} src="img/logo.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.openCart}>
          <img width={18} height={17} src="img/cart.svg" alt="cart"/>
          <span>{totalPrice} руб.</span>
        </li>
        <Link to={'/favourites'}>
          <li className="mr-15">
            <img width={20} height={20} src="img/likes.svg" alt="favourites"/>
          </li>
        </Link>
        <Link to={'/orders'}>
          <li>
            <img width={20} height={20} src="img/me.svg" alt="me"/>
          </li>
        </Link>
      </ul>
    </header>
  )
}

export default Header