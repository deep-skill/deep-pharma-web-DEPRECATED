import { useDebouncedCallback } from 'use-debounce';

interface SearchProps {
  backgroundColor?: string;
  placeHolder?: string;
  handleSearch: (value: string) => void;
}

const Search = ({ placeHolder, handleSearch }: SearchProps) => {
  const handleChange: any = useDebouncedCallback(
    (value) => handleSearch(value),
    500,
  );

  return (
    <>
      <input
        className="h-12 min-w-[20rem] w-3/5 px-5 rounded-md outline-none shadow-md shadow-zinc-300 focus:border-[1px] transition-all"
        type="text"
        placeholder={placeHolder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default Search;
