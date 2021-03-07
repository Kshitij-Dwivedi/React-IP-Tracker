import {useState} from 'react'
const Input = ({ipset}) => {
    const [address, setaddress] = useState('')
    const onSubmit= (e) =>{
        e.preventDefault()
        if(!address)
        {
            alert('Please enter Ip address')
            return 
        }
        // console.log(address)
        ipset({address})
        setaddress('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Ip address' value={address} onChange={(e) =>setaddress(e.target.value)}/>   
            <input type='submit' value='Search'/>
        </form>
    )
}

export default Input;
