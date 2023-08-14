let arr = ["John", "Smith"]
let st="John smith"
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = st.split(" ");

console.log(firstName); // John
console.log(surname);
