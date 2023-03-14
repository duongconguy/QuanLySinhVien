import logo from './logo.svg';
import './App.css';
import { Routes, Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import DangNhap from './Component/DangNhap/DangNhap';
import Main from './Component/./Main/Main';
import ToChuc from './Component/ToChuc/ToChuc';
import DanhSachThanhVien from './Component/QuanTriThanhVien/DanhSachThanhVien';
import NganhNghe from './Component/DanhMuc/NganhNghe';
import Khoa from './Component/DanhMuc/Khoa';
import Lop from './Component/DanhMuc/Lop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<DangNhap />}></Route>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<ToChuc />}></Route>
          <Route path="/ToChuc" element={<ToChuc />}></Route>
          <Route path="/DanhSachThanhVien" element={<DanhSachThanhVien />}></Route>
          <Route path="/DanhMuc/NganhNghe" element={<NganhNghe />}></Route>
          <Route path="/DanhMuc/Khoa" element={<Khoa />}></Route>
          <Route path="/DanhMuc/Lop" element={<Lop />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
