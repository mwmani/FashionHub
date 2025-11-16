FROM mcr.microsoft.com/playwright:v1.48.0-focal
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npx", "playwright", "test"]
