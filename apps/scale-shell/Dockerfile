FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production || true
COPY . .
RUN npm run build || true
CMD ["node", "dist/bundle.js"]
