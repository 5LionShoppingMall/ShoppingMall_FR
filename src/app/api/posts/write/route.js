import { NextResponse } from 'next/server'

export async function POST(req) {
  const formData = await req.formData()
  for (let [key, value] of formData.entries()) {
    console.log(key, value)
  }

  return savePost(formData)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}
