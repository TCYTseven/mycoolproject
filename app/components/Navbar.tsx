import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
              Ridge
            </span>
            <span className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
              CS
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/tshirt-printing" 
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              T-Shirt Printing
            </Link>
            <Link 
              href="/ridgehacks" 
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              RidgeHacks
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

