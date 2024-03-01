FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine AS runtime

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production --ignore-scripts && yarn cache clean
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
ARG NEXT_PUBLIC_BASE_URL
ENV NODE_ENV production
EXPOSE 3000
USER node
CMD ["yarn", "start"]