import React from "react";

// Importing Components
import Logo from './Logo';
import Header from './Header';
import Card from './Card';


let data = 
    [
        {
            fullName: 'Matt Giampietro',
    status: 'friend',
    description: '. . . ',
    totalFriends: 75,
    joinedYear: 2013,
        },

        {fullName: 'Riki per sempre',
        status: 'enemy',
        description: '. . . ',
        totalFriends: 26,
        joinedYear: 2010,}

        ,
        {fullName: 'Mantolero',
        status: 'frenemy',
        description: '. . . ',
        totalFriends: 7000,
        joinedYear: 2013,}
    ]

export default function() {


    // long way to loop cards
    const printCards=()=>{
        const cards = []
        for (let i=0;i<data.length;i++){
            console.log(i)
            cards.push(<Card UserData={data[i]}/>)
        }

        return cards
    }


return (
    <>  
    <Logo children="Hello"/>
    <Header content="Panos" number={10}/>
    <Card image1="" UserData = {data} />
    
    {/* loop function */}
    {printCards()}
    </>
)
}