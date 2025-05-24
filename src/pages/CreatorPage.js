import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import "../styles/Formulas.css";
import "../styles/CreatorPage.css";
import BrandBox from "../components/BrandBox";
import headerImg from "../images/man-taking-selfie-with-modern-phone.jpg";
import TaskDashBoard from "../components/TaskDashBoard";
import Footer from "../components/Footer";



const title = "Join Campaigns & Grow Your Influence";
const description = "Get discovered by top brands, receive collaboration requests, and earn from your content. Build your profile and get rewarded.";
const role = "Brands";
const amount = "5k+";


const CreatorPage = () => {
    return (
        <div className="creator-page">
            <NavBar />
            <header>
                <Header
                    title={title}
                    description={description}
                    img={headerImg}
                    role={role}
                    amount={amount}
                />
            </header>
            <section>
                <BrandBox />
            </section>
            <section>
                <TaskDashBoard />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default CreatorPage;