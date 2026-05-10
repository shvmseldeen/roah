// This file focuses entirely on getting data. No UI logic allowed here.
export async function fetchPets() {
  try {
    // Replace with your actual backend API endpoint
    // const response = await fetch('http://localhost:5000/api/pets');
    // return await response.json();
    
    // Mock data for demonstration
    return [
      { id: 1, name: "Max", species: "Dog", status: "Healthy" },
      { id: 2, name: "Whiskers", species: "Cat", status: "Checkup Needed" }
    ];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
