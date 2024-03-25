import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const CardDetails = ({onDelete}) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const[cardDetails, setCardDetails] = useState(null);

    useEffect(() => {
        const fetchCardDetails = async () => {
            try{
                const response = await fetch(`https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch card details');
                }
                const data = await response.json();
                setCardDetails(data);
            } catch (error) {
                console.error('Error fetching card details:', error);
            }

            };
            fetchCardDetails();
        }, [id]);

       
        const handleDeleteClick = async () => {
            try {
                await onDelete(id);
                navigate('/');
            } catch (error) {
                console.error('Error deleting card:', error);
            }
        };
    
    

        if(!cardDetails) return <div>Sorry this seems to be taking a while</div>

    return (
        <article className="card wrap" key={cardDetails.id}>
            <li className="card__item">
            <div className="card__content--details">
                {cardDetails.avatar && <div className="card__img">
                    <img src={`${cardDetails.avatar}`} alt="Avatar" />
                    </div>}
                <h2 className>{cardDetails.name}</h2>}
            <p>{cardDetails.email}</p>
            </div>
            </li>
            <div className="btn__container">
                <button className="btn btn--primary" onClick={handleDeleteClick}>Delete</button>
                <button className="btn btn--primary">Edit</button>
            </div>
        </article>
        
    )
}


export default CardDetails;