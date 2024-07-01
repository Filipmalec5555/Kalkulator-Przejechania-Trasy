function calculateCost() {
    const distance = document.getElementById('distance').value;
    const fuelPrice = document.getElementById('fuelPrice').value;
    const fuelConsumption = document.getElementById('fuelConsumption').value;

    if (distance && fuelPrice && fuelConsumption) {
        const fuelNeeded = (distance / 100) * fuelConsumption;
        const cost = fuelNeeded * fuelPrice;

        document.getElementById('resultCost').textContent = `Koszt przejechania trasy wynosi: ${cost.toFixed(2)} zł`;
    } else {
        document.getElementById('resultCost').textContent = 'Proszę wypełnić wszystkie pola.';
    }
}

function calculateAverageConsumption() {
    const fuelUsed = document.getElementById('fuelUsed').value;
    const distanceTravelled = document.getElementById('distanceTravelled').value;
    const fuelPriceOptional = document.getElementById('fuelPriceOptional').value;

    if (fuelUsed && distanceTravelled) {
        const consumption = (fuelUsed / distanceTravelled) * 100;
        let resultText = `Średnie spalanie wynosi: ${consumption.toFixed(2)} l/100 km`;

        if (fuelPriceOptional) {
            const cost = fuelUsed * fuelPriceOptional;
            resultText += `, a koszt przejechanej trasy wynosi: ${cost.toFixed(2)} zł`;
        }

        document.getElementById('resultAverageConsumption').textContent = resultText;
    } else {
        document.getElementById('resultAverageConsumption').textContent = 'Proszę wypełnić wszystkie pola.';
    }
}

function calculateSplitCost() {
    const totalCost = document.getElementById('totalCost').value;
    const passengers = document.getElementById('passengers').value;

    if (totalCost && passengers) {
        const costPerPassenger = totalCost / passengers;

        document.getElementById('resultSplitCost').textContent = `Każdy pasażer powinien zapłacić: ${costPerPassenger.toFixed(2)} zł`;
    } else {
        document.getElementById('resultSplitCost').textContent = 'Proszę wypełnić wszystkie pola.';
    }
}
