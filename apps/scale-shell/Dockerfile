FROM node:18-alpine
WORKDIR /app

# Copy repo and install all workspaces
COPY . .
RUN npm install

# Build shell along with child apps
RUN npm run build:shell

# Start the Remix server
CMD ["npm", "--prefix", "apps/scale-shell", "run", "start"]
