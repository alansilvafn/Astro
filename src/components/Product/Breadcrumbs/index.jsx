import './style.scss'

export default function Breadcrumb() {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <a href="#" className="breadcrumbs__link">
          Products
        </a>
      </li>
      <li className="breadcrumbs__item">
        <a href="#" className="breadcrumbs__link">
          Astro
        </a>
      </li>
      <li className="breadcrumbs__item">
        <a href="#" className="breadcrumbs__link">
          Dark Series
        </a>
      </li>
    </ul>
  )
}
