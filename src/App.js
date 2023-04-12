import axios from 'axios'
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
    </div>
  )
}

export default App
