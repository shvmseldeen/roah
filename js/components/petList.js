// Function to generate the HTML string for a single pet
export function createPetCard(pet) {
  return `
    <article class="pet-card">
      <h2 class="pet-name">${pet.name}</h2>
      <p class="pet-details">Type: ${pet.type}</p>
      <p class="pet-details">Breed: ${pet.breed}</p>
      <button class="btn-primary">View Profile</button>
    </article>
  `;
}
