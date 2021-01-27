function Content(props){
    return(
        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div className="flex items-center">
                        <h2 className="text-xl text-gray-800 font-medium mr-auto">{props.name}</h2>
                        <div className="text-gray-800 font-semibold tracking-tighter" style={{ display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20px" color="blue">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                             Verified
                            <div style={{ 'padding': '0 20px' }}>|</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20px">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h5 className="text-xl text-gray-800 font-medium mr-0">{props.designation}</h5>
                    </div>
                    <button className="group relative w-3/4 flex justify-center py-2 px-4 border border-gray-200	 text-sm font-medium rounded-md mt-10">
                        Accepts {props.meetingPercentage} of the meetings
                    </button>
                </div>
    )
}

export default Content;