import {Metadata} from "next";
export const metadata:Metadata={
    title:{
        absolute:"My Blog Page is here",
    },
};

export default async function Blog(){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("intentional dealay");
        },2000);
    });
    return <h1>My Blog</h1>;
}