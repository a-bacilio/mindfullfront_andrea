import { useState } from 'react'
import { Route, Routes as Router } from "react-router";

import './App.css'
import Layout from './components/layout/layout';
import Routes from './routes/Routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

export default App
