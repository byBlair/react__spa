import './css/Login.css'
export default function Login(){
  return(
    <div className='Login'>
      <h2>아모레퍼시픽 뷰티포인트<br/>통합회원 아이디로 로그인해주세요</h2>
      <form method="post">
        <input type="text" name="userName" placeholder="ID를 입력해주세요"/>
        <input type="password" name="userPassword" placeholder="비밀번호를 입력해주세요" />
        <input type="submit" value= 'Login' />
      </form>
      <dl>
        <dt>아이디찾기</dt>
        <dd>비밀번호 찾기</dd>
        <dd>비회원 주문/조회</dd>
        <dd>회원가입하기</dd>
      </dl>
    </div>
  )
}