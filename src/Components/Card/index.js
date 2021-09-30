import s from './Card.module.scss'

const Index = (props) => {
  return (
    <div className={s.card}>
      <div className={s.favourite}>
        <img src="./img/button-like.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src={props.imageSrc} alt={props.alt}/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={s.button}>
          <img width={11} height={11} src="./img/button-add.svg" alt="add"/>
        </button>
      </div>
    </div>
  )
}

export default Index