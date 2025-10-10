export default function ConfiguratorsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-3">
            <img
              src="/images/asad_pic.png"
              alt="Muhammad Asad avatar"
              className="w-10 h-10 rounded-full object-cover border border-white/20"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white">Muhammad Asad</h1>
              <span className="text-xs text-gray-300/80">3D Developer — Configurators</span>
            </div>
          </div>
          <div className="mt-2 space-x-4">
            <a 
              href="/configurators/chair" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Chair Configurator
            </a>
            <a 
              href="/" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
