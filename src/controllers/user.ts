async function signUp(req: any, res: any) {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  res.status(200).json({ username, email, password });
}

export { signUp };
