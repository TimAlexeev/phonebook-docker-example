# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

COPY . /phonebook
# set working directory
WORKDIR /phonebook
# add `/app/node_modules/.bin` to $PATH
ENV PATH /phonebook/node_modules/.bin:$PATH
RUN npm install
RUN npm install -g @angular/cli@8.2.0
WORKDIR /phonebook/src/app

CMD ng serve --host 0.0.0.0