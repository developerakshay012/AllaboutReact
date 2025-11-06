import { createContext, useState } from "react";
import { baseUrl } from "../BaseURl";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading , setLoading] = useState(false)
    const [posts , setPosts] = useState([])
    const [page , setPage] = useState(1);
    const [totalpages , setTotalpages] = useState(null)

    //data filling pending brother

    async function fetchBlogData(page = 1 , tag = null ,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }

        try{
            const result = await fetch(url)
            const data = await result.json();
            console.log(data);
            setPage(data.page)
            setPosts(data.posts)
            setTotalpages(data.totalPages)

        }catch(error){
            console.log("Error in fetching Data")
            setPage(1)
            setPosts([])
            setTotalpages(null)
        }

        setLoading(false)
    }


    function handleChange(page){
        setPage(page)
        fetchBlogData(page)
    }


    const value  = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpages,
        setTotalpages,
        fetchBlogData,
        handleChange
    };

    return <AppContext.Provider value ={value}>
        {children}
    </AppContext.Provider>

}