
function Header() {
  return (
    <header className="bg-black h-28 text-white sticky top-0 z-50 border-b-2 border-white-800 ">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1720755943/SIZCOM/logo_pjlx6o.webp" alt="Logo" className="h-12 mt-5 ml-5" />
      </div>
      
      <nav>
        <ul className="flex space-x-8 mt-5">
          <li><a href="/" className="hover:text-gray-400 font-bold">HOME</a></li>
          <li><a href="/about" className="hover:text-gray-400 font-bold">ABOUT</a></li>
          <li><a href="/contact" className="hover:text-gray-400 font-bold" >SERVICES</a></li>

          <li><a href="/contact" className="hover:text-gray-400 font-bold">CONTACT</a></li>
          <li>
              <a
                href="/contact"
                className="border-white border-4 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-blue-500"
              >
                CALL NOW
              </a>
            </li>
        </ul>
      </nav>
    </div>
   
  </header>
  )
}

export default Header
