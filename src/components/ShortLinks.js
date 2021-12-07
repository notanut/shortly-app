import LinkForm from "./LinkForm"
import Link from "./Link"
import axios from "axios"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { LocalActivity } from "@material-ui/icons";

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

    useEffect(() => {
        const storedLinks = JSON.parse(localStorage.getItem('list'))
        if (storedLinks) setList(storedLinks)
    }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    function handleSubmit(e) {
        e.preventDefault()
        setError(false)

        if (value == '') {
            setError(true)
        }

        handleShorten()
    }

    const deleteLink = (id) => {
        setList(list.filter((list) => list.id !== id))
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
            {list.map((link) => 
            <Link 
            key={link.id} 
            url={link}
            onDelete={deleteLink}
            />
            ) }
        </div>
    )
}

export default ShortLinks
