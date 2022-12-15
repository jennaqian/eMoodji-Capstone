import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import icon from "../../assets/logo/user-details-icon.png";

const API = process.env.REACT_APP_API_URL;

export default function UserDetails(){
    const [user, setUser] = useState([]);
    const [entriesCount, setEntriesCount] = useState(0);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/users/${id}`)
        .then((res) => {
            if(res.data.id){
                setUser(res.data);
            }else{
                navigate(`/not-found`)
            }
        })
        .catch(error => console.log(error))
        
        axios.get(`${API}/users/${id}/entries`)
        .then((res)=> {
            if(res.data){
                setEntriesCount(res.data.length);
            }
        })
        .catch(error => console.log(error))
    }, [id, navigate]);

    let { fname, lname, email } = user;

    const handleDelete = () => {
        axios.delete(`${API}/users/${id}`)
            .then(res => navigate("/"))
            .catch(error => console.log(error))
    };

    return(
        <article className="user-details-page">
                <div className="user-details">
                    <div>
                        <img className="user-details-icon" src={"https://www.freeiconspng.com/uploads/profile-icon-person-user-19.png"} alt="user details icon"/>
                    </div>
                    
                    <div>
                        <div className="entries-count">
                            <h1>{entriesCount}</h1>
                            <h5>Entries</h5>
                        </div>
                        <h2>{fname} {lname}</h2>
                        <h3>{email}</h3>
                        {/* <h3>First name: {fname}</h3> */}
                        {/* <h3>Last name: {lname}</h3> */}
                        {/* <h3>Email: {email}</h3> */}
                        {/* <h3>Total Entries Made: {entriesCount}</h3> */}
                        <button onClick={handleDelete} className="homepage-button nav-button user-info-button">Delete Account</button>
                    </div>
                    {/* <Link to={`/users/${id}/edit`}><button className="homepage-button nav-button user-info-button">Edit Information</button></Link> */}
                </div>
        </article>
    )
}