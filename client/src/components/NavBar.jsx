import React from "react"

function NavBar(props) {
    let items = []
    props.links.forEach(element => {
        items.push(<NavMember link={element.link} linkname={element.linkname} linkicon={element.linkicon}></NavMember>)
    });
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light text-center m-1 p-3">
            <a className="navbar-brand mb-0 h1" href="#" style={{"font-size" : "1.5rem"}}>
                Lemba
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span class="navbar-toggler-icon"></span> */}
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {items}
                </ul>
            </div>

            <div className="collapse navbar-collapse">
                <button className="btn btn-success rounded-circle" type="button">
                    <i class="bi bi-pencil col" style={{"font-size": "1.5rem", "color": "white"}}></i>
                </button>
            </div>
            
            <UserTagNav className="collapse navbar-collapse" user={props.user}></UserTagNav>
        </nav>
    );
  }

function NavMember(props) {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.link}>
                <i class="bi mx-4" className={props.linkicon} style={{"font-size": "2rem", "color": "black"}}></i>
            </a>
        </li>
    );
}

function UserTagNav(props) {
    return (
        <a class="btn d-flex rounded-pill p-2 align-items-center" href="#" style={{"background-color" : "lightgray"}}>
            <i class="bi bi-person-circle col p-0 mx-2" style={{"font-size": "1.75rem", "color": "black"}}></i>
            <p class="col m-0 mx-1 text-nowrap" style={{"font-size" : "20px"}}>{props.user.name}</p>
        </a>
    );
}

export default NavBar;