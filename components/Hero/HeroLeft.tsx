import React from 'react'

function HeroLeft() {
  return (
    <div className="flex flex-col gap-y-8 font-sans max-w-[480px]">
      <h1 className="text-6xl font-semibold">
        Hi, I&apos;m <span className="text-teal-600">Sercan Gundogan</span>
      </h1>
      <h4 className="text-lg text-slate-500">
        Frontend Developer, Tech Enthusiast,
        <br /> and Lifelong Learner.
      </h4>
      <button
        type="button"
        className="w-[200px] focus:outline-none text-white bg-teal-600 hover:bg-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Download Resume
      </button>
    </div>
  )
}

export default HeroLeft
