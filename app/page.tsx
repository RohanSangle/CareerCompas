import heroImage from './Hero.png';

export default async function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-cover bg-no-repeat" style={{ backgroundImage: `url(${heroImage.src})` }}>
        <div className="w-11/12 max-w-4xl mx-auto my-5 p-8 bg-white bg-opacity-80 shadow-lg rounded-lg flex-1">
          <div className="bg-gray-100 bg-opacity-80 p-5 rounded-lg text-center mb-5">
            <h2 className="text-rose-500 text-2xl font-bold mb-4">Welcome To CareerCompas</h2>
            <p className="leading-relaxed mb-3">
              We're excited to help you discover the career that's right for you! Whether you're unsure about your next step or just exploring your options, our interactive test is here to guide you. In just a few minutes, you'll gain insights into your strengths, interests, and potential career paths.
            </p>
            <p className="leading-relaxed">
              This is the first step toward a future that fits you. Ready to start? Let's uncover your unique potential!
            </p>
          </div>
          <div className="content">
            {/* Your main content goes here */}
          </div>
          <div className="flex flex-col items-center mb-5">
            <a href="#" className="bg-rose-500 text-white px-6 py-3 rounded-lg text-lg no-underline transition-colors duration-300 hover:bg-blue-700">
              Take Test
            </a>
            <div className="text-gray-600 mt-2">20 Minutes</div>
          </div>
        </div>

        <footer className="bg-gray-800 bg-opacity-80 py-5 w-full">
          <div className="w-11/12 max-w-6xl mx-auto flex flex-wrap justify-around">
            <div className="mb-5">
              <h3 className="text-white mb-2">Explore</h3>
              <ul className="list-none p-0 m-0">
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Find Your Path</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Explore</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Learn</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Log Out</a></li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="text-white mb-2">&nbsp;</h3>
              <ul className="list-none p-0 m-0">
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Dashboard</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="text-white mb-2">&nbsp;</h3>
              <ul className="list-none p-0 m-0">
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">What Career is Right for Me?</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Career Compass</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Explore more</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Student Portal</a></li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="text-white mb-2">&nbsp;</h3>
              <ul className="list-none p-0 m-0">
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Youtube</a></li>
                <li><a href="#" className="text-gray-300 no-underline transition-colors duration-300 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-5 text-center">
            careerCompas.com
          </div>
        </footer>
      </div>
    </>
  );
}
