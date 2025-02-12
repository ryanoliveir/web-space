import bgVideo from "./assets/earth-bg.mp4";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
            autoPlay
            loop
            muted
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <NavBar />
          <Hero />
        </div>
        <ServicesSection />
      </div>
    </>
  );
}

export default App;
