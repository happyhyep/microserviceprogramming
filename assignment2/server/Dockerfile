FROM node:14
WORKDIR /Users/jeonghyein/Desktop/hyen/UNIVERSITY/CollegeEdu/2023-1/마이크로서비스프로그래밍/assignment/assignment2/server/Dockerfile

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]