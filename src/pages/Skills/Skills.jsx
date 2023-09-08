
const Skills = () => {
    const skills = [
        { id: 1, name: 'Reactjs', percentage: '80%' },
        { id: 2, name: 'CSS', percentage: '85%' },
        { id: 3, name: 'javascript', percentage: '85%' },
        { id: 4, name: 'Firebase', percentage: '60%' },
        { id: 5, name: 'Hltml 5', percentage: '80%' },
        { id: 6, name: 'Bootstrap', percentage: '77%' },
        { id: 7, name: 'tailwindcss', percentage: '82%' },
        { id: 8, name: 'daisyui', percentage: '82%' },
        { id: 9, name: 'GIT', percentage: '65%' },
        { id: 10, name: 'java', percentage: '60%' },
        { id: 11, name: 'mongodb', percentage: '65%' },
        { id: 12, name: 'nodejs', percentage: '50%' },
        { id: 13, name: 'expressjs', percentage: '50%' },
        { id: 14, name: 'python', percentage: '55%' },
    ]


    return (
        <div>
            <div className="flex justify-center items center mt-10 md:flex-row flex-col">
                <h2 className="text-3xl font-bold border-b-4 h-12 w-[73px] border-orange-500">Skills</h2>
                <div className=" md:w-1/2 md:ml-24 ml-4 mb-2">
                    <h4>I love to learn new things and experiment with new technologies. These are some <br />of the major languages, technologies, tools and platforms I have worked with:</h4>
                    <br />

                    <div>
                    {/* show skills */}
                        {
                            skills.map(skill => <div key={skill.id}>
                                <div className=" text-center">
                                    <p className="font-bold text-lg text-start mb-1 uppercase">{skill.name}</p>
                                    <div className="relative bg-slate-500 md:w-96 w-80  h-6 rounded-md">
                                        <div style={{ width: `${skill.percentage}` }} className="absolute h-6 bg-orange-500 top-0 left-0 rounded-md">
                                            <p className="text-white">{skill.percentage}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;