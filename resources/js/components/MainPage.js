import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    /* min-height: calc(100vh - 70px); */
    width: 100%;
`;

const MainImage = styled.div`
    background-image: url("/img/sportsclub.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    @media (max-width: 400px) {
        height: 150px;
    }
`;

const MainContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 800px;
    height: 400px;
    margin: 0 auto;
    padding: 20px 0;
    @media (max-width: 400px) {
        flex-wrap: wrap;
        height: 100%;
    }
`;

const GoogleMap = styled.div`
    height: 300px;
    width: 100%;
`;

const Service = styled.div`
    width: calc(800px * 0.25);
    border: 1px solid gray;
    text-align: center;
    img {
        width: 100%;
    }
    h2 {
        margin: 10px 5px;
    }
    p {
        margin: 0 5px 5px;
        font-size: small;
    }
    @media (max-width: 400px) {
        width: 100%;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`;

const MainPage = () => {
    return (
        <Wrapper>
            <MainImage />
            <MainContent>
                <Service>
                    <img
                        src="https://www.garywilliamsphotography.co.uk/img/s/v-3/p3362655641-2.jpg"
                        alt="star"
                    />
                    <h2>Become A Star</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Service>
                <Service>
                    <img
                        src="https://superdomesports.com/wp-content/uploads/2018/06/landing-team-training.jpg"
                        alt="team"
                    />
                    <h2>Build A Team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Service>
                <Service>
                    <img
                        src="https://bloximages.newyork1.vip.townnews.com/kmaland.com/content/tncms/assets/v3/editorial/c/78/c786d96a-cba7-11e9-8c1c-bf934d3275e1/5d69f76bddfcc.image.jpg?resize=400%2C300"
                        alt="smile"
                    />
                    <h2>Learn To Smile</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Service>
            </MainContent>
            <GoogleMap>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.219602278374!2d25.33569661636723!3d54.72335198029072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96e7d814e149%3A0xdd7887e198efd4c7!2sSaul%C4%97tekio%20al.%2015%2C%20Vilnius%2010221!5e0!3m2!1sen!2slt!4v1567590203992!5m2!1sen!2slt"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                />
            </GoogleMap>
        </Wrapper>
    );
};

export default MainPage;
