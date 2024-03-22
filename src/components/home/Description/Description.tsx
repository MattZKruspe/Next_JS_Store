
import styles  from './Description.module.sass';
import Image from 'next/image';

export const Description = () => {

    return (
        <section className={styles.Description}>

            <Image src="/images/description.jpeg" alt="product markerplace" width={500} height={300} />

            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fin</p>
            </div>
           
        </section>        
    )
}