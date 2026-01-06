import Navbar from "../components/Navbar";

export default function RidgeHacks() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">RidgeHacks</span>
          </h1>
          
          <div className="mt-12 space-y-8">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Annual Hackathon</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                RidgeHacks is our annual hackathon that brings together High School students from across New Jersey. 
                As a club member, you have the opportunity to be a part of our hackathon through planning and event activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Event Planning</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Help organize and plan the hackathon, from logistics to workshops and activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Competition</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Compete against teams from across New Jersey and showcase your coding skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Networking</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Connect with students, mentors, and industry professionals from across the state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-green-500/20 rounded-lg p-6 hover:border-green-400/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Learning</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Attend workshops, learn new technologies, and build something amazing in 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-400 p-6 rounded-r-lg mt-8">
              <p className="text-gray-200">
                <strong className="text-green-400">Interested in participating?</strong> Contact club officers 
                or attend our weekly meetings to learn more about RidgeHacks and how you can get involved!
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

