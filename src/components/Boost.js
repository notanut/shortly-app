import { Button } from "@material-ui/core"

function Boost() {
    return (
        <div className="boost">
            <h1>Boost your links today</h1>
            <Button
                variant="contained"
                size="large"
                style={{
                    color: "white",
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    backgroundColor: 'hsl(180, 66%, 49%)',
                    borderRadius: 30,
                    fontSize: 15,
                    width: "fitContent"
                }}
                >
                    get started
                </Button>
        </div>
    )
}

export default Boost
