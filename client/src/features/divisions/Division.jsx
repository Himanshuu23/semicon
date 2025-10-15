import { useParams } from 'react-router-dom'

export default function DivisionPage() {
  const { name } = useParams()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold capitalize">{name} Division</h1>
      <p>Information about {name} division.</p>
    </div>
  )
}
