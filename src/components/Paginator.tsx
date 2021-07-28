import ReactPaginate from "react-paginate";
import cx from "classnames";

interface PaginatorProps {
  pageCount: number;
  initialRange?: number;
  finalRange?: number;
  onPageChange: any;
  className?: string;
}

const Paginator = (props: PaginatorProps) => {
  const { pageCount, initialRange, finalRange, onPageChange, className } =
    props;
  const itemClass =
    "z-10 bg-gray text-base border-black text-purple relative inline-flex items-center border text-sm font-bold";
  return (
    <div className={className}>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={initialRange ?? 10}
        marginPagesDisplayed={finalRange ?? 1}
        breakLinkClassName={cx(itemClass)}
        previousLinkClassName={cx(itemClass, "px-4 py-2")}
        nextLinkClassName={cx(itemClass, "px-4 py-2")}
        pageClassName={cx(itemClass)}
        activeClassName="bg-purple"
        activeLinkClassName="text-black"
        pageLinkClassName="px-4 py-2 w-full"
        containerClassName="w-full flex items-center"
        previousLabel="Previous"
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Paginator;
