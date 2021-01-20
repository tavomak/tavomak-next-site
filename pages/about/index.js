import Layout from '../../components/Layout'
import styles from './styles.module.scss'

const About = () => {
    return ( 
        <Layout
            className="container"
            title="Diseñador y desarrollador frontend"
        > 
            <div className="row" className="my-2">
                <img src="/about.jpg" alt="" className="w-100"/>
            </div>

            <div className="row align-items-center my-5">
                <div className="col-12 mb-5">
                    <h4 className="font-weight-light">
                        Frontend Developer | Diseñador UX - UI | Marketing Digital y Proyectos Digitales
                    </h4>
                </div>
                <div className="col-md-6 pr-5 my-5">
                    <h4 className={styles.titleSection}>Extracto</h4>
                    <p>Diseñador y desarrollador frontend con experiencia en tecnologías y frameworks HTML, CSS y JS como Node.js, React.js, sass, bootstrap, etc... Más de 10 años de experiencia laboral en consultoras, empresas de marketing, startup y proyectos frelance, donde mis esfuerzos han estados dedicados al desarrollo de proyectos de marketing digital con foco en la captación de leads mediante diseño (UI/UX), seguimiento (Analítica), mejora continua y performance.</p>
                    <p>Poseo una licenciatura diseño integral emitida en la Universidad Nacional Experimental del Yaracuy (UNEY), tiene prioridad en la formación la identiﬁcación, análisis, solución de necesidades tanto estéticas como funcionales en distintas áreas relacionadas al diseño y la comunicación visual. Anterior a esta egresé con el titulo de Diseñador gráﬁco del Centro Instituto de Diseño Gráﬁco (CIDIG). Fuera de la educación formal, me encanta continuar el autoaprendizaje a través de MOOC y libros.</p>
                    <p>Tengo especial interés de trabajar en ambientes ágiles usando metodologías como Scrum que aporten a un trabajo colaborativo y así desaﬁar mi capacidad de aprendizaje al usar otros frameworks, metodologías o lenguajes</p>
                </div>
                <div className="col-md-6 my-5">
                    <img src="/meArt.png" alt="" className="w-100"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src="/skills.svg" alt="" className="w-100"/>
                </div>
            </div>
        </Layout>
     );
}
 
export default About;