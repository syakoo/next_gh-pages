import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

const ItemPage: NextPage<{ data: string }> = ({ data }) => {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['/items/a', '/items/b']
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ data: string }> = async ({
  params,
}) => {
  console.log({ params })
  const id = params.id as string
  const data = [
    { data: 'ItemA', id: 'a' },
    { data: 'ItemB', id: 'b' },
  ]
  const result = data.find((d) => d.id === id).data

  return {
    props: { data: result },
  }
}

export default ItemPage
