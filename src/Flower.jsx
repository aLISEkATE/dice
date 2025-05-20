import { useState } from "react";
import "./Flower.css";

function Flower() {
    const [petals, setPetals] = useState(() => {
        // Generate a random number of petals between 5 and 15
        const randomPetals = Math.floor(Math.random() * 11) + 5;
        return Array.from({ length: randomPetals }, (_, i) =>
            i % 2 === 0 ? "He loves me" : "He loves me not"
        );
    });
    const [lastPhrase, setLastPhrase] = useState("");

    function pick() {
        setPetals((prevPetals) => {
            const [first, ...rest] = prevPetals;
            setLastPhrase(first); // Store the last picked phrase
            return rest;
        });
    }

    return (
        <article className="flower">
            <h2>Flower Picking</h2>
            {petals.length > 0 ? (
                <>  
                    <button onClick={pick}>Pick a Petal</button>
                    <p><strong>{petals[0]}</strong></p>
                    <p>{'🌸'.repeat(petals.length)}</p>
                </>
            ) : (
                <p><strong>{lastPhrase}</strong></p>
            )}
        </article>
    );
}

export default Flower;
