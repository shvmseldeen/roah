// Import your modular files
import { getPets } from './api/petService.js';
import { createPetCard } from './components/petList.js';

// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('pet-container');
  
  // 1. Fetch data
  const pets = await getPets();
  
  // 2. Render UI
  let htmlContent = '';
  pets.forEach(pet => {
    htmlContent += createPetCard(pet);
  });

  // 3. Inject into the DOM
  container.innerHTML = htmlContent;
});
