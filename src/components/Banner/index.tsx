import sateliteImg from "../../assets/satelite1.jpg";
import sateliteImg2 from "../../assets/satelite2.jpg";

interface BannerProps {
  variant?: "inverted" | "default";
}

function Banner({ variant = "default" } : BannerProps) {
  const isInverted = variant === "inverted";

  const textBlock = (
    <>
      <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
        <p data-aos="fade-up" className="text-sky-800 uppercase">
          Our Mission
        </p>
        <h1 data-aos="fade-up" className="uppercase text-5xl">
          Rapidcast
        </h1>
        <p data-aos="fade-up" data-aos-delay="500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          mnis recusandae dignissimos rerum ullam corrupti consequuntur id sequi
          nemo deleniti, veritatis totam tempore sed voluptatibus ratione,
          similique officiis repellendus deserunt?
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="700"
          className="primary-button"
        >
          Learn more
        </button>
      </div>
    </>
  );

  const imageBlock = (
    <div>
      <img
        className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
        data-aos="zoom-in"
        src={isInverted ? sateliteImg2 : sateliteImg}
        alt=""
      />
    </div>
  );

  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {isInverted ? (
            <>
              {textBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {textBlock}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
