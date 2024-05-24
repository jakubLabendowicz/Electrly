import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let scopes = [
    { name: "FULL_ACCESS", description: "Full access" }
];

prisma.scope.createMany({
    data: scopes,
    skipDuplicates: true
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    prisma.$disconnect();
});