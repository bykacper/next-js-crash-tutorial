const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  throw new Error("global error!");

  return <div className="text-3xl"> User profile {id} </div>;
};

export default Page;
