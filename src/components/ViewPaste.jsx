import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

const {id} = useParams();

const allpaste = useSelector((state) => state.paste.pastes   );

const paste = allpaste.filter((p)=> p._id ==id )[0];
console.log("paste",paste);

  return (
    <div>
    <div className='flex flex-row gap-7 place-content-between  '  >     
   
<input className='p-1 rounded-2xl mt-2 w-[66%] pl-5 '  type='text'  placeholder='Enter title here'  value={paste.title}  disabled onChange={ (e)=>  settitle(e.target.value)} >
</input>

{/* <button className='p-2 rounded-2xl mt-2' onClick={createpaste} >
{
 pasteId ? "Update my Paste" : "Create Paste"
}
</button> */}

 </div>
    
<div  className='mt-8' >

<textarea   className='rounded-2xl mt-4, min-w-[500px] p-4' value={paste.content} disabled onChange={(e) => setvalue(e.target.value)} placeholder='Enter content' rows={20} ></textarea>

</div>

 </div>
  )
}

export default ViewPaste
