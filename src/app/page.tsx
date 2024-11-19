import { getAllTopics } from '@/actions/topicActions'
import TopicsList from '@/components/TopicList'
import { Suspense } from 'react'

export default async function Home() {
  const { topics } = await getAllTopics()

  return (
    <div>
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD Example</p>
      <Suspense fallback={<div>로딩 중...</div>}>
        <TopicsList topics={topics} />
      </Suspense>
    </div>
  )
}
