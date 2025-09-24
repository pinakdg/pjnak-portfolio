export default function ContactForm(){
  // Replace ACTION_URL with your Formspree/EmailJS endpoint. For now it just opens mail client.
  const ACTION_URL = null

  const handleSubmit = (e) => {
    if(!ACTION_URL){
      e.preventDefault()
      window.location.href = 'mailto:hello@example.com?subject=Portfolio%20Contact'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-sm text-gray-400 mb-4">This form will open your mail client by default. To enable form submissions without email, connect Formspree/EmailJS (see README).</p>
      <div className="grid gap-3">
        <label className="text-sm">
          Name
          <input className="mt-1 w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2" required />
        </label>
        <label className="text-sm">
          Email
          <input type="email" className="mt-1 w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2" required />
        </label>
        <label className="text-sm">
          Message
          <textarea rows="5" className="mt-1 w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2" required></textarea>
        </label>
      </div>
      <button className="mt-3 px-4 py-2 rounded-lg bg-white text-gray-900">Send</button>
    </form>
  )
}
