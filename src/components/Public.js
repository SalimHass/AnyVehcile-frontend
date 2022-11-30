import { Link } from "react-router-dom"
import "./Public.css"
import SignUp from "../features/signUp/SignUp"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome to AnyVehicle</h1>
            </header>
            <main className="main-container">
                
                <Link to="/login">Employee Login</Link>
                <Link to="/login">admin Login</Link>
                <Link to="/signup">Sign Up</Link>
                
            </main>
        </section>

    )
    return content
}
export default Public