import React from "react";

// Importing Components
import Logo from './Logo';
import Header from './Header';
import Card from './Card';

export default function() {
return (
    <>  
    <Logo children="Hello"/>
    <Header content="Panos" number={10}/>
    <Card 
    image1="https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png" 
    image2="https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png"/>
    </>
)
}