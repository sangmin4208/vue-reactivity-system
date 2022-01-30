let price = 5
let quantity = 2
let total = 0
let target = null
let storage = [] // We'll store our target functions in here

function record() {
  storage.push(target)
}
function replay() {
  storage.forEach((run) => run())
}
function print() {
  console.log(`total is ${total}`)
}
target = () => {
  total = price * quantity
}

record() // Remeber this in case we want to run it later
target() // Also go ahead and run it
price = 20
replay() // Run all the targets we've stored
print() // Print the total
