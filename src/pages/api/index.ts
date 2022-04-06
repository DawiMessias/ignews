import { NextApiRequest, NextApiResponse } from "next";
export default (request: NextApiRequest, response: NextApiResponse) => {
  
  const users = [
    {
      id: 1, name: "David",
    },
    {
      id: 2, name: "Ana"
    }
  ] 

  return response.json(users)
}