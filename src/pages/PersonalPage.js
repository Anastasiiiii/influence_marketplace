import React, { useState } from "react";
import MyTasks from "../components/MyTasks";
import BloggerMessages from "../components/BloggersMessages";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import avatar from "../images/blogers/bloger2.jpg";
import "../styles/PersonalPage.css";

const PersonalPage = () => {
    const [selectedSection, setSelectedSection] = useState("tasks");
    const [calendarDate, setCalendarDate] = useState(new Date());

    const blogger = {
        name: "John Influencer",
        avatar: avatar,
    };

    return (
        <div className="personal-page-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src={blogger.avatar} alt="avatar" className="avatar" />
                    <h3>{blogger.name}</h3>
                </div>
                <nav className="sidebar-menu">
                    <button>Profile</button>
                    <button>Campaings</button>
                    <button
                        className={selectedSection === "tasks" ? "active" : ""}
                        onClick={() => setSelectedSection("tasks")}
                    >
                        My Tasks
                    </button>
                    <button
                        className={selectedSection === "messages" ? "active" : ""}
                        onClick={() => setSelectedSection("messages")}
                    >
                        My Messages
                    </button>
                    <button>Payments</button>
                    <button>Insights</button>
                    <button>Help</button>
                </nav>
            </aside>

            <main className="main-content">
                <div className="content-with-calendar">
                    <div className="content-section">
                        {selectedSection === "tasks" && <MyTasks />}
                        {selectedSection === "messages" && <BloggerMessages />}
                    </div>
                    {selectedSection === "tasks" && (
                        <div className="calendar-section">
                            <Calendar onChange={setCalendarDate} value={calendarDate} />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PersonalPage;
