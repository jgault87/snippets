// debounced function

const inputElement = document.createElement('input');
document.body.appendChild(inputElement);

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function searchThis(input) {
  console.log(input);
}

const debouncedSearch = debounce(searchThis, 500);

inputElement.addEventListener('keyup', () => {
  debouncedSearch(inputElement.value);
});

// search function

const members = [
  {
    firstName: 'Cee',
    lastName: 'Pizzle',
    shared: 'This Req, that Rew and this other Req',
  },
  {
    firstName: 'JJ',
    lastName: 'Gault',
    shared: 'This Req, that Rew and this other Req',
  },
  {
    firstName: 'Nick',
    lastName: 'AtNight',
    shared: 'This Req, that Rew and this other Req',
  },
  {
    firstName: 'Jlaw',
    lastName: 'Shinobi',
    shared: 'This Req, that Rew and this other Req',
  },
  {
    firstName: 'Christmas',
    lastName: 'Panda',
    shared: 'This Req, that Rew and this other Req',
  },
];

function searchUsers(contacts, query) {
  const lowerCaseQuery = query.toLowerCase();

  // Filter contacts that match the query
  const matchedContacts = contacts.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`;
    const lowerCaseFullName = fullName.toLowerCase();
    return lowerCaseFullName.includes(lowerCaseQuery);
  });

  // Sort matched contacts to the top of the list
  const sortedContacts = [...matchedContacts, ...contacts.filter((contact) => !matchedContacts.includes(contact))];

  return sortedContacts;
}

console.log(searchUsers(members, 'JJ'));

// create dictionary object from array of objects

const data = [
  {
    id: 1,
    name: 'Murphy Slaw',
    email: 'murphythecat@gmail.com',
    active: true,
  },
  {
    id: 2,
    name: 'Mr. Poopy Butthole',
    email: [
      {
        type: 'home',
        address: 'woof.woof@gmail.com',
      },
      {
        type: 'home',
        address: 'woof.woof@gmail.com',
      },
    ],
    active: true,
  },
  {
    id: 3,
    name: 'DarkBark',
    email: [
      {
        type: 'home',
        address: 'woof.woof@gmail.com',
      },
      {
        type: 'home',
        address: 'woof.woof@gmail.com',
      },
    ],
    active: true,
  },
  {
    id: 8,
    name: 'DarkBark',
    email: 'woof.woof@gmail.com',
    active: true,
  },
];

let dictionary = Object.fromEntries(data.map((x) => [x.id, x]));

console.log(dictionary);

console.log(dictionary[3]);

// sort by field

function byField(fieldName, direction = "asc") {
    return (a, b) => {
      const comparison = a[fieldName] > b[fieldName] ? 1 : -1;
      return direction === "asc" ? comparison : -comparison;
    };
  }
  
  const peeps = [{
      name: 'JJ',
      age: 35
    },
    {
      name: 'Autumn',
      age: 3
    },
    {
      name: 'Audra',
      age: 33
    },
    {
      name: 'Carmen',
      age: 38
    }
  ]
  
  let sortedByName = peeps.sort(byField('name'))
  let sortedByAge = peeps.sort(byField('age'))
  
  console.log('sortedbyname', sortedByName)
console.log('sortedbyage', sortedByAge) 
  
// string conversion

const toTitleCase = (string) => string
  .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Add a space before each capital letter
  .replace(/([A-Z])/g, (match) => match.toLowerCase()) // Convert all capital letters to lowercase
  .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word

console.log(toTitleCase('thisIsTheRealOne')); // Output: "This Is The Real One"
  