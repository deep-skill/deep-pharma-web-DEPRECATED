"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Props = {
    idTag: number;
    closeModal :  () => void
};

const DeleteTag = ({ idTag , closeModal} : Props) => {
  const router = useRouter()

    const updateTagAxios = async () => {
      try {
          await axios.delete(`http://localhost:3001/tag/${idTag}`)
          router.refresh()
          closeModal()
      } catch (error) {
          console.log(error)
      }
  }
    return (
        <div>
          desea eliminar el tag {idTag}
          <button className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700" onClick={updateTagAxios} >eliminar</button>
        </div>
    );
};

export default DeleteTag;
