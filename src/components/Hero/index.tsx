import MountainPng from '../../assets/moon-surface-hd.png'
function Hero() {
  return (
    <>
      <div className="bg-black/20 h-full text-white relative z-50">
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus expedita quos error non magnam eos asperiores 
                        quam dignissimos repudiandae, ullam nesciunt eum molestias 
                        quasi vero cupiditate vel natus earum! Dolorum.
                    </p>
                    <button className="bg-blue-400 text-white hover:bg-blue-500 rounded-md px-4 py-1 duration-1000">Learn more</button>
                </div>
            </div>
        </div>
        <img  className="absolute right-0 bottom-0 brightness-50 z-10" src={MountainPng} alt=""/>
      </div>
    </>
  );
}

export default Hero;
