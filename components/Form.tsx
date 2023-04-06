import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import axios from "axios"
import Button from "./Button";

interface FormProps{
    placeholder: string;
    isComment?: string;
    postId?: string;
}

const Form: React.FC<FormProps> = ({
    placeholder,
    isComment,
    postId
}) => {

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const { data: currentUser} = useCurrentUser()
    const { mutate: mutatePosts} = usePosts()
    
    const [body, setBody] = useState('')
    
    const [isLoading, setIsLoading] = useState(true)
    
    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true)

            await axios.post("/api/posts", {body})
            toast.success("Post Shared")
            setBody("")
            mutatePosts()
        } catch (error) {
            toast.error("Something went wrong :(")
        } finally{
            setIsLoading(false )
        }
      },
      [body, mutatePosts],
    )
    

    return ( 
        <div className="border-b-[1px] border-neutral-800 px-5 py-2">
            <div className="py-8">
                <h1 className="text-white text-2xl text-center mb-4 font-bold">Welcome to Cherry</h1>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button label="Login" onClick={loginModal.onOpen}/>
                    <Button label="Register" onClick={registerModal.onOpen} secondary/>
                </div>
            </div>
        </div>
     );
}
 
export default Form;