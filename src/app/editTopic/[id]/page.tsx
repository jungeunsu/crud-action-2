import { getTopic } from '@/actions/topicActions'
import EditTopicForm from '@/components/EditTopicForm'

export default async function EditTopic({
  params,
}: {
  params: { id: string }
}) {
  const { topic } = await getTopic(params.id)

  return (
    <EditTopicForm
      id={topic._id}
      title={topic.title}
      description={topic.description}
    />
  )
}
