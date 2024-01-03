import { deleteTag } from '@/lib/fetch/tagFetch/tagFetch';
import { useRouter } from 'next/navigation';

interface Props {
  idTag: number;
  closeModal: () => void;
}

const DeleteTag = ({ idTag, closeModal }: Props) => {
  const router = useRouter();

  const updateTagAxios = async () => {
    try {
      await deleteTag(idTag)
      router.refresh();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      desea eliminar el tag {idTag}
      <button
        className="bg-red-400 p-1 m-2 rounded hover:bg-red-500 active:bg-red-700"
        onClick={updateTagAxios}
      >
        eliminar
      </button>
    </div>
  );
};

export default DeleteTag;
