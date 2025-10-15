export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Join Us / Contact</h1>
      <form className="max-w-md mx-auto space-y-4 mt-6">
        <input type="text" placeholder="Name" className="border p-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <textarea placeholder="Message" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  )
}
