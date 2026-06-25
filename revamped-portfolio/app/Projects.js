

export default function Projects() {
    return (
        <section className="flex flex-col justify-between gap-4 p-4">
        <div className="bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='border-b border-black dark:border-white p-1'>
                <p className="font-semibold dark:text-white text-gray-800 text-xl">Halloween Hints</p>
                <p>HTML, Bootstrap</p>
            </div>
                <div className="grid place-items-center lg:grid-cols-3 lg:grid-rows-1 gap-2 p-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 ">
                    <div>
                        <img src='./halloweenhome.png' alt='Ritas black and orange halloween homepage. There is a picture of the 3 witches from MacScottishplay' loading='lazy' className="gallery_image"></img>
                    </div>

                    <div >
                        <img src='./halloweenmusic.png' alt='Ritas black and orange halloween music page. There is a Spotify widget of Ritas very own halloween playlist.' loading='lazy' className="gallery_image"></img>
                    </div>

                    <div >
                        <img src='./halloweengames.png' alt='Ritas black and orange halloween video games page.' loading='lazy' className="gallery_image"></img>
                    </div>
                </div>
            <p className='dark:text-white text-gray-800'>This was the very first website that I built, before I had even started at CodeClan. I really enjoyed making this site as it's all about my favourite day of the year - Halloween! </p>
        </div>

        <div className="bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='border-b border-black dark:border-white p-1'>
                <p className="font-semibold dark:text-white text-gray-800 text-xl">NoteClan</p>
                <p>Python, Flask, SQL</p>
            </div>
            <div className="grid place-items-center lg:grid-cols-2 lg:grid-rows-2 gap-2 p-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 ">

                <div >
                    <img id='image-1' src='./projectshots/noteclanhome.png' alt='Noteclan home' loading="lazy" className="gallery_image" /></div>

                <div >
                    <img id='image-2' src='./projectshots/noteclanstudios.png' alt='Note home' loading="lazy" className="gallery_image"/></div>

                <div >
                    <img id='image-3' src='./projectshots/noteclanform.png' alt='Phone home' loading="lazy" className="gallery_image"/></div>

                <div >
                    <img id='image-4' src='./projectshots/noteclanbookings.png' alt='Phone home' loading="lazy" className="gallery_image"/></div>
            </div>
            <p className='dark:text-white text-gray-800'>This was my first project at CodeClan, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.</p>
        </div>

        <div className="bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='border-b border-black dark:border-white p-1'>
                <p className="font-semibold dark:text-white text-gray-800 text-xl">furFinder</p>
                <p>React, MongoDB</p>
            </div>
            <div className="grid place-items-center lg:grid-cols-2 lg:grid-rows-3 gap-2 p-4 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-5 ">
                    <div >
                        <img id='image-1' src='./projectshots/home.png' alt='furFinder home' loading="lazy" className="gallery_image" />
                    </div>   

                    <div >
                        <img id='image-2' src='./projectshots/bettercatcarousel.png' alt='Cat carousel' loading="lazy" className="gallery_image" />
                    </div> 

                    <div >
                        <img id='image-3' src='./projectshots/dogcarousel.png' alt='Dog carousel' loading="lazy" className="gallery_image" />
                    </div>

                    <div >
                        <img id='image-4' src='./projectshots/admin.png' alt='Admin' loading="lazy" className="gallery_image"/>
                    </div>

                    <div >
                        <img id='image-5' src='./projectshots/popup.png' alt='Popup' loading="lazy" className="gallery_image"/>
                    </div>
            </div>
            <p className="dark:text-white text-gray-800">This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responsible for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun! </p>
        </div>

        <div className="bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='border-b border-black dark:border-white p-1'>
                    <p className="font-semibold text-xl dark:text-white text-gray-800">Swansonator</p>
                    <p>React, REST API</p>
            </div>
        <div className="grid place-items-center lg:grid-cols-2 lg:grid-rows-1 gap-2 p-4 md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2">

            <div >
                <img src='./projectshots/swanquote.png' alt='Orange page with Ron Swanson in centre. A random quote from the character is featured below' loading='lazy' className="gallery_image"></img>
            </div>


            <div >
                <img src='./projectshots/swansearch.png' alt='Orange page with Ron Swanson in centre. A random quote from the character is featured below along with a keyword search.' loading='lazy' className="gallery_image"></img>
            </div>

        </div>

        <p className='about-project'>I made this Ron Swanson quote generator one day over Christmas break to practice using RESTful APIs. The 'New Quote' button returns a new quote from the API and the search bar searches for quotes based on user input. I kept the styling simple to reflect the character. I had a lot of fun with this silly little project!</p>
        </div>

        <div className='bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30'>
                    <div className='border-b border-black dark:border-white p-1'>
                            <p className="font-semibold text-xl dark:text-white text-gray-800">Disney+ Clone</p>
                            <p>React, Tailwind, Vite, Axios</p>
                    </div>
                <div className='grid place-items-center lg:grid-cols-2 lg:grid-rows-2 gap-2 p-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4'>

                    <div >
                        <img src='./projectshots/didneyclontop.png' alt='The top of the Disney+ clone is shown. A slider component with big film posters goes along the top of the screen, all of which grow slightly on hover and provide a small blurb for each film.'loading='lazy' className="gallery_image"></img>
                    </div>

                    <div >
                        <img src='./projectshots/didneyclonmid.png' alt='The rest of the Disney+ clone is shown. A slider component with small film and TV posters goes along the top of the screen, all of which grow slightly on hover.'loading='lazy' className="gallery_image"></img>
                    </div>

                    <div >
                        <img src='./projectshots/didneyoverlay.png' alt='Each movie or show in the Disney+ clone can be clicked on. When clicked, each item displays another picture from the film or show and an overview upon a blue-indigo gradient. This example shows the overview for a Spiderman film. ' loading='lazy' className="gallery_image" />
                    </div>

                    <div >
                        <span>
                            <a href='https://youtu.be/bsp8EUTfjUw' target="_blank" rel="noreferrer" >
                            <img src='./projectshots/Click4vid.png' alt='Click here for a video demonstration!' loading='lazy' className="gallery_image" />
                            </a>
                        </span>
                    </div>

                </div>
                <p className='about-project'>Using React, Tailwind and Vite, I set out to make a simple copy of Disney's UI. I used TMDB's API to populate the page with films and TV Shows, though I wasn't able to show trailers for each as the API lacks videos. This project helped me to learn Tailwind and it is now my favourite styling framework!</p>
                </div>

        <div className='bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30'>
                    <div className='border-b border-black dark:border-white p-1'>
                        <p className="font-semibold text-xl dark:text-white text-gray-800">Birthlink</p>
                        <p>Wordpress, Divi Builder, CSS</p>
                    </div>
                    <div className='grid place-items-center lg:grid-cols-3 lg:grid-rows-1 gap-2 p-4 md:grid-cols-1 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3'>

                    <div >
                        <img id='image-1' src='./projectshots/birthlinkhome.png' alt='Birthlink home' loading="lazy" className="gallery_image" /></div>

                        <div >
                        <img id='image-2' src='./projectshots/birthlinkdonate.png' alt='Birthlinks donate page' loading="lazy" className="gallery_image"/></div>

                        <div >
                        <img id='image-3' src='./projectshots/birthlinkabout.png' alt='Birthlinks history page' loading="lazy" className="gallery_image"/></div>

                    </div>
                    <p className='about-project'>I was given this project by Scottish Tech Army. Birthlink were looking for someone to revamp their website design into something more modern and colourful. This project taught me the importance of working closely with clients.</p>
                    </div>

                    <div className='bg-teal-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30'>
                    <div className='border-b border-black dark:border-white p-1'>
                        <p className="font-semibold text-xl dark:text-white text-gray-800">STA Map</p>
                        <p>HTML, CSS, JS, GoogleMaps, AWS</p>
                    </div>
                    <div className='grid place-items-center lg:grid-cols-3 lg:grid-rows-1 gap-2 p-4 md:grid-cols-1 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3'>
                        <div >
                            <img src="./projectshots/1stmap.png" alt='A small screenshot of a black and white map with colourful markers' loading='lazy' className='gallery_image'></img>
                        </div>
                        <div >
                            <img src="./projectshots/2ndmap.png" alt='A small screenshot of a black and white map with colourful markers' loading='lazy' className='gallery_image'></img>
                        </div>
                        <div >
                            <img src="./projectshots/3rdmap.png" alt='A small screenshot of a black and white map with colourful markers' loading='lazy' className='gallery_image'></img>
                        </div>
                    </div>
                    <p className='about-project'>I was assigned this project by Scottish Tech Army for their website. Myself and a colleague were tasked with creating an interactive map which displayed all the non-profits and charities that STA helped and how many hours went into each project. The style of the map was created in Google Maps Platform and the logic of the widget was written with HTML, CSS and vanilla JS.</p>
                    </div>

    </section>

    )
}
