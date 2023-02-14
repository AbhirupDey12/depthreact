import React, { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (URL) => {

     const [data, setdata] = useState([]);

     useEffect(() => {
          axios.get(URL)
               .then((res) => { setdata(res.data); })
               .catch((error) => console.error(error));
     }, []);

     return [data];

}

export default useFetch ;