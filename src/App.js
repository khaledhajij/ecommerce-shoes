import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './Styles/index.css'
import Hero from './Components/Hero'
import { fetchShoes } from './app/shoesSlice'
import { useDispatch, useSelector } from 'react-redux'
import Top from './Components/Top'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscoverCategories from './Components/DiscoverCategories'
import Discounts from './Components/Discounts'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Testimonials from './Components/Testimonials'
import { testimonials } from './server/data'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchShoes('/api/shoes'))
  }, [dispatch])
  const shoes = useSelector(state => state.shoes)
  console.log(shoes)
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Top />
      <DiscoverCategories />
      <Discounts />
      <Testimonials data={testimonials} />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
