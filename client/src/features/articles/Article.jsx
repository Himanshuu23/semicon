import { useParams } from 'react-router-dom'

export default function ArticlePage() {
  const { id } = useParams()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Article {id}</h1>
      <p>Content of the article.</p>
    </div>
  )
}
