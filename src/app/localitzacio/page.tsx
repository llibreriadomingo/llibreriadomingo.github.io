import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Localització • Llibreria Domingo • Des de 1943',
    description: 'Generated by create next app',
}

export default function Location() {
    return (
        <section className="page-section about-heading">
            <div className="container">
                <iframe className="margin-bottom" width="100%" height="414" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.0869536896303!2d1.1069472150851114!3d41.15445391836626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a150e27cf18b8d%3A0x17ac604e61d96fc8!2sLlibreria+Domingo!5e0!3m2!1sen!2suk!4v1520982466183"></iframe>
                <div className="about-heading-content">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 mx-auto">
                            <div className="bg-faded rounded p-5">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Llibreria Domingo</span>
                                    <span className="section-heading-lower">On estem</span>
                                </h2>
                                <p>La Llibreria Domingo es troba al Carrer Major, un dels carrers per als vianants del centre de la ciutat. Es troba al davant del Centre de Lectura, molt a prop de la Prioral de Sant Pere i del Campanar de Reus.</p>
                                <p>Carrer Major, 16<br />43201 – Reus (Tarragona)<br />977 341 253</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
