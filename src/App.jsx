import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Data from "/src/data/Data.js"
function App() {
  return (
    <BrowserRouter>
      <div className="nav-menu">
        <h1>#VANLIFE</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
            </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />}/>
      </Routes>
      <div className="footer">
        <p>&#169; 2022 #VANLIFE</p>
      </div>
    </BrowserRouter>
  )
  
}

export default App

function Home(){
  return(
    <div className="home">
      <div className="home-main">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip.
        </p>
        <button>Find your van</button>
      </div>
    </div>
  )
}

function About(){
  return(
    <div className="about">
      <img src="/src/assets/image54.jpg" alt="" />
      <h2>Don't squeeze in a sedan when you could relax in a van</h2>
      <p>
        Our mission is to enliven your road with the perfect travelvan rental. Our vans re recertified before each trip to ensure
        your travel plans can go off without a hitch, hitch costs extra.
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the word on 4 wheels.
      </p>
      <div className="explore-box">
        <h3>Your destionation is waiting</h3>
        <h3>Your van is ready</h3>
        <button>Explore our vans</button>
      </div>
    </div>
  )
}

function Vans(){
  return(
    <div className="vans">
      <h2>Explore our van options</h2>
      <div className="buttons">
        <button>Simple</button>
        <button>Luxury</button>
        <button>Rugged</button>
        <button className="filters-clearer">Clear filters</button>
      </div>
      <div className="gallery">
        {
          vansGenerator()
        }
      </div>
    </div>
  )
}

function vansGenerator(){
  let myArr = []
  for(let i=0; i<Data.length; i++){
    myArr.push(
      <div className="van">
        <img src={Data[i].img} />
        <h3 className="van-name-and-price">{Data[i].name}&nbsp;&nbsp;&nbsp;{Data[i].price} <label>/day</label> </h3>
        <h4 className={Data[i].category} >{Data[i].category}</h4>
      </div>
    )
  }
  return(myArr)
}