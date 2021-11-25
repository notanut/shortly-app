import { Button } from '@mui/material'

const DesktopHeader = () => {
    return (
        <>
            <ul className="desktop-nav-links">
                <li><a href="# ">Features</a></li>
                <li><a href="# ">Pricing</a></li>
                <li><a href="# ">Resources</a></li>
            </ul>

            <div className="desktop-login-buttons">
                <Button
                variant="text"
                size="large"
                style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    color: 'hsl(257, 7%, 63%)',
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
                }}
                >
                    sign up
                </Button>
            </div>
        </>
    )
}

export default DesktopHeader
