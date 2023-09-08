
const Education = () => {
    return (
        <div className="flex md:justify-center md:items-center justify-start mt-10 md:ml-0 ml-5 relative">
            <div className="relative ">
                <div className="h-80 w-1 bg-slate-500 rounded-full"></div>
            {/* 1 no step */}
                <div className="absolute w-5 h-5 rounded-full bg-white top-0 -left-2  border-[3px] border-dashed border-slate-400  animate-spin-slow">
                </div>
            {/* 2 no step */}
                <div className="absolute w-5 h-5 rounded-full bg-white top-28 -left-2  border-[3px] border-dashed border-slate-400  animate-spin-slow">
                </div>
            {/* 3 no step */}
                <div className="absolute w-5 h-5 rounded-full bg-white top-60 -left-2  border-[3px] border-dashed border-slate-400  animate-spin-slow">
                </div>
          {/* education  no 1 */}
                <div className=" absolute -top-3  md:-left-80 left-7">
                    <div className="relative">
                        <div className="text-start pl-6 pt-6  relative z-10 w-72 h-28 shadow-xl bg-white border">
                            <h2 className="font-bold text-orange-500">B.sc in CSE</h2>
                            <h1 className="font-bold">Daffodil International University</h1>
                             <h2 className="text-gray-600">CGPA: 3.54  </h2>
                        </div>
                        {/* arrow */}
                        <div className="bg-white border shadow-xl w-4 h-4 rotate-45 absolute top-3 -left-2  md:left-[279px] z-0">
                        </div>
                    </div>
                </div>
          {/* education  no 2 */}
                <div className=" absolute top-28  right-7 left-7">
                    <div className="relative">
                        <div className="text-start pl-6 pt-6  relative z-10 w-72 h-28 shadow-xl bg-white border">
                            <h2 className="font-bold text-orange-500">HSC Science</h2>
                            <h1 className="font-bold">Queen{`'`}s College</h1>
                             <h2 className="text-gray-600">GPA: 3.92  </h2>
                        </div>
                        {/* arrow */}
                        <div className="bg-white border shadow-xl w-4 h-4 rotate-45 absolute top-1 -right-2 z-0">
                        </div>
                    </div>
                </div>
                {/* education  no 3 */}
                <div className=" absolute top-60  md:-left-80 left-7">
                    <div className="relative">
                        <div className="text-start pl-6 pt-6  relative z-10 w-72 h-28 shadow-xl bg-white border">
                            <h2 className="font-bold text-orange-500">SSC Science</h2>
                            <h1 className="font-bold text-sm">Mohammadpur Govt Boy{`'`}s High
                                School</h1>
                            <h2 className="text-gray-600">CGPA: 4.33  </h2>
                        </div>
                        {/* arrow */}
                        <div className="bg-white border shadow-xl w-4 h-4 rotate-45 absolute top-1 -left-2  md:left-[279px] z-0">
                        </div>
                    </div>

                </div>
 
            </div>
        


        </div>
    );
};

export default Education;