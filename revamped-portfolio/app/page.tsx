import Testimonials from './Testimonials.js'
import Projects from './Projects.js';
import About from './About.js'

export default function Home() {
  return (
    

  <div className="transition-all duration-300 w-full ">
    <header className="flex justify-between bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        
            <img className="object-scale-down h-50 p-4" src="./newchilli.png" alt="A green chilli with a curly stem and round silver glasses. This is supposed to represent Rita."></img>
        <div className="text-right">
             <h1 className="text-4xl md:text-6xl font-bold p-6 text-gray-900 dark:text-white">Rita Toussaint</h1>
            <p className="text-xl md:text-2xl p-6 text-gray-600 dark:text-gray-200">Developer, Designer, Advocate</p>
        
        </div>
    </header>


    <section className="py-20 px-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <About></About>
    </section>
     
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2> 
        <Projects />
    </section>
     
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div >
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Testimonials</h2> 
                <Testimonials></Testimonials>



             
        </div>
    </section>
     
     
     
     
     
     
</div>
  );
}
