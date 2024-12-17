import { Faker, en, es } from "@faker-js/faker"
import bcrypt from 'bcrypt'

const faker = new Faker({
  locale: [es, en]
})

export const generatePet = (quantity) => {
  const pets = []

  for (let i = 0; i < quantity; i++) {
    pets.push({
      name: faker.animal.petName(),
      specie: faker.animal.cat(),
      birthDate: faker.date.birthdate(),
      adopted: false,
      owner: null,
      image: faker.image.urlLoremFlickr("cat")
    })
  }

  return pets
}

export const generateUser = (quantity) => {
  const users = []
  const saltRounds = 10

  for (let i = 0; i < quantity; i++) {
    const passwordHash = bcrypt.hashSync('coder123', saltRounds)
     const role = Math.random() < 0.5 ? 'user' : 'admin'
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: passwordHash,
      role,
      pets: [],
    })
  }

  return users
}