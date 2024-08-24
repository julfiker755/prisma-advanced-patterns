import { PrismaClient } from "@prisma/client";

// Node ---------
// model User {
//     id Int @id @default(autoincrement())
//     username String
//     email String @unique
//     age Int
//     role String
//     @@map("users")<<<<---------------row qery use hobe------------------->>>>
//   }



const prisma = new PrismaClient()

const main = async () => {
    //    const result=await prisma.$queryRaw`SELECT * FROM "users" WHERE true`
    //    console.log(result)


    const result = await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`
    console.log(result)
}


main()