import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import {  Slide } from "react-awesome-reveal";
import profilePic from '../../assets/profile-pic.png';
import './About.css'
const About = () => {
    return (
        <div className="bg-[#2B2B2B] h-screen -mt-[64px]">

            <div className="flex justify-center items-center h-screen">
                {/* about me */}

                <div className="flex relative md:flex-row  flex-col-reverse">
                    <Slide>
                        <div className="md:w-96 w-72 md:m-0 m-10 text-start">
                            <h1 className="text-white text-2xl font-bold mb-3">About Me</h1>
                            <p className="text-gray-300">Hi ! , My name is Mehedi Hasan , I{`'`}m a Reactjs Developer  and a SQA Engineer.Proficient in developing robust  applications and conducting comprehensive testing to  ensure high-quality software deliverables.</p>
                            <h1 className="text-white text-lg font-bold mt-3 mb-3">Contact Me</h1>
                            <p className="text-gray-300 flex"><FaMapMarkerAlt className="text-orange-500 mt-1 mr-1"></FaMapMarkerAlt> Mohammadpur, Dhaka</p>
                            <p className="text-gray-300 flex mt-2"><FaPhoneAlt className="text-orange-500 mt-1 mr-1"></FaPhoneAlt>01868354285, 01827153894</p>
                            <p className="text-gray-300 flex mt-2"><FaRegEnvelope className="text-orange-500 mt-1 mr-1"></FaRegEnvelope>mh20973@gmail.com</p>
                            {/* button to download cv */}
                            <button className="btn btn-outline border-orange-500 hover:bg-orange-500 text-uppercase  text-white mt-2">
                                <a href="https://drive.google.com/uc?export=download&id=1sOQ1u9Yrq83mkwNinE0pNM6Ost49TDnT"> Download cv</a>
                            </button>
                        </div>
                    </Slide>
                      {/* profile image */}
                    <div className="md:w-3/5 md:m-0  m-6"> 
                        <img className="profile-pic md:w-80 md:h-80 w-64 h-64 " src={profilePic} alt="" /> 
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;