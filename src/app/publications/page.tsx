import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Publications</h2>
          <p className="text-gray-600 mb-6">
            Research publications and academic papers.
          </p>

          <div className="mb-6">
            <Link href="/" className="btn-secondary">← Back to Home</Link>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold text-primary-800 mb-4">Journal Papers</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Sample Paper Title</h4>
                  <p className="text-gray-600 text-sm">Authors: Rin Yokoyama et al.</p>
                  <p className="text-gray-600 text-sm">Journal Name, Year, Volume, Pages</p>
                  <p className="text-gray-600 text-sm">DOI: <a href="#" className="text-primary-600 hover:underline">10.xxxx/xxxxx</a></p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary-800 mb-4">Conference Papers</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Conference Paper Title</h4>
                  <p className="text-gray-600 text-sm">Authors: Rin Yokoyama et al.</p>
                  <p className="text-gray-600 text-sm">Conference Name, Year, Location</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary-800 mb-4">Thesis</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Ph.D. Thesis Title</h4>
                  <p className="text-gray-600 text-sm">Rin Yokoyama</p>
                  <p className="text-gray-600 text-sm">University Name, Year</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}