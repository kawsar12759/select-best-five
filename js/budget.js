document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCostString = document.getElementById('per-player-cost').value;
    const perPlayerCost = parseFloat(perPlayerCostString);
    if (isNaN(perPlayerCost)) {
        alert('Enter a valid Cost');
        return;
    }
    const totalPlayerCost = perPlayerCost * 5;
    document.getElementById('total-player-cost').innerText = totalPlayerCost;
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const totalPlayerCost = parseFloat(document.getElementById('total-player-cost').innerText);
    const managerCost = parseFloat(document.getElementById('manager-cost').value);
    const coachCost = parseFloat(document.getElementById('coach-cost').value);
    if (isNaN(totalPlayerCost) || isNaN(managerCost) || isNaN(coachCost)) {
        alert('Please enter value for all the required fields');
        return;
    }
    const totalCost = totalPlayerCost + managerCost + coachCost;
    document.getElementById('total-cost').innerText = totalCost;
})