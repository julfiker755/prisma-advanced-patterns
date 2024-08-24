import { PrismaClient} from "@prisma/client";


const prisma=new PrismaClient()

const main=async()=>{

    const result = await prisma.user.groupBy({
        // by:['role',"username"],
        by:['role'],
    })
console.log(result)
}

main()