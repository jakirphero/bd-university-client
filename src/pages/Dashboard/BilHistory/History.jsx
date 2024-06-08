
const History = () => {
    return (
        <div className="overflow-x-auto p-10">
            <div>
                <h2 className="text-3xl text-center mb-4">Bil History</h2>
                <h3 className="text-2xl text-start my-4 font-bold">Student ID: <span className="text-purple-500 text-xl">12345</span></h3>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Month</th>
                        <th>Exm Bil</th>
                        <th>Session Bil</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>100</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>200</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>700</td>
                    </tr>      
                    {/* row 4 */}
                    <tr>
                        <th>4</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>900</td>
                    </tr>      
                </tbody>
            </table>
        </div>
    );
};

export default History;