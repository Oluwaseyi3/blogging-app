
import {create} from "zustand"

interface RegisterModalstore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalstore>((set) => ({
 isOpen: true,
 onOpen: () => set({isOpen: true}),
 onClose: () => set({isOpen: false}),
}))

export default useRegisterModal;
