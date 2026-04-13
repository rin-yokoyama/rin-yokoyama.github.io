import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

export default function Memo() {
    return (
        <PageLayout>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="card mb-8">
                    <h2 className={classNames.heading2}>Memo</h2>

                    <div className="mb-6">
                        <Link href="/" className={classNames.btnSecondary}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <p className={classNames.textDefault}>
                            かつての備忘録です。内容は古いので参考程度に。一応残しておきます。
                        </p>
                        <ul className={classNames.bulletList}>
                            <li>
                                <a href="/memo/ANAPAW.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    ANAPAW
                                </a>
                            </li>
                            <li>
                                <a href="/memo/DAQ.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    DAQ
                                </a>
                            </li>
                            <li>
                                <a href="/memo/memo.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    General Memo
                                </a>
                            </li>
                            <li>
                                <a href="/memo/others.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    Others
                                </a>
                            </li>
                            <li>
                                <a href="/memo/RemoteAna.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    RemoteAna
                                </a>
                            </li>
                            <li>
                                <a href="/memo/ROOT.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    ROOT
                                </a>
                            </li>
                            <li>
                                <a href="/memo/windows.html" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                                    Windows
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

        </PageLayout >
    )
}