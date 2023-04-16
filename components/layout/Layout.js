import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Layout({ children }) {

    return (
        <div className=" overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>

    )
}