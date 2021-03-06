import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  
  button {
    background-color: #fff;
    border-radius: 5px;
    padding: 1%;
    outline: none;
    border: 1px solid #000;
  }
  
  button:hover{
    cursor: pointer;
    color: #fff;
    background-color: green;
    transition: all 0.5s;
  }

  nav {
    min-width: 100%;
    height: 10vh;
    background-color: #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .nomeloja {
    font-size: 90%;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  .promocao-container{
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-image: url("https://static.vecteezy.com/ti/fotos-gratis/p1/1970994-parede-verde-samambaia-gr%C3%A1tis-foto.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
  }
  
  .promocao-text{
    width: 500px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 30px;
    color: #fff;
  }

  .promocao-image{
    background-color: #fff;
    color: #000;
    border: 5px solid #000;
  }

  @media (max-width: 900px) {
    .promocao-image {
      display: none;
    }
  }

  .ofertas-do-dia {
    width: 100%;
    min-height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  
  .product-content{
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 12px;
    padding: 2%;
    margin-top: 1%;
  }

  .product-content:hover {
    background-color: lightgreen;
    color: #fff;
    transition: all 0.5s;
  }

  .cadastro{
    width: 100%;
    height: 80vh;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-title {
    color: #fff;
    padding: 2%;
    text-align: center;
  }

  .form-cadastro {
    width: 50%;
    height: 70%;
    margin: auto;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
  }

  .form-cadastro label, input {
    width: 80%;
    padding: 1%;
  }

  footer {
    width: 100%;
    height: 20vh;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
`