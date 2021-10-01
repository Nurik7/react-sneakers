import s from './Card.module.scss'
import {useState} from "react";

const Index = (props) => {
  const [isAdded, setIsAdded] = useState()
  const [isLiked, setIsLiked] = useState()
  const onPlus = () => setIsAdded(!isAdded)
  const onLike = () => setIsLiked(!isLiked)
  return (
    <div className={s.card}>
      <div className={s.favourite}>
        <img onClick={onLike} src={isLiked ? "./img/button-liked.svg" : "./img/button-like.svg"} alt="favourite"/>
      </div>
      <img width={133} height={112} src={props.imageSrc} alt={props.alt}/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img className={s.plusButton} onClick={onPlus} src={isAdded ? './img/button-added.svg' : './img/button-add.svg'}
             alt="add"/>
      </div>
    </div>
  )
}

export default Index