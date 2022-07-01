import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { Alert } from "react-bootstrap";

const HeaderMain = () => {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
    }

    return(
        <header className="flex items-center justify-between pa2 pv3-ns">
            <div className="f1 f4-ns fw6 mid-gray pa3">
                Space Vids!
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="flex flex-column items-center">
                <img src="/assets/vector-icon-planet-saturn-rings-astronomy-illustration-ring-system-design-apps-websites-print-135122518.jpg" className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
                <Button variant="text" onClick={handleLogout}>Log Out</Button>
            </div>
        </header>
    )
}

export default HeaderMain;