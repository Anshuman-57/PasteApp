import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { addToPaste, updateTopaste } from '../redux/pasteSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

const[title,settitle] = useState("");
const[value,setvalue] = useState("");
const [searchparams,setsearchparams] = useSearchParams();
const pasteId = searchparams.get("pasteId");
const dispatch = useDispatch();

const allpaste = useSelector((state)=> state.paste.pastes );


useEffect(() => {
    console.log("page found");
  if(pasteId){
    const paste = allpaste.find((p) => p._id  === pasteId)
    settitle(paste.title);
    setvalue(paste.content);
  }
}, [pasteId])


function createpaste(){
const paste={
    title : title,
    content : value,
    _id : pasteId || 
          Date.now().toString(36),
    createdAt : new Date().toISOString(),
}

if(pasteId){
    dispatch(updateTopaste(paste));
}
else{
    dispatch(addToPaste(paste));
}

settitle('');
setvalue('');
setsearchparams({});

}


  return (

    <div>
       <div className='flex flex-row gap-7 place-content-between  '  >     
      
<input className='p-1 rounded-2xl mt-2 w-[66%] pl-5 '  type='text'  placeholder='Enter title here'  value={title} onChange={ (e)=>  settitle(e.target.value)} >
</input>

<button className='p-2 rounded-2xl mt-2' onClick={createpaste} >
{
    pasteId ? "Update my Paste" : "Create Paste"
}

</button>
    </div>
       
<div  className='mt-8' >

<textarea   className='rounded-2xl mt-4, min-w-[500px] p-4' value={value}  onChange={(e) => setvalue(e.target.value)} placeholder='Enter content' rows={20} ></textarea>

</div>

    </div>
  
  )
}

export default Home
