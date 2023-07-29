import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { InitialInfo, TodoInfo } from "../redux/modules/todo";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  const todos = useSelector<InitialInfo, TodoInfo[]>((state) => state.todos);

  // find MDN을 찾아서 보기
  // find 메소드 = 해당되는 배열의 모든 객체를 다 뽑아오는 것!
  const foundTodo = todos.find((item) => {
    return item.id === params.id;
  });

  // 객체일 때만 사용할 수 있는 '?.'가 있다. 값이 있으면 접근 아니면 하지말라는 의미 ===> JS 메서드 체이닝
  return (
    <DetailTodoData>
      <p style={{ fontSize: "10px" }}>id : {foundTodo?.id}</p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{foundTodo?.title}</p>
      <p>{foundTodo?.contents}</p>
      <Btn
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </Btn>
    </DetailTodoData>
  );
}

export default Detail;

const DetailTodoData = styled.div`
  margin: 100px auto;
  width: 900px;
  border: 3px solid rgba(160, 187, 148, 0.919);
  padding: 30px;
  position: relative;
`;

const Btn = styled.button`
  background-color: rgb(236, 236, 203);
  width: 60px;
  height: 30px;
  border: none;
  margin-left: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
