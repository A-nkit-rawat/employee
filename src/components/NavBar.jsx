import { useState } from "react";
import { EmployeeData } from "../mockData/employeeData";
import GlobalState from "./GlobalState";

export default ({ setFilter, setSearch }) => {
    const [searchItem, setSearchItem] = useState("");

    const department = [...new Set(EmployeeData.map((employee) => employee.department))];

    return (
        <>
            <div className="flex">
                <div className="flex">
                    <div className="border-2">
                        <input
                            type="text"
                            id="search"
                            placeholder="Search Name"
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)}
                        />
                    </div>
                    <div className="border-1 ml-1">
                        <button
                            onClick={() => {
                                GlobalState.search = searchItem;
                                setSearch(searchItem);
                                setSearchItem("");
                            }}
                        >Search</button>
                    </div>
                </div>

                <div>
                    <button onClick={(e) => {
                        GlobalState.filter = "",
                            GlobalState.search = ""
                        setSearch("abc");
                        setFilter("abc");
                    }}>Reset</button>
                </div>

                <div className="mt-3 border-2 ml-1">
                    <select name="Department Filter" id="df" onChange={(e) => {
                        GlobalState.filter = e.target.value
                        setFilter(e.target.value)
                    }}>
                        <option value="">All Departments</option>
                        {department.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>
                </div>
            </div >
        </>
    );
};