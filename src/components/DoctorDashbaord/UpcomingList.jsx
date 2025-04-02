import React from "react";

const UpcomingList = () => {
    const users = [
        { name: "John Doe", email: "johndoe@gmail.com", phone: "555-555-5555", status: "Active" },
        { name: "Jane Doe", email: "janedoe@gmail.com", phone: "555-555-5555", status: "Inactive" },
        { name: "Alice Smith", email: "alice@gmail.com", phone: "555-555-5555", status: "Inactive" },
        { name: "Bob Brown", email: "bob@gmail.com", phone: "555-555-5555", status: "Inactive" },
    ];

    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
            <table className="w-full table-fixed">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="py-4 px-6 border-b border-gray-200">{user.name}</td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate">{user.email}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{user.phone}</td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <span className={`py-1 px-2 rounded-full text-xs ${user.status === "Active" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                                    {user.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UpcomingList;
