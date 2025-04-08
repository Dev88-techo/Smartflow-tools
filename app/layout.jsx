import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center py-24 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-4"
        >
          SmartFlow Tools
        </motion.h1>
        <p className="text-xl text-slate-300 mb-8">
          Automate everything. Save time. Work smarter with the best AI tools.
        </p>
        <Button className="text-lg px-6 py-4 rounded-2xl shadow-lg bg-indigo-600 hover:bg-indigo-700">
          Explore AI Tools
        </Button>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
        <Card className="bg-slate-800 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <Sparkles className="h-8 w-8 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Top AI Tools</h2>
            <p className="text-slate-300">
              Discover our handpicked collection of AI tools for writing, coding, design, and more.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <Zap className="h-8 w-8 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Automation Guides</h2>
            <p className="text-slate-300">
              Learn how to automate your workflow using AI and save hours every week.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <Rocket className="h-8 w-8 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Boost Productivity</h2>
            <p className="text-slate-300">
              Maximize your output with smart tools, templates, and time-saving systems.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Placeholder Sections */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Explore Our Blog</h2>
        <p className="text-slate-300 mb-6">
          Get insights, comparisons, and tutorials on how to use AI tools effectively.
        </p>
        <Button variant="outline">Read Blog Posts</Button>
      </section>

      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">AI Tools Directory</h2>
        <p className="text-slate-300 mb-6">
          Browse our curated list of powerful AI tools with ratings, tags, and affiliate links.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Browse Tools</Button>
      </section>

      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-slate-300 mb-6">
          Get a free AI tools guide + stay updated with the latest in AI automation.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-l-xl text-black w-64"
        />
        <Button className="rounded-r-xl">Subscribe</Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        © {new Date().getFullYear()} SmartFlow Tools. Built with 💡 and Next.js.
      </footer>
    </div>
  );
}
