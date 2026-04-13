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
                        <h2 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-4">About</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            横山 輪 (よこやま　りん)<br />
                            助教 東京大学大学院理学系研究科附属原子核科学研究センター<br />
                            専門：実験核物理学
                        </p>
                    </section>

                    {/* Links Section */}
                    <section className="card">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://github.com/rin-yokoyama" className="text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-300">GitHub</Link></li>
                            <li><Link href="https://orcid.org/0000-0003-3298-3542" className="text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-300">ORCiD</Link></li>
                            <li><Link href="https://zenn.dev/rin_yokoyama" className="text-primary-600 hover:underline dark:text-primary-400 dark:hover:text-primary-300">Zenn</Link></li>
                        </ul>
                    </section>

                    {/* Updates Section */}
                    <section className="card">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">更新情報</h3>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-h-64 overflow-y-auto dark:bg-green-900/20 dark:border-green-800">
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li><time dateTime="2021-09-22">22/Sep/2021</time> - とりまgithub.ioに移設。</li>
                                <li><time dateTime="2021-09-16">16/Sep/2021</time> - CNSで特任助教始めました。</li>
                                <li><time dateTime="2019-04-19">19/Apr/2017</time> - profileを更新。アメリカでポスドク始めました。</li>
                                <li><time dateTime="2016-07-8">8/Jul/2016</time> - <Link href="/memo/daq" className="text-primary-600 hover:underline">Memo/DAQ</Link>にMOCOとGTOを追加</li>
                                <li><time dateTime="2014-07-16">16/Jul/2014</time> - <Link href="/tools" className="text-primary-600 hover:underline">Tools</Link>（Weisskopf半減期の計算等）公開しました。</li>
                                <li><time dateTime="2013-02-08">08/Feb/2013</time> - 修論（要cnsアカウント）</li>
                                <li><time dateTime="2012-06-04">4/Jun/2012</time> - Geant4用γ線源クラス<Link href="/downloads/gsource" className="text-primary-600 hover:underline">GSource</Link>を追加。</li>
                                <li><time dateTime="2012-04-27">27/Apr/2012</time> - <Link href="/memo/remote-ana" className="text-primary-600 hover:underline">Memo/リモート解析環境</Link>を追加。</li>
                                <li><time dateTime="2011-12-26">26/Dec/2011</time> - ROOTマクロ：<Link href="/downloads/garoot" className="text-primary-600 hover:underline">GAROOT</Link>を公開。</li>
                                <li><time dateTime="2011-11-24">24/Nov/2011</time> - <Link href="/memo/anapaw" className="text-primary-600 hover:underline">Memo/ANAPAW</Link>を追加。</li>
                                <li><time dateTime="2011-11-23">23/Nov/2011</time> - <Link href="/memo/root" className="text-primary-600 hover:underline">Memo/ROOT</Link>を追加。</li>
                                <li><time dateTime="2011-08-31">31/Aug/2011</time> - <Link href="/memo/windows/vsg4" className="text-primary-600 hover:underline">Memo/Windows/VC++でGEANT4</Link>を追加。</li>
                                <li><time dateTime="2011-06-11">11/Jun/2011</time> - サイトオープン！</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contents Section */}
                    <section className="card">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">Contents</h3>
                        <ul className="space-y-3">
                            <li><Link href="/profile" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Profile</Link>　自己紹介</li>
                            <li><Link href="/memo" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Memo</Link>　備忘録です。メインコンテンツ</li>
                            <li><Link href="/osaka" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Osaka</Link>　阪大のころのこと。主にオナー</li>
                            <li><Link href="/research" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Research</Link>　研究紹介・業績リスト</li>
                            <li><Link href="/photo-gallery" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Photo Gallery</Link>　個人的に撮った写真</li>
                            <li><Link href="/downloads" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Downloads</Link>　作ったもの置き場</li>
                            <li><Link href="/links" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">Links</Link>　リンク集</li>
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