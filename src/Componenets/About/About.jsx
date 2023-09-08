import { FaEnvelope, FaGithub } from "react-icons/fa";
import Footer from "../Footer/Footer";

const About = () => {
  let teamData = [
    {
      name: "Raghava Manikantha Gopaluni",
      avatarLink: "https://avatars.githubusercontent.com/u/35539454",
      emailId: "raghav.work1@gmail.com",
      gitHubLink: "https://github.com/RaghavaGopaluni",
    },
    {
      name: "Giridhar Krishna Kolavasi",
      avatarLink:
        "https://media.licdn.com/dms/image/D5603AQFpUApg2ALRCg/profile-displayphoto-shrink_800_800/0/1685202214988?e=1699488000&v=beta&t=Ij9XhqhUAvY2-tr4ilIhoIqp1iFL1qEXOKh671ps8VY",
      emailId: "k.giridharkrishna@gmail.com",
      gitHubLink: "https://github.com/KGK8/",
    },
  ];
  return (
    <>
      <div className="aboutUsBody">
        <div className="aboutUsBody-placer">
          <div className="aboutUsBody-Title">
            <span>About Us</span>
          </div>
          <div className="aboutUsBody-Content">
            <span>
              <h2>Our Mission</h2>
              We are passionate about simplifying the process of converting
              Python Dictionaries to JSON. Our goal is to provide a
              user-friendly and efficient tool for developers and data
              enthusiasts.
              <h2>How We Work</h2>
              We use the latest web technologies to create a seamless experience
              for our users. Our converter takes your Python Dictionaries and
              transforms them into clean and readable JSON.
              <h2>Meet the Team</h2>
              {/* Raghava Manikantha Gopaluni Kolavasi Giridhar krishna */}
              <div className="cardHolder">
                {teamData?.map((data) => {
                  return (
                    <div
                      className="cardBody"
                      style={{
                        backgroundImage: `url(${data?.avatarLink})`,
                      }}
                    >
                      <div className="cardInfo-Placer">
                        <div className="cardInfo-Placer-Title">
                          <span>{data?.name}</span>
                        </div>
                        <div className="cardInfo-Placer-Icons">
                          <div className="cardInfo-Placer-Icons-Placer">
                            <a href={data?.gitHubLink} target="_blank">
                              <FaGithub />
                            </a>
                          </div>
                          <div className="cardInfo-Placer-Icons-Placer">
                            <a href={`mailto:${data?.emailId}`} target="_blank">
                              <FaEnvelope />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </span>
          </div>
        </div>
      </div>
      {/* Footer Start's*/}
      <Footer aboutUs={true} />
      {/* Footer End's*/}
    </>
  );
};

export default About;
