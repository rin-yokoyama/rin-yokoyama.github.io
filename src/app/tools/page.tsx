import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

export default function Tools() {
    return (
        <PageLayout>
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className={classNames.card + ' mb-8'}>
                    <h2 className={classNames.heading2}>Tools</h2>
                    <p className={classNames.textDefault + ' mb-6'}>作ったWebアプリケーション</p>

                    <div className="mb-6">
                        <Link href="/" className={classNames.btnSecondary}>Homeへ戻る</Link>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h3 className={classNames.heading3}>もくじ</h3>
                            <ul className={classNames.bulletList}>
                                <li>
                                    <Link href="/tools/weisskopf" className={classNames.textLink + ' font-medium'}>
                                        Weisskopf
                                    </Link>
                                    <br />
                                    <span className={classNames.textDefault}>Weisskopf半減期の計算ツール</span>
                                </li>
                                <li>
                                    <Link href="/tools/weighted-mean" className={classNames.textLink + ' font-medium'}>
                                        Weighted mean
                                    </Link>
                                    <br />
                                    <span className={classNames.textDefault}>誤差で重みを付けた平均を計算するツール</span>
                                </li>
                                <li>
                                    <Link href="/tools/neutron-energy" className={classNames.textLink + ' font-medium'}>
                                        Neutron energy
                                    </Link>
                                    <br />
                                    <span className={classNames.textDefault}>neutron energy calculator</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </PageLayout>
    )
}