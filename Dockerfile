FROM node:23 AS build

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY patches patches
RUN corepack enable
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build
RUN pnpm run build:scripts
RUN pnpm install-deps

FROM node:23
WORKDIR /app
COPY --from=build /app .
CMD ["node", ".output/server/index.mjs"]
