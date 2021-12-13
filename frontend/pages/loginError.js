import HeadRPC from '../components/HeadRPC';
import LoginF from '../components/LoginForm';
import StyleRPC from '../components/StyleRPC';
import document from 'react-dom';
import I from '../components/Imports';
import RegisterForm from '../components/RegisterForm';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';



function openModal(){
    const modal = document.findDOMNode('#modalLogin');
    modal.classList.add('show');
}
export default function LoginError() {
    
    
    return (

        <div onLoad = {openModal} >

            <HeadRPC/>
            <Navbar login = "true" singup = "false"/>
            <Carousel/>
            <LoginF  errorMessage = "Verifique sus credenciales por favor"/>
            <RegisterForm/>
            <StyleRPC/>
            <I/>

            
        </div>
    );
}