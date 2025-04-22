// function Employee(name, age, id, salary){
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.salary = salary;
// }
// // Prototype method
// Employee.prototype.printDetails = function (){
//     console.log(`${this.name} is my nameand i am ${this.age} years old . my id is ${this.id} and my salary is ${this.salary} `);
// };

// //  create a instance
// let emp1 = new Employee("Shaha", 22, 234729874293, 50000);
// emp1.printDetails();


// ✅ Constructor Function
function Employee(name, position, salary, image) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.image = image;
  }
  
  // ✅ Prototype Method
  Employee.prototype.renderCard = function () {
    const container = document.getElementById("employeeContainer");
  
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300";
  
    card.innerHTML = `
      <img src="${this.image}" alt="${this.name}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
      <h2 class="text-xl font-semibold text-center">${this.name}</h2>
      <p class="text-center text-gray-500">${this.position}</p>
      <p class="text-center text-green-600 font-bold mt-2">₹${this.salary.toLocaleString()}/month</p>
      <div class="flex justify-center mt-4">
      <a href="https://github.com/shahajahanway" class="font-medium text-primary underline-offset-2 hover:underline focus:underline focus:outline-hidden dark:text-primary-dark"><button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">View Profile</button></a>

      
      </div>
    `;
  
    container.appendChild(card);
  };
  
  // ✅ Create Employee Instances
  const emp3 = new Employee("Ravi Sharma", "UI/UX Designer", 45000, "https://randomuser.me/api/portraits/men/45.jpg");
  const emp2 = new Employee("Aisha khan", "Frontend Developer", 55000, "./aish.jpg");
  const emp1 = new Employee("shahajahan sheikh", "Backend Engineer", 60000, "https://itsedway.com/wp-content/uploads/2024/10/Shahajahan.jpg");
  
  // ✅ Render Cards
  emp1.renderCard();
  emp2.renderCard();
  emp3.renderCard();
  