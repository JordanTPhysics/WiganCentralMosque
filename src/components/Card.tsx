import React from "react";

import "../styles/Card.css";

type CardProps = {
    title: string;
    description: string;
    image: string;
};

export default function Card({ title, description, image }: CardProps) {

    return (

        <div className="card bg-secondary p-3 m-1 shadow-lg">
            <div className="img-container ">
                <img src={image} alt={title} className="img " />
            </div>
            <h1 className="text-xl bold text-heading">{title}</h1>
            <h2 className="italic text-body">{description}</h2>
        </div>
    );
}