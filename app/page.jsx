export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">SmartFlow Tools</h1>
        <p className="text-lg text-gray-600 mb-6">
          Automate everything. Save time. Work smarter with the best AI tools.
        </p>
        <a
          href="#tools"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Explore AI Tools
        </a>
      </header>

      {/* Features Section */}
      <section id="tools" className="max-w-5xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Top AI Tools</h2>
          <p className="text-gray-700">
            Discover our handpicked collection of AI tools for writing, coding, design, and more.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Automation Guides</h2>
          <p className="text-gray-700">
            Learn how to automate your workflow using AI and save hours every week.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Boost Productivity</h2>
          <p className="text-gray-700">
            Maximize your output with smart tools, templates, and time-saving systems.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Explore Our Blog</h2>
        <p className="text-gray-600 mb-6">
          Get insights, comparisons, and tutorials on how to use AI tools effectively.
        </p>
        <a
          href="#"
          className="inline-block border border-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white"
        >
          Read Blog Posts
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} SmartFlow Tools. Built with 💡 and Next.js.
      </footer>
    </div>
  );
}
