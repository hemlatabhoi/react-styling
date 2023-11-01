import React, { useState } from 'react'
import { Table } from 'reactstrap';

export default function Multipleinput() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        address: {
            pincode: "",
            city: "",
            state: "",
        },

    });
    const [dataArr, setDataArr] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
        setDataArr([...dataArr, user]);
        setUser({
            name: "",
            email: "",
            password: "",
            address: {
                pincode: "",
                city: "",
                state: "",
            },
        });
    }
    return (
        <>
            <form classsName="d-grid">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={user?.name}
                    onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={user?.email}
                    onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                />
                <label htmlFor="name">password</label>
                <input
                    type="text"
                    id="password"
                    value={user?.password}
                    onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                />

                <label htmlFor="Pincode">pincode</label>
                <input
                    type="number"
                    id="pincode"
                    value={user?.pincode}
                    onChange={(e) => setUser({ ...user, address: { ...user.address, pincode: e?.target?.value } })}
                />
                <label htmlFor="city">city</label>
                <input
                    type="text"
                    id="city"
                    value={user?.city}
                    onChange={(e) => setUser({ ...user, address: { ...user.address, city: e?.target?.value } })}
                />
                <label htmlFor="state">state</label>
                <input
                    type="text"
                    id="state"
                    value={user?.state}
                    onChange={(e) => setUser({ ...user, address: { ...user.address, state: e?.target?.value } })}
                />
                <input
                    type="submit"
                    className="mt-3"
                    onClick={(e) => submitHandler(e)}
                />
            </form>
            <Table striped>
                <thead>
                    <tr>
                        <th>sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>city</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArr?.map?.((e, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{e?.name}</td>
                                <td>{e?.email}</td>
                                <td>{e?.password}</td>
                                <td>{e?.address?.pincode}</td>
                                <td>{e?.address?.city}</td>
                                <td>{e?.address?.state}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )

}