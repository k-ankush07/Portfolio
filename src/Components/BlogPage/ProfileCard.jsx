import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import GradientBorderButton from "../Homepage/GradientBorderButton";
import { FaLocationDot } from "react-icons/fa6";
export default function ProfileCard() {
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-center  text-white">

                    <div className="w-full  rounded-2xl border border-white/10  overflow-hidden shadow-xl">

                        {/* Top Gradient Banner */}
                        <div className="h-32 bg-gradient-to-r from-[#8F74BF] via-[#DF7A78] to-[#DF7A78] blur-3xl relative">

                            {/* Avatar */}
                            <div className="absolute left-6 z-50 bottom-[-40px] w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center text-3xl font-bold border-4 border-black">
                                AK
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pt-12">

                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>
                                    <h2 className="text-xl font-semibold">Jenny Wilson</h2>
                                    <p className="text-sm text-gray-400">
                                        Product Designer @ Google
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3 flex-wrap">
                                    <div className='flex justify-center'>
                                        <div className="flex justify-center">
                                            <div className="relative inline-block rounded-md p-[1.5px] overflow-hidden">

                                                {/* SLOW ROTATING BORDER */}
                                                <span className="absolute -inset-[250%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(#3A1C71,#DF7A78,#DF7A78,#3A1C71)]"></span>

                                                {/* CONTENT */}
                                                <div className="relative z-10 flex items-center gap-1 rounded-md bg-[#181818] px-2 py-1.5 text-[10.59px] sm:text-[12px] xl:px-4 text-white">

                                                    <span className="text-[#FFAF7B] px-1 py-1">
                                                        <FaLocationDot />
                                                    </span>

                                                    <span className="text-[#c58962]">
                                                        London, United Kingdom
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <span className="text-xs px-3 py-1 rounded-[9.41px] border border-orange-500 text-orange-400">
                London, United Kingdom
              </span> */}

                                    {/* Icons */}
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                            <FaLinkedin />
                                        </button>
                                        <button className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                            <FaGithub />
                                        </button>
                                        <button className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                            <FaXTwitter />
                                        </button>
                                        <button className="p-2 rounded-md bg-white/10 hover:bg-white/20">
                                            <MdEmail />
                                        </button>
                                    </div>

                                    <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200">
                                        Hire Me
                                    </button>
                                </div>
                            </div>

                            {/* Cards */}
                            <div className="grid md:grid-cols-3 gap-4 mt-6">

                                {/* Work */}
                                <div className="bg-[#111] border border-white/10 rounded-[8px] p-4">
                                    <h3 className="text-sm font-semibold mb-2">Work</h3>
                                    <p className="text-xs text-gray-400">
                                        Ossinski, Kohler and Bashirian
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="bg-[#111] border border-white/10 rounded-[8px] p-4">
                                    <h3 className="text-sm font-semibold mb-2">Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Brand Design", "UI Design", "Figma", "Sketch"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Portfolio */}
                                <div className="bg-[#111] border border-white/10 rounded-[8px] p-4">
                                    <h3 className="text-sm font-semibold mb-2">Portfolio Links</h3>
                                    <div className="flex gap-3">
                                        <FaLinkedin />
                                        <FaGithub />
                                        <FaXTwitter />
                                    </div>
                                </div>
                            </div>

                            {/* About */}
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold mb-2">
                                    Full-Stack Developer and a little bit of everything
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    I'm Ayush Bharti, a proactive full-stack developer passionate about creating
                                    dynamic web experiences. From frontend to backend, I thrive on solving
                                    complex problems with clean, efficient code.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}