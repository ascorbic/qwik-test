export default async function handler(req) {
  console.log(req.url);
  return Response.json({ url: req.url });
}
