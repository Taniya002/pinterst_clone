import "./Header2.css"

export default function Header2(){
    return(
        <div>
            <header className="header">
                <a href="#" className="logo"><i className="fa-brands fa-pinterest"></i></a>
         
            <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Create</a>
            </nav>
            <form className="search-form">
                <input type="search" id="search-box"  placeholder="Search"></input>
                <label for="search-box" ></label>
            </form>
            <div className="icons">
            <i class="fa-solid fa-message"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            </header>
        </div>
    )
}