import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Llibreria Domingo • Des de 1943',
    description: 'Generated by create next app',
}

export default function Home() {
    return (
        <section className="page-section about-heading">
            <div className="container">
                <picture>
                    <source className="img-fluid rounded about-heading-img mb-3 mb-lg-0" srcSet="images/webp/llibreria-domingo.webp" type="image/webp" />
                    <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="images/jpg/llibreria-domingo.jpg" alt="" />
                </picture>
                <div className="about-heading-content">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 mx-auto">
                            <div className="bg-faded rounded p-5">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Llibreria Domingo</span>
                                    <span className="section-heading-lower">Qui sóm</span>
                                </h2>
                                <p>La llibreria va ser inaugurada al setembre de l&#39;any 1943 per Josep Domingo Llort, al Carrer Major 16 de Reus.</p>
                                <p>Al principi, quan es va obrir, només es dedicava a vendre llibres i material d&#39;oficina. Més tard s&#39;incorporà a la venda articles de festa i de regal, activitat que en l&#39;actualitat encara perdura.</p>
                                <p>L&#39;any 2002 la botiga va ser reformada en la seva totalitat, però mantenint el mateix rètol que es va posar l&#39;any 1943. La botiga ha passat de generació en generació fins a l&#39;actualitat, on podem trobar la néta del fundador.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
