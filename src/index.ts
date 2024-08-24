// npx prisma db push
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async () => {
//    const result=await prisma.$queryRaw`SELECT * FROM "users" WHERE true`
//    console.log(result)
const result=await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`
   console.log(result)
}


main()