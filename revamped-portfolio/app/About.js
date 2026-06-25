
const About = () => {

    return(
        <div className="about" accessKey="3">
           
            <div>
            <p className='flex flex-row p-6 lg:text-2xl md:text-xl sm:text-lg'>
                            I have a flair for front-end but I also have skills to share in back-end development too! I spend a lot of my time sharpening my skills, attending networking events and workshops, volunteering, keeping my LinkedIn page up to date and building my portfolio site (psst - you&apos;re already here!). </p><p className="bg-pinky-purple p-6 lg:text-2xl md:text-xl sm:text-lg w-fit mb-4">I am currently looking for work!</p>
            

                        <div className="bg-green-500 dark:bg-green-300 text-black p-4 rounded-2xl ">
                        <p className='font-bold border-b border-black text-xl p-2'>Stack</p>
                            <ul className="grid grid-cols-2 grid-rows-8 justify-around gap-3 p-2">
                            <li >Javascript</li>
                            <li >Python</li>
                            <li >Java</li>
                            <li>C++</li>
                            <li>SQL</li>
                            <li >React</li>
                            <li >Next.js</li>
                            <li >Tailwind</li>
                            <li >Bootstrap</li>
                            <li>PostGres</li>
                            <li>MongoDB</li>
                            <li>Cypress</li>
                            <li>Docker</li>
                            <li>Prometheus</li>
                            </ul>

                            <p className='font-bold border-t border-b border-black text-xl p-2'>Skills</p>
                            <ul className="grid grid-cols-2 grid-rows-4 justify-around gap-3 p-2">
                                <li >French</li>
                                <li >Teaching</li>
                                <li >App Publishing</li>
                                <li >Neurodiversity Advocacy</li>
                                <li>Project Management</li>
                                <li>Figma</li>
                                <li>Canva</li>
                            </ul>
                        </div>


                    
                


                
            </div>  
        </div>
        
        
    )
}

export default About;