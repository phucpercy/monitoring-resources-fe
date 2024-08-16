// type Props = {
//   setShowk
// };

export default function ResourceDetails({detailResource, setShowModal}: any) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Resource Detail
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {detailResource
                ? (
                  <table
                    className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead
                      className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">Page Name</th>
                      <th scope="col" className="px-6 py-4">URL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {detailResource.urls.map((page: any, index: any) => (
                      <tr className="border-b border-neutral-200 dark:border-white/10">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.url}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                )
                : null}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
