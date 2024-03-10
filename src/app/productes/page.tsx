import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Productes • Llibreria Domingo • Des de 1943',
    description: 'Generated by create next app',
}

export default function Product() {
    return (
        <>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Prepara i decora</span>
                                    <span className="section-heading-lower">FESTES & REVETLLES</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/revetlla.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/revetlla.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex mr-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Oferim un ventall de productes perquè puguis preparar i decorar les festivitats al teu gust.</p>
                                <p>Tenim garlandes, globus, cintes, etc. per decorar i personalitzar les teves festes.</p>
                                <p>També tenim decoracions, blondes i plats per les mones per Pasqua, bosses de cotilló per cap d&#39;any, postals per Sant Valentí i àlbums per la comunió, entre moltes altres coses.</p>
                                <p>Per sant Jordi, els llibres es venen amb un 10% de descompte. Si voleu vindre a veure&#39;ns, ens podreu trobar a la Plaça del Mercadal venent llibres.</p>
                                <p>Per les festes de Nadal, cada any ens trobem al Mercat de Nadal de la ciutat, per oferir-vos productes nadalencs com contes, decoracions, figures de pessebre, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex mr-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">LOTERIA DE CATALUNYA & LA GROSSA</span>
                                    <span className="section-heading-lower">Tria-la, tots hi guanyem</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/loto-catalunya-grossa.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/loto-catalunya-grossa.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex ml-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Si vols jugar a la Loteria de Catalunya, tenim a la vostra disposició diferents tipus de jocs. Entre ells, oferim butlletes de loto ràpid, on sols cal rascar per poder jugar.</p>
                                <p>També podeu trobar números per la loteria de la Grossa de Sant Jordi i de Cap d&#39;any.</p>
                                <p>La llibreria va tenir l&#39;honor de donar un quart premi de la loteria de la Grossa de cap d&#39;any el 2016 de 5.000&euro; per bitllet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Prepara i aprèn</span>
                                    <span className="section-heading-lower">MATERIAL ESCOLAR & QUADERNS</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/material-escolar.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/material-escolar.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex mr-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Si has de preparar l&#39;entrada a l&#39;escola, t&#39;oferim una gran varietat de material escolar.</p>
                                <p>Si necessites algun material en concret que no tenim al moment, podem demanar-lo i en uns dies podràs venir a recollir-lo.</p>
                                <p>Per èpoques d&#39;estiu o per aquells alumnes que necessiten un repàs d&#39;alguna matèria en concret, tenim quaderns per poder millorar l&#39;escriptura, l&#39;anglès o les matemàtiques, entre d&#39;altres.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex mr-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Diverteix-te i aprèn</span>
                                    <span className="section-heading-lower">LLIBRES & CONTES</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/llibres.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/llibres.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex ml-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Tant si necessiteu aprendre a fer alguna cosa com si voleu entrar dins d&#39;un món fantàstic, tenim una col·lecció de llibres que de ben segur us poden semblar interessants.</p>
                                <p>Tenim llibres de cuina, de treballs manuals, de fantasia, d&#39;història i de fotografies, entre molts d&#39;altres. El nostre assortiment de llibres i contes és per totes les edats.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Crea i treballa</span>
                                    <span className="section-heading-lower">PAPERERIA & MATERIAL D&#39;OFICINA</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/papereria.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/papereria.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex mr-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Si necessites algun material de papereria per crear o per treballar, tenim una gran varietat de papers: per fer patrons, paper de forn, cartolines, paper kraft o paper ploma entre d&#39;altres.</p>
                                <p>També disposem una gran veritat de llibretes de diverses mides.</p>
                                <p>Si el que necessites és material d&#39;oficina, també tenim a la vostra disposició d&#39;un gran ventall d&#39;opcions, des de grapadores, clips, post-it, bolígrafs, tinta i plomes estilogràfiques. Si necessites un producte en concret, podem demanar-lo i en uns dies tenir-lo a punt per recollir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex mr-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Organitza&#39;t amb</span>
                                    <span className="section-heading-lower">AGENDES & CALENDARIS</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/agendes.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/agendes.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex ml-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>A finals de l&#39;any actual i a principis de l&#39;any vinent pots trobar a la Llibreria Domingo algunes agendes i calendaris per començar l&#39;any d&#39;una forma organitzada.</p>
                                <p>Mentre participem en el Mercat de Nadal de Reus, a la Plaça del Mercadal, comencem a tenir els primers calendaris de l&#39;any vinent.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">A color o en blanc i negre</span>
                                    <span className="section-heading-lower">FOTOCOPIES</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/fotocopies.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/fotocopies.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex mr-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Si necessites una fotocòpia del teu DNI o d&#39;algun altre paper important, realitzem fotocopies tant a color com en blanc i negre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex mr-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Juga i obsequia</span>
                                    <span className="section-heading-lower">CROMOS & REGALS</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" srcSet="images/webp/regal.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/regal.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex ml-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Tenim diferents cromos de futbol i dels dibuixos més actuals pels més petits de la casa amb els diferents àlbums per poder-los col·leccionar.</p>
                                <p>Si tens una celebració i necessites una postal original, etiquetes, sobres o algun element de decoració de regals, podràs escollir el que més s&#39;adeqüi a la teva necessitat.</p>
                                <p>Si vols fer un regal, pots trobar plomes estilogràfiques, jocs, algun llibre de col·lecció, contes il·lustrats, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Allibera la creativitat</span>
                                    <span className="section-heading-lower">PRODUCTES D&#39;ART</span>
                                </h2>
                            </div>
                        </div>
                        <picture>
                            <source className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/webp/productes-art.webp" type="image/webp" />
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="images/jpg/productes-art.jpg" alt="" />
                        </picture>
                        <div className="product-item-description d-flex mr-auto">
                            <div className="bg-faded p-5 rounded">
                                <p>Tenim diferents articles d&#39;art, com diferents tipus de pintures, pinzells, retoladors, colors, papers d&#39;aquarel·la, etc.</p>
                                <p>Si necessites algun producte en concret que no tinguem en aquest moment, podem demanar-lo i tenir-lo en uns dies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
