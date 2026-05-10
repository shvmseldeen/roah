// A mock function to simulate fetching data from a database
export async function getPets() {
  try {
    // In the future, replace this with an actual fetch() call to your backend
    return [
      { id: 1, name: "Bella", type: "Dog", breed: "Labrador" },
      { id: 2, name: "Luna", type: "Cat", breed: "Siamese" },
      { id: 3, name: "Charlie", type: "Dog", breed: "Beagle" }
    ];
  } catch (error) {
    console.error("Failed to load pets", error);
    return [];
  }
}
