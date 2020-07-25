import React from "react"
import { NextPage, GetStaticProps, GetStaticPaths} from "next"

const IdPage: NextPage<{data: string}> = ({data}) => {
  return (
    <div>{data}</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["/a", "/b", "/c"]
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{data: string}> = async ({params}) => {
  console.log({params})
  const id = params.id as string
  const data = [
    {data: "A", id: "a"},
    {data: "B", id: "b"},
    {data: "C", id: "c"},
  ]
  const result = data.find(d => d.id === id).data

  return {
    props: {data: result}
  }
}

export default IdPage