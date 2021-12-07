import { Button } from '@mui/material';

// import useStateWithLocalStorage from './useStateWithLocalStorage';


const LinkForm = ({onAdd, onSubmit, value, onChange, borderColor, errorWarning, isLoading}) => {
    
    return (
            <form className="link-field-container" onSubmit={onSubmit}>
                <div className="link-text-field">

                    <input
                    type="text"
                    className={borderColor}
                    value={value}
                    onChange={onChange}
                    type="text" 
                    placeholder="Shorten a link here..."/>
                    {errorWarning}
                </div>

                <Button
                onClick={onAdd}
                variant="contained"
                size="large"
                style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    backgroundColor: isLoading ? 'hsl(0, 0%, 75%)' : 'hsl(180, 66%, 49%)',
                    fontSize: 15,
                    borderRadius: 10,
                    color: "white"
                }}
                >
                    {isLoading ? 'shortening ...' : 'shorten it!'}
                </Button>

            </form>
    )
}

export default LinkForm
