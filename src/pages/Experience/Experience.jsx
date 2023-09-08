
const Experience = () => {
    return (
        <div className="flex items-center  justify-center  mt-10 md:mr-0  relative">
            <div className="relative">
                <div className="h-64 w-1 bg-slate-500 rounded-full"></div>
                {/* 1 no step */}
                <div className="absolute w-5 h-5 rounded-full bg-white top-3 -left-2  border-[3px] border-dashed border-slate-400  animate-spin-slow">
                </div>
        
                {/* experience  */}
                  <div className=" absolute top-0  md:left-7 left-5">
                    <div className="relative">
                        <div className="text-start p-5 pt-6  relative z-10 md:w-80 w-44  md:h-52 shadow-xl bg-white border">
                            <h2 className="font-bold text-orange-500">SQA Engineer</h2>
                            <h1 className="font-bold md:text-xl">Zaynax Health <span className="text-gray-600"> .Internship</span>
                            </h1>
                            <h2><span className="text-2xl font-bold">.</span> Find bugs, work with development
                                team to resolve and verify fixes
                                when implemented.</h2>
                            
                        </div>
                        {/* arrow */}
                        <div className="bg-white border shadow-xl w-4 h-4 rotate-45 absolute top-3  -left-2 z-0">
                        </div>
                    </div>
                </div>
              {/* experience date */}
                <div className=" absolute top-0  md:-left-40 -left-40 ">
                    <div className="relative">
                        <div className="text-start p-2 pt-3  relative z-10 w-36 h-10 shadow-xl bg-white border">
                           
                            <p className="text-xs font-semibold">2022(Dec)-2023(March)</p>

                        </div>
                        
                    </div>
                </div>  
                

            </div>



        </div>
    );
};

export default Experience;