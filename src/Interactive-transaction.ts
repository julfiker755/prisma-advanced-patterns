import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async () => {
    const result=await prisma.$transaction(async (transactionClient) => {
        // query 1
        const createResult =await transactionClient.user.create({
            data: {
                username: "julfiekr6",
                email: "jul@gmail.com",
                age: 44,
                role: "user"
            }
        })
       // query 2
       const totalCount =await transactionClient.user.count()
        // query 3
        const updateResult =await transactionClient.user.update({
            where:{
                id:6
            },
            data:{
                age:100,
            }
        })
        return {
            createResult,
            totalCount,
            updateResult
        }

    })
console.log(result)
}


main()