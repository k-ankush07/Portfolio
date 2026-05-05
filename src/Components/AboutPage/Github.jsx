

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import gitprofile from "../../assets/Images/gitprofile.svg";
import gitblur from "../../assets/Images/gitblur.svg";
import GithubStats from "./GithubStats";

function Github() {
  const username =  import.meta.env.VITE_GITHUB_NAME;
  const API_URL = import.meta.env.VITE_API_URL;
  

  const [loading, setLoading] = useState(true);

  const [githubData, setGithubData] = useState({
    followers: 0,
    publicRepos: 0,
    following: 0,
    totalStars: 0,
    avatar: "",
    name: "",
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);

        const userRes = await fetch(
          `${API_URL}users/${username}?t=${Date.now()}`
        );
        const userData = await userRes.json();

        const repoRes = await fetch(
          `${API_URL}users/${username}/repos?per_page=100`
        );
        const repos = await repoRes.json();

        let totalStars = 0;
        repos.forEach((repo) => {
          totalStars += repo.stargazers_count;
        });

        setGithubData({
          followers: userData.followers,
          publicRepos: userData.public_repos,
          following: userData.following,
          totalStars,
          avatar: userData.avatar_url,
          name: userData.login,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="pb-4 px-2 lg:px-0">
      <div className="container">
        <div className="relative flex items-center justify-center">

          {/* Card */}
          <div className="github-card w-full lg:pl-[40px] lg:pt-[49px] lg:pb-[37px] lg:pr-[40px] rounded-[8px] border border-[#292929] relative">

            {/* Blur */}
            <div className="absolute right-0 overflow-hidden top-0 -z-10">
              <img src={gitblur} alt="blur image" />
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">

              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                  <img
                    src={loading ? gitprofile : githubData.avatar || gitprofile}
                    alt="git logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-[#FFFFFF] text-[24px] font-bold">
                    {loading ? "@loading..." : `@${githubData.name}`}
                  </h2>
                  <p className="text-[#BDBDBD] text-[14px]">
                    Collaboration Graph
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <h2 className="text-[#FFFFFF] text-[24px] font-bold">
                  {loading ? "..." : githubData.publicRepos}
                </h2>
                <p className="text-[#BDBDBD] text-[14px]">
                  Public Repositories
                </p>
              </div>
            </div>

            {/* Calendar */}
            <div className="github-calendar pt-[20px] overflow-x-auto">
              <GitHubCalendar
                username={username}
                blockSize={14}
                blockMargin={8}
                theme={{
                  light: [
                    "#FFFFFF",
                    "#c4b5fd",
                    "#a78bfa",
                    "#8b5cf6",
                    "#6d28d9",
                  ],
                  dark: [
                    "#1a1a1a",
                    "#c4b5fd",
                    "#a78bfa",
                    "#8b5cf6",
                    "#6d28d9",
                  ],
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <GithubStats githubData={githubData} loading={loading} />
      </div>
    </section>
  );
}

export default Github;