import { useNavigate } from "react-router-dom";
import GlobalState from "./GlobalState";
import { useLocation } from "react-router-dom";
const EmployeeCard = ({ employeeData }) => {
  const navigate = useNavigate()
  return (
    <div
      key={employeeData.id}

      className={employeeData.salary <= 60000 ? "max-w-sm rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
        : "max-w-sm rounded-2xl bg-green-300 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-yellow-100"
      }
    >
      {employeeData.salary <= 60000 ? "" : <>🌟 Top Performer</>}
      <h5 className="text-xl font-semibold text-gray-800 mb-2">
        {employeeData.name}
      </h5>

      <p className="text-sm text-gray-500 mb-4">
        {employeeData.department}
      </p>

      <div className="space-y-2 text-sm text-gray-700">
        <div>
          <span className="font-medium">📧 Email:</span>{" "}
          {employeeData.email}
        </div>

        <div>
          <span className="font-medium">💰 Salary:</span>{" "}
          ₹{employeeData.salary.toLocaleString()}
        </div>
        <div>
          {useLocation().pathname.includes("/profile") ? "" :
            <button onClick={(e) => {
              GlobalState.profile = employeeData;
              navigate("/profile")
            }}>View Profile</button>}

        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
