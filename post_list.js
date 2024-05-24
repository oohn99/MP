import "./post_list.css"

function post_list(){
  return(
    <div className="post_list">
      <div className="P-Box1">
        <div className="P-Title1">프로젝트 명</div>
      </div>
      
      <div className="P-Box2">
        <div className="P-Box3">
          <div className="P-Title2">게시판 리스트</div>
        </div>
        <div>
          <div className="P-Box">
            <p className="P-Title">안녕하세요</p>
            <p className="P-Sub">조원1</p>
          </div>
          <div className="P-Box">
            <p className="P-Title">반갑습니다</p>
            <p className="P-Sub">조원2</p>
          </div>
          <div className="P-Box">
            <p className="P-Title">잘부탁드려요</p>
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