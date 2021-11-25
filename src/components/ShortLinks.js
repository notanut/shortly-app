import LinkForm from "./LinkForm"
import Link from "./Link"
import axios from "axios"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const urlList = []

const ShortLinks = (e) => {
    const [value, setValue] = useState('')
    const [list, setList] = useState(urlList)
    const [error, setError] = useState(false)

    const handleShorten = async () => {
        setError(false)
        if (value == '') {
            setError(true)
        }
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`)
        const {data: {result: {full_short_link: shortenedLink}}} = res
        const {data: {result: {original_link: originalLink}}} = res
        const newList = list.concat({link:originalLink, short:shortenedLink, id: uuidv4()})
        
        setList(newList)
        setValue('')
    }

    function handleSubmit(e) {
        e.preventDefault()
        setError(false)

        if (value == '') {
            setError(true)
        }

        handleShorten()
    }

    
    return (
        <div className="link-container">
            <LinkForm 
            onSubmit={handleSubmit}
            borderColor={error && 'redBorder'}
            value={value}
            onAdd={ handleShorten}
            onChange={(e) => setValue(e.target.value)}
            errorWarning={error && 
                    <div className="error-warning">
                        <i>Please add a link</i>
                    </div>}
            />
            {list.map((link) => <Link key={link.id} url={link}/>) }
        </div>
    )
}

export default ShortLinks
