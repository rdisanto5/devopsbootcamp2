FROM launcher.gcr.io/google/nodejs
COPY . /devopsbootcamp2/
WORKDIR /devopsbootcamp2
RUN npm install
CMD ["npm", "start"]