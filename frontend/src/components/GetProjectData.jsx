// async function GetProjectData(){
//     const res=await fetch("http://localhost:3000/api/projects-page",{
//         method:"GET"
//     });

//     // const responsejson = await res.json();
//     // const data = responsejson.data
//     // let len = data.length;
//     // for (let i=0; i<len; i++){
//     //     let a = data[i];

//     //     let namei=a.name;
//     //     let desci=a.desc;
//     //     let imagei=a.age;
//     // }







// }
// export default GetProjectData;


import { useEffect, useState } from 'react';




export default function ShowProjectBox() {

    try {
        const [count, counterChanger] = useState(0);
        const [datai, dataiChanger] = useState(null);

        useEffect(() => {
            async function GetProjectData() {
                const res = await fetch("http://localhost:3000/api/projects-page", {
                    method: "GET"
                });

                const responsejson = await res.json();
                const data = responsejson.data;
                const len = data.length;
                if(count==data.length){
                    counterChanger(0);
                }
                dataiChanger(data[count]);

            }
            GetProjectData();
        }, [count]);
        let name = datai.name;
        let desc = datai.desc;
        let image = datai.image;

        return (
            <>
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <img src={image} alt={name}></img>
                </div>
                <button onClick = {()=>counterChanger(prev => prev +1)}>Next</button>
            </>

        )

    }
    catch (error) {
        console.log(error.message);
        return (
            <h1>Loading...</h1>
        )
    }
}
