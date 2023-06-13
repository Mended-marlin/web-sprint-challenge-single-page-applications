
import PromoBanner from "./PromoBanner"
import About from "./About"
import Footer from "./Footer"

export default function Home(props) {
    return (
        <>
            <PromoBanner />

            <main>
                <h2>About</h2>
                <About />
            </main>
            <Footer />
        </>
    )
}