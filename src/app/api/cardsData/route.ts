import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json([
        {
            id:1,
            slug:"product1",
            title: "Chopard",
            price:1000,
            image:'/pro1.png',
        },
        {
            id:2,
            slug:"product2",
            title:"Rollex",
            price:2000,
            image:'/pro2.png',
        },
        {
            id:3,
            slug:"product3",
            title: "Phillip ",
            price:3000,
            image:'/pro3.png',
        },
        {
            id:4,
            slug:"product4",
            title:"Radoo",
            price:4000,
            image:'/pro4.png',
        },
        {
            id:5,
            slug:"product5",
            title: "Blancpain",
            price:5000,
            image:'/pro5.png',
        },
        


    ],
    {status:200}

)
}