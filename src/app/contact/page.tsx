import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

export default function Contact() {
    return (
        <PageLayout>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="card mb-8">
                    <h2 className={classNames.heading2}>Contact</h2>

                    <div className="mb-6">
                        <Link href="/" className={classNames.btnSecondary}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h3 className={classNames.heading3}>横山 輪 (Rin Yokoyama)</h3>
                            <p className={classNames.textDefault}>
                                助教 東京大学大学院理学系研究科附属原子核科学研究センター<br />
                                〒351-0198 埼玉県和光市広沢2-1<br />
                                理化学研究所内 東大CNS<br />
                                E-mail: <a href="mailto:yokoyama@cns.s.u-tokyo.ac.jp">yokoyama@cns.s.u-tokyo.ac.jp</a>
                            </p>

                        </section>

                    </div>
                </div>
            </main>

        </PageLayout >
    )
}