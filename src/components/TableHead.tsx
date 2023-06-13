import { VscArrowSwap } from "react-icons/vsc";

const TableHead = ({
    headerTitle,
    styles,
}: {
    headerTitle: string;
    styles?: string;
}) => {
    return (
        <th className={`text-center px-6 py-2 bg-darkest text-white ${styles}`}>
            <div className="flex justify-center items-center gap-3">
                {headerTitle}
                <div
                    className="flex flex-col"
                    onClick={() => console.log(`Clicked`)}
                >
                    <VscArrowSwap className="w-5 h-5 rotate-90" />
                </div>
            </div>
        </th>
    );
};
export default TableHead;
