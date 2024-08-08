import React from "react";
import Image from "next/image";

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
                <Image src={image} alt={title} className="img" width={200} height={200} />
            </div>
            <h1 className="text-xl bold text-heading">{title}</h1>
            <h2 className="italic text-body">{description}</h2>
        </div>
    );
}