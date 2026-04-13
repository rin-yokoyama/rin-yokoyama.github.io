import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Tools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Tools</h2>
          <p className="text-gray-600 mb-6">作ったWebアプリケーション</p>

          <div className="mb-6">
            <Link href="/" className="btn-secondary">Homeへ戻る</Link>
          </div>

          <h3 className="text-xl font-bold text-primary-800 mb-4">もくじ</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/tools/weisskopf" className="text-primary-600 hover:text-primary-800 font-medium">
                Weisskopf
              </Link>
              <br />
              <span className="text-gray-600 text-sm">Weisskopf半減期の計算ツール</span>
            </li>
            <li>
              <Link href="/tools/weighted-mean" className="text-primary-600 hover:text-primary-800 font-medium">
                Weighted mean
              </Link>
              <br />
              <span className="text-gray-600 text-sm">誤差で重みを付けた平均を計算するツール</span>
            </li>
            <li>
              <Link href="/tools/neutron-energy" className="text-primary-600 hover:text-primary-800 font-medium">
                Neutron energy
              </Link>
              <br />
              <span className="text-gray-600 text-sm">neutron energy calculator</span>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}