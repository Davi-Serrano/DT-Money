import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f8f2f5;
        
        --blue-ligth: #6933FF;
         
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E52E4D;

        --text-body: #363F5F;
    }

  *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   html{
       @media (max-width: 1180px){
           font-size: 93.75%;
       }

       @media (max-width: 720px){
           font-size: 87.5%;
       }
       
    }
    body, button, input{
        font-family: 'Poppins', sans-serif;
        background: none;
        border: none;
    } 
    
   h1, h2, h3, h4, h4, h6{
    font-weight: 600;
   }

   body{
       background: var(--background);
       -webkit-font-smoothing: antialiased;
   }

   button{
       cursor: pointer;
   }

   [disabled] {
       opacity: 0.6;
       cursor: not not-allowed;
   }
`