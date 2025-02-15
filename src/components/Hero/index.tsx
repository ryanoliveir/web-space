import MountainPng from '../../assets/moon-surface-hd.png'
function Hero() {
  return (
    <>
      <div className="bg-black/20 h-full text-white relative z-50">
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">Orbite The Earth</h1>
                    <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus expedita quos error non magnam eos asperiores 
                        quam dignissimos repudiandae, ullam nesciunt eum molestias 
                        quasi vero cupiditate vel natus earum! Dolorum.
                    </p>
                    <button  data-aos="fade-up" data-aos-delay="500" className="primary-button">Learn more</button>
                </div>
            </div>
        </div>
        <img  className="absolute right-0 bottom-0 brightness-50 z-10" src={MountainPng} alt=""/>
        <div className="absolute w-full bottom-0 z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]">

        </div>
      </div>
    </>
  );
}

export default Hero;
