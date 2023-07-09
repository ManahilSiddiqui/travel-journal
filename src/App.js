import React from 'react';
import './index.css';
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


export default function App() {

    const cardElements  = data.map(item => {
        return (
            <Card 
            key = {item.id} 
            {...item} 
            />
        )
    })
    return (

        <div>

            <Navbar />
            {cardElements}
        </div>


    )
}