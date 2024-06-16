import axios from "axios"

async function getData() {
    await new Promise((r)=>setTimeout(r,8000))
//    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    const response = await axios.get("http://localhost:3000/api/user");
   return response.data;
}
export default async function () {

    const data = await getData();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                Email : {data?.email}
            </div>
        </div>
    </div>

  )
}

 
