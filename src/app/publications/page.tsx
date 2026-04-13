import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { classNames } from '@/lib/classNames'

export default function Publications() {
    return (
        <PageLayout>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className={classNames.card + ' mb-8'}>
                    <h2 className={classNames.heading2}>Publications</h2>
                    <p className={classNames.textDefault + ' mb-6'}>
                        主な業績です。詳細はCVまたはORCiDを参照。<br />
                        <Link href="https://drive.google.com/file/d/1EXmEfxoa3ata9CF-6ZC-sioW0nox1jBp/view?usp=sharing" className={classNames.textLink}>
                            Full CV (PDF)
                        </Link><br />
                        <Link href="https://orcid.org/0000-0002-1234-5678" className={classNames.textLink} target="_blank" rel="noopener noreferrer">
                            ORCiD: 0000-0002-1234-5678
                        </Link>
                    </p>

                    <div className="mb-6">
                        <Link href="/" className={classNames.btnSecondary}>← Back to Home</Link>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h3 className={classNames.heading3}>Journal Papers</h3>
                            <div className="space-y-4">
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>β-delayed neutron emissions from N&gt;50 gallium isotopes</h4>
                                    <p className={classNames.textDefault}>Authors: Rin Yokoyama et al.</p>
                                    <p className={classNames.textDefault}>Phys. Rev. C 108, 064307 (2023)</p>
                                    <p className={classNames.textDefault}>DOI: <a href="https://doi.org/10.1103/PhysRevC.108.064307" className={classNames.textLink}>10.1103/PhysRevC.108.064307</a></p>
                                </div>
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>Three-quasiparticle isomers in odd-even 159, 161Pm: Calling for modified spin-orbit interaction for the neutron-rich region</h4>
                                    <p className={classNames.textDefault}>Authors: Rin Yokoyama et al.</p>
                                    <p className={classNames.textDefault}>Phys. Rev. C 104, L021303 (2021)</p>
                                    <p className={classNames.textDefault}>DOI: <a href="https://doi.org/10.1103/PhysRevC.104.L021303" className={classNames.textLink}>10.1103/PhysRevC.104.L021303</a></p>
                                </div>
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>Strong one-neutron emission from two-neutron unbound states in decays of r-process nuclei, 86, 87Ga</h4>
                                    <p className={classNames.textDefault}>Authors: Rin Yokoyama et al.</p>
                                    <p className={classNames.textDefault}>Phys. Rev. C 100, 031302(R) (2019)</p>
                                    <p className={classNames.textDefault}>DOI: <a href="https://doi.org/10.1103/PhysRevC.100.031302" className={classNames.textLink}>10.1103/PhysRevC.100.031302</a></p>
                                </div>
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>Segmented YSO scintillation detectors as a new beta-implant detection tool for decay spectroscopy in fragmentation facilities</h4>
                                    <p className={classNames.textDefault}>Authors: Rin Yokoyama et al.</p>
                                    <p className={classNames.textDefault}>Nucl. Instrum. Methods Phys. Res. A937, 93-97 (2019)</p>
                                    <p className={classNames.textDefault}>DOI: <a href="https://doi.org/10.1016/j.nima.2019.05.026" className={classNames.textLink}>10.1016/j.nima.2019.05.026</a></p>
                                </div>
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>Beta-gamma spectroscopy of the neutron-rich 150Ba</h4>
                                    <p className={classNames.textDefault}>Authors: Rin Yokoyama et al.</p>
                                    <p className={classNames.textDefault}>Prog. Theor. Exp. Phys. 2018, 041D02 (2018)</p>
                                    <p className={classNames.textDefault}>DOI: <a href="https://doi.org/10.1093/ptep/pty037" className={classNames.textLink}>10.1093/ptep/pty037</a></p>
                                </div>
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>New K isomers in the neutron-rich N=100 isotones 162Sm, 163Eu, and 164Gd</h4>
                                    <p className={classNames.textDefault}>Authors: Rin Yokoyama et al.</p>
                                    <p className={classNames.textDefault}>Phys. Rev. C 95, 034313 (2017)</p>
                                    <p className={classNames.textDefault}>DOI: <a href="https://doi.org/10.1103/PhysRevC.95.034313" className={classNames.textLink}>10.1103/PhysRevC.95.034313</a></p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className={classNames.heading3}>Thesis</h3>
                            <div className="space-y-4">
                                <div className={classNames.borderLeft}>
                                    <h4 className={classNames.heading4}>ガンマ線核分光による中性子過剰中重核の変形進化の研究</h4>
                                    <p className={classNames.textDefault}>横山 輪</p>
                                    <p className={classNames.textDefault}>東京大学　博士(理学)　2016年</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </PageLayout>
    )
}