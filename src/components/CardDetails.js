function Details(props){
    return(
        <div>
            <div className="flex items-center">
                <div className="">
                    <div className='flex'>
                        <div className="text-500 ml-12 font-semibold ">Affiliations</div>
                    </div>
                    <div className='flex'>
                        <div className="text-gray-500 ml-12 ">{props.affiliation}</div>
                        <div style={{ 'padding': '0 10px' }}>|</div>
                        <div className="text-gray-500 ml-12 ">CEO, WILLOW</div>
                    </div>
                    <div className='m-auto'>
                        <div className='flex mt-10'>
                            <div className="text-500 ml-12 font-semibold ">Industries</div>
                        </div>
                        <div className='flex mb-10'>
                            <button className="group relative w-1/2 flex justify-center py-2 px-4 border border-200	 ml-12 text-sm font-medium rounded-md ">
                                #CyberSecurity
                            </button>
                            <button className="group relative w-1/2 flex justify-center py-2 px-4 border border-200	 ml-12 text-sm font-medium rounded-md ">
                                #ECommerce
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="group relative w-4/5 m-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Request Meeting - {props.meetingRate}</button>
        </div>
    )
}
export default Details;