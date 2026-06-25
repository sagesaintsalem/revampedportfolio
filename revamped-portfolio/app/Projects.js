

export default function Projects() {
    return (
        <section className="flex flex-col justify-between gap-4 p-4">
        <div className="bg-indigo-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='heading'>
                <p className="font-semibold dark:text-white text-gray-800">Halloween Hints</p>
                <p>HTML, Bootstrap</p>
            </div>
                <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-2 p-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 ">
                    <div>
                        <img src='./halloweenhome.png' alt='Ritas black and orange halloween homepage. There is a picture of the 3 witches from MacScottishplay' loading='lazy' className="gallery_image"></img>
                    </div>

                    <div className="gallery_item">
                        <img src='./halloweenmusic.png' alt='Ritas black and orange halloween music page. There is a Spotify widget of Ritas very own halloween playlist.' loading='lazy' className="gallery_image"></img>
                    </div>

                    <div className="gallery_item">
                        <img src='./halloweengames.png' alt='Ritas black and orange halloween video games page.' loading='lazy' className="gallery_image"></img>
                    </div>
                </div>
            <p className='dark:text-white text-gray-800'>This was the very first website that I built, before I had even started at CodeClan. I really enjoyed making this site as it's all about my favourite day of the year - Halloween! </p>
        </div>

        <div className="bg-indigo-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='heading'>
                <strong><p className="font-semibold dark:text-white text-gray-800">NoteClan</p></strong>
                <em><p>Python, Flask, SQL</p></em>
            </div>
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-2 p-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 ">

                <div className="gallery_item">
                    <img id='image-1' src='./projectshots/noteclanhome.png' alt='Noteclan home' loading="lazy" className="gallery_image" /></div>

                <div className="gallery_item">
                    <img id='image-2' src='./projectshots/noteclanstudios.png' alt='Note home' loading="lazy" className="gallery_image"/></div>

                <div className="gallery_item">
                    <img id='image-3' src='./projectshots/noteclanform.png' alt='Phone home' loading="lazy" className="gallery_image"/></div>

                <div className="gallery_item">
                    <img id='image-4' src='./projectshots/noteclanbookings.png' alt='Phone home' loading="lazy" className="gallery_image"/></div>
            </div>
            <p className='dark:text-white text-gray-800'>This was my first project at CodeClan, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.</p>
        </div>

        <div className="bg-indigo-500/30  md:backdrop-blur-3xl md:backdrop-saturate-150 border-white/20 rounded-2xl p-6 shadow-md/30">
            <div className='heading'>
                <strong><p className="font-semibold dark:text-white text-gray-800">furFinder</p></strong>
                <em><p>React, MongoDB</p></em>

            </div>
            <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-2 p-4 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-5 ">
                    <div className="gallery_item">
                        <img id='image-1' src='./projectshots/home.png' alt='furFinder home' loading="lazy" className="gallery_image" />
                    </div>   

                    <div className="gallery_item">
                        <img id='image-2' src='./projectshots/bettercatcarousel.png' alt='Cat carousel' loading="lazy" className="gallery_image" />
                    </div> 

                    <div className="gallery_item">
                        <img id='image-3' src='./projectshots/dogcarousel.png' alt='Dog carousel' loading="lazy" className="gallery_image" />
                    </div>

                    <div className="gallery_item">
                        <img id='image-4' src='./projectshots/admin.png' alt='Admin' loading="lazy" className="gallery_image"/>
                    </div>

                    <div className="gallery_item">
                        <img id='image-5' src='./projectshots/popup.png' alt='Popup' loading="lazy" className="gallery_image"/>
                    </div>
            </div>
            <p className="dark:text-white text-gray-800">This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responsible for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun! </p>
        </div>


    </section>

    )
}
