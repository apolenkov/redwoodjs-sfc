###########################################################################################
# Builder: node
###########################################################################################

FROM node:18.13.0 as builder

# Set workdir
WORKDIR /app

# Node
ARG NODE_ENV
ARG RUNTIME_ENV

ENV NODE_ENV=$NODE_ENV
ENV RUNTIME_ENV=$RUNTIME_ENV

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ARG DATABASE_URL
ENV DATABASE_TEST_URL=$DATABASE_TEST_URL

ARG CI
ENV CI=$CI

# Copy source
COPY web web
COPY api api
COPY scripts scripts
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.docker.toml redwood.toml

# Install dependencies
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn .yarn
RUN yarn install --immutable

# Build
RUN yarn rw build
