import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// tsx와 ts의 차이는 element 요소 즉 <>와 같은 요소를 가지고 있는지가 차이점이다!
// tsx에서는 element가 없고 component로 명명해줘야한다. => 하지만 npm 문서에서 보여지는 것처럼 @types가 필요없음,, 그냥 react-router-dom만 받아도 type이 built-in 되어 있기 떄문이다,,,
// Routes가 없다,,,, 공식문서에는 있는데
