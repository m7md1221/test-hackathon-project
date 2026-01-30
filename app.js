// Another file with some issues
const API_URL = "https://api.example.com"  // Missing semicolon

function fetchData() {
  console.log("Fetching data from API..."); // Warning: console
  
  const data = {
    name: 'Test',
    value: 100
  };
  
  return data;
}

const unusedConstant = 42; // Error: unused

function main() {
  const result = fetchData();
  console.log("Result:", result); // Warning: console
}

main();
