import React, { useEffect, useState } from 'react'
import './Section.css'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Section = ({ token, isLoggedIn }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState("");
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [highested, setHighested] = useState('');
    const [currently, setCurrently] = useState('');
    const getUserProfile = async () => {
        console.log('Fetching user profile...');
        const decode = jwt_decode(token);
        setId(decode.userId)
        let res = await axios.post('http://localhost:8080/auth/profile/' + decode.userId);
        if (res.data.success) {
            console.log(res.data.data)
            setName(res.data.data.name)
            setPassword(res.data.data.phone)
            setEmail(res.data.data.email)
            setAbout(res.data.data.about)
            setLinkedin(res.data.data.linkedin)
            setGithub(res.data.data.github)
            setFacebook(res.data.data.facebook)
            setInstagram(res.data.data.instagram)
        }
    };

    const editProfile = async () => {
        var obj = {
            name: name,
            phone: phone,
            password: password,
            email: email,
            about: about,
            linkedin: linkedin,
            github: github,
            instagram: instagram,
            facebook: facebook,
        };
        let res = await axios.put(`http://localhost:8080/auth/edit/${id}`, obj)
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
        if (isLoggedIn && token) {
            getUserProfile();
        }
    }, [isLoggedIn, token], getUserProfile);
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
                        <a href='#'><h5>0 Followers</h5></a>
                    </div>
                </div>
            </section>
            <main>
                {/* About Section */}
                <div className="text-about">
                    <h5>ABOUT ME</h5>
                    <button onClick={editProfile}>Edit</button>
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
                    <button onClick={editProfile}>Change</button>
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
                    <button onClick={editProfile}>Change</button>
                </div>
                <div className="container-flex">
                    <div class="title-link">
                        <div class="title-title">Highest Education</div>
                        <div class="title-input-link">
                            <select class="title-link-text">
                                <option value="" selected disabled>Graduation</option>
                                <option value="option1">Graduate</option>
                                <option value="option2">Post - Graduate</option>
                            </select>
                        </div>
                    </div>
                    <div class="title-link">
                        <div class="title-title">What you do currently?</div>
                        <div class="title-input-link">
                            <select class="title-link-text">
                                <option value="" selected disabled>Select</option>
                                <option value="option1">Student</option>
                                <option value="option2">College</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-underline"></div>
                {/* Password Section */}
                <div className="text-about">
                    <h5>Password & Security</h5>
                    <button onClick={editProfile}>Change</button>
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
                                        <div className="left-modal">

                                            <input
                                                type="checkbox"
                                                className="btn-check"
                                                id="btn-check"
                                                autoComplete="off"
                                            />
                                            <label className="btn btn-primary" htmlFor="btn-check">
                                                Web Development
                                            </label>
                                            <input
                                                type="checkbox"
                                                className="btn-check"
                                                id="btn-check2"
                                                defaultChecked=""
                                                autoComplete="off"
                                            />
                                            <label className="btn btn-primary" htmlFor="btn-check2">
                                                App Development
                                            </label>



                                        </div>
                                        <div className="right-modal">
                                            <input
                                                type="checkbox"
                                                className="btn-check"
                                                id="btn-check"
                                                autoComplete="off"
                                            />
                                            <label className="btn btn-primary" htmlFor="btn-check">
                                                Game Development
                                            </label>
                                            <input
                                                type="checkbox"
                                                className="btn-check"
                                                id="btn-check2"
                                                defaultChecked=""
                                                autoComplete="off"
                                            />
                                            <label className="btn btn-primary" htmlFor="btn-check2">
                                                Ui/UX Development
                                            </label>
                                        </div>
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
                                    <button onClick={editProfile} type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main >
        </>
    )
}

export default Section