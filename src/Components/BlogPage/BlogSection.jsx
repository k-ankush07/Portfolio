import React from "react";
import container from "../../assets/Images/abs.svg"
import container1 from "../../assets/Images/abs (1).svg"
import container2 from "../../assets/Images/abs (2).svg"

// import container2 from "../../assets/Images/container (2).svg"
const posts = [
  {
    title: "Every Tool in My Terminal-First Dev Setup",
    desc: "Neovim, Wezterm, Tmux, and the rest — what survived two years of daily use and why I picked each one over the obvious alternatives.",
    date: "Oct 19, 2025",
    read: "12 min read",
    image: container
  },
  {
    title: "Build a Blog with Next.js and MDX from Scratch",
    desc: "File-based content, zero database, full control. A complete walkthrough of building a statically-generated blog with Next.js, MDX, and gray-matter.",
    date: "Mar 12, 2025",
    read: "11 min read",
    image: container1
  },
  {
    title: "What I'd Tell Myself Before Learning to Code",
    desc: "The myths, mistakes, and mindset shifts that separate people who learn to code from people who quit. Hard-won lessons from my first two years.",
    date: "Dec 05, 2024",
    read: "10 min read",
    image:container2
  },
  
];

export default function BlogSection() {
  return (
    <div className=" text-white lg:pt-[8px] ">
      <div className="  grid md:grid-cols-3 gap-6">

        {posts.map((post, index) => (
          <div
            key={index}
            className=" rounded-[8px] overflow-hidden "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt="blog"
                className="w-full h-[290px] rounded-[8px]   object-cover"
              />

              {/* Badge */}
             <div className="flex  pt-[21px] ">
                 <div className=" bg-[#f4a261] text-[#000000] text-[14px] leading-[21px] font-bold px-3 py-1 rounded-[8px] font-medium">
                {post.date}•{post.read}
              </div>
                </div>
            </div>

            {/* Content */}
            <div className="py-[21px] max-w-[400px] ">
              <h3 className="text-[24px] text-start font-bold mb-2 leading-[33px]">
                {post.title}
              </h3>
              <p className="text-[16px] text-start leading-[24px] text-[#BDBDBD]">
                {post.desc.split(" ").slice(0, 12).join(" ")}
  {post.desc.split(" ").length > 12 && " ..."}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}