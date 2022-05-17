const patternNum = /[0-9]/;						            // 숫자 체크
const patternEng = /[a-zA-Z]/;					            // 영어 체크
const patternEngLower = /[a-z]/;				            // 영어 소문자 체크
const patternEngUpper = /[A-Z]/;				            // 영어 대문자 체크
const patternSpc = /[~!@#$%^&*()_+|<>?:{}]/;	            // 특수문자 체크
const patternKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;			          // 한글 체크
const patternEmail = /^([\w-]+(?:\.[\w-]+)*)/g;             // 이메일 체크


String.prototype.isValidId = function () {
    let result = false;
    const str = this;

    if (patternKor.test(str) || (str.search(patternNum) < 0 || str.search(patternEngLower) < 0)) {
        alert('아이디는 영문 소문자와 숫자조합으로 등록가능합니다.');
    } else{
        result = true;
    }
    
    return result;
};

String.prototype.isValidPw = function () {
    let result = false;
    const str = this;
    let pwTypeCount = (str.search(patternNum) == -1 ? 0 : 1) + (str.search(patternEngLower) == -1 ? 0 : 1) + (str.search(patternEngUpper) == -1 ? 0 : 1) + (str.search(patternSpc) == -1 ? 0 : 1);

    if (!str) {
        alert("비밀번호를 입력해주세요.")
    } else if (pwTypeCount < 2) {
        alert('비밀번호는 영문 대문자, 소문자, 숫자, 특수문자 중 2개 이상을 사용하여야 합니다.');
    } else if (pwTypeCount == 2) {
        if (str.length < 10 || str.length > 16) {
            alert('영문 대문자, 소문자, 숫자, 특수문자 중 2가지를 조합한 경우, 10자 이상 16자 이하로 생성해주세요.');
        } else {
            result = true;
        }
    } else if (pwTypeCount >= 3) {
        if (str.length < 8 || str.length > 16) {
            alert('영문 대문자, 소문자, 숫자, 특수문자 중 3가지 이상을 조합한 경우, 8자 이상 16자 이하로 생성해주세요.');
        } else {
            result = true;
        }
    }

    return result;
};

