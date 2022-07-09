// components
import { CardContainer } from "../components/CardContainer"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <CardContainer />
        <Footer />
    </div>
  )
}
export default Home