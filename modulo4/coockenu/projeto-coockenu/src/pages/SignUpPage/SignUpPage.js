import React from "react";
import { LogoImage, ScreenContainer } from "./style";
import logo from '../../assets/logo.png'
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    return (
      
        <ScreenContainer>
            <LogoImage src={logo} />
              <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>        
       
      
    );
  }
  
  export default SignUpPage;


  
  