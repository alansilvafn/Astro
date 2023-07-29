import './style.scss'
import { FaStar } from 'react-icons/fa'

export default function Reviews() {
  return (
    <div className="reviews">
      <ul className="reviews__rating rating">
        <li className="rating__item">
          <FaStar className="rating__star active"></FaStar>
        </li>
        <li className="rating__item">
          <FaStar className="rating__star active"></FaStar>
        </li>
        <li className="rating__item">
          <FaStar className="rating__star active"></FaStar>
        </li>
        <li className="rating__item">
          <FaStar className="rating__star active"></FaStar>
        </li>
        <li className="rating__item">
          <FaStar className="rating__star"></FaStar>
        </li>
      </ul>
      <span className="reviews__number">1566+ Reviews</span>
    </div>
  )
}
