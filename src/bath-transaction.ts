import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async () => {

    const createResult =prisma.user.create({
        data: {
            username: "julfiekr4",
            email: "adminn@gmail.com",
            age: 44,
            role: "admin"
        }
    })

    const updateResult =prisma.user.update({
        where:{
            id:6
        },
        data:{
            age:100,
        }
    })
    const [createData,updateData] = await prisma.$transaction([
        createResult,
        updateResult
      ])
      console.log(createData)
      console.log(updateData)
}


main()