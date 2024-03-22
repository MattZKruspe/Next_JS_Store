
import styles  from './Description.module.sass';
import Image from 'next/image';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAmACYDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUDBAYBAv/EACAQAAIDAAICAwEAAAAAAAAAAAABAgMEESEFEhMiI0H/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB0RAAICAgMBAAAAAAAAAAAAAAABAhEDMQQSISL/2gAMAwEAAhEDEQA/AMI4M901vktTrRJmq5kinHK0dkiS0UtoNFLUWOMmdOK6Obc6UH0LkvoFS8oyGiLUwLG2PFjApjPwU4luySJckl7oUy08/wBJsuj7LsmgupU32NnikvVHnyDXxsWZNfEV2G3XzB9mN2xMlQi8hL9egK2y32sAYkwOwpVsmWc9j5QAbk0FxnY3z3S4R2+2TiAE0djsuhTfJuQABatED2f/2Q=='

export const Description = () => {

    return (
        <section className={styles.Description}>

            <div className={styles.Description__imageContainer}> 
                <Image
                    src="/images/description.jpeg" 
                    alt="product markerplace" 
                    fill
                    placeholder='blur'
                    blurDataURL={PLACEHOLDER_IMAGE}
                    />

            </div>
          

            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fin</p>
            </div>
           
        </section>        
    )
}