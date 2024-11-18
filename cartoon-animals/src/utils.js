import React from "react";

export default function ReturnImage({ cartoonAnimal }) {
    return (
        <div className="card mb-4 shadow-sm bg-light">
            <div className="card-body">
                <h1 className="card-title text-primary text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    {cartoonAnimal.name}
                </h1>
                <p className="card-subtitle mb-3 text-muted text-center">
                    {cartoonAnimal.animal}
                </p>
                <ul className="list-group list-group-flush">
                    {cartoonAnimal.accomplishments.map((accomplishment, index) => (
                        <li
                            key={index}
                            className="list-group-item"
                            style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold', color: '#495057' }}
                        >
                            {accomplishment}
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-3">
                    <img
                        src={cartoonAnimal.url}
                        alt={cartoonAnimal.name}
                        className="img-fluid rounded"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '300px',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
