function selectPlayer() {
    const selectedList = document.getElementById('selected-list');
    if (selectedList.children.length < 5) {
        const selectButton = event.target;
        let playerName = selectButton.parentNode.parentNode.childNodes[1].innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        li.classList.add('mb-4');
        selectedList.appendChild(li);
        selectButton.disabled = true;
        selectButton.classList.remove('bg-blue-800');
        selectButton.classList.add('bg-gray-400');
    }
    else {
        alert('5 Players Already added');
        return;
    }

}