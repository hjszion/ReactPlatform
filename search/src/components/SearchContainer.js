import React, {useState, useEffect} from 'react';
import { Link, withRouter } from "react-router-dom"
import {connect} from 'react-redux';
import {fetchUsers, setUser} from "../redux";

const SearchContainer = (props) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    useEffect(() => {
        props.fetchUsers();
        setUsers(props.userData.users.filter(user => user.name.startsWith(search)));
    }, []);
    useEffect(() => {
        setUsers(props.userData.users.filter(user => user.name.startsWith(search)));
    }, [search]);

    const showDetail = (user) => {
        console.log("re-navigating:", user);
        props.setUser(user);
        props.history.push(`/profile/${user.id}`);
    }

    const usersDisplay = () => {
        return props.userData.loading ? (
            <h2>Loading</h2>
        ) : props.userData.error ? (
            <h2>props.userData.error</h2>
        ) : (
            <div>
                <h2>User List</h2>
                <div>
                    {
                        users && users.map(user => <button key={user.id} onClick={() => showDetail(user)}>{user.name}</button>)
                    }
                </div>
            </div>
        )
    }
    return (
        <div>
            <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <br />
            {usersDisplay()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers:() => dispatch(fetchUsers()),
        setUser: (user) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchContainer));
