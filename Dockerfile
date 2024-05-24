FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
ARG NEXT_PUBLIC_BASE_URL
ARG ENCRYPT_KEY
RUN echo "NEXT_PUBLIC_BASE_URL variable: $NEXT_PUBLIC_BASE_URL"
RUN touch .env.production \
  && echo "NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL" >> .env.production \
  && echo "ENCRYPT_KEY=$ENCRYPT_KEY" >> .env.production \
  RUN yarn build

FROM node:18-alpine AS runtime

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production --ignore-scripts && yarn cache clean
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
USER node
CMD ["yarn", "start"]