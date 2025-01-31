
export default function Home() {
  return (
    <div className="dark:bg-neutral-900">
      <header className="border-b border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
            <a href="/sign-in" className="flex items-center gap-2 text-gray-600 dark:text-neutral-300 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center flex flex-col items-center gap-1">
          <h3 className=" rounded-full p-2 w-[40%] border bg-slate-200 text-black">Reach out to me at <span className="text-primary">vikharankarayush14@gmail.com</span></h3>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Generator</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>
          <a href="/dashboard" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
            Start Creating Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all ">
            <div className="w-12 h-12 bg-blue-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">25+ Templates</h3>
            <p className="text-gray-600 dark:text-neutral-400">Professional templates for all your content needs</p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all ">
            <div className="w-12 h-12 bg-blue-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Customizable</h3>
            <p className="text-gray-600 dark:text-neutral-400">Components are easily cutomizable with a history tab for past interractions</p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all ">
            <div className="w-12 h-12 bg-blue-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Free to Use</h3>
            <p className="text-gray-600 dark:text-neutral-400">Every COmponent and Plugin is well documented</p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all ">
            <div className="w-12 h-12 bg-blue-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">24/7 customer support</h3>
            <p className="text-gray-600 dark:text-neutral-400">If any quries can reach out to me i'll assist you</p>
          </div>

          {/* Add similar feature cards for other features */}
        </div>
      </section>
    </div>
  );
}
