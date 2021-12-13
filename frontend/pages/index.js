import HeadRPC from '../components/HeadRPC'
import LoginForm from '../components/LoginForm'
import StyleRPC from '../components/StyleRPC'
import I from '../components/Imports'
import RegisterForm from '../components/RegisterForm'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'



export default function Home() {

  return (

  
      <div className="  m-auto ">

<HeadRPC/>

  
 
<Navbar/>
    <Carousel/>
    <LoginForm/>
    <RegisterForm/>
    <StyleRPC/>
    <I/>
    
</div>
   
  )
}

