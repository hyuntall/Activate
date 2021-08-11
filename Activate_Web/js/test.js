// 중지를 위해 ID 보관
var intervalId = null;

// API 시작
function Start() {
    document.getElementById("RESULT").innerHTML="조회 중...";
    getAPI();
    intervalId = setInterval(getAPI, 5000);
    //5초를 주기로 지속적으로 호출
}

// API 중지
function Stop() {
    if(intervalId != null) {
        clearInterval(intervalId);
        document.getElementById("RESULT").innerHTML="No Data";
    }
}

// dynamoDB에 저장된 데이터를 가져오기 위해 API 호출
var getAPI = function() {
    var API_URI = 'https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/get/act1';                 
    $.ajax(API_URI, {
        method: 'GET',
        contentType: "application/json",
        success: function (result) {
            // 성공시 임시로 작성한 pd 함수 호출
            pd(result)
        },
        error: function(xhr,status,e){
            //실패시 에러
                alert("error");
        }
    });
};


var pd =function(result){
    //이미 호출 되있는 경우 재 호출시 칸 지우고 새로 생성
    if (document.getElementsByTagName("div")[0] != null)
        document.getElementsByTagName("div")[0].remove();

    //칸 지우고 새로 생성
    $('#RESULT').empty();

    //API로부터 호출한 데이터가 존재할 경우
    if (result.length > 0) {
        //각각 tr과 th 생성
        var tr = document.createElement("tr");
        tr.setAttribute("style","background-color:#01DFD7");
        var latTh = document.createElement("th");
        latTh.innerHTML = "latitude";
        var longTh = document.createElement("th");
        longTh.innerHTML = "longitude";
        var phoneTh = document.createElement("th");
        phoneTh.innerHTML = "phoneNumber";
        var ageTh = document.createElement("th");
        ageTh.innerHTML = "age";
        var genderTh = document.createElement("th");
        genderTh.innerHTML = "gender";

        //각각의 th들 tr에 삽입
        tr.append(latTh);
        tr.append(longTh);
        tr.append(phoneTh);
        tr.append(ageTh);
        tr.append(genderTh);
        //html 파일의 RESULT라는 아이디를 가진 요소에 tr 삽입
        $("#RESULT").append(tr);
        //console.log(result) << 데이터가 어떤식으로 되있는지 궁금하면 주석 지우고 이거 콘솔로 확인해봐
        //데이터를 최신순으로 나열하고싶으므로 뒤집기
        result = result.reverse();
        //데이터가 여러개가 시간순//배열의 요소들 각각 하나하나 v라는 이름으로 꺼내어 반복으로 배열에 저장되어있음
        result.forEach(function(v){
            //표 만들고
            var tr = document.createElement("tr");
            var latTd = document.createElement("td");
            var longTd = document.createElement("td");
            var phoneTd = document.createElement("td");
            var ageTd = document.createElement("td");
            var genderTd = document.createElement("td");
            //각각의 td에는 v 내부의 데이터의 요소들을 삽입
            //console.log(v) //<< 데이터가 어떤식으로 되있는지 궁금하면 주석 지우고 이거 콘솔로 확인해봐
            latTd.innerText = v["latitude"];
            longTd.innerText = v["longitude"];
            phoneTd.innerText = v["phoneNumber"];
            ageTd.innerText = v["age"];
            genderTd.innerText = v["gender"];
            //tr에 td들 삽입
            tr.append(latTd);
            tr.append(longTd);
            tr.append(phoneTd);
            tr.append(ageTd);
            tr.append(genderTd);
            //html 파일의 RESULT라는 아이디를 가진 요소에 tr 삽입
            $("#RESULT").append(tr);
        })
    }
}