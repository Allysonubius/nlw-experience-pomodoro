import Head from 'next/head'
import { ExperienceBar } from "./src/components/ExperienceBar";

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar/>
    </div>
  )
}
