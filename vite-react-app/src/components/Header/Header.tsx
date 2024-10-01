import "./Header.css";
import { MenuBar } from "./MenuBar";

export function Header () {
    return(
        <div className="header-container">
        <header>
            <h1 className="header-title">Caroline's blog</h1>
            <p className="
            header-subtitle">Welcome to the worlds biggest blog!</p>
            <div className="navbar">
            <MenuBar/>
            </div>
        </header>
        </div>
    )
}