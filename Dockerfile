FROM node:4.4

# Copy package.json file to docker image.
COPY package.json /app/

# Define working directory.
WORKDIR /app

# Install node files on docker image.
RUN npm install

# Copy application files
COPY ./lib /app/lib

# Copy migrations directory
COPY ./migrations /app/migrations

# Start application
CMD npm run -s migrate && npm run -s start

# Expose port
EXPOSE 80
