   import useCurrentUser from "@/hooks/useCurrentUser";
   import useUser from "@/hooks/useUser";
   import useEditModal from "@/hooks/useEditModal";
   const EditModal = () => {
   
    const {data: currentUser} = useCurrentUser()
    const {mutate: mutateFetchedUser } = useUser(currentUser?.id)
    const editModal = useEditModal()
    return (
    <div>

    </div>
     );
   }
    
   export default EditModal;