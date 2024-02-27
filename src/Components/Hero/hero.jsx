import "./hero.scss";
import Typewriter from 'typewriter-effect';
import gif from "../../assets/Images/animation.json";
import Lottie from "react-lottie";




function Hero() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: gif,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <main className="hero-container">
            <section className="hero-right">
                <Lottie
                    options={defaultOptions}
                    height={"500"}
                    width={"500"}
                />
            </section>
            <section className="hero-left">
                <div className="left-content">
                    <span className="span">I'm</span>
                    <h3 className="name">Muhammad Ausaf Jamal</h3>
                    <h1 className="typewriter">
                        <Typewriter
                            options={{
                                strings: ["Computer Science Student", "Front-End Developer", 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <span className="intro">As a Frontend React Developer, my dedication lies in crafting high-quality web applications that precisely meet the requirements of my clients. With 2 years of hands-on experience in web development, I specialize in utilizing React.js, Next.js, TypeScript, and Node.js to develop scalable and robust web solutions. My focus on delivering excellence ensures that every project I undertake exceeds expectations and achieves optimal results</span>
                </div>
            </section>
        </main>
    )
}

export default Hero;