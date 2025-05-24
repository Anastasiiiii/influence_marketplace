import React from "react";
import "../styles/Formulas.css";
import "../styles/BusinessPage.css";
import Header from "../components/Header";
import headerImg from "../images/blue-woman.jpg";
import NavBar from "../components/NavBar";
import BlogerBox from "../components/BlogerBox";
import AddTaskComponent from "../components/AddTaskComponent";
import Footer from "../components/Footer";

const title = "Launch Campaigns & Find Top Influencers";
const description = "Connect with verified creators and promote your brand through authentic influencer marketing. Manage everything in one place.";
const role = "Influencers";
const amount = "10k+";

const BusinessPage = () => {
    return (
        <div className="business-page">
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
                <BlogerBox />
            </section>
            <section>
                <AddTaskComponent />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default BusinessPage;