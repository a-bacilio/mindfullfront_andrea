import { useState } from 'react'
import { Route, Routes as Router } from "react-router-dom";

import './App.css'
import Layout from './components/layout/layout';
import Routes from './routes/Routes';
import { Helmet } from 'react-helmet-async';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Layout>
      <Routes />
    </Layout>
    
  )
}

export default App
