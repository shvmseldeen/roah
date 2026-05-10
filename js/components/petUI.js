// This file focuses entirely on taking data and turning it into HTML elements
export function createPetCard(pet) {
  const card = document.createElement('div');
  card.className = 'pet-card';
  
  card.innerHTML = `
    <h3>${pet.name}</h3>
    <p>Species: ${pet.species}</p>
    <p class="status ${pet.status === 'Healthy' ? 'good' : 'warn'}">
      Status: ${pet.status}
    </p>
    <button data-id="${pet.id}" class="action-btn">View Details</button>
  `;
  
  // You can even attach event listeners directly before returning the element
  card.querySelector('.action-btn').addEventListener('click', () => {
    alert(`Viewing details for ${pet.name}`);
  });

  return card;
}
