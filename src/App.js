import React from 'react';
import './App.css';
import Customer from './components/Customer';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: "24px",
  overflow: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});
const customers = [
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
];

function App() {
  return (
    <StyledPaper>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          ))}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}
export default App;
