import Header from "@/components/layout/Header";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import NotificationFeed from "@/components/NotificationFeed";

export async function getServerSideProps(context:  NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return{
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    console.log(session);
    

    return {
        props: {
            session
        }
    }
}

const Notifications = () => {
    return (  
        <>
        <Header label="Notifications" showBackArrow/>
        <NotificationFeed/>
        </>
    );
}
 
export default Notifications;