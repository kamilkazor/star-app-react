import { rest } from "msw";
import page1 from "./responses/page1";
import page2 from "./responses/page2";

const handlers = [
  rest.get("https://swapi.dev/api/starships/", (req, res, ctx) => {
    const page = Number(req.url.searchParams.getAll("page"));
    if (page === 1) return res(ctx.status(200), ctx.json(page1));
    if (page === 2) return res(ctx.status(200), ctx.json(page2));
    return res(ctx.status(400));
  }),
];

export default handlers;
