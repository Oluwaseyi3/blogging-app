import { NextPage } from "next"
import Head from "next/head"
import Header from "@/components/layout/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <>
      <Header  label="Home"/> 
      <Form placeholder="What's happening" />
    </>
  )
}
