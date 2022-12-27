// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [{
      "name": "Clarke Jackson",
      "phone": "1-268-797-8773",
      "email": "eget@yahoo.org",
      "country": "Austria",
      "postalZip": "2260"
    },
    {
      "name": "Nasim Bernard",
      "phone": "(646) 221-8155",
      "email": "orci.adipiscing@protonmail.ca",
      "country": "Philippines",
      "postalZip": "37315"
    },
    {
      "name": "Ciara Mcgee",
      "phone": "(472) 674-0281",
      "email": "placerat.cras@google.ca",
      "country": "New Zealand",
      "postalZip": "50658"
    },
    {
      "name": "Velma Berger",
      "phone": "(549) 947-6515",
      "email": "aliquet.molestie@google.couk",
      "country": "Netherlands",
      "postalZip": "47722-74981"
    },
    {
      "name": "Burton Joyce",
      "phone": "1-145-267-0266",
      "email": "sit.amet.nulla@google.org",
      "country": "New Zealand",
      "postalZip": "55820"
    }]
  )
}
