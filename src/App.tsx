import bgVideo from './assets/earth-bg.mp4'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="h-[700px] relative">
        <video className="fixed right-0 top-0 h-[700[px] w-full object-cover z[-1]" autoPlay loop muted >
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <NavBar />
      </div>
    </>
  )
}

export default App
