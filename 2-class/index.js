class Dep {
  // Stands for dependency
  constructor() {
    this.subsribers = [] // The targets that are dependent, and should be
    // run when notify() is called.
  }
  depend() {
    // This replaes our record function
    if (target && !this.subsribers.includes(target)) {
      // Only if there is a target & it's not already subscribed
      this.subsribers.push(target)
    }
  }
  notify() {
    // This replaces our replay function
    this.subsribers.forEach((sub) => sub())
  }
}

const dep = new Dep()

let price = 5
let quantity = 2
let total = 0
let target = () => {
  total = price * quantity
}
dep.depend() // Add this target to our subscribers
target() // Run it to get the total

console.log(total)
price = 20
console.log(total)
dep.notify() // Run the subscribers
console.log(total)
