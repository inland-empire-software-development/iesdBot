FROM node:latest

WORKDIR /usr/src/iesdbot-api

COPY ./ ./

RUN npm install

CMD ["npm", "run", "dev"]

# CMD ["sed -i -e 's/\r//g' ./setup.sh", "/setup.sh"]