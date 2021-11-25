import { useState } from "react"
import Link from './Link'

const LinkResults = ({results, setResults}) => {
    const [copiedLinks, setCopiedLinks] = useState([])

    const renderedLinks = results.map(result => {
        const link = result.result;

        return (
            <Link 
            key={link.code}
            link={link}
            copiedLinks={copiedLinks}
            setCopiedLinks={setCopiedLinks}
            />
        )
    })
    return (
        <>
            {renderedLinks}
        </>
    )
}

export default LinkResults
