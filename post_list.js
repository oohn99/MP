import "./post_list.css"

function post_list(){
  return(
  <div className="post_list">
    <div className="P-Box1">
      <div className="P-Title1">프로젝트 명</div>
    </div>
    
    <div className="P-Box2">
      <div className="P-Title2">게시판 리스트</div>
      <div>
        <div className="P-Box">
          <p className="P-Title">가나다라마바사</p>
          <p className="P-Sub">조원1</p>
        </div>
        <div className="P-Box">
          <p className="P-Title">아자차카타파하</p>
          <p className="P-Sub">조원2</p>
        </div>
        <div className="P-Box">
          <p className="P-Title">아야어여오요우유</p>
          <p className="P-Sub">조원3</p>
        </div>
      </div>
    </div>
    <div className="paging">
        <p>| ← | 1 | 2 | 3 | 4 | 5 | → |</p>
    </div>
  </div>
  )
}

export default post_list;