export default async function handler(req) {
  console.log(req.url);
  return Response.json({ url: req.url });
}

export const config = {
  cache: "manual",
  path: "/url/*",
};
