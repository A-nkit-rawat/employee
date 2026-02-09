import React, { useCallback, useState, useEffect } from "react";
import { EmployeeData } from "../mockData/employeeData";
import NavBar from "./NavBar";
import Card from "./Card";
import GlobalState from "./GlobalState";

const List = () => {

    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");
    const [employeeData, setEmployeeData] = useState([]);

    const handleFilters = useCallback((searchValue, filterValue) => {
        const fVal = (filterValue || "").trim();
        const sVal = (searchValue || "").trim().toLowerCase();
        let filtered = EmployeeData;
        if (fVal != "" && sVal != "") {
            filtered = filtered.filter(e => {
                if (e.department === fVal || e.name.toLowerCase().includes(sVal) ) {
                    return e;
                }
            })
        }
        else {
            if (fVal !== "") {
                filtered = filtered.filter((e) => e.department === fVal);
            }

            else if (sVal !== "") {
                filtered = filtered.filter((e) =>
                    e.name.toLowerCase().includes(sVal)
                );
            }

        }
        setEmployeeData(filtered);
    }, []);

    useEffect(() => {
        setEmployeeData(EmployeeData);
        handleFilters(GlobalState.search, GlobalState.filter);
    }, [filter, search]);

    return (
        <>
            <h1>Employee MS</h1>
            <div className="ml-40">
                <NavBar setFilter={setFilter} setSearch={setSearch} />
                <div>
                    {employeeData && employeeData.map((e) => (
                        <Card key={e.id || e.name} employeeData={e} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default List;