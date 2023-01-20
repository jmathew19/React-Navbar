import React,{useState,useEffect} from "react"
export default function Quotes(){

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://quotesondesign.com/wp-json/wp/v2/posts/")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, []);


    return( 
    
        <div>
        <h1>Quotes</h1>
        {data.map((item) => (
          <div key={item.id}>
            {item.content.rendered}
            {item.title.rendered}
          </div>
        ))}
      </div>
    )
} 

