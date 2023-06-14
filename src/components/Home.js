import PromoBanner from "./PromoBanner"
import About from "./About"
import Reviews from "./Reviews"
import Footer from "./Footer"

export default function Home(props) {
    return (
        <>
            <PromoBanner />
            <main>
                <h2>About Us:</h2>
                <About />
                <Reviews />
            </main>
            <Footer />
        </>
    )
}