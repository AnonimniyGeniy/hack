#FROM node:carbon-alpine3.11
FROM nikolaik/python-nodejs:latest as development 
RUN apt-get update


COPY req.txt req.txt
RUN pip install -r req.txt
RUN pip install opencv-python
RUN pip install imutils
# Create app directory
WORKDIR /usr/app/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY package-lock.json ./

RUN npm install create-react-app
#RUN apk upgrade npx
#RUN apt-get upgrade nodejs
#RUN npx create-react-app hack
#RUN npm cache clear --force

RUN npm install
RUN npm install --save react-helmet
#RUN apk --help
#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000

#RUN apt-get install -y nodejs npm

CMD npm start
RUN python stream.py