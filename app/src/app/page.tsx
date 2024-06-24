import Image from "next/image";
import { Navbar } from "./components/Navbar";
import EmblaCarousel from './components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// need to create style constants e.g. fonts, colours
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-8 flex items-center justify-between"> */}
        {/* <div>
          <h1>UNSW TerriaJS TESTER</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#what-we-offer" className="text-gray-600 hover:text-gray-900">
            What We Offer
          </a>
          <a href="#tutorials" className="text-gray-600 hover:text-gray-900">
            Tutorials
          </a>
          <a href="#news" className="text-gray-600 hover:text-gray-900">
            News
          </a>
          <a href="#team" className="text-gray-600 hover:text-gray-900">
            Our Team
          </a>
          <a href="#team" className="text-gray-600 hover:text-gray-900">
            Feedback
          </a>
        </nav>


        <div className="space-x-4">
          <button className="bg-lightgrey hover:bg-gray-900 text-white px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-darkgrey hover:bg-gray-900 text-white px-4 py-2 rounded-md">
            Register
          </button>
        </div> */}
      {/* </header> */}

      <main className="bg-white flex pt-20">
        <section className="container mx-auto px-4">
          <h1>
            FJSALFJLDJFKL
          </h1>
          <h1>
            fdklsjflkd;jflkdjalfjdl
          </h1>
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Box 1
          </div>
          <div className="bg-gray-300 h-40 flex items-center justify-center">
            Box 2
          </div>
          <div className="bg-gray-400 h-40 flex items-center justify-center">
            Box 3
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />




        </section>
      </main>
    </div>
  );
};