import Image from "next/image";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>


  <div className="transition-all duration-300 w-full ">
    <header className="bg-white text-gray-900 shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="shrink-0 flex items-center gap-3">
                    {/* <img src="/favicon.svg" alt="Logo" className="h-[32px] w-[32px]"/> */}
                     
                </div>
                
                <div className="flex items-center gap-3">
                     
                    <button className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors">
                         
                         
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 12h16M4 19h16"></path>
                             
                        </svg>
                         
                    </button>
                </div>
            </div>
            
        </div>
    </header>
  
    <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Rita Toussaint</h1>

            
            <p className="text-xl md:text-2xl mb-8 text-gray-600">Developer, Designer, Advocate</p>
          
          

             
        </div>
         
    </section>
     
     
    <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Testimonials</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                     
                    <p className="text-gray-600 mb-4">"This product completely transformed our business operations. The results speak for themselves!"</p>
                    <div className="flex items-center gap-4">
                         
                        <div>
                            <div className="font-semibold text-gray-800">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">CEO, TechCorp</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                     
                    <p className="text-gray-600 mb-4">"Outstanding support and amazing features. Highly recommend to anyone looking for a high-quality product."</p>
                    <div className="flex items-center gap-4">
                         
                        <div>
                            <div className="font-semibold text-gray-800">Michael Chen</div>
                            <div className="text-sm text-gray-500">Founder, StartupXYZ</div>
                        </div>
                    </div>
                </div>

            </div>
             
        </div>
    </section>
     
     
     
     
     
     
</div>
  );
}
