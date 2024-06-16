
import axios from "axios";

async function getUserData() {
 
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}

export default async function Home() {

  const userDetails = await getUserData();
  console.log(userDetails.name)
  return (
   <div>
    <div>hello  world</div>
  
   <div>{userDetails.name}</div>
   <div>{userDetails.email}</div>
   </div>
  );
}
