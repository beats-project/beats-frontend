import NoResultFoundImage from '../../assets/no_data_found.png'

const NoDataFound = () => {
  return (
    <>
      <div className="w-full h-fit p-8 m-4 bg-slate-100 flex flex-col justify-center items-center rounded-xl gap-4">
        <h1 className="text-xl text-slate-600"> Sorry! No Results found</h1>
        <img src={NoResultFoundImage} alt="" width={400} />
      </div>
    </>
  )
}

export default NoDataFound
