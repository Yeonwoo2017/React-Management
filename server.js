const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
        'id': 1,
        'image': 'https://picsum.photos/64/64?random=1',
        'name': '김철수',
        'birthday': '981231',
        'gender': '남자',
        'job': '학생'
      },
      {
        'id': 2,
        'image': 'https://picsum.photos/64/64?random=2',
        'name': '홍길동',
        'birthday': '961122',
        'gender': '남자',
        'job': '트레이너'
      },
      {
        'id': 3,
        'image': 'https://picsum.photos/64/64?random=3',
        'name': '김혜자',
        'birthday': '921122',
        'gender': '여자',
        'job': '요리사'
      },
  ]);
});
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;