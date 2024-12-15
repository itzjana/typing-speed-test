// pages/index.js
import Image from 'next/image';
import { FaKeyboard, FaTrophy, FaPen, FaTabletAlt, FaCog } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-center border-b border-gray-700">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
              <FaKeyboard className="mr-3" /> Typing Test
            </li>
            <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
              <FaTrophy className="mr-3" /> Typing Competition
            </li>
            <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
              <FaPen className="mr-3" /> Text Practice
            </li>
            <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
              <FaTabletAlt className="mr-3" /> Mobile Typing App
            </li>
            <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
              <FaCog className="mr-3" /> Advanced Test
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a href="#" className="hover:underline text-sm">
            Login
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline text-sm">
            Register
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center bg-gray-700 text-white py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Test & Improve Your Typing Speed</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
            Practice your typing speed and accuracy with our free typing games. Compete with friends, test your skills,
            and unlock your full typing potential.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/game"
              className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-200"
            >
              Start Typing Test
            </Link>

            <button className="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition">
              Typing Competition
            </button>
          </div>
        </section>

        {/* Content Sections */}
        <section className="p-8 bg-gray-900">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Typing Test */}
            <div className="flex items-start gap-4">
              <FaKeyboard className="text-green-400 text-4xl" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Typing Test</h2>
                <p className="leading-relaxed text-gray-400">
                  Try our 1-minute Typing Test to see how fast you can type. Improve your speed and compare results with
                  friends across over 40 languages.
                </p>
              </div>
            </div>

            {/* Typing Competition */}
            <div className="flex items-start gap-4">
              <FaTrophy className="text-orange-400 text-4xl" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Typing Competition</h2>
                <p className="leading-relaxed text-gray-400">
                  Compete in 24-hour typing challenges. Face off with others and secure your spot on the leaderboard!
                </p>
              </div>
            </div>

            {/* Text Practice */}
            <div className="flex items-start gap-4">
              <FaPen className="text-blue-400 text-4xl" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Text Practice</h2>
                <p className="leading-relaxed text-gray-400">
                  Train on common words, punctuation, or custom texts. Challenge yourself and refine your typing skills
                  further.
                </p>
              </div>
            </div>

            {/* Mobile Typing App */}
            <div className="flex items-start gap-4">
              <FaTabletAlt className="text-yellow-400 text-4xl" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Mobile Typing App</h2>
                <p className="leading-relaxed text-gray-400">
                  Improve typing on the go with our mobile app. Perfect for testing your skills on tablets and phones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 text-center py-4">
          <p>&copy; {new Date().getFullYear()} Typing Master. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

