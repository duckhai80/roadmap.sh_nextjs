import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.status(200).json({ message: "Success", session });
  } else {
    res.status(401).json({ error: "Unauthenticated user!" });
  }
}
