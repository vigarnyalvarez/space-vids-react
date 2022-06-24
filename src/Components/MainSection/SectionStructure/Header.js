import React from "react";

const Header = ({text}) => {
    return(
        <header className="tc pv2 pv3-ns">
            <img src="/assets/vector-icon-planet-saturn-rings-astronomy-illustration-ring-system-design-apps-websites-print-135122518.jpg" className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
            <h1 className="f5 f4-ns fw6 mid-gray">{text}</h1>
        </header>
    )
}

export default Header;