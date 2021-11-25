import { Button } from "@material-ui/core"

const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <ul className="mobile-nav-links">
                <li><a href="# ">Features</a></li>
                <li><a href="# ">Pricing</a></li>
                <li><a href="# ">Resources</a></li>
            </ul>

            <div className="mobile-login-buttons">
                <Button
                variant="text"
                size="large"
                style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    color: 'white',
                    borderRadius: 30,
                    fontSize: 15
                }}
                >
                    login
                </Button>

                <Button
                variant="contained"
                size="large"
                style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    backgroundColor: 'hsl(180, 66%, 49%)',
                    borderRadius: 30,
                    fontSize: 15,
                    color: 'white',
                }}
                >
                    sign up
                </Button>
            </div>
        </div>
    )
}

export default MobileNav
