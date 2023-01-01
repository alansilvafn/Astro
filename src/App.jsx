import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <div className="bg-overlay"></div>
      <div className="page">
        <Header></Header>
        <Product></Product>
      </div>
    </div>
  )
}

export default App
