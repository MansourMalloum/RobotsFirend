import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {

    const robotArray = robots.map(robot => {
        return (
            <Card 
                name={robot.name} 
                id={robot.id}
                email={robot.emai} 
                key={robot.id}
            />
        )
    });
    return(
        <div>
            {robotArray}
        </div>
    )
}

export default CardList;