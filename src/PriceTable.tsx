import { Quote } from "./types";

interface Props {
  data: Quote[];
}

const PriceTable: React.FC<Props> = ({ data }) => (
  <section className="py-1 bg-blueGray-50">
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default PriceTable;
