import React from 'react'

type Props = {}

const HomePageComponent = (props: Props) => {
  return (
    <main className="Home Page flex flex-col justify-center">
      <div className="Page-Content">
        <div className="flex flex-col gap-y-4">
          <span className="font-semibold text-zinc-400 text-lg sm:text-xl md:text-2xl">
            Hi 👋, I am
          </span>

          <div className="font-Caveat text-6xl md:text-7xl -mt-1">
            Emre Erden
          </div>

          <div className="font-semibold text-xl sm:text-2xl md:text-3xl">
            <span className="text-zinc-400">{'<'}</span>

            <span className="sm:ml-0.5 text-pink-500">Front-End Developer</span>

            <span className="text-zinc-400">{' />'}</span>
          </div>
        </div>

        <div className="max-w-[550px]">
          I'm working to be an experienced developer in the Front-End world. In
          this profession, I'm open to learning and improving myself. I enjoy
          learning new things and constantly improving myself.
        </div>

        <a
          href="https://flowcv.com/resume/l3ncgjown0"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-md py-2 px-4 w-max shadow-sm hover:border-zinc-400 transition-colors"
        >
          View CV
        </a>
      </div>
    </main>
  )
}

export default HomePageComponent
