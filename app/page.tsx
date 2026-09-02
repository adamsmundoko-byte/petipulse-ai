export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] p-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-6xl mb-4">📢</div>
        <h1 className="text-5xl font-bold text-[#2B3A67] mb-3">Petipulse</h1>
        <p className="text-2xl text-gray-700 mb-2">Your AI Petition App for Zimbabwe</p>
        <p className="text-lg text-[#7F8D97] mb-8">Create change. Get signatures. Be heard.</p>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 text-left mb-8">
          <h2 className="text-xl font-bold text-[#2B3A67] mb-2">Featured Petition</h2>
          <h3 className="text-lg font-semibold">Protected Occupier Bill 2026</h3>
          <p className="text-sm text-gray-600 mb-3">Protect many families who bought land in good faith from arbitrary demolition</p>
          <div className="bg-[#F9F7F2] p-3 rounded-lg mb-4">
            <p className="font-bold">Goal: 1,000,000 signatures</p>
          </div>
          <button className="w-full bg-[#FF6B6B] hover:bg-red-500 text-white font-bold py-3 rounded-xl">
            Sign Petition
          </button>
        </div>

        <button className="bg-[#2B3A67] hover:bg-indigo-900 text-white font-bold py-4 px-8 rounded-xl text-lg">
          + Start a Petition
        </button>
      </div>
    </main>
  )
}
