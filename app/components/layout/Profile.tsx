import SkillCard from "@/app/components/features/profile/SkillCard";
import { Button } from "@/app/components/ui/button";
import { githubUrl, xUrl } from "@/app/lib/constants/githubInfo";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="container mx-auto p-4 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="h-1/2 relative w-full md:w-1/2 aspect-square max-w-[500px] mx-auto">
          {/* Image Container */}
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            fill
            className="object-contain rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 flex flex-col w-full md:w-1/2 gap-8">
          {/* Title */}
          <div className="text-4xl md:text-7xl font-bold text-center md:text-left">
            Hello, I am
            <br />
            <span>Software Engineer</span>
          </div>
          {/* Description */}
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed text-center md:text-left ">
            東京都在住。
            <br />
            独学▶︎自社・受託開発会社▶︎フリーランス。
            <br />
            フロントエンド技術をメインに仕事をしています。
          </p>
          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-2">
            <Button
              asChild
              variant="ghost"
              className="flex-1 ring-1 ring-black bg-black text-white"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5" />
                <span>View My GitHub</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="flex-1 ring-1 ring-black"
            >
              <Link href={xUrl} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5" />
                <span>View My X</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Text Container */}
      <div className="flex flex-col gap-24 py-24">
        {/* Skills Container */}
        <div className="flex flex-col gap-12 justify-center ">
          {/* Biography Title */}
          <div className="flex items-center">
            <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300 text-transparent">
              SKILLS
            </h2>
          </div>
          {/* Skills List */}
          <p>仕事で使っている主な技術やツールです。</p>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillCard skillName={"HTML"} skillImage="html5" />
            <SkillCard skillName={"CSS"} skillImage="css" />
            <SkillCard skillName={"Tailwind"} skillImage="tailwind" />
            <SkillCard skillName={"JavaScript"} skillImage="javascript" />
            <SkillCard skillName={"typescript"} skillImage="typescript" />
            <SkillCard skillName={"React"} skillImage="react" />
            <SkillCard skillName={"Next.js"} skillImage="nextjs" />
            <SkillCard skillName={"Ruby"} skillImage="ruby" />
            <SkillCard skillName={"Ruby on Rails"} skillImage="rubyonrails" />
            <SkillCard skillName={"Docker"} skillImage="docker" />
            <SkillCard skillName={"Git / GitHub"} skillImage="github" />
            <SkillCard skillName={"Linux"} skillImage="linux" />
          </div>
        </div>
        {/* Experience Container */}
        <div className="flex flex-col gap-12 justify-center ">
          {/* Experience Title */}
          <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300 text-transparent">
            EXPERIENCE
          </h2>
          {/* Experience LIST */}
          <div className="max-w-lg mx-auto">
            {/* Experience LIST ITEM */}
            <div className="flex justify-between">
              {/* Left */}
              <div className="w-1/3">
                {/* Job Title */}
                <div className="bg-white p-3 font-semibold rounded  dark:text-gray-800">
                  Freelancer
                </div>
                {/* Job Description */}
                <div className="p-3 text-sm italic">
                  I am mainly involved in the frontend development of Next.js. I
                  use rails for the backend.
                </div>
                {/* Job Date */}
                <div className="p-3 rounded text-sm text-sky-500 font-semibold">
                  2024 - Present
                </div>
                {/* Job Company */}
              </div>
              {/* Center */}
              <div className="w-1/6 flex justify-center">
                {/* Line */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* Line Circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-sky-500 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 ">
                {/* Right */}
                <div></div>
              </div>
            </div>
            {/* Experience LIST ITEM */}
            <div className="flex justify-between">
              {/* Left */}
              <div className="w-1/3"></div>
              {/* Center */}
              <div className="w-1/6 flex justify-center">
                {/* Line */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* Line Circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-sky-500 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3">
                {/* Right */}
                <div>
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded  dark:text-gray-800">
                    React Developer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                    I was mainly involved in the frontend development of React
                    and eventually experienced the unit leader.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 rounded text-sm text-sky-500 font-semibold">
                    2023 - 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
