import s from './Header.module.scss'

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="./img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={17} src="./img/cart.svg" alt="cart"/>
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={20} height={20} src="./img/me.svg" alt="me"/>
        </li>
      </ul>
    </header>
  )
}

export default Header