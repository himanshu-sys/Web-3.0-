// Import Assets
import profile from '../assets/profile.JPG';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Himanshu" />

            <div className='header__content'>
                <h1>Hi, I'm Himanshu Singh</h1>
                <p>Website/Software Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;