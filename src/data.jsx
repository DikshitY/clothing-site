import { faker } from "@faker-js/faker";

faker.seed(123);

export const latestTrends = [...Array(9)].map(item => ({
    image: faker.image.url(),
    name: faker.commerce.productName()
}))

export const data = [...Array(30)].map(item => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.url(),
    rating: faker.helpers.arrayElement(['1 Star', '2 Star', '3 Star', '4 Star', '5 Star']),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    brand: faker.helpers.arrayElement(['Mango', 'H&M'])
})) 