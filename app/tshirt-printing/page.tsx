import Navbar from "../components/Navbar";

export default function TShirtPrinting() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">T-Shirt</span>{" "}
            <span className="text-green-400">Printing</span>
          </h1>
          
          <div className="mt-12 space-y-8">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Custom Club T-Shirts</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Get your custom Ridge Computer Science Club t-shirt! Show your pride and represent the club with our exclusive designs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-black/50 border border-green-500/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Design Options</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Custom club logo</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Multiple color options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Various sizes available</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/50 border border-green-500/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">How to Order</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Contact us during club meetings or reach out to club officers for ordering information and pricing details.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-400 p-6 rounded-r-lg">
              <p className="text-gray-200">
                <strong className="text-green-400">Note:</strong> T-shirt orders are typically processed during club meetings. 
                Check with club officers for current availability and design options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-500/20 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ridge Computer Science Club</p>
        </div>
      </footer>
    </div>
  );
}

