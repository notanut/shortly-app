const MobileHeader = ({onOpen}) => {
    return (
        <div className="hamburger" onClick={onOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="currentColor" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>           
        </div>
    )
}

export default MobileHeader
