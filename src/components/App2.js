import React from "react";

// Importing Components
import Logo from './Logo';
import Header from './Header';
import Card from './Card';
import Button from './Button'
import Counter from "./counter/Counter";
import Form from "./form/Form"

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

const App = () => {

    // short way | MOST USED
    const ShortWayPrintCards =() => {
        // with map
    return data.map((i) => {
        return <Card UserData={i} key={i.fullName}/>
    })
    }


    // long way to loop cards
    const printCards=()=>{
        // create empty array
        const cards = []

        // push components
        for (let i=0;i<data.length;i++){
            console.log(i)
            cards.push(<Card UserData={data[i]} key={i}/>)
        }
        // return array
        return cards
    }


return (
    <>  
    <Logo children="Hello"/>
    <Header content="Panos" number={10}/>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Button children="Press"/>
    <br />
    <br />
    <br />
    {/* <Counter/> */}
    <br />
    <Form/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Card image1="" UserData = {data} />
    <div style={{display:"flex"}}>
    {/* long way function */}
    {printCards()}
    </div>

    {/* short way */}
    {ShortWayPrintCards()}
    </>
)
}

export default App