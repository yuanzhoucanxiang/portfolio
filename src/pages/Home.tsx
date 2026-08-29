import { useEffect } from 'react'
import { mainProjects, practiceItems, type Project } from '../data/projects'
import VideoPlayer from '../components/VideoPlayer'
import '../App.css'

function Tag({ children }: { children: string }) {
  return (
    <span className="border border-[#3a382f] px-2.5 py-0.5 text-xs tracking-widest text-[#a39e92]">
      {children}
    </span>
  )
}

function MainWork({ project }: { project: Project }) {
  return (
    <article id={project.id} className="scroll-mt-24">
      <div className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="kaiti text-2xl text-[#b8442e]">{project.index}</span>
        <h3 className="kaiti text-3xl text-[#ece8de]">{project.title}</h3>
        <div className="flex gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
      {project.desc && (
        <p className="mb-6 max-w-2xl leading-relaxed text-[#a39e92]">{project.desc}</p>
      )}
      <div className="frame">
        {project.videos.map((v, i) => (
          <VideoPlayer key={i} source={v} title={project.title} />
        ))}
      </div>
    </article>
  )
}

function PracticeWork({ project }: { project: Project }) {
  return (
    <article id={project.id} className="scroll-mt-24">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="kaiti text-lg text-[#b8442e]">{project.index}</span>
        <h3 className="kaiti text-xl text-[#ece8de]">{project.title}</h3>
        <div className="flex gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
      <div className={`frame grid gap-px bg-[#2a2925] ${project.videos.length > 1 ? 'grid-cols-2' : ''}`}>
        {project.videos.map((v, i) => (
          <VideoPlayer key={i} source={v} title={`${project.title} ${i + 1}`} />
        ))}
      </div>
    </article>
  )
}

export default function Home() {
  useEffect(() => {
    // SPA 首屏渲染完成后，若 URL 带锚点则滚动到对应区块
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div className="min-h-screen bg-[#111110] text-[#e8e4dc] antialiased">
      {/* 顶栏 */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-[#2a2925]/80 bg-[#111110]/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="kaiti text-lg tracking-wide text-[#ece8de]">
            吴东林 · 视频作品集
          </a>
          <nav className="flex gap-6 text-sm text-[#a39e92]">
            <a href="#main" className="transition-colors hover:text-[#ece8de]">主要作品</a>
            <a href="#practice" className="transition-colors hover:text-[#ece8de]">练习与杂项</a>
          </nav>
        </div>
      </header>

      {/* 首屏 */}
      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src="posters/huaguzi.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111110]/70 via-[#111110]/35 to-[#111110]" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-20">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#a39e92]">VIDEO PORTFOLIO</p>
          <h1 className="kaiti text-6xl leading-tight text-[#f2eee4] md:text-7xl">吴东林</h1>
          <p className="kaiti mt-3 text-2xl text-[#cfc9bb]">视频作品集</p>
          <p className="mt-6 text-sm tracking-widest text-[#8f8a7d]">AIGC 内容创作 · 2027 届</p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">
        {/* 主要作品 */}
        <section id="main" className="scroll-mt-24 pt-20">
          <div className="mb-12 flex items-baseline gap-4 border-b border-[#2a2925] pb-4">
            <h2 className="kaiti text-2xl text-[#ece8de]">主要作品</h2>
            <span className="text-sm text-[#6f6a5f]">3 部</span>
          </div>
          <div className="space-y-24">
            {mainProjects.map((p) => (
              <MainWork key={p.id} project={p} />
            ))}
          </div>
        </section>

        {/* 练习与杂项 */}
        <section id="practice" className="scroll-mt-24 pt-24 pb-24">
          <div className="mb-12 flex items-baseline gap-4 border-b border-[#2a2925] pb-4">
            <h2 className="kaiti text-2xl text-[#ece8de]">练习与杂项</h2>
            <span className="text-sm text-[#6f6a5f]">4 组</span>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {practiceItems.map((p) => (
              <PracticeWork key={p.id} project={p} />
            ))}
          </div>
        </section>
      </main>

      {/* 尾页 */}
      <footer className="border-t border-[#2a2925]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="kaiti text-xl text-[#cfc9bb]">衷心感谢您的时间</p>
          <p className="mt-3 text-xs tracking-[0.3em] text-[#6f6a5f]">WU DONGLIN · VIDEO PORTFOLIO</p>
        </div>
      </footer>
    </div>
  )
}
