interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="h-16 pl-6 bg-lightGray flex">
      <div className="self-center">
        <h2 className="font-bold text-xl text-white">{title}</h2>
      </div>
    </div>
  );
};
