import { Button } from "@material-ui/core"
import { useState } from "react"

function Link({url, onDelete}) {

    const [copyText, setCopyText] = useState(false)


    return (
        <div className="link" key={url.id}>
            <div className="link-text">
                <p>{url.link}</p>
            </div>
            <div className="link-text-result">
                <p>{url.short}</p>
            </div>
            
            <Button
                variant="contained"
                size="small"
                style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: 15,
                    color: "white",
                    backgroundColor: copyText ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)'
                }}
                onClick={() => {
                    navigator.clipboard.writeText(url.short)
                    setCopyText(true)
                }}
                >
                    {copyText ? 'Copied!' : 'Copy'}
            </Button>

            <Button
                variant="contained"
                size="medium"
                style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: 15,
                    color: "white",
                    backgroundColor: 'hsl(0, 87%, 67%)'
                }}
                onClick={() => onDelete(url.id)}
            >
                Delete
            </Button>

        </div>
    )
}

export default Link
