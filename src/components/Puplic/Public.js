import {Link} from "react-router-dom"
import "./Public.css"
import SignUp from "../../features/signUp/SignUp"
import Login from "../../features/auth/Login"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome to AnyVehicle</h1>
            </header>
            <main className="main-container">

                <Login/>


            </main>
        </section>

    )
    return content
}
export default Public