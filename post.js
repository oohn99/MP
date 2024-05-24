import "./post.css"

function post() {
    return(
        <div>
            <div className="post">
                <div className="P-Box1">
                    <div className="P-Title1">모바일 프로그래밍</div>
                </div>
      
                <div className="P-Box2">
                    <p className="P-Title2">잘부탁드립니다</p>
                    <p className="P-Sub1">조원 1</p>
                </div>
                <div className="P-Box3">
                    <p className="P-Text">ㅇㅇ</p>
                </div>
        
                <div className="footer">
                    <div className="P-Box4">
                      <div>
                        <div className="P-Box">
                            <p className="P-Title">조원 2</p>
                            <p className="P-Sub">넵!</p>
                        </div>
      
                        <div className="P-Box">
                            <p className="P-Title">조원 3</p>
                            <p className="P-Sub">네 잘부탁드려용.</p>
                        </div>
      
                        <div className="P-Box">
                            <p className="P-Title">조원 4</p>
                            <p className="P-Sub">잘부탁드립니다..</p>
                        </div>
                      </div>
                     </div>
      
                    <div className="P-Box5">
                        <input type="text" class="custom-input" placeholder="댓글을 입력해주세요" />
                    <div className="Submit-Button">등록</div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default post;