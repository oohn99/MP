import "./post_list.css"

function post_list(){
  return(
    <div>
      <div className="post_list">
        <div className="title">모바일 프로그래밍</div>

        <table className="top_area">
          <thead className="screen">
            <tr>
              <th scope="col" className="screen_title">
                  <span>제목</span>
              </th>
              <th scope="col">
                  <span>글쓴이</span>
              </th>
              <th scope="col">
                  <span>날짜</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="notice">
              <td className="notice_title">
                <span>10시까지 자료 올려주세용</span>
              </td>
              <td className="author">
                <span className="member">조원1</span>
              </td>
              <td className="time">2024.05.25</td>
            </tr>

            <tr className="notice">
              <td className="notice_title">
                <span>고생하셨습니다.</span>
              </td>
              <td className="author">
                <span className="member">조원2</span>
              </td>
                 <td className="time">2024.05.24</td>
            </tr>

            <tr className="notice">
              <td className="notice_title">
                <span>회의 가능한 시간 알려주세요.</span>
              </td>
              <td className="author">
                <span className="member">조원1</span>
              </td>
              <td className="time">2024.05.24</td>
            </tr>

            <tr className="notice">
              <td className="notice_title">
                <span>안녕하세요</span>
              </td>
              <td className="author">
                <span className="member">조원4</span>
              </td>
              <td className="time">2024.05.23</td>
            </tr>

            <tr className="notice">
              <td className="notice_title">
                <span>안녕하세요 잘부탁드립니다.</span>
              </td>
              <td className="author">
                <span className="member">조원3</span>
              </td>
              <td className="time">2024.05.23</td>
            </tr>

            <tr className="notice">
              <td className="notice_title">
                <span>열심히 만들어봐요</span>
              </td>
              <td className="author">
                <span className="member">조원2</span>
              </td>
              <td className="time">2024.05.23</td>
            </tr>

            <tr className="notice">
              <td className="notice_title">
                <span>잘부탁드립니다</span>
              </td>
              <td className="author">
                <span className="member">조원1</span>
              </td>
              <td className="time">2024.05.23</td>
            </tr>
          </tbody>
        </table>

        <div className="comment_box">
          <input type="text" class="custom-input"/>
          <div className="Submit-Button">검색</div>
        </div>

        <div className="pagination">
          <div className="paging">
            <p>| ← | 1 | 2 | 3 | 4 | 5 | → |</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default post_list;