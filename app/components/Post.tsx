import React from "react";

const getPosts = async () =>{
    const res = await fetch('http://103.129.115.165:5000/api/Company/List', {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Authorization':  `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiQWRtaW5BY2Nlc3MiOnRydWUsImFwcF9tZXRhZGF0YSI6IiIsImV4cCI6MTczNjE4NjQ1NCwiaXNzIjoiR2VuUE9TIn0.f1n7YRDDrnJQ_iy9zSLBp9wgBU2FnIdpPgome7a6Xcc`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "searchGroupId": 0,
            "searchCompanyName": null,
            "searchVatNumber": null,
            "searchActiveId": 0,
            "page": 1,
            "pageSize": 25,
            "availablePageSizes": [
              "15",
              "25",
              "50",
              "100"
            ],
            "draw": null,
            "start": 0,
            "length": 25
        })
    })
    const data = await res.json();
    return data;
}
const Post = async () => {
    const postData = await getPosts()
    console.log(postData.data.data)

    
    return (
        <div>
            {postData.data.data.map((post:postType, index:number) => (
                <div className="flex justify-between border-1 p-2" key={index}>
                    <div className="w-1/6 text-center font-semibold p-2"> <img className="h-6" src={post.logoThumbnailUrl} alt="" /></div>
                    <h2 className="w-1/6 text-center font-semibold p-2">{post.name}</h2>
                    <p className="w-1/6 text-center font-semibold p-2">{post.groupName}</p>
                    <p className="w-1/6 text-center font-semibold p-2">{post.vatNumber}</p>
                    <p className="w-1/6 text-center font-semibold p-2">{post.active?'yes':'no'}</p>
                    <div className="w-1/6 text-center font-semibold p-2">
                        <button>Edit</button>
                        <button>Delete</button>  
                    </div>
                </div>
            ))}

            
        </div>
    );
};

export default Post;