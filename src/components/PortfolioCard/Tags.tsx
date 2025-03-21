const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className=" flex gap-2 items-center flex-wrap">
      {tags?.length
        ? tags?.map((tag) => (
            <li key={tag} className="my-1">
              <span className="text-white text-sm px-3 py-1 bg-purple-950  rounded-full">
                {tag}
              </span>
            </li>
          ))
        : ''}
    </ul>
  );
};

export default Tags;
