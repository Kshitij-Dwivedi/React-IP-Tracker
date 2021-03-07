import Input from './components/Input'
const App = () => {
  const skey="cad82a0c291128837a63b751f2f03664"
  const trackip= async (add) =>{
    const httpreq= "http://api.ipstack.com/"+add.address+'?access_key='+skey
    const res= await fetch(httpreq)
    const data= await res.json()
    console.log(data)
  }
  return (
    <div className='App'>
      <h1>Hello Everyone</h1>
      <Input ipset={trackip}/>
    </div>
  )
}

export default App
