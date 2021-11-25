import { Button } from '@material-ui/core'
import IllustrationImg from '../images/illustration-working.svg'

const Hero = () => {
    return (
        <main>
        <section className="hero">
            <div className="hero-text">
                <h1>
                    More than just shorter links
                </h1>
                <p>
                    Build your brand's recognition and get detailed insights on how your links are performing
                </p>
                <Button
                    variant="contained"
                    size="large"
                    style={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        backgroundColor: 'hsl(180, 66%, 49%)',
                        borderRadius: 30,
                        fontSize: 15,
                    }}
                    >
                        get started
                    </Button>
            </div>
                
                <div className="hero-img">

                <img src={IllustrationImg} alt="woman with laptop" />
                </div>
        </section>
        </main>
    )
}

export default Hero
