import React  from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import { Route, Router } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <Router>
    
    <Header/>
    <main className='my-3'>
      <Container>
      
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path="/cart/:id" element={<CartScreen/>}/>
      </Routes>
      </Container>
    </main>
    
      <Footer/>
      
    </Router>
  );
}

export default App;
