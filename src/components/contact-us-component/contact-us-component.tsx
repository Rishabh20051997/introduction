import style from './contact-us-component-style.module.scss'

const ContactUsComponent = () => {

    return <>
        <header className={style.sectionHeader}>Get In Touch</header>

        <div className={style.innerContainer}>
            <div className={style.infoContainer}>
                <p className={style.labelText}>EMAIL</p>
                <p className={style.infoText}>kaushikrishabh2005@gmail.com</p>
            </div>

            <div className={style.infoContainer}>
                <p className={style.labelText}>PHONE</p>
                <p className={style.infoText}>+91 9711138285</p>
            </div>

            <div className={style.infoContainer}>
                <p className={style.labelText}>ADDRESS</p>
                <p className={style.infoText}>396/1, Bhim Garh Kheri, Gurgaon, India - 122001</p>
            </div>
        </div>
    </>

}

export default ContactUsComponent