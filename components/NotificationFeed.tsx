import { useEffect } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import {AiOutlineMessage} from "react-icons/ai"

const NotificationFeed = () => {

const {data: currentUser, mutate: mutateCurrentUser} = useCurrentUser()    
const {data: fetchedNotifications = []} = useNotifications(currentUser?.id) 

useEffect(() => {
    mutateCurrentUser()

    
}, [mutateCurrentUser])

if (fetchedNotifications.length ===0) {
     return(
        <div
        className="
        text-neutral-600
        text-center
        p-6
        text-xl
        "
        >

        </div>
     )   
}

return ( 
        <div className="flex flex-col">
       {
        fetchedNotifications.map((notification: Record<string, any>) => (
            <div className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800" key={notification.id}>
                <AiOutlineMessage color="white" size={12}/>
                <p className="text-white">
                    {notification.body}
                </p>
            </div>
        )) 
       }
        </div>
     );
}
 
export default NotificationFeed;