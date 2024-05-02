export default function History() {
    return (
        <>
            
                <div className="  flex flex-col gap-4 p-4 ">
                    <div className="">

                        <h1 className="text-5xl font-semibold text-[#F95501]">History</h1>
                        <small>"Exercise not only
                            changes your body,
                            it changes your
                            mind, your attitude
                            and your mood."</small>
                    </div>
                    <div className="collapse p-4 collapse-arrow bg-base-200 mb-48 ">
                        <input type="radio" name="my-accordion-2"  />
                        <div className="collapse-title text-xl font-semibold">
                        Plank exercise
                        </div>
                        <div className="collapse-content flex flex-col   justify-between  sm:flex-row  gap-2 ">
                            <div className=" flex justify-between p-2 px-4 w-full bg-green-400 h-10 rounded-lg text-white font-medium  sm:w-[30%]">
                                <p>Correct </p>
                                <p>number</p>
                            </div>
                            <div className=" w-full  bg-[#f95501] h-10 rounded-lg flex justify-between p-2 px-4 text-white font-medium  sm:w-[30%]">
                                <p>Wrong</p>
                                <p>number</p>
                            </div>
                        </div>
                    </div>


                    


                </div>
            
        </>
    )
}