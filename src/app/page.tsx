import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <Header />
            <div className="container mx-auto px-4 py-8 max-w-4xl">

                {/* Main Content */}
                <main className="space-y-8">
                    {/* Welcome Section */}
                    <section className="card">
                        <h2 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-4">Welcome!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            横山 輪の個人ページへようこそ！
                        </p>
                    </section>

                    {/* About Section */}
                    <section className="card">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">About</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            横山 輪 (よこやま　りん)<br />
                            助教 東京大学大学院理学系研究科附属原子核科学研究センター<br />
                            専門：実験核物理学
                        </p>
                        <Link href="/profile" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
                            View Full Profile →
                        </Link>
                    </section>


                    {/* Updates Section */}
                    <section className="card">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">News</h3>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-h-64 overflow-y-auto dark:bg-green-900/20 dark:border-green-800">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li><time dateTime="2026-04-13">13/Apr/2026</time> - サイトリニューアルしました。</li>
                                <li><time dateTime="2025-12-01">1/Dec/2025</time> - CNSで助教になりました。</li>
                                <li><time dateTime="2021-09-22">22/Sep/2021</time> - とりまgithub.ioに移設。</li>
                                <li><time dateTime="2021-09-16">16/Sep/2021</time> - CNSで特任助教始めました。</li>
                                <li><time dateTime="2019-04-19">19/Apr/2017</time> - profileを更新。アメリカでポスドク始めました。</li>
                                <li><time dateTime="2016-07-8">8/Jul/2016</time> - Memo/DAQにMOCOとGTOを追加</li>
                                <li><time dateTime="2014-07-16">16/Jul/2014</time> - Tools（Weisskopf半減期の計算等）公開しました。</li>
                                <li><time dateTime="2013-02-08">08/Feb/2013</time> - 修論（要cnsアカウント）</li>
                                <li><time dateTime="2012-06-04">4/Jun/2012</time> - Geant4用γ線源クラスGSourceを追加。</li>
                                <li><time dateTime="2012-04-27">27/Apr/2012</time> - Memo/リモート解析環境を追加。</li>
                                <li><time dateTime="2011-12-26">26/Dec/2011</time> - ROOTマクロ：GAROOTを公開。</li>
                                <li><time dateTime="2011-11-24">24/Nov/2011</time> - Memo/ANAPAWを追加。</li>
                                <li><time dateTime="2011-11-23">23/Nov/2011</time> - Memo/ROOTを追加。</li>
                                <li><time dateTime="2011-08-31">31/Aug/2011</time> - Memo/Windows/VC++でGEANT4を追加。</li>
                                <li><time dateTime="2011-06-11">11/Jun/2011</time> - サイトオープン！</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contents Section */}
                    <section className="card">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">Contents</h3>
                        <ul className="space-y-3">
                            <li><Link href="/profile" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Profile</Link>　自己紹介</li>
                            <li><Link href="/publications" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Publications</Link>　業績リスト</li>
                            <li><Link href="/memo" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Memo</Link>　かつての備忘録です。</li>
                            <li><Link href="/research" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Research</Link>　研究紹介</li>
                            <li><Link href="/contact" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Contact</Link>　連絡先</li>
                            <li><Link href="/tools" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Tools</Link>　作ったwebツール</li>
                        </ul>
                    </section>

                </main>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}