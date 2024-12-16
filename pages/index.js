import Image from 'next/image';
import { FaKeyboard, FaTrophy, FaPen, FaTabletAlt, FaCog } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const features = [
    {
      icon: <FaKeyboard className="text-green-200 text-4xl" />,
      title: 'Typing Test',
      description:
        'Take our quick 1-minute Typing Test to measure your typing speed and accuracy. Compare your results with friends across over 40 languages and improve your skills every day.',
    },
    {
      icon: <FaTrophy className="text-green-200 text-4xl" />,
      title: 'Typing Competition',
      description:
        'Join exciting 24-hour typing competitions and compete with people worldwide. Showcase your speed and climb to the top of the leaderboard!',
    },
    {
      icon: <FaPen className="text-green-200 text-4xl" />,
      title: 'Text Practice',
      description:
        'Refine your typing skills with customizable text practice sessions. Focus on punctuation, common words, or even upload your custom texts for a personalized experience.',
    },
    {
      icon: <FaTabletAlt className="text-green-200 text-4xl" />,
      title: 'Mobile Typing App',
      description:
        'Stay on top of your typing game with our feature-rich mobile app. Practice on-the-go and track your progress from any device.',
    },
    {
      icon: <FaCog className="text-green-200 text-4xl" />,
      title: 'Advanced Typing Tests',
      description:
        'Take on advanced typing challenges to test your limits. Perfect for experienced typists looking to master their skills further.',
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
    <aside
  className={`fixed top-0 left-0 w-64 min-h-screen bg-black text-white flex flex-col transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
>
  <div className="p-8 text-center border-b border-gray-600">
    <Image src="/logo.png" alt="Logo" width={150} height={50} />
  </div>
  <nav className="flex-1 mt-6">
    <ul className="space-y-4 px-4">
      <li className="flex items-center p-3 hover:bg-gray-800 rounded cursor-pointer">
        <FaKeyboard className="mr-3" /> Typing Test
      </li>
      <li className="flex items-center p-3 hover:bg-gray-800 rounded cursor-pointer">
        <FaTrophy className="mr-3" /> Typing Competition
      </li>
      <li className="flex items-center p-3 hover:bg-gray-800 rounded cursor-pointer">
        <FaPen className="mr-3" /> Text Practice
      </li>
      <li className="flex items-center p-3 hover:bg-gray-800 rounded cursor-pointer">
        <FaTabletAlt className="mr-3" /> Mobile Typing App
      </li>
      <li className="flex items-center p-3 hover:bg-gray-800 rounded cursor-pointer">
        <FaCog className="mr-3" /> Advanced Test
      </li>
    </ul>
  </nav>
  <div className="p-4 border-t border-gray-600 text-center">
    <a href="#" className="hover:underline text-sm">
      Login
    </a>{' '}
    |{' '}
    <a href="#" className="hover:underline text-sm">
      Register
    </a>
  </div>
</aside>

<button
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  className="md:hidden p-4 fixed top-4 left-4 z-50"
>
  <FaBars className="text-white text-3xl" />
</button>


<main className={`flex-1 bg-black w-full ${isSidebarOpen ? 'ml-64' : ''} lg:ml-64 sm:ml-0`}>
<section className="relative flex items-center justify-center text-center py-20 min-h-screen">
          <div className="text-center px-6 sm:px-12 md:px-24 z-10">
            <h1 className="text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 tracking-wide shadow-lg drop-shadow-md">
              Test & Improve Your Typing Speed
            </h1>
            <p className="mt-4 text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-gray-300 opacity-90 font-light">
              Explore our powerful typing tools to enhance your speed and accuracy. Join competitions, practice with custom texts, and unlock your full potential today.
            </p>
            <div className="mt-12 flex justify-center gap-8">
              <Link
                href="/game"
                className="inline-block bg-white text-black font-semibold py-4 px-10 rounded-full shadow-xl transform hover:bg-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:translate-y-1"
              >
                Start Typing Test
              </Link>
              <button className="bg-gray-800 px-10 py-4 text-white font-semibold rounded-full shadow-xl transform hover:bg-gray-700 hover:scale-105 hover:translate-y-1">
                Typing Competition
              </button>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-96 h-96 bg-gray-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </section>

        <section className="p-12 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              About Us
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              At Typing Master, we are driven by a simple belief: typing is an essential skill that can unlock new opportunities and boost productivity. Whether you're a beginner or an experienced typist, our platform provides the tools and resources needed to enhance both your speed and accuracy.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Our platform offers a variety of features, including typing tests in over 40 languages, customizable practice sessions, and exciting competitions. We also offer a mobile app, allowing you to practice anytime, anywhere. We strive to make your typing journey both fun and productive.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              More than just a platform, Typing Master is a global community. You can connect with typists from around the world, join friendly competitions, and track your progress. Our mission is to help you type faster, more accurately, and with confidence.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Typing Master started as a small idea to make typing fun and engaging. Today, it has grown into a global community. We continue to improve our platform with new features, challenges, and content to keep you motivated and excited to reach your typing goals.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-block bg-white text-black font-semibold py-4 px-12 rounded-full shadow-2xl hover:bg-gray-700 hover:scale-110 transition duration-500 transform"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        <section className="p-12 text-white">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
            Our Features
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-8 bg-gray-800 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 text-white">
  <div className="text-center">
    <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
      Contact Us
    </h2>
    <form className="max-w-2xl mx-auto space-y-6">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 px-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white"
          />
        </div>
        <div className="w-full sm:w-1/2 px-2">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white"
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white"
          rows="4"
        ></textarea>
      </div>
      <button
  type="submit"
  className="w-auto py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
>
  Send Message
</button>

    </form>
  </div>
</section>

<section className="py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Image Section */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                  alt="Feature Image 1"
                  className="rounded-lg shadow-xl"
                  width={500}
                  height={400}
                />
              </div>
              <div className="relative hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                  alt="Feature Image 2"
                  className="rounded-lg shadow-xl"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <h2 className="text-4xl font-extrabold">
              Collaborative Tools to Design User Experience
            </h2>
            <p className="mt-4 text-lg">
              Use our powerful tools to bring your ideas to life, design user-friendly interfaces, and collaborate effortlessly with your team.
            </p>

            {/* List of Features */}
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-base">Less routine, more creativity.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-base">Hundreds of thousands saved.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-base">Scale budgets efficiently.</span>
              </li>
            </ul>

            {/* Call-to-action Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-block py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="py-16 text-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 mb-12">
      Pricing Plans
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
        <p className="text-xl text-gray-200 mb-6">Basic typing tests and competitions.</p>
        <ul className="text-gray-200 mb-6">
          <li>1-Minute Typing Test</li>
          <li>Basic Competition Access</li>
          <li>Track Speed and Accuracy</li>
        </ul>
        <button className="w-full my-6 py-4 px-8 bg-blue-500 text-white font-semibold rounded-full">
          Start for Free
        </button>
      </div>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
        <p className="text-xl text-gray-200 mb-6">Advanced features and unlimited competitions.</p>
        <ul className="text-gray-200 mb-6">
          <li>Advanced Typing Tests</li>
          <li>Customizable Practice Texts</li>
          <li>Mobile App Access</li>
          <li>Priority Support</li>
        </ul>
        <button className="w-full py-4 px-8 bg-blue-500 text-white font-semibold rounded-full">
          Get Started - $9.99/month
        </button>
      </div>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Ultimate Plan</h3>
        <p className="text-xl text-gray-200 mb-6">For those who want the best of everything.</p>
        <ul className="text-gray-200 mb-6">
          <li>All Pro Plan Features</li>
          <li>Unlimited Access to Competitions</li>
          <li>Custom Typing Challenges</li>
          <li>Advanced Analytics and Reports</li>
        </ul>
        <button className="w-full py-4 px-8 bg-blue-500 text-white font-semibold rounded-full">
          Get Started - $19.99/month
        </button>
      </div>
    </div>
  </div>
</section>

<section className="py-12 text-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
      Stay Connected
    </h2>
    <p className="mb-8 text-lg text-gray-200">
      Follow us on social media for updates, tips, and more!
    </p>
    <div className="flex justify-center gap-8">
      <a href="#" className="text-2xl text-gray-200 hover:text-white">
        <FaFacebook />
      </a>
      <a href="#" className="text-2xl text-gray-200 hover:text-white">
        <FaTwitter />
      </a>
      <a href="#" className="text-2xl text-gray-200 hover:text-white">
        <FaInstagram />
      </a>
      <a href="#" className="text-2xl text-gray-200 hover:text-white">
        <FaLinkedin />
      </a>
    </div>
    <p className="mt-8 text-sm text-gray-400">&copy; 2024 Typing Master. All Rights Reserved.</p>
  </div>
</section>

      </main>
    </div>
  );
}
