import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Ridge</span>{" "}
            <span className="text-green-400">Computer Science</span>{" "}
            <span className="text-white">Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Welcome to Comp Sci Club!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
              <p className="text-lg leading-relaxed text-gray-200">
                The Ridge Computer Science Club is a club with members who have an interest in anything to do with computer science. All Ridge students are welcome with any level of experience. Novice programmers will be able to learn about programming languages from python to java through our presentations and self guided tutorials. Members will be able to access our hardware and software tools and materials while being a part of a championship hackathon team!
              </p>
            </div>
          </div>

          {/* Where & When */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
              Where? When?
            </h2>
            <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-6">
              <p className="text-xl text-gray-200">
                Every Thursday in Room 701 typically from <span className="text-green-400 font-semibold">2:30-4:00 PM</span>.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
              What we do
            </h2>
            
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Learn Programming</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Learn how to program from our lectures from python to java through our presentations and self guided tutorials.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Collaborate & Compete</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Collaborate with members on CS projects and compete in hackathons throughout NJ.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">RidgeHacks</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Help run the annual hackathon Ridgehacks which brings together High School students from across NJ. As a club member you have the opportunity to be a part of our hackathon through planning and event activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ridge Computer Science Club</p>
        </div>
      </footer>
    </div>
  );
}
