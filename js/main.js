// Import the specific functions you need from your other files
import { fetchPets } from './api/petService.js';
import { createPetCard } from './components/petUI.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app-root');
  
  // 1. Get the data
  const pets = await fetchPets();
  
  // 2. Clear loading states
  root.innerHTML = ''; 
  
  // 3. Render the UI by combining data and components
  pets.forEach(pet => {
    const cardElement = createPetCard(pet);
    root.appendChild(cardElement);
  });
});
