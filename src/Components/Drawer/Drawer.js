const Drawer = (props) => {
  return (
    <div style={{display: "none"}} className="overlay">
      <div className="drawer">
        <div className="cartTop">
          <h2 className="d-flex justify-between mb-30 align-center">
            Корзина
            <img className="removeBtn mt-10" src="./img/btn-removed.svg" alt=""/>
          </h2>
          <div className="cartItems">
            <div className="cartItem d-flex align-center pt-20 pb-30">
              <img className="mr-20 ml-20 cartItemImg" width={70} src="./img/sneakers/2.jpg"
                   alt="Nike Air Max 270"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn mt-10" src="./img/btn-removed.svg" alt=""/>
            </div>
            <div className="cartItem d-flex align-center pt-20 pb-30">
              <img className="mr-20 ml-20 cartItemImg" width={70} src="./img/sneakers/1.jpg"
                   alt="Nike Air Max 270"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn mt-10" src="./img/btn-removed.svg" alt=""/>
            </div>
            <div className="cartItem d-flex align-center pt-20 pb-30">
              <img className="mr-20 ml-20 cartItemImg" width={70} src="./img/sneakers/2.jpg"
                   alt="Nike Air Max 270"/>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn mt-10" src="./img/btn-removed.svg" alt=""/>
            </div>
          </div>
        </div>
        <div className="cartBottom">
          <ul className="cartTotalBlock">
            <li className='d-flex mb-20'>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className='d-flex mb-20'>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <div className="cartTotalOrder ">
            <button className="cartTotalButton mt-25">
              Оформить заказ
              <img src="./img/cart-total-button.svg" alt="Buy"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer