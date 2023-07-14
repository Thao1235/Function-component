import { useState } from "react";

function CarSelection() {
    let [selectedCar, setSelectedCar] = useState(0);
    let [selectedColor, setSelectedColor] = useState("0");

    const choiceCar = e => {
        setSelectedCar(e.target.value);
    };
    const choiceColor = e => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <h1>Select Your Car</h1>
            <div>
                Select a car :
                <select onChange={e => {
                    choiceCar(e);
                }}
                >
                    <option value="Mercedes">Mercedes S600</option>
                    <option value="Kia">Kia Morning</option>
                </select>
            </div>
            <div>
                Select a color :
                <select onChange={e => {
                    choiceColor(e);
                }}
                >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
            </div>
            <h1>Your selected a {selectedColor} {selectedCar} </h1>
        </div>
    );
}

export default CarSelection;