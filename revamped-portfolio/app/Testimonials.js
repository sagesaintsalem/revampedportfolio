const Testimonials = () => {

    const praise = [
        {
            name: 'Merilee Morales',
            quote: "Rita is a dedicated employee. She is able to focus completely on a project she is working on, and sees it through to completion. I worked with her on a project supporting Neurodiversities, and she was a tireless presenter and advocate. Rita would be an asset to any organization."
    },
        {
            name: "S.G.",
            quote: "Rita is an asset to any workforce looking to diversify. She brings the out of the box thinking that births trailblazing ideas. She is tenacious and takes any challenges in her stride. Rita is a pleasure to work with and is very mindful of the needs of those she works with."
        },

        {
            name:"John Donald",
            quote:"Rita's drive and passion was clear for all to see while working on and presenting projects to team members. Her technical and soft skills were a great benefit to all the teams she worked with. Rita is a big advocate and helped promote diversity within the work place and outside of it. Rita will be a huge asset for any team she joins."
        },

        {
            name: "Tony Prasad",
            quote: "Rita is a highly enthusiastic and engaged team member. She proves her passion through the creativity she adds to her work. I respect Rita's honesty and the character that she brings to work. I wish Rita the best of luck in her future endeavours."
        },
        {
            name: "Abbi Jackson, Birthlink",
            quote: "We have benefited enormously as a charity from Rita’s stickability and tenacity. We would not be where we are now without her expertise, commitment and follow through. I expect that she would be an asset to any employer as she has been for us."
        }
    ]
    
   


    return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10 md:grid-cols-1 md:grid-rows-7 md:gap-4 sm:grid-cols-1 sm:grid-rows-7 sm:gap-2">
    
    {praise.map((praiser, index) => 
        <div key={index} className="bg-indigo-400/30 backdrop-blur-3xl backdrop-saturate-150 border-white/20 rounded-2xl p-3 shadow-md">
            <p className="text-black dark:text-white mb-4">{praiser.quote}</p>
        <p className="font-semibold text-gray-800 dark:text-white"><em>{praiser.name}</em></p>
        </div>)}

    </div>
    )
}

export default Testimonials;