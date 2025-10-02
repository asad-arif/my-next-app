export default function ConfiguratorsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white">3D Configurators</h1>
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
