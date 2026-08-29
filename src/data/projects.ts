export type VideoSource =
  | { type: 'file'; src: string; poster?: string }
  | { type: 'bilibili'; bvid: string }

export interface Project {
  id: string
  index: string
  title: string
  tags: string[]
  desc: string
  videos: VideoSource[]
}

export const mainProjects: Project[] = [
  {
    id: 'huaguzi',
    index: '01',
    title: '《花姑子》概念短片',
    tags: ['AIGC', '视觉风格探索'],
    desc: '《聊斋·花姑子》改编概念测试短片。以多轮迭代的视觉风格文档约束 AIGC 图像资产的产出，保持全片画面风格一致。',
    videos: [{ type: 'file', src: 'videos/huaguzi.mp4', poster: 'posters/huaguzi.jpg' }],
  },
  {
    id: 'anhai',
    index: '02',
    title: '《暗海沉祭》',
    tags: ['AIGC', '全流程练习'],
    desc: '校内练习作品。从剧本拆分镜、故事板到静帧与图生视频，走完一遍 AIGC 短片的完整流程。',
    videos: [{ type: 'file', src: 'videos/anhai.mp4', poster: 'posters/anhai.jpg' }],
  },
  {
    id: 'ajing',
    index: '03',
    title: '《阿静与纸车》',
    tags: ['AIGC', '剧本改编'],
    desc: '剧本改编作业，改编自《星之子》。',
    videos: [{ type: 'file', src: 'videos/ajing.mp4' }],
  },
]

export const practiceItems: Project[] = [
  {
    id: 'overthinker',
    index: '04',
    title: 'Overthinker',
    tags: ['After Effects', '练习作业'],
    desc: '',
    videos: [{ type: 'file', src: 'videos/ae-overthinker.mp4' }],
  },
  {
    id: 'qizi',
    index: '05',
    title: '棋子',
    tags: ['Maya', '动画练习'],
    desc: '',
    videos: [{ type: 'file', src: 'videos/maya-qizi.mp4' }],
  },
  {
    id: 'maya-ue5',
    index: '06',
    title: '场景渲染',
    tags: ['Maya 建模', 'Unreal Engine 5'],
    desc: '',
    videos: [{ type: 'file', src: 'videos/maya-ue5.mp4' }],
  },
  {
    id: 'pixel',
    index: '07',
    title: '手绘像素动画两则',
    tags: ['像素动画', '练习作业'],
    desc: '',
    videos: [
      { type: 'file', src: 'videos/pixel-1.mp4' },
      { type: 'file', src: 'videos/pixel-2.mp4' },
    ],
  },
]
