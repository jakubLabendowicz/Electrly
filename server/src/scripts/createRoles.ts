import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let roles = [
    { name: "ADMINISTRATOR", description: "Administrator" },
    { name: "PERMISSIONS_DIRECTOR", description: "Permissions director" },
    { name: "ROLES_DIRECTOR", description: "Roles director" },
    { name: "SCOPES_DIRECTOR", description: "Scopes director" },
    { name: "USERS_DIRECTOR", description: "Users director"},
    { name: "CLIENTS_DIRECTOR", description: "Clients director" },
    { name: "USER", description: "User" }
];

prisma.role.createMany({
    data: roles,
    skipDuplicates: true
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    prisma.$disconnect();
});