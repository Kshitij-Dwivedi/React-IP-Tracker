import {useState} from 'react'

const Input = ({trackIP}) => {
    const [Address, setAddress] = useState('')
    const onSubmit= (e) =>{
        e.preventDefault()
        if(!Address)
        {
            alert('Please enter Ip Address')
            return 
        }
        trackIP(Address)
        setAddress('')
    }
    return (
        <form className = "ip-form" onSubmit={onSubmit}>
            <input type='text' placeholder='Ip Address' value={Address} onChange={(e) =>setAddress(e.target.value)}/>   
            <input type='submit' value='Search'/>
        </form>
    )
}

export default Input;
