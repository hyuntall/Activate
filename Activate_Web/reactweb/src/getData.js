import axios from "axios"
import { useEffect, useState } from "react"
import React from "react";

const GetData = () => {
  const [apiData, setApiData] = useState();

    useEffect(() => {// 컴포넌트가 실행되면
        const getAPI = async () => { // async는 아직 나도 뭔지 잘 몰겠엉
          try {
            const response = await axios.get(//api로부터 get 요청
                'https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/get/act1'
            );
            setApiData(response.data); //해서 얻은 값의 데이터를 apiData로 설정
          } catch (e) {
            console.log(e);
          }
        };
        getAPI();
      }, []);
    return apiData; // 컴포넌트의 리턴값으로 apiData
};

export default GetData;