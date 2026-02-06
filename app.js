// Another file with some issues
const API_URL = 'https://api.example.com';

function fetchData() {
  console.log("Fetching data from API..."); 
  
  const data = {
    name: 'Test',
    value: 100
  };
  
  return data;
}kkkkkkkkkkkkkk


function main() {
  const result = fetchData()
  console.log("Result:", result); // Warning: console
}

main();
