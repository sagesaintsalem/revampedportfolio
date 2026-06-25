import Testimonials from './Testimonials.js'
import Projects from './Projects.js';

export default function Home() {
  return (
    

  <div className="transition-all duration-300 w-full ">
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
        </div>
    </header>
  
    <section className="bg-white dark:bg-gray-800 p-4">
        <div className="max-w-4xl mx-auto text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Rita Toussaint</h1>

            
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-200">Developer, Designer, Advocate</p>
             
        </div>
         
    </section>
     
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2> 
        <Projects />
    </section>
     
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div >
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Testimonials</h2> 
                <Testimonials></Testimonials>



             
        </div>
    </section>
     
     
     
     
     
     
</div>
  );
}
