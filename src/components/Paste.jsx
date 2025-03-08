import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
const Paste = () => {

const pastes = useSelector((state)=> state.paste.pastes );

const [searchTerm,setsearchTerm] = useState('');
const dispatch = useDispatch();

const filterdata = pastes.filter( 
    (paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase()) 
);

function handleDelete(pasteId){
  dispatch(removeFromPaste(pasteId))
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
};


  return (
    <div>  

<input  className='p-2 rounded-2xl min-w-[600px] mt-5'  type='search'   placeholder='Search here' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value) }  />

 

<div className='flex flex-col gap-5 mt-5'>{
  filterdata.length>0  && 
  filterdata.map(
    (paste)=>{
      return(

        <div className='border-2 rounded-4xl'  key={paste?._id} >

            <div     >{paste.title}</div>

            <div>{paste.content}</div>

            <div className='flex flex-row  gap-4 place-content-evenly' >

          <button>
            <a  href={`/?pasteId=${paste?._id}`} >   
              Edit
            </a>
          </button>
          <button>
            <a   href={`/pastes/${paste?._id}`} >
              View
            </a>
          </button>
          <button  onClick={()=> handleDelete(paste?._id)}  >Delete</button>
          <button  onClick={() =>  {navigator.clipboard.writeText(paste?.content); toast.success("copied successfully") } } >Copy</button>
          <button    >Share</button>

       
            </div>

            {/* <div>
              {paste.createdAt}
            </div> */}

<div>{formatDate(paste.createdAt)}</div>

        </div>
        
      )

    }

  )
       
}
</div>

 </div>
  )
}

export default Paste
