import homeBgImg from '../../assets/home-bg.jpg';
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${homeBgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        }} className='bg h-screen -mt-[64px]'>

            <div className='flex justify-center items-center h-screen'>
                <div>
                    <h1 className='text-white text-6xl font-bold'>Mehedi Hasan</h1>
                     {/*designation */}
                    <div className='text-white flex justify-center mt-4'>
                        <h2 className='pr-2 text-2xl'>I{`'`}m </h2>
                        <p className='font-bold text-2xl'><Typewriter
                            options={{
                                strings: ['a React Front-end Developer', 'a SQA Engineer', 'a Web Designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></p>
                    </div>
                    {/* social media links */}
                    <div className='flex mt-12 justify-center'>
                        <p className='bg-white rounded-full hover:bg-slate-400 mx-2'><Link to='https://www.linkedin.com/in/mehedi-hasan-3279aa1a2/' target='blank'>
                            <FaLinkedinIn className=' p-2 w-10 h-10 text-black text-xl '></FaLinkedinIn>
                        </Link>
                        </p>
                        <p className='bg-white rounded-full hover:bg-slate-400 mx-2'><Link to='https://github.com/Mehedihasan023' target='blank'>
                            <FaGithub className=' p-2 w-10 h-10 text-black text-xl '></FaGithub>
                        </Link>
                        </p>
                        <p className='bg-white rounded-full hover:bg-slate-400 mx-2'><Link to='https://www.facebook.com/profile.php?id=100010227422824' target='blank'>
                            <FaFacebook className=' p-2 w-10 h-10 text-black text-xl '></FaFacebook>
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;