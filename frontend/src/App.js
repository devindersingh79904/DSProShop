import './App.css'
import HomeScreen from './Component/screens/HomeScreen'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ProductScreen from './Component/screens/ProductScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CartScreen from './Component/screens/CartScreen'

function App() {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
