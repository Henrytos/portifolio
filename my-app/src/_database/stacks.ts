interface Stack {
  name: string;
  srcImg: string;
  type: "front-end" | "back-end" | "tools";
}

export const myStacks: Stack[] = [
  {
    type: "front-end",
    name: "Html",
    srcImg: "/imgs/stacks/html.svg",
  },
  {
    type: "front-end",
    name: "Css",
    srcImg: "/imgs/stacks/css.svg",
  },
  {
    type: "front-end",
    name: "Javascript",
    srcImg: "/imgs/stacks/javascript.svg",
  },
  {
    type: "front-end",
    name: "php",
    srcImg: "/imgs/stacks/php.svg",
  },
  {
    type: "front-end",
    name: "Typescript",
    srcImg: "/imgs/stacks/typescript.svg",
  },
  {
    type: "front-end",
    name: "React",
    srcImg: "/imgs/stacks/react.svg",
  },
  {
    type: "front-end",
    name: "React Router",
    srcImg: "/imgs/stacks/react-router.svg",
  },
  {
    type: "front-end",
    name: "Radix",
    srcImg: "/imgs/stacks/radix.svg",
  },
  {
    type: "front-end",
    name: "Next Js",
    srcImg: "/imgs/stacks/nextjs.png",
  },
  {
    type: "front-end",
    name: "Tailwind Css",
    srcImg: "/imgs/stacks/tailwind-css.svg",
  },
  {
    type: "front-end",
    name: "Shadcn ui",
    srcImg: "/imgs/stacks/shadcn-ui.png",
  },
  {
    type: "front-end",
    name: "Sass",
    srcImg: "/imgs/stacks/sass.svg",
  },
  {
    type: "front-end",
    name: "Bootstrap",
    srcImg: "/imgs/stacks/bootstrap-solid.svg",
  },
  {
    type: "front-end",
    name: "Vite",
    srcImg: "/imgs/stacks/vite.svg",
  },
  {
    type: "front-end",
    name: "React Hook Form",
    srcImg: "/imgs/stacks/react-hook-form.png",
  },
  {
    type: "front-end",
    name: "react query",
    srcImg: "/imgs/stacks/react-query.svg",
  },
  {
    type: "front-end",
    name: "Zod",
    srcImg: "/imgs/stacks/zod.svg",
  },
  {
    type: "front-end",
    name: "cypreess",
    srcImg: "/imgs/stacks/cypreess.png",
  },
  {
    type: "front-end",
    name: "stripe",
    srcImg: "/imgs/stacks/stripe.svg",
  },
  {
    type: "front-end",
    name: "axios",
    srcImg: "/imgs/stacks/axios.png",
  },
  {
    type: "front-end",
    name: "next auth",
    srcImg: "/imgs/stacks/next-auth.png",
  },
  {
    type: "back-end",
    name: "Node Js",
    srcImg: "/imgs/stacks/nodejs.svg",
  },
  {
    type: "back-end",
    name: "Npm",
    srcImg: "/imgs/stacks/npm.svg",
  },
  {
    type: "back-end",
    name: "Typescript",
    srcImg: "/imgs/stacks/typescript.svg",
  },
  {
    type: "back-end",
    name: "Express",
    srcImg: "/imgs/stacks/express.svg",
  },
  {
    type: "back-end",
    name: "Fastify",
    srcImg: "/imgs/stacks/fastify.svg",
  },
  {
    type: "back-end",
    name: "NestJs",
    srcImg: "/imgs/stacks/nestjs.svg",
  },
  {
    type: "back-end",
    name: "Mysql",
    srcImg: "/imgs/stacks/mysql.webp",
  },
  {
    type: "back-end",
    name: "Postgres",
    srcImg: "/imgs/stacks/postgresql.svg",
  },
  {
    type: "back-end",
    name: "Mongo DB",
    srcImg: "/imgs/stacks/mongodb.svg",
  },
  {
    type: "back-end",
    name: "Prisma",
    srcImg: "/imgs/stacks/prisma.svg",
  },
  {
    type: "back-end",
    name: "Jwt",
    srcImg: "/imgs/stacks/jwt.svg",
  },
  {
    type: "back-end",
    name: "Zod",
    srcImg: "/imgs/stacks/zod.svg",
  },
  {
    type: "back-end",
    name: "Vitest",
    srcImg: "/imgs/stacks/zod.svg",
  },
  {
    type: "back-end",
    name: "axios",
    srcImg: "/imgs/stacks/axios.png",
  },
  {
    type: "tools",
    name: "Git",
    srcImg: "/imgs/stacks/git.svg",
  },
  {
    type: "tools",
    name: "GitHub",
    srcImg: "/imgs/stacks/github.svg",
  },
  {
    type: "tools",
    name: "Figma",
    srcImg: "/imgs/stacks/figma.svg",
  },
  {
    type: "tools",
    name: "VS Code",
    srcImg: "/imgs/stacks/vscode.svg",
  },

  {
    type: "tools",
    name: "Vercel",
    srcImg: "/imgs/stacks/vercel.svg",
  },
  {
    type: "tools",
    name: "Postman",
    srcImg: "/imgs/stacks/getpostman-icon.svg",
  },
  {
    type: "tools",
    name: "insomnia",
    srcImg: "/imgs/stacks/insomnia.svg",
  },
  {
    type: "tools",
    name: "Notion",
    srcImg: "/imgs/stacks/notion.svg",
  },
  {
    type: "tools",
    name: "Render",
    srcImg: "/imgs/stacks/render.svg",
  },
  {
    type: "tools",
    name: "cloudflare",
    srcImg: "/imgs/stacks/cloudflare.webp",
  },
];

export const stacksFontEnd = myStacks.filter(
  (stack) => stack.type === "front-end"
);
export const stacksBackEnd = myStacks.filter(
  (stack) => stack.type === "back-end"
);
export const stacksTools = myStacks.filter((stack) => stack.type === "tools");
