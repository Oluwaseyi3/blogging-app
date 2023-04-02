
import useLoginModal from '@/hooks/useLoginModal'
import React, { useState, useCallback } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'

const RegisterModal = () => {

const loginModal = useLoginModal()
const registerModal = useRegisterModal()

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [name, setName] = useState("")
const [username, setUsername] = useState("")


const onToggle = useCallback(() => {
      if (isLoading) {
        return;
      }
      registerModal.onClose()
      loginModal.onOpen()
  },[registerModal, isLoading, loginModal])


const onSubmit = useCallback(async() => {
    
try {
    setIsLoading(true)
    loginModal.onClose()
} catch (error) {
    console.log(error); 
} finally {
    setIsLoading(false)
}
  }, [loginModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
        <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        />

        <Input
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={email}
        disabled={isLoading}
        />

<Input
        placeholder='Username '
        onChange={(e) => setUsername(e.target.value)}
        value={email}
        disabled={isLoading}
        />
               <Input
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        />
    </div>
  )

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
        <p>
          Do you have an account already?
          <span className='
          text-white cursor-pointer hover:underline
          '
          onClick={onToggle}
          >
             Sign In
           </span>
        </p> 
    </div>
  )

  return (
    <div>
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Create an account"
        actionLabel='Register'
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />
    </div>
  )
}

export default RegisterModal;