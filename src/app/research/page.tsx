import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

export default function Research() {
    return (
        <PageLayout>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="card mb-8">
                    <h2 className={classNames.heading2}>Research</h2>

                    <div className="mb-6">
                        <Link href="/" className={classNames.btnSecondary}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <h3 className={classNames.heading3}>研究について</h3>
                        <p className={classNames.textDefault}>
                            主に理化学研究所のRIBFや、アメリカ・ミシガン州立大学のFRIBなどの不安定原子核生成施設で原子核の構造や崩壊の研究をしています。
                            直近では、β遅発中性子放出過程の理解とその宇宙元素合成への影響に関する研究、反転対称性を破る八重極変形の研究、ベータ崩壊を通したnp対凝縮の研究などを行っています。
                        </p>
                    </div>
                </div>
            </main>

        </PageLayout >
    )
}