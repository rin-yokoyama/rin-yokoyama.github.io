import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

export default function Profile() {
    return (
        <PageLayout>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="card mb-8">
                    <h2 className={classNames.heading2}>Profile</h2>

                    <div className="mb-6">
                        <Link href="/" className={classNames.btnSecondary}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0">
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Rin Yokoyama"
                                    className="w-48 h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className={classNames.heading3}>横山 輪 (Rin Yokoyama)</h3>
                                <p className={classNames.textDefault}>
                                    助教 東京大学大学院理学系研究科附属原子核科学研究センター<br />
                                    専門：実験核物理学
                                </p>
                            </div>
                        </div>
                        <h3 className={classNames.heading3}>来歴</h3>
                        <ul className={classNames.bulletList}>
                            <li>出身地：山梨県甲府市</li>
                            <li>大学：2011年3月 大阪大学理学部物理学科卒</li>
                            <li>学位:2016年3月24日 博士(理学) @東京大学大学院理学系研究科物理学専攻</li>
                            <li>2016年4月～2017年3月:日本学術振興会特別研究員 PD<br />東京大学大学院理学系研究科附属原子核科学研究センター極限原子核構造研究(NUSPEQ)グループ</li>
                            <li>2017年3月～2021年9月:Postdoctoral research associate<br />Department of Physics and Astronomy, the University of Tennessee</li>
                            <li>2021年10月～2025年11月:特任助教<br />東京大学大学院理学系研究科附属原子核科学研究センター</li>
                            <li>2025年12月～現在:助教<br />東京大学大学院理学系研究科附属原子核科学研究センター</li>
                        </ul>
                        <h3 className={classNames.heading3}>CV</h3>
                        <Link href="https://drive.google.com/file/d/1EXmEfxoa3ata9CF-6ZC-sioW0nox1jBp/view?usp=sharing" className={classNames.textLink}>
                            Full CV (PDF)
                        </Link>
                    </div>
                </div>
            </main>

        </PageLayout >
    )
}