import { NextPage } from "next"
import Head from "next/head"
import Header from "@/components/layout/Header"
import Form from "@/components/Form"
import PostFeed from "@/components/posts/PostFeed"

export default function Home() {
  return (
    <>
      <Header  label="Home"/> 
      <Form placeholder="Share your thoughts" />
      <PostFeed/>
    </>
  )
}
