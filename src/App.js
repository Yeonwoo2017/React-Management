import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://picsum.photos/64/64?random=1',
  'name': '김철수',
  'birthday': '981231',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/64/64?random=2',
  'name': '홍길동',
  'birthday': '961122',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://picsum.photos/64/64?random=3',
  'name': '김혜자',
  'birthday': '921122',
  'gender': '여자',
  'job': '대학생'
}

]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
