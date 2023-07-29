// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'

// Components
import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <div className="product-page">
        <Header></Header>
        <Product></Product>
      </div>
    </div>
  )
}

export default App
