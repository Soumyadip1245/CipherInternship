import React, { useEffect, useState } from 'react'
import './Section.css'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../footer/Footer';
const Section = ({ token, isLoggedIn }) => {

    const [name, setName] = useState('');
    const [id, setId] = useState("");
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [highested, setHighested] = useState('');
    const [currently, setCurrently] = useState('');
    const [interest, setInterest] = useState(["Web Development", "App Development", "Devops", "UI/UX Development"]);
    const [checkedInterests, setCheckedInterests] = useState([]);


    const getUserProfile = async () => {
        const decode = jwt_decode(token);
        setId(decode.userId)
        let res = await axios.post('https://cipher-internship.vercel.app/auth/profile/' + decode.userId);
        if (res.data.success) {
            setName(res.data.data.name)
            setPassword(res.data.data.password)
            setEmail(res.data.data.email)
            setAbout(res.data.data.about)
            setLinkedin(res.data.data.linkedin)
            setGithub(res.data.data.github)
            setFacebook(res.data.data.facebook)
            setInstagram(res.data.data.instagram)
            setHighested(res.data.data.highested)
            setCurrently(res.data.data.currently)
            setCheckedInterests(res.data.data.interest)
        }
    };

    const editProfile = async () => {
        var obj = {
            name: name,
            email: email,
            about: about,
            linkedin: linkedin,
            github: github,
            instagram: instagram,
            facebook: facebook,
            currently: currently,
            highested: highested,
        };
        let res = await axios.put(`https://cipher-internship.vercel.app/auth/edit/${id}`, obj)
        if (res.data.success) {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    useEffect(() => {
        const interestedit = async () => {
            const ob = {
                interest: checkedInterests,
            };
            const res = await axios.put(
                `https://cipher-internship.vercel.app/auth/interest/${id}`,
                ob
            );
        };
        interestedit();
    }, [checkedInterests, id]);

    const passwordProfile = async () => {
        var ob = {
            "password": password
        }
        let res = await axios.put(`https://cipher-internship.vercel.app/auth/pedit/${id}`, ob)
        if (res.data.success) {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    const handleCheckboxChange = async (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCheckedInterests([...checkedInterests, value]);
            toast.success("Updated Successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            setCheckedInterests(checkedInterests.filter((item) => item !== value));
            toast.success("Updated Successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    };

    const interestedit = async () => {
        var ob = {
            "interest": checkedInterests
        }
        let res = await axios.put(`https://cipher-internship.vercel.app/auth/interest/${id}`, ob)
    }
    useEffect(() => {
        if (isLoggedIn && token) {
            getUserProfile();
        }
    }, [isLoggedIn, token]);
    return (
        <>

            <section>

                <div className="main-flex">
                    <div className="left-flex">
                        {/* <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" /> */}
                        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
                        <div className="text-field">
                            <h5>Hello, </h5>
                            <h4>{name} </h4>
                            <h6>{email}</h6>
                        </div>
                    </div>
                    <div className="right-flex">
                        <Link to="/follower"><h5>0 Followers</h5></Link>

                    </div>
                </div>
            </section>
            <main>
                {/* About Section */}
                <div className="text-about">
                    <h5>ABOUT ME</h5>
                    <button onClick={editProfile}>Add/Edit</button>
                </div>
                <div className="textarea-about">
                    <textarea class="textarea-text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Add something about you." rows="4" disabled=""></textarea>
                </div>

                <div className="text-underline"></div>
                {/* Map Section */}
                <div className="text-about">
                    <h5>CIPHER MAP</h5>
                    {/* <button>Edit</button> */}
                </div>
                <div className="map-heat">
                    <ReactCalendarHeatmap
                        startDate={new Date('2023-01-01')}
                        endDate={new Date('2023-12-31')}
                        values={[
                            { date: '2023-01-01', count: 4 },
                            { date: '2023-01-22', count: 6 },
                            { date: '2023-03-15', count: 2 },
                            // and so on
                        ]}
                        weekdayLabels={['Monday', '', 'Wednesday', '', 'Friday']}
                        weekStartsOn={1}
                    />

                    <div class="main-foot"><span>Less</span><svg width="12" height="12"><rect width="12" height="12" fill="orange"></rect></svg><svg width="12" height="12"><rect width="12" height="12" fill="orange"></rect></svg><svg width="12" height="12"><rect width="12" height="12" fill="orange"></rect></svg><svg width="12" height="12"><rect width="12" height="12" fill="orange"></rect></svg><svg width="12" height="12"><rect width="12" height="12" fill="orange"></rect></svg><span>More</span></div>
                </div>
                <div className="text-underline"></div>

                {/* Links Section */}
                <div className="text-about">
                    <h5>On Web</h5>
                    <button onClick={editProfile}>Add/Change</button>
                </div>
                <div className="container-link">
                    <div className="left-links">
                        <div className="title-link">
                            <div className="title-title">Linkedin</div>
                            <div className="title-input-link">
                                <span className="title-link-icon">
                                    <i class="fa-brands fa-linkedin"></i>
                                </span>
                                <input
                                    className="title-link-text"
                                    placeholder="LinkedIn"
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="title-link">
                            <div className="title-title">Github</div>
                            <div className="title-input-link">
                                <span className="title-link-icon">
                                    <i class="fa-brands fa-github"></i>
                                </span>
                                <input
                                    className="title-link-text"
                                    placeholder="Github"
                                    value={github}
                                    onChange={(e) => setGithub(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right-links">
                        <div className="title-link">
                            <div className="title-title">Instagram</div>
                            <div className="title-input-link">
                                <span className="title-link-icon">
                                    <i class="fa-brands fa-instagram"></i>
                                </span>
                                <input
                                    className="title-link-text"
                                    placeholder="Instagram"
                                    value={instagram}
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="title-link">
                            <div className="title-title">Facebook</div>
                            <div className="title-input-link">
                                <span className="title-link-icon">
                                    <i class="fa-brands fa-facebook"></i>
                                </span>
                                <input
                                    className="title-link-text"
                                    placeholder="Facebook"
                                    value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-underline"></div>

                {/* Password */}
                <div className="text-about">
                    <h5>Professional Information</h5>
                    <button onClick={editProfile}>Change/Add</button>
                </div>
                <div className="container-flex">
                    <div class="title-link">
                        <div class="title-title">Highest Education</div>
                        <div class="title-input-link">
                            <select onChange={(e) => setHighested(e.target.value)} class="title-link-text">
                                <option selected disabled>{highested === "" ? "Select" : highested}</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post - Graduate">Post - Graduate</option>
                            </select>
                        </div>
                    </div>
                    <div class="title-link">
                        <div class="title-title">What you do currently?</div>
                        <div class="title-input-link">
                            <select onChange={(e) => setCurrently(e.target.value)} class="title-link-text">
                                <option selected disabled>{currently === "" ? "Select" : currently}</option>
                                <option value="Student">Student</option>
                                <option value="College">College</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-underline"></div>
                {/* Password Section */}
                <div className="text-about">
                    <h5>Password & Security</h5>
                    <button onClick={passwordProfile}>Change</button>
                </div>
                <div className="title-link">
                    <div className="title-title">Password</div>
                    <div className="title-input-link">
                        <input
                            type="password"
                            className="title-link-text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="text-underline"></div>
                {/* Interest Section */}
                <div className="text-about">
                    <h5>Interests</h5>
                    <button data-mdb-toggle="modal" data-mdb-target="#exampleModal">Edit</button>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="modal-container">
                                        {interest.slice(0, 4).map((interestItem) => (
                                            <label key={interestItem} for={`interest-${interestItem}`} class="button-checkbox">
                                                <input
                                                    type="checkbox"
                                                    value={interestItem}
                                                    onChange={handleCheckboxChange}
                                                    checked={checkedInterests.includes(interestItem)}
                                                    id={`interest-${interestItem}`}
                                                />
                                                {interestItem}
                                            </label>
                                        ))}
                                    </div><div className="modal-container">
                                        {interest.slice(0, 4).map((interestItem) => (

                                            <label key={interestItem}>
                                                <input
                                                    type="checkbox"
                                                    value={interestItem}
                                                    onChange={handleCheckboxChange}
                                                    checked={checkedInterests.includes(interestItem)}
                                                />

                                                {interestItem}
                                            </label>
                                        ))}

                                    </div>



                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-mdb-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main >
            <Footer />
        </>
    )
}

export default Section