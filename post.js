import "./post.css"

function post() {
    return(
        <div>
            <div className="post">
                <div className="title">모바일 프로그래밍</div>
                <div className="board">
                    <div className="top_area">
                        <span className="date_h_m">2024.05.24 23:29</span>
                        <span className="main_title">잘부탁드려요</span>
                    </div>
                    <div className="bottom_area">
                        <span className="member">조원 1</span>
                    </div>
                </div>
        
                <div className="main_container">
                    <p className="content">잘부탁드립니다.</p>
                </div>
        
                <div className="comment_area">
                    <div className="comment_list">
                        <div className="meta">
                            <span className="member">조원 2</span>
                            <span className="date">6 분 전</span>
                        </div>
                        <span className="comment">넵!</span>
                    </div>
                    <div className="comment_list">
                        <div className="meta">
                            <span className="member">조원 2</span>
                            <span className="date">4 분 전</span>
                        </div>
                        <span className="comment">잘부탁드려용</span>
                    </div>
                    <div className="comment_list">
                        <div className="meta"> 
                            <span className="member">조원 3</span>
                            <span className="date">1 분 전</span>
                        </div>
                        <span className="comment">넵 잘부탁드립니당</span>
                    </div>
                    <div className="comment_box">
                        <input type="text" class="custom-input" placeholder="댓글을 입력해주세요" />
                        <div className="Submit-Button">등록</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default post;