import volunteerImg from '../../assets/volunteer1.jpg';
import travelImg from '../../assets/travel1.jpg';
import newsImg from '../../assets/news1.jpg';
import careerImg from '../../assets/career1.jpg';
import exploreMealsImg from '../../assets/explore-meals1.jpg';
import educationImg from '../../assets/education1.jpg';

const Projects = () => {
    return (
        <div className='mb-10' >
            <h2 className="text-xl uppercase text-gray-500 text-center mt-5 mb-5">Check out some of my works</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full p-4 md:gap-4 gap-2 mx-auto'>
                {/* card */}
                {/* 1 no card */}
                <div className="border md:w-80 mx-auto w-full hover:shadow-xl">
                    <div>
                        <img className="w-full" src={volunteerImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold my-2'>Volunteer Network</h1>
                        <p className='p-2 text-justify'>Welcome to the Volunteer Network! This website allows users to choose events to volunteer for.
                            Users can view their registered events, delete registrations, and event organizers can add, delete, update or manage events.
                        </p>

                        <a target="blank" href="https://github.com/Mehedihasan023/volunteer-network-client"><button className="mx-2 btn btn-outline border-orange-500" >Github</button></a>

                        <a target="blank" href="https://volunteer-network-68360.web.app/"><button className="mx-2 btn btn-outline border-orange-500" >Live </button></a>

                        <div className='flex flex-wrap'>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>React</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Javascript</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Tailwind</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Firebase</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Mongodb</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Expressjs</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Vercel</p>
                        </div>

                    </div>
                </div>
                {/* 2 no card */}
                <div className="border md:w-80 mx-auto w-full hover:shadow-xl">
                    <div>
                        <img className="w-full" src={travelImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold my-2'>Travel Guru</h1>
                        <p className='p-2 text-justify'>Travel Guru is a web application built using React and Firebase that makes travel planning and hotel booking a breeze.Browse through a list of exciting destinations and select your desired travel location.
                        </p>

                        <a target="blank" href="https://github.com/Mehedihasan023/travel-guru-client"><button className="mx-2 btn btn-outline border-orange-500" >Github</button></a>

                        <a target="blank" href="https://travel-guru-auth-c6060.web.app/spots/1"><button className="mx-2 btn btn-outline border-orange-500" >Live </button></a>

                        <div className='flex flex-wrap'>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>React</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Javascript</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Tailwind</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Firebase</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Expressjs</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Vercel</p>
                        </div>

                    </div>
                </div>
                {/* 3 no card */}
                <div className="border md:w-80 mx-auto w-full hover:shadow-xl">
                    <div>
                        <img className="w-full" src={newsImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold my-2'>The Dragon News</h1>
                        <p className='p-2 text-justify'>The Dragon News is a website where you can get update news. You can choose category of news and view details of any news.
                        </p>

                        <a target="blank" href="https://github.com/Mehedihasan023/the-dragon-news-client"><button className="mx-2 btn btn-outline border-orange-500" >Github</button></a>

                        <a target="blank" href="https://the-news-dragon-ee79b.web.app/category/0"><button className="mx-2 btn btn-outline border-orange-500" >Live </button></a>

                        <div className='flex flex-wrap'>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>React</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Javascript</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Tailwind</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Firebase</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Expressjs</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Vercel</p>
                        </div>

                    </div>
                </div>
                {/* 4 no card */}
                <div className="border md:w-80 mx-auto w-full hover:shadow-xl">
                    <div>
                        <img className="w-full" src={careerImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold my-2'>Career Path</h1>
                        <p className='p-2 text-justify'>Career Path is a website where you can get available job listings. users can apply for jobs. Show job statistics according to company.
                        </p>

                        <a target="blank" href="https://github.com/Mehedihasan023/career-path-react"><button className="mx-2 btn btn-outline border-orange-500" >Github</button></a>

                        <a target="blank" href="https://carrer-path-react.netlify.app/"><button className="mx-2 btn btn-outline border-orange-500" >Live </button></a>

                        <div className='flex flex-wrap'>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>React</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Javascript</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Tailwind</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Netlify</p>

                        </div>

                    </div>
                </div>
                {/* 5 no card */}
                <div className="border md:w-80 mx-auto w-full hover:shadow-xl">
                    <div>
                        <img className="w-full" src={exploreMealsImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold my-2'>Explore latest meals</h1>
                        <p className='p-2 text-justify'>This Website is build with TheMealDb Api. Here you can search by any of your favourite meals to check the details and how they are made.Let{`'`}s find out which coutry meals you like most.
                        </p>

                        <a target="blank" href="https://github.com/Mehedihasan023/Explore-meals-with-TheMealDB-Api"><button className="mx-2 btn btn-outline border-orange-500" >Github</button></a>

                        <a target="blank" href="https://explore-meals-with-themealdb-api.netlify.app/"><button className="mx-2 btn btn-outline border-orange-500" >Live </button></a>

                        <div className='flex flex-wrap'>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Javascript</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Bootstrap</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Netlify</p>

                        </div>

                    </div>
                </div>
                {/* 6 no card */}
                <div className="border md:w-80 mx-auto w-full hover:shadow-xl">
                    <div>
                        <img className="w-full" src={educationImg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold my-2'>Patshala Education</h1>
                        <p className='p-2 text-justify'>Patshala Education is a education website where you can check different types of courses and check the outlines of any course.
                        </p>

                        <a target="blank" href="https://github.com/Mehedihasan023/paatshaala-education-Website-Mehedihasan023"><button className="mx-2 btn btn-outline border-orange-500" >Github</button></a>

                        <a target="blank" href="https://gallant-hypatia-557919.netlify.app/home"><button className="mx-2 btn btn-outline border-orange-500" >Live </button></a>

                        <div className='flex flex-wrap'>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>React</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Javascript</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Bootstrap</p>
                            <p className=' rounded-full border w-min h-6 px-2 mx-1 text-white bg-black my-2'>Netlify</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;