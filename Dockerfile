# Use Node.js 22-alpine as the base image
FROM node:22-alpine

# Install Linux perf tool
RUN apk add --no-cache linux-tools

WORKDIR /
EXPOSE 8080

COPY './index.js' /

CMD ["node", "--perf-basic-prof", "index.js"]
