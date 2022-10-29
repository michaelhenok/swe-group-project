import React, { useRef } from 'react';
import styled from "styled-components";
import Fleet from "./Fleet";

const Fleets = ({cars}) => {


    return (
        <FleetSection id='fleetSection'>
            <div className="content container">
                <h2 className="text-uppercase text-center" style={{marginTop: '15%', fontSize: '300%'}}> wherever you go, we’ve got your ride with our Luxury cars.</h2>
                <p style={{fontSize: '150%', marginTop: '7%'}}> Asmara car rental Luxury cars are includes upgraded amenities like leather seats, efficient performance and plenty of room for
                    passengers and luggage and we have especial offer for our prime customers. Asmara car rental is always willing to create unforgettable memories to our customers with our luxury cars and our professional employs
                    service we provide.

                </p>
                <div className="fleets">
                    {
                        cars && cars.length > 0 && cars.map((car,index) =>
                            <Fleet key={car.carId} carId={car.carId} reserveStatus={car.isReserved} img={car.imageCover} brand={car.name} model={car.model} description={car.description} />
                        )
                    }
                </div>
            </div>
        </FleetSection>
    );
};

const FleetSection = styled.div`
    padding: 6rem 0;
    .fleets{
      margin-top: 15%;
      display: flex;
      gap: 1rem;
      padding: 10rem 0 5rem;
      flex-wrap: wrap
    }
`;

export default Fleets;
