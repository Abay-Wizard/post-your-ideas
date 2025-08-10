import { Link } from 'react-router-dom';


const HomePage = () => {

    return (
        <section className='mx-auto w-full py-16 px-6 flex flex-col items-center gap-8 bg-red-50'>
            <div className='flex flex-col sm:flex-row items-center gap-8'>
                <img 
                className='w-60 h-60 rounded-lg hover:translate-y-2 hover:shadow-md' 
                src='https://www.shutterstock.com/shutterstock/photos/1114968320/display_1500/stock-vector-seo-infographic-content-for-creative-blog-post-blogger-character-can-use-for-web-banner-1114968320.jpg' 
                alt='blog hero' 
                />
                <div className='h-auto w-full sm:w-80'>
                <p className='flex-1 ml-0 sm:ml-6 h-full w-full text-xl text-gray-800'>
                    Embrace your unique voice and share your passion. Every post is an opportunity to connect, inspire, and make a difference. Don't fear mistakes; they lead to growth. Stay consistent, engage with your audience, and remember: your words have the power to uplift and transform lives. Keep writing!
                </p>
                </div>
            </div>
            <button className='bg-green-800 rounded-2xl py-2 text-white w-1/2 sm:w-1/3 mt-10'>
                <Link className='flex justify-center gap-2 hover:gap-4 text-3xl font-semibold' to='/register'>
                Get Started <span className='hover:ml-2'>→</span>
                </Link>
            </button>
    </section>
    );
}

export default HomePage;