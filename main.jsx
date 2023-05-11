import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './shared/header.jsx'
// import Footer from './common/footer'
// import './index.css'
// import Routing from './common/Routing'
import './style/main.css'

ReactDOM.createRoot(document.getElementById('page')).render(
  <React.StrictMode>
    <Header />
    <div class="page">
      {/* <Routing /> */}
    </div>
    {/* <Footer /> */}
  </React.StrictMode>,
)
