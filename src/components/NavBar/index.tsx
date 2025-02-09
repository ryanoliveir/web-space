import Logo from "../../assets/logo.png";

function NavBar() {
  return (
    <>
      <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img className="w-10" src={Logo} alt="Logo" />
              <span>TCJ-SPACE</span>
            </div>
            <div className="text-white">
              <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
                <li>
                  <a href="#"></a>About
                </li>

                <li>
                  <a href="#"></a>Tecnology
                </li>

                <li>
                  <a href="#"></a>Galaxy
                </li>

                <li>
                  <a href="#"></a>Satelite
                </li>
              </ul>
            </div>
            <div>
                <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
